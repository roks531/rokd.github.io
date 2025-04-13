"use strict";(self.webpackChunkdocusaurus_osebna=self.webpackChunkdocusaurus_osebna||[]).push([["373"],{2095:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var i=r(8123),t=r(5893),o=r(65);let s={slug:"openforis-arena-mail",title:"office365 mail in openforis arena",authors:["rok"],tags:["openforis","arena","office365"],image:"/img/blog_img/2025-04-13-openforis-arena.png"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Fixing Office365 Mail in OpenForis Arena with STARTTLS",id:"fixing-office365-mail-in-openforis-arena-with-starttls",level:2},{value:"Why this matters",id:"why-this-matters",level:2},{value:"Step 1: Clone the Arena Repository",id:"step-1-clone-the-arena-repository",level:2},{value:"Step 2: Patch the Mailer Utility",id:"step-2-patch-the-mailer-utility",level:2},{value:"Step 3: Get Your GitHub NPM Token",id:"step-3-get-your-github-npm-token",level:2},{value:"How to get your token:",id:"how-to-get-your-token",level:3},{value:"Step 4: Configure Environment Variables",id:"step-4-configure-environment-variables",level:2},{value:"Step 5: Build with Docker Compose",id:"step-5-build-with-docker-compose",level:2},{value:"All Set!",id:"all-set",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"fixing-office365-mail-in-openforis-arena-with-starttls",children:"Fixing Office365 Mail in OpenForis Arena with STARTTLS"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/openforis/arena",children:"OpenForis Arena"})," platform comes with built-in email support, but the default configuration does ",(0,t.jsx)(n.strong,{children:"not"})," correctly support STARTTLS when using Office365 SMTP servers. This causes the entire mailing service to fail \u2014 which means ",(0,t.jsx)(n.strong,{children:"new users cannot register"}),", and existing admins are ",(0,t.jsx)(n.strong,{children:"unable to invite users"})," to join the system."]}),"\n",(0,t.jsx)(n.p,{children:"This guide explains how to patch the email integration to work with Office365 using NodeMailer, configure the necessary environment variables, and deploy Arena using Docker Compose \u2014 complete with working email functionality and GitHub package authentication for building the image."}),"\n",(0,t.jsx)(n.p,{children:"Using default mailer.js component produces errors like this below, even if the config is correctly filled out."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error screenshot 1",src:r(9148).Z+"",width:"495",height:"112"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error screenshot 2",src:r(5850).Z+"",width:"503",height:"67"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"why-this-matters",children:"Why this matters"}),"\n",(0,t.jsx)(n.p,{children:"Office365 requires STARTTLS on port 587 with the correct authentication and TLS configuration. Arena's default mail configuration isn't compatible, leading to failed email deliveries or TLS handshake errors."}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ll fix that by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Modifying Arena\u2019s ",(0,t.jsx)(n.code,{children:"mailer.js"})," file"]}),"\n",(0,t.jsx)(n.li,{children:"Enabling Office365 as a mail provider"}),"\n",(0,t.jsx)(n.li,{children:"Setting up appropriate environment variables"}),"\n",(0,t.jsx)(n.li,{children:"Building and running Arena via Docker"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-1-clone-the-arena-repository",children:"Step 1: Clone the Arena Repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openforis/arena.git\ncd arena\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-2-patch-the-mailer-utility",children:"Step 2: Patch the Mailer Utility"}),"\n",(0,t.jsxs)(n.p,{children:["Edit the file ",(0,t.jsx)(n.code,{children:"server/utils/mailer.js"})," and replace its contents with the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="mailer.js"',children:"import * as nodemailer from 'nodemailer'\nimport * as ProcessUtils from '@core/processUtils'\nimport * as i18nFactory from '@core/i18n/i18nFactory'\nimport * as Log from '@server/log/log'\n\nconst logger = Log.getLogger('Mailer')\n\nconst emailServices = {\n  office365: 'office365',\n}\n\nconst emailService = ProcessUtils.ENV.emailService\nconst authUser = ProcessUtils.ENV.emailAuthUser\nconst authPass = ProcessUtils.ENV.emailAuthPassword\nconst from = ProcessUtils.ENV.adminEmail || authUser\n\nlogger.debug('Email configuration:', {\n  emailService,\n  authUser: authUser ? '[set]' : '[not set]',\n  authPass: authPass ? '[set]' : '[not set]',\n  from,\n})\n\nconst transporter = nodemailer.createTransport({\n  host: 'smtp.office365.com',\n  port: 587,\n  secure: false,\n  auth: {\n    user: authUser,\n    pass: authPass,\n  },\n  requireTLS: true,\n  tls: {\n    minVersion: 'TLSv1.3',\n    ciphers: 'TLS_AES_256_GCM_SHA384',\n    rejectUnauthorized: false,\n  },\n  debug: true,\n  logger: true,\n})\n\ntransporter.verify((error, success) => {\n  if (error) {\n    logger.error('\u274C Transporter verification failed on startup:', error)\n  } else {\n    logger.debug('\u2705 Transporter verified on startup')\n  }\n})\n\nconst sendEmailMSOffice365 = async ({ to, subject, html, text = null }) => {\n  try {\n    await transporter.verify()\n    logger.debug('\u2705 Email transporter connection verified before send')\n\n    const info = await transporter.sendMail({\n      from,\n      to,\n      replyTo: from,\n      subject,\n      html,\n      text,\n    })\n\n    logger.debug('\uD83D\uDCE9 Email sent:', info.messageId)\n    return info\n  } catch (error) {\n    logger.error('\u274C Email sending error:', error)\n    throw error\n  }\n}\n\nexport const sendEmail = async ({ to, msgKey, msgParams = {}, i18n: i18nParam = null, lang = 'en' }) => {\n  if (!authUser || !authPass) {\n    const error = new Error('Email auth credentials not configured in environment')\n    logger.error(error.message)\n    throw error\n  }\n\n  const i18n = i18nParam ? i18nParam : await i18nFactory.createI18nAsync(lang)\n\n  const subject = i18n.t(`${msgKey}.subject`, msgParams)\n  const html = i18n.t(`${msgKey}.body`, msgParams)\n\n  if (emailService === emailServices.office365) {\n    return await sendEmailMSOffice365({ to, subject, html })\n  } else {\n    throw new Error('Invalid email service specified: ' + emailService)\n  }\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-3-get-your-github-npm-token",children:"Step 3: Get Your GitHub NPM Token"}),"\n",(0,t.jsx)(n.p,{children:"To build Arena with Arena\u2019s GitHub Packages, you need a personal access token."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-get-your-token",children:"How to get your token:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"GitHub > Settings > Developer settings > Personal access tokens"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:'"Generate new token (classic)"'})]}),"\n",(0,t.jsxs)(n.li,{children:["Select the following scope:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"read:packages"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Generate and copy the token. It will look like:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ghp_ze4O1W2hfRTZ878d1Fvnndz4eZUDc\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-4-configure-environment-variables",children:"Step 4: Configure Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:".env"})," file in the root of the Arena project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"NPM_TOKEN=ghp_ze4O1W2hfRTZ878d1Fvnndz4eZUDc\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then modify the ",(0,t.jsx)(n.code,{children:"arena.env"})," file for Arena\u2019s runtime environment:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"EMAIL_SERVICE=office365\nEMAIL_AUTH_USER=your_admin_mail@mail.com (same as in arena.env)\nEMAIL_AUTH_PASSWORD=your_office365_password\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-5-build-with-docker-compose",children:"Step 5: Build with Docker Compose"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," in the root of your project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\n  arena:\n    build:\n      context: .\n      dockerfile: Dockerfile\n      args:\n        - NPM_TOKEN=${NPM_TOKEN}\n    container_name: openforis-arena\n    restart: always\n    env_file:\n      - arena.env\n    network_mode: "host"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose build\ndocker compose up -d\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"all-set",children:"All Set!"}),"\n",(0,t.jsx)(n.p,{children:"You now have a working OpenForis Arena deployment that can send emails through Office365 using STARTTLS \u2014 complete with logs, error handling, and secure configuration."}),"\n",(0,t.jsx)(n.p,{children:"No more failed handshakes or broken notifications. \uD83C\uDF89"}),"\n",(0,t.jsx)(n.hr,{})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9148:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/2025-04-13-openforis-arena-error1-cd8e2b6c14d29c7a066c4bcadf7b941b.png"},5850:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/2025-04-13-openforis-arena-error2-92128530eaaf6b8e1d73439f4b88d0e3.png"},65:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(7294);let t={},o=i.createContext(t);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}},8123:function(e){e.exports=JSON.parse('{"permalink":"/blog/openforis-arena-mail","source":"@site/blog/2025-04-13-openforis_arena_mail.mdx","title":"office365 mail in openforis arena","description":"Fixing Office365 Mail in OpenForis Arena with STARTTLS","date":"2025-04-13T00:00:00.000Z","tags":[{"inline":true,"label":"openforis","permalink":"/blog/tags/openforis"},{"inline":true,"label":"arena","permalink":"/blog/tags/arena"},{"inline":true,"label":"office365","permalink":"/blog/tags/office-365"}],"readingTime":3.435,"hasTruncateMarker":false,"authors":[{"name":"Rok Damjani\u0107","title":"IT, sports, nature","url":"https://linkedin.com/in/rok-damjanic","socials":{"linkedin":"https://www.linkedin.com/in/rok-damjanic/","github":"https://github.com/roks531"},"imageURL":"/img/profile_photo.jpg","key":"rok","page":null}],"frontMatter":{"slug":"openforis-arena-mail","title":"office365 mail in openforis arena","authors":["rok"],"tags":["openforis","arena","office365"],"image":"/img/blog_img/2025-04-13-openforis-arena.png"},"unlisted":false,"nextItem":{"title":"ldap3 in paperless-ngx","permalink":"/blog/paperless-ngx-ldap"}}')}}]);