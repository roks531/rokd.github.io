"use strict";(self.webpackChunkdocusaurus_osebna=self.webpackChunkdocusaurus_osebna||[]).push([["130"],{608:function(e,a,i){i.r(a),i.d(a,{default:()=>v});var n=i("5893"),t=i("7026"),s=i("2933"),l=i("1568"),r=i("7294"),o=i("4403");let d={features:"features_t9lD",featureSvg:"featureSvg_GfXr",carouselContainer:"carouselContainer_EfM5",imageWrapper:"imageWrapper_gC4y",carouselImage:"carouselImage_UEj3",prev:"prev_Zy6h",next:"next_faQU"};var c=JSON.parse('[{"id":"paperless-ngx-ldap","metadata":{"permalink":"/sl/blog/paperless-ngx-ldap","source":"@site/blog/2024-12-23-paperless-ldap.mdx","title":"ldap3 in paperless-ngx","description":"In this post, I will explain how I integrated LDAP authentication into Paperless-ngx using the ldap3 library. By leveraging LDAP, we can centrally manage user authentication, ensuring secure and streamlined access to Paperless-ngx.","date":"2024-12-23T00:00:00.000Z","tags":[{"inline":true,"label":"paperless-ngx","permalink":"/sl/blog/tags/paperless-ngx"},{"inline":true,"label":"ldap3","permalink":"/sl/blog/tags/ldap-3"}],"readingTime":3.13,"hasTruncateMarker":false,"authors":[{"name":"Rok Damjani\u0107","title":"IT, sports, nature","url":"https://linkedin.com/in/rok-damjanic","socials":{"linkedin":"https://www.linkedin.com/in/rok-damjanic/","github":"https://github.com/roks531"},"imageURL":"/sl/img/profile_photo.jpg","key":"rok","page":null}],"frontMatter":{"slug":"paperless-ngx-ldap","title":"ldap3 in paperless-ngx","authors":["rok"],"tags":["paperless-ngx","ldap3"],"image":"/img/blog_img/2024-12-23-paperles-ngx.png"},"unlisted":false}}]'),p=i("144");let g=()=>{let[e,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{"undefined"!=typeof window&&!e&&i.e("962").then(i.t.bind(i,7388,23)).then(()=>{a(!0)}).catch(e=>{console.error("Failed to load particles.js:",e)})},[e]),(0,r.useEffect)(()=>{e&&"undefined"!=typeof window&&window.particlesJS&&window.particlesJS("particles-js",{particles:{number:{value:50},color:{value:"#808080"},shape:{type:"circle"},opacity:{value:.15,random:!1,anim:{enable:!1,speed:.3,opacity_min:.05}},size:{value:5,random:!0,anim:{enable:!0,speed:2,size_min:1}},line_linked:{enable:!0,distance:150,color:"#808080",opacity:.3,width:1},move:{enable:!0,speed:.5,direction:"none",random:!0,straight:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1}}},retina_detect:!0})},[e]),(0,n.jsx)(p.Z,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:()=>(0,n.jsx)("div",{id:"particles-js",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:-1}})})};var m=i("3357"),h=i("49"),u=i("1348");function x(){let e=["/img/index_page/DSC07939.jpg/","/img/index_page/DSC08325.JPG/","/img/index_page/DSC09816.JPG/","/img/index_page/DSC08049.jpg/","/img/index_page/DSC09127.JPG/","/img/index_page/DSC09880.JPG/","/img/index_page/DSC09775.JPG/","/img/index_page/DSC07954.jpg/","/img/index_page/DSC07752.jpg/","/img/index_page/DSC09246.JPG/","/img/index_page/DSC08720.JPG/","/img/index_page/DSC09403.JPG/","/img/index_page/DSC09383.JPG/","/img/index_page/DSC09130.JPG/","/img/index_page/DSC08249.jpg/","/img/index_page/DSC09390.JPG/","/img/index_page/DSC09565.jpg/","/img/index_page/DSC09446.JPG/","/img/index_page/DSC09298.JPG/","/img/index_page/DSC08849.JPG/","/img/index_page/DSC09524.JPG/","/img/index_page/DSC09750.JPG/","/img/index_page/DSC09802.JPG/","/img/index_page/DSC07960.jpg/","/img/index_page/DSC09625.JPG/","/img/index_page/DSC07979.jpg/","/img/index_page/DSC09495.JPG/","/img/index_page/DSC08515.jpg/"],[a,i]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let a=setInterval(()=>{i(a=>(a+1)%e.length)},3e3);return()=>clearInterval(a)},[e.length]),(0,n.jsxs)("div",{className:d.carouselContainer,children:[(0,n.jsx)("div",{className:d.imageWrapper,children:(0,n.jsx)(m.M,{children:e.map((e,i)=>i===a&&(0,n.jsx)(h.E.img,{src:e,alt:`Slide ${i+1}`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},className:d.carouselImage,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0}},e))})}),(0,n.jsx)("button",{className:d.prev,onClick:()=>i(a=>(a-1+e.length)%e.length),children:"\u276E"}),(0,n.jsx)("button",{className:d.next,onClick:()=>i(a=>(a+1)%e.length),children:"\u276F"})]})}function j(e){let{posts:a}=e;return(0,n.jsxs)("div",{className:"recent-posts",children:[(0,n.jsx)(h.E.div,{className:"text--center",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:(0,n.jsx)(o.Z,{as:"h2",children:"Recent Posts"})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:a.map((e,a)=>(0,n.jsx)(h.E.div,{className:"col col--4",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.3*a},children:(0,n.jsxs)("div",{className:"card shadow--md",children:[(0,n.jsx)("div",{className:"card__header",children:(0,n.jsx)("a",{href:e.metadata.permalink,style:{textDecoration:"none"},children:(0,n.jsx)(o.Z,{as:"h3",children:e.metadata.title})})}),(0,n.jsx)("div",{className:"card__body",children:(0,n.jsx)("p",{children:e.metadata.description})})]})},a))})})]})}function _(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let a=new u.Z(e.current,{strings:["Welcome to My Page"],typeSpeed:30,backSpeed:50,backDelay:1e3,startDelay:500,loop:!1});return()=>a.destroy()},[]),(0,n.jsxs)("section",{className:d.features,children:[(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)(h.E.div,{className:"text--center",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[(0,n.jsxs)(o.Z,{as:"h1",className:d.heroTitle,children:[(0,n.jsx)("span",{ref:e})," "]}),(0,n.jsx)("p",{className:d.heroDescription,children:"Here, I share my experiences and knowledge from the tech world, covering the projects I work on, and solutions I\u2019ve found useful. It\u2019s a mix of practical insights and things I want to keep handy for future reference \u2013 and maybe you\u2019ll find them helpful too. Beyond tech, I also write about my outdoor adventures \u2013 especially hiking and exploring mountains. If you\u2019re into nature or looking for ideas for your next trip, you might enjoy those posts as well. This site is just a personal space to share the things I\u2019m passionate about, both in technology and the great outdoors. Hope you find something here that sparks your interest!"})]}),(0,n.jsx)("div",{className:"text--center",style:{margin:"2rem 0"},children:(0,n.jsx)(x,{})}),(0,n.jsx)("div",{style:{marginTop:"4rem"},children:(0,n.jsx)(j,{posts:c})})]})]})}let f="heroBanner_qdFl";function y(){let{siteConfig:e}=(0,s.Z)();return(0,n.jsx)("header",{className:(0,t.Z)("hero hero--primary",f),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(o.Z,{as:"h1",className:"hero__title",children:e.title}),(0,n.jsx)("p",{className:"hero__subtitle",children:e.tagline})]})})}function v(){let{siteConfig:e}=(0,s.Z)();return(0,n.jsxs)(l.Z,{title:"Blog and docs",description:"My blog and documentation site",children:[(0,n.jsx)(y,{}),(0,n.jsx)("main",{children:(0,n.jsx)(_,{})})]})}}}]);