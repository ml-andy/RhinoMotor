jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return e<1?-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i))+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*(((r*=1.525)+1)*e-r))+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5lYXNpbmcuMS4zLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImVhc2luZyIsImV4dGVuZCIsImRlZiIsInN3aW5nIiwieCIsInQiLCJiIiwiYyIsImQiLCJlYXNlSW5RdWFkIiwiZWFzZU91dFF1YWQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluQ3ViaWMiLCJlYXNlT3V0Q3ViaWMiLCJlYXNlSW5PdXRDdWJpYyIsImVhc2VJblF1YXJ0IiwiZWFzZU91dFF1YXJ0IiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5RdWludCIsImVhc2VPdXRRdWludCIsImVhc2VJbk91dFF1aW50IiwiZWFzZUluU2luZSIsIk1hdGgiLCJjb3MiLCJQSSIsImVhc2VPdXRTaW5lIiwic2luIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJwb3ciLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwic3FydCIsImVhc2VPdXRDaXJjIiwiZWFzZUluT3V0Q2lyYyIsImVhc2VJbkVsYXN0aWMiLCJzIiwicCIsImEiLCJhYnMiLCJhc2luIiwiZWFzZU91dEVsYXN0aWMiLCJlYXNlSW5PdXRFbGFzdGljIiwiZWFzZUluQmFjayIsInVuZGVmaW5lZCIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsImVhc2VJbkJvdW5jZSIsImVhc2VPdXRCb3VuY2UiLCJlYXNlSW5PdXRCb3VuY2UiXSwibWFwcGluZ3MiOiJBQXNDQUEsT0FBT0MsT0FBZSxPQUFJRCxPQUFPQyxPQUFjLE1BRS9DRCxPQUFPRSxPQUFRRixPQUFPQyxRQUVyQkUsSUFBSyxjQUNMQyxNQUFPLFNBQVVDLEVBQUdDLEVBQUdDLEVBQUdDLEVBQUdDLEdBRTVCLE1BQU9ULFFBQU9DLE9BQU9ELE9BQU9DLE9BQU9FLEtBQUtFLEVBQUdDLEVBQUdDLEVBQUdDLEVBQUdDLElBRXJEQyxXQUFZLFNBQVVMLEVBQUdDLEVBQUdDLEVBQUdDLEVBQUdDLEdBQ2pDLE1BQU9ELElBQUdGLEdB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QUFJUixPQUFPQyxPQUFPaUQsY0FBZTdDLEVBQUdJLEVBQUVILEVBQUcsRUFBR0UsRUFBR0MsR0FBS0YsR0FFNUQyQyxjQUFlLFNBQVU3QyxFQUFHQyxFQUFHQyxFQUFHQyxFQUFHQyxHQUNwQyxPQUFLSCxHQUFHRyxHQUFNLEVBQUUsS0FDUkQsR0FBRyxPQUFPRixFQUFFQSxHQUFLQyxFQUNkRCxFQUFLLEVBQUUsS0FDVkUsR0FBRyxRQUFRRixHQUFJLElBQUksTUFBT0EsRUFBSSxLQUFPQyxFQUNsQ0QsRUFBSyxJQUFJLEtBQ1pFLEdBQUcsUUFBUUYsR0FBSSxLQUFLLE1BQU9BLEVBQUksT0FBU0MsRUFFeENDLEdBQUcsUUFBUUYsR0FBSSxNQUFNLE1BQU9BLEVBQUksU0FBV0MsR0FHcEQ0QyxnQkFBaUIsU0FBVTlDLEVBQUdDLEVBQUdDLEVBQUdDLEVBQUdDLEdBQ3RDLE1BQUlILEdBQUlHLEVBQUUsRUFBeUQsR0FBL0NULE9BQU9DLE9BQU9nRCxhQUFjNUMsRUFBSyxFQUFGQyxFQUFLLEVBQUdFLEVBQUdDLEdBQVVGLEVBQ2YsR0FBbERQLE9BQU9DLE9BQU9pRCxjQUFlN0MsRUFBSyxFQUFGQyxFQUFJRyxFQUFHLEVBQUdELEVBQUdDLEdBQVksR0FBRkQsRUFBT0QiLCJmaWxlIjoianF1ZXJ5LmVhc2luZy4xLjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjMgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXHJcbiAqXHJcbiAqIFVzZXMgdGhlIGJ1aWx0IGluIGVhc2luZyBjYXBhYmlsaXRpZXMgYWRkZWQgSW4galF1ZXJ5IDEuMVxyXG4gKiB0byBvZmZlciBtdWx0aXBsZSBlYXNpbmcgb3B0aW9uc1xyXG4gKlxyXG4gKiBURVJNUyBPRiBVU0UgLSBqUXVlcnkgRWFzaW5nXHJcbiAqIFxyXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxyXG4gKiBcclxuICogQ29weXJpZ2h0IMKpIDIwMDggR2VvcmdlIE1jR2lubGV5IFNtaXRoXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIFxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiBcclxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXHJcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXHJcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxyXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqIFxyXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBcclxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICogXHJcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgXHJcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcclxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxyXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIFxyXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xyXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgXHJcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4gXHJcbiAqXHJcbiovXHJcblxyXG4vLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ0lubkluZyB2YWx1ZSwgYzogY2hhbmdlIEluIHZhbHVlLCBkOiBkdXJhdGlvblxyXG5qUXVlcnkuZWFzaW5nWydqc3dpbmcnXSA9IGpRdWVyeS5lYXNpbmdbJ3N3aW5nJ107XHJcblxyXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZWFzaW5nLFxyXG57XHJcblx0ZGVmOiAnZWFzZU91dFF1YWQnLFxyXG5cdHN3aW5nOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0Ly9hbGVydChqUXVlcnkuZWFzaW5nLmRlZmF1bHQpO1xyXG5cdFx0cmV0dXJuIGpRdWVyeS5lYXNpbmdbalF1ZXJ5LmVhc2luZy5kZWZdKHgsIHQsIGIsIGMsIGQpO1xyXG5cdH0sXHJcblx0ZWFzZUluUXVhZDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjKih0Lz1kKSp0ICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRRdWFkOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIC1jICoodC89ZCkqKHQtMikgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0UXVhZDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcclxuXHRcdHJldHVybiAtYy8yICogKCgtLXQpKih0LTIpIC0gMSkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluQ3ViaWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gYyoodC89ZCkqdCp0ICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjKigodD10L2QtMSkqdCp0ICsgMSkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtcclxuXHRcdHJldHVybiBjLzIqKCh0LT0yKSp0KnQgKyAyKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5RdWFydDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjKih0Lz1kKSp0KnQqdCArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gLWMgKiAoKHQ9dC9kLTEpKnQqdCp0IC0gMSkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQgKyBiO1xyXG5cdFx0cmV0dXJuIC1jLzIgKiAoKHQtPTIpKnQqdCp0IC0gMikgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluUXVpbnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gYyoodC89ZCkqdCp0KnQqdCArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gYyooKHQ9dC9kLTEpKnQqdCp0KnQgKyAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRRdWludDogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCp0ICsgYjtcclxuXHRcdHJldHVybiBjLzIqKCh0LT0yKSp0KnQqdCp0ICsgMikgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluU2luZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiAtYyAqIE1hdGguY29zKHQvZCAqIChNYXRoLlBJLzIpKSArIGMgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZU91dFNpbmU6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gYyAqIE1hdGguc2luKHQvZCAqIChNYXRoLlBJLzIpKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0cmV0dXJuIC1jLzIgKiAoTWF0aC5jb3MoTWF0aC5QSSp0L2QpIC0gMSkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluRXhwbzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiAodD09MCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQvZCAtIDEpKSArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0RXhwbzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiAodD09ZCkgPyBiK2MgOiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0L2QpICsgMSkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICh0PT0wKSByZXR1cm4gYjtcclxuXHRcdGlmICh0PT1kKSByZXR1cm4gYitjO1xyXG5cdFx0aWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xyXG5cdFx0cmV0dXJuIGMvMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbkNpcmM6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRyZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodC89ZCkqdCkgLSAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0Q2lyYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodD10L2QtMSkqdCkgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiAtYy8yICogKE1hdGguc3FydCgxIC0gdCp0KSAtIDEpICsgYjtcclxuXHRcdHJldHVybiBjLzIgKiAoTWF0aC5zcXJ0KDEgLSAodC09MikqdCkgKyAxKSArIGI7XHJcblx0fSxcclxuXHRlYXNlSW5FbGFzdGljOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0dmFyIHM9MS43MDE1ODt2YXIgcD0wO3ZhciBhPWM7XHJcblx0XHRpZiAodD09MCkgcmV0dXJuIGI7ICBpZiAoKHQvPWQpPT0xKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqLjM7XHJcblx0XHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XHJcblx0XHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcclxuXHRcdHJldHVybiAtKGEqTWF0aC5wb3coMiwxMCoodC09MSkpICogTWF0aC5zaW4oICh0KmQtcykqKDIqTWF0aC5QSSkvcCApKSArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHZhciBzPTEuNzAxNTg7dmFyIHA9MDt2YXIgYT1jO1xyXG5cdFx0aWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kKT09MSkgcmV0dXJuIGIrYzsgIGlmICghcCkgcD1kKi4zO1xyXG5cdFx0aWYgKGEgPCBNYXRoLmFicyhjKSkgeyBhPWM7IHZhciBzPXAvNDsgfVxyXG5cdFx0ZWxzZSB2YXIgcyA9IHAvKDIqTWF0aC5QSSkgKiBNYXRoLmFzaW4gKGMvYSk7XHJcblx0XHRyZXR1cm4gYSpNYXRoLnBvdygyLC0xMCp0KSAqIE1hdGguc2luKCAodCpkLXMpKigyKk1hdGguUEkpL3AgKSArIGMgKyBiO1xyXG5cdH0sXHJcblx0ZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHZhciBzPTEuNzAxNTg7dmFyIHA9MDt2YXIgYT1jO1xyXG5cdFx0aWYgKHQ9PTApIHJldHVybiBiOyAgaWYgKCh0Lz1kLzIpPT0yKSByZXR1cm4gYitjOyAgaWYgKCFwKSBwPWQqKC4zKjEuNSk7XHJcblx0XHRpZiAoYSA8IE1hdGguYWJzKGMpKSB7IGE9YzsgdmFyIHM9cC80OyB9XHJcblx0XHRlbHNlIHZhciBzID0gcC8oMipNYXRoLlBJKSAqIE1hdGguYXNpbiAoYy9hKTtcclxuXHRcdGlmICh0IDwgMSkgcmV0dXJuIC0uNSooYSpNYXRoLnBvdygyLDEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkpICsgYjtcclxuXHRcdHJldHVybiBhKk1hdGgucG93KDIsLTEwKih0LT0xKSkgKiBNYXRoLnNpbiggKHQqZC1zKSooMipNYXRoLlBJKS9wICkqLjUgKyBjICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbkJhY2s6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkLCBzKSB7XHJcblx0XHRpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuIGMqKHQvPWQpKnQqKChzKzEpKnQgLSBzKSArIGI7XHJcblx0fSxcclxuXHRlYXNlT3V0QmFjazogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQsIHMpIHtcclxuXHRcdGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gYyooKHQ9dC9kLTEpKnQqKChzKzEpKnQgKyBzKSArIDEpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkLCBzKSB7XHJcblx0XHRpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4OyBcclxuXHRcdGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqKHQqdCooKChzKj0oMS41MjUpKSsxKSp0IC0gcykpICsgYjtcclxuXHRcdHJldHVybiBjLzIqKCh0LT0yKSp0KigoKHMqPSgxLjUyNSkpKzEpKnQgKyBzKSArIDIpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VJbkJvdW5jZTogZnVuY3Rpb24gKHgsIHQsIGIsIGMsIGQpIHtcclxuXHRcdHJldHVybiBjIC0galF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlICh4LCBkLXQsIDAsIGMsIGQpICsgYjtcclxuXHR9LFxyXG5cdGVhc2VPdXRCb3VuY2U6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XHJcblx0XHRpZiAoKHQvPWQpIDwgKDEvMi43NSkpIHtcclxuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSp0KnQpICsgYjtcclxuXHRcdH0gZWxzZSBpZiAodCA8ICgyLzIuNzUpKSB7XHJcblx0XHRcdHJldHVybiBjKig3LjU2MjUqKHQtPSgxLjUvMi43NSkpKnQgKyAuNzUpICsgYjtcclxuXHRcdH0gZWxzZSBpZiAodCA8ICgyLjUvMi43NSkpIHtcclxuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSoodC09KDIuMjUvMi43NSkpKnQgKyAuOTM3NSkgKyBiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGMqKDcuNTYyNSoodC09KDIuNjI1LzIuNzUpKSp0ICsgLjk4NDM3NSkgKyBiO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xyXG5cdFx0aWYgKHQgPCBkLzIpIHJldHVybiBqUXVlcnkuZWFzaW5nLmVhc2VJbkJvdW5jZSAoeCwgdCoyLCAwLCBjLCBkKSAqIC41ICsgYjtcclxuXHRcdHJldHVybiBqUXVlcnkuZWFzaW5nLmVhc2VPdXRCb3VuY2UgKHgsIHQqMi1kLCAwLCBjLCBkKSAqIC41ICsgYyouNSArIGI7XHJcblx0fVxyXG59KTtcclxuXHJcbi8qXHJcbiAqXHJcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcclxuICogXHJcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS4gXHJcbiAqIFxyXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIFxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiBcclxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXHJcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXHJcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxyXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqIFxyXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBcclxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICogXHJcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgXHJcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcclxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxyXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIFxyXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xyXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgXHJcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4gXHJcbiAqXHJcbiAqLyJdfQ==
