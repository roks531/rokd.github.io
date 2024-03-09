### Installation

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

<details>
  <summary>Edit the docusaurus.config.js</summary><p>

  ```javascript
  url: 'https://roks531.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'roks531', // Usually your GitHub org/user name.
  projectName: 'rokd.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
```  
  </p></details>  

<details>
  <summary>Add folders .github/workflows and inside deploy.yml:</summary><p>

  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches:
        - main

  permissions:
    contents: write

  jobs:
    deploy:
      name: Deploy to GitHub Pages
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
          with:
            fetch-depth: 0
        - uses: actions/setup-node@v4
          with:
            node-version: 18
            cache: npm

        - name: Install dependencies
          run: npm ci
        - name: Build website
          run: npm run build

        # Popular action to deploy to GitHub Pages:
        # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
        - name: Deploy to GitHub Pages
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            # Build output to publish to the `gh-pages` branch:
            publish_dir: ./build
            # The following lines assign commit authorship to the official
            # GH-Actions bot for deploys to `gh-pages` branch:
            # https://github.com/actions/checkout/issues/13#issuecomment-724415212
            # The GH actions bot is used by default if you didn't specify the two fields.
            # You can swap them out with your own user credentials.
            user_name: github-actions[bot]
            user_email: 41898282+github-actions[bot]@users.noreply.github.com
```
  </p></details>  

<p>

Into the folder ```static``` add a file ```CNAME``` and put the CNAME to be used for this github pages repo - rokd.letz.dev
</p>

#### Github

On Github we need to generate a new branch named `gh-pages` and under settings, pages, select gh-pages branch. Whenever we push to the main branch the buil process and deployment will start.

We could also do that manually using `npm run deploy`



