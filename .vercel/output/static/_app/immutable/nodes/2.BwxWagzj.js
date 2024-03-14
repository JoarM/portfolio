import{s as R,n as N,d as $}from"../chunks/scheduler.Bqdg6ctA.js";import{S as z,i as G,e as m,s as T,c as j,g as L,b as y,a as S,d,f as o,h as M,j as x,q as J,n as A,o as O,p as B}from"../chunks/index.XmQP8okr.js";import{e as D}from"../chunks/each.D6YF6ztN.js";function V(i,s,h){const r=i.slice();return r[2]=s[h],r}function P(i){let s,h,r,u,_,q,a,c,C=i[2].title+"",k,g,b,f=i[2].tags.reduce(H,"")+"",E,I,p;function H(...v){return i[1](i[2],...v)}return{c(){s=m("a"),h=m("article"),r=m("img"),q=T(),a=m("div"),c=m("h3"),k=A(C),g=T(),b=m("span"),E=A(f),I=T(),this.h()},l(v){s=j(v,"A",{href:!0,class:!0});var t=S(s);h=j(t,"ARTICLE",{class:!0});var e=S(h);r=j(e,"IMG",{src:!0,alt:!0,class:!0}),q=y(e),a=j(e,"DIV",{class:!0});var n=S(a);c=j(n,"H3",{class:!0});var l=S(c);k=O(l,C),l.forEach(d),g=y(n),b=j(n,"SPAN",{class:!0});var w=S(b);E=O(w,f),w.forEach(d),n.forEach(d),e.forEach(d),I=y(t),t.forEach(d),this.h()},h(){$(r.src,u=i[2].coverImage)||o(r,"src",u),o(r,"alt",_=`${i[2].title} cover image`),o(r,"class","svelte-jxxnqi"),o(c,"class","svelte-jxxnqi"),o(b,"class","svelte-jxxnqi"),o(a,"class","svelte-jxxnqi"),o(h,"class","svelte-jxxnqi"),o(s,"href",p=`/projects/${i[2].slug}`),o(s,"class","svelte-jxxnqi")},m(v,t){M(v,s,t),x(s,h),x(h,r),x(h,q),x(h,a),x(a,c),x(c,k),x(a,g),x(a,b),x(b,E),x(s,I)},p(v,t){i=v,t&1&&!$(r.src,u=i[2].coverImage)&&o(r,"src",u),t&1&&_!==(_=`${i[2].title} cover image`)&&o(r,"alt",_),t&1&&C!==(C=i[2].title+"")&&B(k,C),t&1&&f!==(f=i[2].tags.reduce(H,"")+"")&&B(E,f),t&1&&p!==(p=`/projects/${i[2].slug}`)&&o(s,"href",p)},d(v){v&&d(s)}}}function F(i){let s,h='<div class="hero-info svelte-jxxnqi"><h1 class="svelte-jxxnqi">Joar Maltesson</h1> <p class="svelte-jxxnqi">I develop software for every day use.</p></div> <div class="hero-img svelte-jxxnqi"><img src="/hero-image.webp" alt="of me"/></div>',r,u,_=`<div class="about-me-image svelte-jxxnqi"><img src="/about-me.jpg" alt="Me walking on a sidewalk" class="svelte-jxxnqi"/></div> <div class="about-me-wrapper svelte-jxxnqi"><h2 class="svelte-jxxnqi">About me</h2> <p class="svelte-jxxnqi"><span class="svelte-jxxnqi">Im a 18 year old student and entrepreneur from Borås, Sweden. I study system development at LBS kreativa gymnasiet.
                I enjoy solving problems with code, my primary focus is fullstack web development but i also develop desktop and mobile apps.</span></p> <a href="/about" class="link svelte-jxxnqi">Read more</a></div>`,q,a,c,C="My work",k,g,b,f,E=`<a href="/projects" class="svelte-jxxnqi">See all projects
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-jxxnqi"><path d="m9 18 6-6-6-6"></path></svg></a>`,I,p,H='<div class="contact-wrapper svelte-jxxnqi"><h2 class="svelte-jxxnqi">Contact Me</h2> <p class="svelte-jxxnqi">Sparked your intrest? Contact me about anything from, job offers, collaborations or commissioning.</p> <div class="svelte-jxxnqi"><a href="/contact" class="link svelte-jxxnqi">Contact me</a></div></div>',v=D(i[0].projects),t=[];for(let e=0;e<v.length;e+=1)t[e]=P(V(i,v,e));return{c(){s=m("section"),s.innerHTML=h,r=T(),u=m("section"),u.innerHTML=_,q=T(),a=m("section"),c=m("h2"),c.textContent=C,k=T(),g=m("div");for(let e=0;e<t.length;e+=1)t[e].c();b=T(),f=m("div"),f.innerHTML=E,I=T(),p=m("section"),p.innerHTML=H,this.h()},l(e){s=j(e,"SECTION",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-1r1zif8"&&(s.innerHTML=h),r=y(e),u=j(e,"SECTION",{class:!0,"data-svelte-h":!0}),L(u)!=="svelte-1e612eb"&&(u.innerHTML=_),q=y(e),a=j(e,"SECTION",{class:!0});var n=S(a);c=j(n,"H2",{class:!0,"data-svelte-h":!0}),L(c)!=="svelte-1bdao57"&&(c.textContent=C),k=y(n),g=j(n,"DIV",{class:!0});var l=S(g);for(let w=0;w<t.length;w+=1)t[w].l(l);l.forEach(d),b=y(n),f=j(n,"DIV",{class:!0,"data-svelte-h":!0}),L(f)!=="svelte-a2yate"&&(f.innerHTML=E),n.forEach(d),I=y(e),p=j(e,"SECTION",{class:!0,"data-svelte-h":!0}),L(p)!=="svelte-8x2jlh"&&(p.innerHTML=H),this.h()},h(){o(s,"class","hero svelte-jxxnqi"),o(u,"class","about-me svelte-jxxnqi"),o(c,"class","svelte-jxxnqi"),o(g,"class","project-wrapper svelte-jxxnqi"),o(f,"class","more-projects svelte-jxxnqi"),o(a,"class","projects svelte-jxxnqi"),o(p,"class","contact svelte-jxxnqi")},m(e,n){M(e,s,n),M(e,r,n),M(e,u,n),M(e,q,n),M(e,a,n),x(a,c),x(a,k),x(a,g);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(g,null);x(a,b),x(a,f),M(e,I,n),M(e,p,n)},p(e,[n]){if(n&1){v=D(e[0].projects);let l;for(l=0;l<v.length;l+=1){const w=V(e,v,l);t[l]?t[l].p(w,n):(t[l]=P(w),t[l].c(),t[l].m(g,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=v.length}},i:N,o:N,d(e){e&&(d(s),d(r),d(u),d(q),d(a),d(I),d(p)),J(t,e)}}}function K(i,s,h){let{data:r}=s;const u=(_,q,a,c)=>q+a+`${c!=_.tags.length-1?" / ":""}`;return i.$$set=_=>{"data"in _&&h(0,r=_.data)},[r,u]}class X extends z{constructor(s){super(),G(this,s,K,F,R,{data:0})}}export{X as component};