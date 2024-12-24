"use strict";(self.webpackChunkdocusaurus_osebna=self.webpackChunkdocusaurus_osebna||[]).push([["661"],{9704:function(e){e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"paperless-ngx-ldap","metadata":{"permalink":"/rokd.github.io/blog/paperless-ngx-ldap","source":"@site/blog/2024-12-23-paperless-ldap.mdx","title":"ldap3 in paperless-ngx","description":"In this post, I will explain how I integrated LDAP authentication into Paperless-ngx using the ldap3 library. By leveraging LDAP, we can centrally manage user authentication, ensuring secure and streamlined access to Paperless-ngx.","date":"2024-12-23T00:00:00.000Z","tags":[{"inline":true,"label":"paperless-ngx","permalink":"/rokd.github.io/blog/tags/paperless-ngx"},{"inline":true,"label":"ldap3","permalink":"/rokd.github.io/blog/tags/ldap-3"}],"readingTime":3.13,"hasTruncateMarker":false,"authors":[{"name":"Rok Damjani\u0107","title":"IT, sports, nature","url":"https://linkedin.com/in/rok-damjanic","socials":{"linkedin":"https://www.linkedin.com/in/rok-damjanic/","github":"https://github.com/roks531"},"imageURL":"/rokd.github.io/img/profile_photo.jpg","key":"rok","page":null}],"frontMatter":{"slug":"paperless-ngx-ldap","title":"ldap3 in paperless-ngx","authors":["rok"],"tags":["paperless-ngx","ldap3"],"image":"/img/blog_img/2024-12-23-paperles-ngx.png"},"unlisted":false},"content":"In this post, I will explain how I integrated LDAP authentication into [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) using the `ldap3` library. By leveraging LDAP, we can centrally manage user authentication, ensuring secure and streamlined access to Paperless-ngx.\\n\\n## Custom LDAP Authentication Backend\\n\\nThe first step is creating a custom Django authentication backend. This backend uses `ldap3` to authenticate users against the LDAP directory. Here\'s the complete implementation:\\n\\n```python title=\\"ldap_auth_backend.py\\"\\n\\nimport logging\\nfrom django.contrib.auth.models import User\\nfrom django.contrib.auth.backends import BaseBackend\\nfrom ldap3 import Server, Connection, ALL, NTLM, SUBTREE\\n\\n# LDAP Server Configuration\\nLDAP_SERVER = \\"ldap://example.com:3268\\"\\nLDAP_AUTH_SEARCH_BASE = \\"ou=it,ou=departments,dc=example,dc=com\\"\\nLDAP_AUTH_CONNECTION_USERNAME = \\"cn=ldapadmin,ou=users,dc=example,dc=com\\"\\nLDAP_AUTH_CONNECTION_PASSWORD = \\"pass of ldapadmin\\"\\n\\nlogger = logging.getLogger(__name__)\\n\\nclass LDAPBackend(BaseBackend):\\n    def authenticate(self, request, username=None, password=None, **kwargs):\\n        server = Server(LDAP_SERVER, get_info=ALL)\\n        conn = Connection(server, user=LDAP_AUTH_CONNECTION_USERNAME, password=LDAP_AUTH_CONNECTION_PASSWORD, auto_bind=True)\\n\\n        # Define the LDAP search filter to find the user by sAMAccountName\\n        search_filter = f\\"(sAMAccountName={username})\\"\\n\\n        try:\\n            # Search for the user in LDAP\\n            conn.search(\\n                search_base=LDAP_AUTH_SEARCH_BASE,\\n                search_filter=search_filter,\\n                search_scope=SUBTREE,\\n                attributes=[\'sAMAccountName\', \'mail\', \'givenName\', \'sn\']\\n            )\\n\\n            if conn.entries:\\n                # If the user exists, attempt to bind with user\'s credentials to authenticate\\n                user_dn = conn.entries[0].entry_dn\\n                user_conn = Connection(server, user=user_dn, password=password, auto_bind=True)\\n\\n                if user_conn.bind():\\n                    # Get or create the Django user\\n                    user, created = User.objects.get_or_create(username=username)\\n                    if created:\\n                        user.set_unusable_password()\\n                    user.is_staff = True  # Set staff status for LDAP users\\n                    user.save()\\n                    logger.info(f\\"User {username} authenticated and {\'created\' if created else \'updated\'} in Django.\\")\\n                    return user\\n        except Exception as e:\\n            logger.warning(f\\"LDAP authentication failed for user {username}: {e}\\")\\n            return None\\n\\n    def get_user(self, user_id):\\n        try:\\n            return User.objects.get(pk=user_id)\\n        except User.DoesNotExist:\\n            return None\\n```\\n\\n## Key Features of the Backend\\n\\n- **Centralized Authentication**: User credentials are verified against the LDAP server.\\n- **Dynamic User Management**: Users are automatically created or updated in the local Django database upon successful authentication.\\n- **Logging**: Authentication attempts are logged for debugging and auditing purposes.\\n\\n## Adding LDAP Support to Paperless-ngx\\n\\nTo integrate this backend into Paperless-ngx, I created a custom Docker image and updated the necessary configuration files.\\n\\n### Custom Docker Image\\n\\nI extended the official Paperless-ngx Docker image to include the `ldap3` library and the custom authentication backend. Here\'s the `Dockerfile`:\\n\\n```dockerfile\\n# Start from the official paperless-ngx image\\nFROM ghcr.io/paperless-ngx/paperless-ngx:latest\\n\\n# Install LDAP library\\nRUN pip install ldap3\\n\\n# Copy the custom LDAP backend code\\nCOPY ldap_auth_backend.py /usr/src/paperless/src/paperless/ldap_auth_backend.py\\n\\n# Update settings.py to include the LDAP backend using a sed command\\nRUN sed -i \\"/^AUTHENTICATION_BACKENDS = /a \'paperless.ldap_auth_backend.LDAPBackend\',\\" /usr/src/paperless/src/paperless/settings.py\\n```\\n\\n### Build and Run the Docker Image\\n\\n\\n\\n\\nUse the following commands to build and run the custom Docker image:\\n\\n```bash\\n# Build the Docker image\\ndocker build -t paperless-ngx-ldap .\\n\\n# Run the Docker container\\ndocker run -d \\\\\\n  --name paperless-ngx-ldap \\\\\\n  -e PAPERLESS_DBHOST=your_db_host \\\\\\n  -e PAPERLESS_DBPASS=your_db_password \\\\\\n  -e PAPERLESS_TIMEZONE=your_timezone \\\\\\n  -p 8000:8000 \\\\\\n  paperless-ngx-ldap\\n```\\n\\n#### Docker compose example with existing postgresql\\n\\n<details>\\n  <summary>docker-compose.yml example</summary>\\n\\n  This is an example docker compose file\\n\\n  ```yaml title=\\"docker-compose.yml\\"\\n  services:\\n  broker:\\n    image: docker.io/library/redis:7\\n    restart: unless-stopped\\n    volumes:\\n      - redisdata:/data\\n\\n  webserver:\\n    build: .\\n    restart: unless-stopped\\n    depends_on:\\n      - broker\\n      - gotenberg\\n      - tika\\n    ports:\\n      - \\"8000:8000\\"\\n    volumes:\\n      - /home/user/docker-compose/paperless-ngx/data/:/usr/src/paperless/data\\n      - /home/user/docker-compose/paperless-ngx/media/:/usr/src/paperless/media\\n      - /home/user/docker-compose/paperless-ngx/export:/usr/src/paperless/export\\n      - /home/user/docker-compose/paperless-ngx/consume/:/usr/src/paperless/consume\\n\\n    env_file: docker-compose.env\\n    environment:\\n      PAPERLESS_REDIS: redis://broker:6379\\n      PAPERLESS_TIKA_ENABLED: 1\\n      PAPERLESS_TIKA_GOTENBERG_ENDPOINT: http://gotenberg:3000\\n      PAPERLESS_TIKA_ENDPOINT: http://tika:9998\\n      PAPERLESS_LDAP_PIP_INSTALL: \\"true\\"\\n\\n  gotenberg:\\n    image: docker.io/gotenberg/gotenberg:7.8\\n    restart: unless-stopped\\n\\n    command:\\n      - \\"gotenberg\\"\\n      - \\"--chromium-disable-javascript=true\\"\\n      - \\"--chromium-allow-list=file:///tmp/.*\\"\\n\\n  tika:\\n    image: ghcr.io/paperless-ngx/tika:latest\\n    restart: unless-stopped\\n\\n  volumes:\\n    data:\\n    media:\\n    redisdata:\\n\\n  ```\\n</details>\\n\\n\\n<details>\\n\\n<summary>environment example</summary>\\n\\n ```\xecni title=\\"docker-compose.env\\"\\n    PAPERLESS_TIME_ZONE=Europe/Ljubljana\\n    PAPERLESS_OCR_LANGUAGE=eng+slv+deu\\n    PAPERLESS_SECRET_KEY=OO5345345349urerexuRj1nkKoUmKzJJcq2vBik4Cwre0luVS9iapnLP5\\n    PAPERLESS_OCR_LANGUAGES=eng slv deu\\n    PAPERLESS_DBENGINE=postgresql\\n    PAPERLESS_DBHOST=192.168.1.2\\n    PAPERLESS_DBPORT=5432\\n    PAPERLESS_DBUSER: paperless\\n    PAPERLESS_DBPASS: strongpass\\n    PAPERLESS_URL=https://paperless.example.com\\n    PAPERLESS_CSRF_TRUSTED_ORIGINS=https://paperless.example.com,https://example.com\\n    PAPERLESS_ALLOWED_HOSTS=paperless.paperless.example.com,192.168.1.4,example.com\\n    PAPERLESS_CORS_ALLOWED_HOSTS=https://paperless.example.com,https://example.com # can be set using PAPERLESS_URL\\n```\\n</details>\\n\\n\\n\\n\\n## Final Thoughts\\n\\nBy integrating LDAP authentication into Paperless-ngx, I was able to streamline user management and centralize authentication using our existing LDAP infrastructure. The flexibility of Paperless-ngx and the power of `ldap3` made this integration straightforward and effective. I hope this guide helps others looking to implement similar functionality. There are also others who managed to create usefull integrations on (didn\'t work for me though): https://github.com/paperless-ngx/paperless-ngx/discussions/3228."}]}}')}}]);