import{S as b,i as m,a as o,b as u,f as l,n as c,e as f,t as h,c as n,d,g as x,s as k,h as v,j as p}from"./preview-dc6b03ff.js";import{c as g}from"./index-74f03c09.js";import"./iframe-7b1e4bad.js";import"../sb-preview/runtime.mjs";function w(a){let e,i,s;return{c(){e=f("small"),i=h(a[0]),this.c=n,d(e,"class",s=g("inline-block rounded-full px-3 py-0.5 text-xs border",{"text-success-dark bg-success-light border-success-medium":a[1]==="green","text-warning-dark bg-warning-light border-warning-medium":a[1]==="orange","text-danger-dark bg-danger-light border-danger-medium":a[1]==="red","text-default bg-disabled-light border-medium":a[1]==="gray","text-info-dark bg-info-light border-info-medium":a[1]==="blue"}))},m(t,r){u(t,e,r),x(e,i)},p(t,[r]){r&1&&k(i,t[0]),r&2&&s!==(s=g("inline-block rounded-full px-3 py-0.5 text-xs border",{"text-success-dark bg-success-light border-success-medium":t[1]==="green","text-warning-dark bg-warning-light border-warning-medium":t[1]==="orange","text-danger-dark bg-danger-light border-danger-medium":t[1]==="red","text-default bg-disabled-light border-medium":t[1]==="gray","text-info-dark bg-info-light border-info-medium":t[1]==="blue"}))&&d(e,"class",s)},i:n,o:n,d(t){t&&v(e)}}}function _(a,e,i){let{label:s=""}=e,{variant:t="gray"}=e;return p(),a.$$set=r=>{"label"in r&&i(0,s=r.label),"variant"in r&&i(1,t=r.variant)},[s,t]}class y extends b{constructor(e){super(),m(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},_,w,c,{label:0,variant:1},null),e&&(e.target&&u(e.target,this,e.anchor),e.props&&(this.$set(e.props),l()))}static get observedAttributes(){return["label","variant"]}get label(){return this.$$.ctx[0]}set label(e){this.$$set({label:e}),l()}get variant(){return this.$$.ctx[1]}set variant(e){this.$$set({variant:e}),l()}}customElements.define("v-badge",y);export{y as default};
//# sourceMappingURL=badge-0ba93f33.js.map