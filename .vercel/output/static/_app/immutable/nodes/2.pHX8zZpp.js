import{s as R,n as $,d as A}from"../chunks/scheduler.DUa3pFyD.js";import{S as z,i as G,e as k,s as y,c as _,g as N,b as E,a as H,d,f as n,h as T,j as u,q as J,n as O,o as q,p as B}from"../chunks/index.DWVtZ4lb.js";import{e as D}from"../chunks/each.D6YF6ztN.js";function V(r,s,p){const o=r.slice();return o[2]=s[p],o}function P(r){let s,p,o,h,g,b,a,i,j=r[2].title+"",I,x,w,f=r[2].tags.reduce(L,"")+"",S,M,m;function L(...v){return r[1](r[2],...v)}return{c(){s=k("a"),p=k("article"),o=k("img"),b=y(),a=k("div"),i=k("h3"),I=O(j),x=y(),w=k("span"),S=O(f),M=y(),this.h()},l(v){s=_(v,"A",{href:!0,class:!0});var t=H(s);p=_(t,"ARTICLE",{class:!0});var e=H(p);o=_(e,"IMG",{src:!0,alt:!0,class:!0}),b=E(e),a=_(e,"DIV",{class:!0});var c=H(a);i=_(c,"H3",{class:!0});var l=H(i);I=q(l,j),l.forEach(d),x=E(c),w=_(c,"SPAN",{class:!0});var C=H(w);S=q(C,f),C.forEach(d),c.forEach(d),e.forEach(d),M=E(t),t.forEach(d),this.h()},h(){A(o.src,h=r[2].coverImage)||n(o,"src",h),n(o,"alt",g=`${r[2].title} cover image`),n(o,"class","svelte-1kpcxl1"),n(i,"class","svelte-1kpcxl1"),n(w,"class","svelte-1kpcxl1"),n(a,"class","svelte-1kpcxl1"),n(p,"class","svelte-1kpcxl1"),n(s,"href",m=`/projects/${r[2].slug}`),n(s,"class","svelte-1kpcxl1")},m(v,t){T(v,s,t),u(s,p),u(p,o),u(p,b),u(p,a),u(a,i),u(i,I),u(a,x),u(a,w),u(w,S),u(s,M)},p(v,t){r=v,t&1&&!A(o.src,h=r[2].coverImage)&&n(o,"src",h),t&1&&g!==(g=`${r[2].title} cover image`)&&n(o,"alt",g),t&1&&j!==(j=r[2].title+"")&&B(I,j),t&1&&f!==(f=r[2].tags.reduce(L,"")+"")&&B(S,f),t&1&&m!==(m=`/projects/${r[2].slug}`)&&n(s,"href",m)},d(v){v&&d(s)}}}function F(r){let s,p='<div class="hero-info svelte-1kpcxl1"><h1 class="svelte-1kpcxl1">Joar Maltesson</h1> <p class="svelte-1kpcxl1">I develop software for every day use.</p></div> <div class="hero-img svelte-1kpcxl1"><img src="/hero-image.webp" alt="of me"/></div>',o,h,g=`<div class="about-me-image svelte-1kpcxl1"><img src="/about-me.jpg" alt="Me walking on a sidewalk" class="svelte-1kpcxl1"/></div> <div class="about-me-wrapper svelte-1kpcxl1"><h2 class="svelte-1kpcxl1">About me</h2> <p class="svelte-1kpcxl1"><span class="svelte-1kpcxl1">Im a 18 year old student and entrepreneur from Borås, Sweden. I study system development at LBS kreativa gymnasiet.
                I enjoy solving problems with code, my primary focus is fullstack web development but i also develop desktop and mobile apps.</span></p> <a href="/about" class="link svelte-1kpcxl1">Read more</a></div>`,b,a,i,j="My work",I,x,w,f,S=`<a href="/projects" class="svelte-1kpcxl1">See all projects
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1kpcxl1"><path d="m9 18 6-6-6-6"></path></svg></a>`,M,m,L='<div class="contact-wrapper svelte-1kpcxl1"><h2 class="svelte-1kpcxl1">Contact Me</h2> <p class="svelte-1kpcxl1">Sparked your intrest? Contact me about anything from, job offers, collaborations or commissioning.</p> <div class="svelte-1kpcxl1"><a href="/contact" class="link svelte-1kpcxl1">Contact me</a></div></div>',v=D(r[0].projects),t=[];for(let e=0;e<v.length;e+=1)t[e]=P(V(r,v,e));return{c(){s=k("section"),s.innerHTML=p,o=y(),h=k("section"),h.innerHTML=g,b=y(),a=k("section"),i=k("h2"),i.textContent=j,I=y(),x=k("div");for(let e=0;e<t.length;e+=1)t[e].c();w=y(),f=k("div"),f.innerHTML=S,M=y(),m=k("section"),m.innerHTML=L,this.h()},l(e){s=_(e,"SECTION",{class:!0,"data-svelte-h":!0}),N(s)!=="svelte-1r1zif8"&&(s.innerHTML=p),o=E(e),h=_(e,"SECTION",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-1e612eb"&&(h.innerHTML=g),b=E(e),a=_(e,"SECTION",{class:!0});var c=H(a);i=_(c,"H2",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-1bdao57"&&(i.textContent=j),I=E(c),x=_(c,"DIV",{class:!0});var l=H(x);for(let C=0;C<t.length;C+=1)t[C].l(l);l.forEach(d),w=E(c),f=_(c,"DIV",{class:!0,"data-svelte-h":!0}),N(f)!=="svelte-a2yate"&&(f.innerHTML=S),c.forEach(d),M=E(e),m=_(e,"SECTION",{class:!0,"data-svelte-h":!0}),N(m)!=="svelte-8x2jlh"&&(m.innerHTML=L),this.h()},h(){n(s,"class","hero svelte-1kpcxl1"),n(h,"class","about-me svelte-1kpcxl1"),n(i,"class","svelte-1kpcxl1"),n(x,"class","project-wrapper svelte-1kpcxl1"),n(f,"class","more-projects svelte-1kpcxl1"),n(a,"class","projects svelte-1kpcxl1"),n(m,"class","contact svelte-1kpcxl1")},m(e,c){T(e,s,c),T(e,o,c),T(e,h,c),T(e,b,c),T(e,a,c),u(a,i),u(a,I),u(a,x);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(x,null);u(a,w),u(a,f),T(e,M,c),T(e,m,c)},p(e,[c]){if(c&1){v=D(e[0].projects);let l;for(l=0;l<v.length;l+=1){const C=V(e,v,l);t[l]?t[l].p(C,c):(t[l]=P(C),t[l].c(),t[l].m(x,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=v.length}},i:$,o:$,d(e){e&&(d(s),d(o),d(h),d(b),d(a),d(M),d(m)),J(t,e)}}}function K(r,s,p){let{data:o}=s;const h=(g,b,a,i)=>b+a+`${i!=g.tags.length-1?" / ":""}`;return r.$$set=g=>{"data"in g&&p(0,o=g.data)},[o,h]}class X extends z{constructor(s){super(),G(this,s,K,F,R,{data:0})}}export{X as component};
