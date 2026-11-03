"use strict";var i=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(a){throw (t=0, a)}};};var c=i(function(H,p){
var n=require('@stdlib/number-float64-base-to-float32/dist');function x(r){return r===0?.40000972151756287:n(.40000972151756287+n(r*.24279078841209412))}p.exports=x
});var y=i(function(O,f){
var q=require('@stdlib/number-float64-base-to-float32/dist');function L(r){return r===0?.6666666269302368:q(.6666666269302368+q(r*.2849878668785095))}f.exports=L
});var T=i(function(P,F){
var e=require('@stdlib/number-float64-base-to-float32/dist'),g=c(),h=y(),k=e(.5),m=e(2);function w(r){var t,a,s,v,o,l,u;return r=e(r),v=e(r/e(m+r)),o=e(v*v),u=e(o*o),a=e(u*g(u)),s=e(o*h(u)),l=e(s+a),t=e(k*e(r*r)),e(v*e(t+l))}F.exports=w
});var z=T();module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
