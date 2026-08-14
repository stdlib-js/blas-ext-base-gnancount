"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var y=s(function(z,f){
function b(a,r,e,u){var t,i,v,n,c,o;if(t=r.data,i=r.accessors[0],e===0)return n=i(t,u),n===n?a:0;for(v=u,c=0,o=0;o<a;o++)n=i(t,v),n===n&&(c+=1),v+=e;return c}f.exports=b
});var q=s(function(A,g){
var d=require('@stdlib/array-base-arraylike2object/dist'),j=y();function k(a,r,e,u){var t,i,v,n,c;if(a<=0)return 0;if(i=d(r),i.accessorProtocol)return j(a,i,e,u);if(e===0)return r[u]===r[u]?a:0;for(t=u,v=0,n=0;n<a;n++)c=r[t],c===c&&(v+=1),t+=e;return v}g.exports=k
});var l=s(function(B,p){
var m=require('@stdlib/strided-base-stride2offset/dist'),O=q();function P(a,r,e){return O(a,r,e,m(a,e))}p.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=l(),h=q();R(x,"ndarray",h);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
