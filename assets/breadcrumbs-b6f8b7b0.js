import{S as k,i as v,a as y,b as n,f as b,n as x,e as f,c as o,d as g,u as w,h as m,j as E,t as S,k as $,l as j,g as M,s as q,m as A}from"./preview-dc6b03ff.js";import"./iframe-7b1e4bad.js";import"../sb-preview/runtime.mjs";function h(a,e,t){const i=a.slice();return i[2]=e[t],i[4]=t,i}function p(a){let e;return{c(){e=f("div"),e.innerHTML=`<div class="w-px h-[60%] border-l border-medium -rotate-[30deg] -mt-px"></div> 
        <div class="w-px h-[60%] border-l border-medium rotate-[30deg] -mt-0.5"></div> 
      `},m(t,i){n(t,e,i)},d(t){t&&m(e)}}}function _(a,e){let t,i=e[2]+"",u,c,l,s=e[4]!==e[0].length-1&&p();return{key:a,first:null,c(){t=f("small"),u=S(i),c=$(),s&&s.c(),l=j(),g(t,"class","py1"),this.first=t},m(r,d){n(r,t,d),M(t,u),n(r,c,d),s&&s.m(r,d),n(r,l,d)},p(r,d){e=r,d&1&&i!==(i=e[2]+"")&&q(u,i),e[4]!==e[0].length-1?s||(s=p(),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(r){r&&m(t),r&&m(c),s&&s.d(r),r&&m(l)}}}function B(a){let e,t=[],i=new Map,u=a[0];const c=l=>l[2];for(let l=0;l<u.length;l+=1){let s=h(a,u,l),r=c(s);i.set(r,t[l]=_(r,s))}return{c(){e=f("div");for(let l=0;l<t.length;l+=1)t[l].c();this.c=o,g(e,"class","inline-flex gap-3 -ml-1 px-4 border border-medium bg-light text-default rounded-full")},m(l,s){n(l,e,s);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(l,[s]){s&1&&(u=l[0],t=w(t,s,c,1,l,u,i,e,A,_,null,h))},i:o,o,d(l){l&&m(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function C(a,e,t){let{crumbs:i=""}=e;E();let u;return a.$$set=c=>{"crumbs"in c&&t(1,i=c.crumbs)},a.$$.update=()=>{a.$$.dirty&2&&t(0,u=i.split(",").map(c=>c.trim()))},[u,i]}class H extends k{constructor(e){super(),v(this,{target:this.shadowRoot,props:y(this.attributes),customElement:!0},C,B,x,{crumbs:1},null),e&&(e.target&&n(e.target,this,e.anchor),e.props&&(this.$set(e.props),b()))}static get observedAttributes(){return["crumbs"]}get crumbs(){return this.$$.ctx[1]}set crumbs(e){this.$$set({crumbs:e}),b()}}customElements.define("v-breadcrumbs",H);export{H as default};
//# sourceMappingURL=breadcrumbs-b6f8b7b0.js.map