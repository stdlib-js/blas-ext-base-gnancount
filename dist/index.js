"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var y=s(function(z,f){
function b(a,r,n,u){var t,i,v,e,c,o;if(t=r.data,i=r.accessors[0],n===0)return e=i(t,u),e===e?a:0;for(v=u,c=0,o=0;o<a;o++)e=i(t,v),e===e&&(c+=1),v+=n;return c}f.exports=b
});var q=s(function(A,g){
var d=require('@stdlib/array-base-arraylike2object/dist'),j=y();function k(a,r,n,u){var t,i,v,e,c;if(a<=0)return 0;if(i=d(r),i.accessorProtocol)return j(a,i,n,u);if(n===0)return r[u]===r[u]?a:0;for(t=u,v=0,e=0;e<a;e++)c=r[t],c===c&&(v+=1),t+=n;return v}g.exports=k
});var l=s(function(B,p){
var m=require('@stdlib/strided-base-stride2offset/dist'),O=q();function P(a,r,n){return O(a,r,n,m(a,n))}p.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=l(),h=q();R(x,"ndarray",h);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
