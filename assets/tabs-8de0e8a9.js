import{S,i as j,a as z,b as k,f as m,n as T,e as g,c as p,d as f,u as q,h as w,j as A,t as C,k as I,g as _,r as M,s as O,m as R}from"./preview-dc6b03ff.js";import{c as h}from"./index-74f03c09.js";import{d as x}from"./dispatch-33707423.js";import"./iframe-7b1e4bad.js";import"../sb-preview/runtime.mjs";function y(d,e,t){const s=d.slice();return s[7]=e[t],s[9]=t,s}function v(d,e){let t,s,o=e[7]+"",b,r,l,a,n,i;function E(){return e[5](e[7])}return{key:d,first:null,c(){t=g("button"),s=g("div"),b=C(o),l=I(),f(s,"class",r=h({"-mb-px":e[7]!==e[0]})),f(t,"class",a=h("px-4 py-1 text-sm first:ml-4 capitalize",{"bg-white border border-x-border-2 border-t-border-2 border-b-white font-semibold -mb-px text-default":e[7]===e[0],"text-subtle-1":e[7]!==e[0],"border-l border-l-gray-300":e[2]>e[9],"border-r border-r-gray-300":e[2]<e[9]})),this.first=t},m(u,c){k(u,t,c),_(t,s),_(s,b),_(t,l),n||(i=M(t,"click",E),n=!0)},p(u,c){e=u,c&2&&o!==(o=e[7]+"")&&O(b,o),c&3&&r!==(r=h({"-mb-px":e[7]!==e[0]}))&&f(s,"class",r),c&7&&a!==(a=h("px-4 py-1 text-sm first:ml-4 capitalize",{"bg-white border border-x-border-2 border-t-border-2 border-b-white font-semibold -mb-px text-default":e[7]===e[0],"text-subtle-1":e[7]!==e[0],"border-l border-l-gray-300":e[2]>e[9],"border-r border-r-gray-300":e[2]<e[9]}))&&f(t,"class",a)},d(u){u&&w(t),n=!1,i()}}}function B(d){let e,t=[],s=new Map,o=d[1];const b=r=>r[7];for(let r=0;r<o.length;r+=1){let l=y(d,o,r),a=b(l);s.set(a,t[r]=v(a,l))}return{c(){e=g("div");for(let r=0;r<t.length;r+=1)t[r].c();this.c=p,f(e,"class","w-full flex bg-medium border-b border-b-border-2")},m(r,l){k(r,e,l);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(r,[l]){l&15&&(o=r[1],t=q(t,l,b,1,r,o,s,e,R,v,null,y))},i:p,o:p,d(r){r&&w(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function D(d,e,t){let s,o,{tabs:b=""}=e,{selected:r=""}=e;const l=x();A();const a=i=>{t(0,r=i),l("input",{value:r})},n=i=>a(i);return d.$$set=i=>{"tabs"in i&&t(4,b=i.tabs),"selected"in i&&t(0,r=i.selected)},d.$$.update=()=>{d.$$.dirty&16&&t(1,s=b.split(",").map(i=>i.trim())),d.$$.dirty&3&&t(2,o=s.indexOf(r))},[r,s,o,a,b,n]}class F extends S{constructor(e){super(),j(this,{target:this.shadowRoot,props:z(this.attributes),customElement:!0},D,B,T,{tabs:4,selected:0},null),e&&(e.target&&k(e.target,this,e.anchor),e.props&&(this.$set(e.props),m()))}static get observedAttributes(){return["tabs","selected"]}get tabs(){return this.$$.ctx[4]}set tabs(e){this.$$set({tabs:e}),m()}get selected(){return this.$$.ctx[0]}set selected(e){this.$$set({selected:e}),m()}}customElements.define("v-tabs",F);export{F as default};
//# sourceMappingURL=tabs-8de0e8a9.js.map