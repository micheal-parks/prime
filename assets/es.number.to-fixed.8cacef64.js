var O=Object.defineProperty;var u=(n,i)=>O(n,"name",{value:i,configurable:!0});import{m as R,r as S,n as x,_ as E,p as F,q as N,s as T}from"./iframe.f87997e8.js";var j=x,q=R,C=S,D=RangeError,V=u(function(i){var r=q(C(this)),e="",t=j(i);if(t<0||t==1/0)throw D("Wrong number of repetitions");for(;t>0;(t>>>=1)&&(r+=r))t&1&&(e+=r);return e},"repeat"),_=E,d=F,k=x,z=T,M=V,w=N,U=RangeError,I=String,y=Math.floor,p=d(M),b=d("".slice),g=d(1 .toFixed),s=u(function(n,i,r){return i===0?r:i%2===1?s(n,i-1,r*n):s(n*n,i/2,r)},"pow"),W=u(function(n){for(var i=0,r=n;r>=4096;)i+=12,r/=4096;for(;r>=2;)i+=1,r/=2;return i},"log"),f=u(function(n,i,r){for(var e=-1,t=r;++e<6;)t+=i*n[e],n[e]=t%1e7,t=y(t/1e7)},"multiply"),$=u(function(n,i){for(var r=6,e=0;--r>=0;)e+=n[r],n[r]=y(e/i),e=e%i*1e7},"divide"),m=u(function(n){for(var i=6,r="";--i>=0;)if(r!==""||i===0||n[i]!==0){var e=I(n[i]);r=r===""?e:r+p("0",7-e.length)+e}return r},"dataToString"),A=w(function(){return g(8e-5,3)!=="0.000"||g(.9,0)!=="1"||g(1.255,2)!=="1.25"||g(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!w(function(){g({})});_({target:"Number",proto:!0,forced:A},{toFixed:u(function(i){var r=z(this),e=k(i),t=[0,0,0,0,0,0],h="",a="0",o,c,v,l;if(e<0||e>20)throw U("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return I(r);if(r<0&&(h="-",r=-r),r>1e-21)if(o=W(r*s(2,69,1))-69,c=o<0?r*s(2,-o,1):r/s(2,o,1),c*=4503599627370496,o=52-o,o>0){for(f(t,0,c),v=e;v>=7;)f(t,1e7,0),v-=7;for(f(t,s(10,v,1),0),v=o-1;v>=23;)$(t,1<<23),v-=23;$(t,1<<v),f(t,1,1),$(t,2),a=m(t)}else f(t,0,c),f(t,1<<-o,0),a=m(t)+p("0",e);return e>0?(l=a.length,a=h+(l<=e?"0."+p("0",e-l)+a:b(a,0,l-e)+"."+b(a,l-e))):a=h+a,a},"toFixed")});export{V as s};
//# sourceMappingURL=es.number.to-fixed.8cacef64.js.map
