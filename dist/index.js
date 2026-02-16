"use strict";var u=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var c=u(function(H,p){
var n=require('@stdlib/number-float64-base-to-float32/dist');function x(r){return r===0?.40000972151756287:n(.40000972151756287+n(r*.24279078841209412))}p.exports=x
});var y=u(function(O,f){
var q=require('@stdlib/number-float64-base-to-float32/dist');function L(r){return r===0?.6666666269302368:q(.6666666269302368+q(r*.2849878668785095))}f.exports=L
});var T=u(function(P,F){
var e=require('@stdlib/number-float64-base-to-float32/dist'),g=c(),h=y(),k=e(.5),m=e(2);function w(r){var t,i,s,a,v,l,o;return r=e(r),a=e(r/e(m+r)),v=e(a*a),o=e(v*v),i=e(o*g(o)),s=e(v*h(o)),l=e(s+i),t=e(k*e(r*r)),e(a*e(t+l))}F.exports=w
});var z=T();module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
