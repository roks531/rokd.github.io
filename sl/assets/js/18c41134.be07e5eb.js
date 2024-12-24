"use strict";(self.webpackChunkdocusaurus_osebna=self.webpackChunkdocusaurus_osebna||[]).push([["9171"],{6604:function(e,n,s){s.r(n),s.d(n,{Highlight:()=>c,metadata:()=>i,contentTitle:()=>r,default:()=>g,assets:()=>l,toc:()=>d,frontMatter:()=>t});var i=JSON.parse('{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","source":"@site/docs/tutorial-basics/markdown-features.mdx","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/markdown-features","permalink":"/sl/docs/tutorial-basics/markdown-features","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Create a Blog Post","permalink":"/sl/docs/tutorial-basics/create-a-blog-post"},"next":{"title":"Deploy your site","permalink":"/sl/docs/tutorial-basics/deploy-your-site"}}'),o=s("5893"),a=s("65");let t={sidebar_position:4},r="Markdown Features",l={},c=({children:e,color:n})=>(0,o.jsx)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e}),d=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"})}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,o.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,o.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,o.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,o.jsx)(n.a,{href:"/sl/docs/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,o.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,o.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,o.jsx)(n.code,{children:"static/img/docusaurus.png"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/logo.png)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docusaurus logo",src:s(5629).Z+"",width:"309",height:"75"})}),"\n",(0,o.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/docusaurus.png)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,o.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n```\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::tip[My tip]\n\nUse this awesome feature option\n\n:::\n\n:::danger[Take care]\n\nThis action is dangerous\n\n:::\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,o.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,o.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,o.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,o.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,o.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,o.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(c,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,o.jsxs)(n.p,{children:["This is ",(0,o.jsx)(c,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function g(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},5629:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},65:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var i=s(7294);let o={},a=i.createContext(o);function t(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);