!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t||self).vastImaPlayer={})}(this,function(t){var i=null,e=function(){i=null};function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}function h(){return(h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function r(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,a(t,i)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,i){return(a=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function c(t,i,e){return(c=u()?Reflect.construct:function(t,i,e){var n=[null];n.push.apply(n,i);var s=new(Function.bind.apply(t,n));return e&&a(s,e.prototype),s}).apply(null,arguments)}function d(t){var i="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return c(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a(e,t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}var v=0;function b(t){return"__private_"+v+++"_"+t}function w(t,i){if(!Object.prototype.hasOwnProperty.call(t,i))throw new TypeError("attempted to use private field on non-instance");return t}var m={};m.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){return i[t]=new i("").constructor[t],i;function i(t,i){i||(i={});var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!!i.bubbles,!!i.cancelable,i.detail),e}}("prototype");var p,y,g=m.CustomEvent,j=b("mediaElement"),O=b("currentTime"),A=b("enabled"),k=function(){function t(t){Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,O,{writable:!0,value:void 0}),Object.defineProperty(this,A,{writable:!0,value:void 0}),this.seeking=void 0,w(this,j)[j]=t,w(this,O)[O]=0,w(this,A)[A]=!1,this.seeking=!1,this.t=this.t.bind(this),this.i=this.i.bind(this),this.h=this.h.bind(this),this.enable()}var i=t.prototype;return i.i=function(){this.seeking=!0},i.h=function(){this.seeking=!1},i.t=function(){this.seeking||w(this,j)[j].paused||(w(this,O)[O]=w(this,j)[j].currentTime)},i.enable=function(){w(this,A)[A]||(w(this,j)[j].addEventListener("seeking",this.i),w(this,j)[j].addEventListener("seeked",this.h),w(this,j)[j].addEventListener("timeupdate",this.t),w(this,A)[A]=!0)},i.disable=function(){w(this,A)[A]&&(w(this,j)[j].removeEventListener("seeking",this.i),w(this,j)[j].removeEventListener("seeked",this.h),w(this,j)[j].removeEventListener("timeupdate",this.t),w(this,A)[A]=!1)},i.play=function(){w(this,j)[j].play()},i.pause=function(){w(this,j)[j].pause()},i.reset=function(){w(this,O)[O]=0,w(this,A)[A]=!1,this.seeking=!1,this.enable()},i.destroy=function(){this.disable(),w(this,j)[j]=void 0},s(t,[{key:"enabled",get:function(){return w(this,A)[A]}},{key:"currentTime",get:function(){return w(this,O)[O]}},{key:"duration",get:function(){return w(this,j)[j].duration}},{key:"muted",get:function(){return w(this,j)[j].muted}},{key:"volume",get:function(){return w(this,j)[j].volume}}]),t}(),C=function(){function t(){this.delegate=document.createDocumentFragment()}var i=t.prototype;return i.addEventListener=function(){this.delegate.addEventListener.apply(this.delegate,[].slice.call(arguments))},i.dispatchEvent=function(){return this.delegate.dispatchEvent.apply(this.delegate,[].slice.call(arguments))},i.removeEventListener=function(){return this.delegate.removeEventListener.apply(this.delegate,[].slice.call(arguments))},t}(),R=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"];!function(t){t.MEDIA_START="MediaStart",t.MEDIA_IMPRESSION="MediaImpression",t.MEDIA_STOP="MediaStop",t.MEDIA_CUE_POINTS_CHANGE="MediaCuePointsChange",t.MEDIA_RESUMED="MediaResumed"}(p||(p={})),function(t){t.AD_ERROR="AdError",t.AD_BUFFERING="AdBuffering",t.LOADED="AdLoaded",t.IMPRESSION="AdImpression",t.STARTED="AdStarted",t.FIRST_QUARTILE="AdFirstQuartile",t.MIDPOINT="AdMidpoint",t.THIRD_QUARTILE="AdThirdQuartile",t.AD_PROGRESS="AdProgress",t.COMPLETE="AdComplete",t.CLICK="AdClick",t.PAUSED="AdPaused",t.RESUMED="AdResumed",t.SKIPPED="AdSkipped",t.SKIPPABLE_STATE_CHANGED="AdSkippableStateChanged",t.VOLUME_CHANGED="AdVolumeChanged",t.VOLUME_MUTED="AdMuted",t.AD_METADATA="AdMetadata",t.AD_BREAK_READY="AdBreakReady",t.CONTENT_PAUSE_REQUESTED="AdContentPauseRequested",t.CONTENT_RESUME_REQUESTED="AdContentResumeRequested",t.ALL_ADS_COMPLETED="AdAllAdsCompleted",t.DURATION_CHANGE="AdDurationChange",t.INTERACTION="AdInteraction",t.LINEAR_CHANGED="AdLinearChanged",t.LOG="AdLog",t.USER_CLOSE="AdUserClose",t.AD_CAN_PLAY="AdCanPlay",t.EXPANDED_CHANGED="AdExpandedChanged",t.VIEWABLE_IMPRESSION="AdViewableImpression"}(y||(y={}));var T=h({},y,p),E=function(){this.disableCustomPlaybackForIOS10Plus=!1,this.autoResize=!0,this.clickTrackingElement=void 0},P=function(t){function i(){var i;return(i=t.call.apply(t,[this].concat([].slice.call(arguments)))||this).errorCode=void 0,i.innerError=void 0,i.type=void 0,i.vastErrorCode=void 0,i}return r(i,t),i}(d(Error));P.ERROR_CODE_ADS_MANAGER_LOADED_TIMEOUT=9e3,P.ERROR_CODE_REQUEST_ADS_TIMEOUT=9001;var S=b("mediaElement"),M=b("adElement"),x=b("customPlayhead"),I=b("adsRenderingSettings"),B=b("ima"),L=b("adDisplayContainer"),D=b("adsManager"),W=b("width"),_=b("height"),q=b("adsLoader"),F=b("playerOptions"),N=b("resizeObserver"),V=b("currentAd"),G=b("loadedAd"),Q=b("mediaStartTriggered"),U=b("mediaImpressionTriggered"),z=b("mediaInActivation"),Z=b("customPlaybackTimeAdjustedOnEnded"),$=b("cuePoints"),H=b("adCurrentTime"),J=b("adDuration"),K=b("startAdCallback"),X=b("adsManagerLoadedTimeout"),Y=b("requestAdsTimeout"),tt=b("wasExternallyPaused"),it=b("lastNonZeroAdVolume");t.Player=function(t){function i(i,e,n,s,h){var r;void 0===s&&(s=new i.AdsRenderingSettings),void 0===h&&(h=new E),r=t.call(this)||this,Object.defineProperty(f(r),S,{writable:!0,value:void 0}),Object.defineProperty(f(r),M,{writable:!0,value:void 0}),Object.defineProperty(f(r),x,{writable:!0,value:void 0}),Object.defineProperty(f(r),I,{writable:!0,value:void 0}),Object.defineProperty(f(r),B,{writable:!0,value:void 0}),Object.defineProperty(f(r),L,{writable:!0,value:void 0}),Object.defineProperty(f(r),D,{writable:!0,value:void 0}),Object.defineProperty(f(r),W,{writable:!0,value:void 0}),Object.defineProperty(f(r),_,{writable:!0,value:void 0}),Object.defineProperty(f(r),q,{writable:!0,value:void 0}),Object.defineProperty(f(r),F,{writable:!0,value:void 0}),Object.defineProperty(f(r),N,{writable:!0,value:void 0}),Object.defineProperty(f(r),V,{writable:!0,value:void 0}),Object.defineProperty(f(r),G,{writable:!0,value:void 0}),Object.defineProperty(f(r),Q,{writable:!0,value:!1}),Object.defineProperty(f(r),U,{writable:!0,value:!1}),Object.defineProperty(f(r),z,{writable:!0,value:!1}),Object.defineProperty(f(r),Z,{writable:!0,value:!1}),Object.defineProperty(f(r),$,{writable:!0,value:[]}),Object.defineProperty(f(r),H,{writable:!0,value:void 0}),Object.defineProperty(f(r),J,{writable:!0,value:void 0}),Object.defineProperty(f(r),K,{writable:!0,value:void 0}),Object.defineProperty(f(r),X,{writable:!0,value:void 0}),Object.defineProperty(f(r),Y,{writable:!0,value:void 0}),Object.defineProperty(f(r),tt,{writable:!0,value:!1}),Object.defineProperty(f(r),it,{writable:!0,value:1}),w(f(r),S)[S]=e,w(f(r),M)[M]=n,w(f(r),B)[B]=i,w(f(r),F)[F]=h,w(f(r),I)[I]=s,w(f(r),I)[I].restoreCustomPlaybackStateOnAdBreakComplete=!0,h.disableCustomPlaybackForIOS10Plus&&!w(f(r),S)[S].hasAttribute("playsinline")&&w(f(r),S)[S].setAttribute("playsinline",""),w(f(r),B)[B].settings.setDisableCustomPlaybackForIOS10Plus(h.disableCustomPlaybackForIOS10Plus),w(f(r),L)[L]=new i.AdDisplayContainer(n,h.disableCustomPlaybackForIOS10Plus?void 0:e,h.clickTrackingElement),w(f(r),M)[M].style.display="none",w(f(r),q)[q]=new i.AdsLoader(w(f(r),L)[L]),w(f(r),x)[x]=new k(w(f(r),S)[S]),r.o=r.o.bind(f(r)),R.forEach(function(t){w(f(r),S)[S].addEventListener(t,r.o)}),r.u=r.u.bind(f(r)),w(f(r),q)[q].addEventListener(w(f(r),B)[B].AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,r.u,!1),w(f(r),q)[q].addEventListener(w(f(r),B)[B].AdErrorEvent.Type.AD_ERROR,function(t){r.l(r.v(t))},!1);var o=w(f(r),S)[S],a=o.offsetHeight,u=o.offsetWidth;return w(f(r),W)[W]=u,w(f(r),_)[_]=a,h.autoResize&&window.ResizeObserver&&(w(f(r),N)[N]=new window.ResizeObserver(function(t){return r.m(t)}),w(f(r),N)[N].observe(w(f(r),S)[S])),r}r(i,t);var e=i.prototype;return e.activate=function(){var t=this;if(!w(this,Q)[Q]&&!w(this,z)[z]){if(w(this,z)[z]=!0,w(this,S)[S].paused)try{w(this,S)[S].play().catch(function(){})}catch(t){}w(this,S)[S].pause(),setTimeout(function(){w(t,z)[z]=!1},1),w(this,L)[L].initialize()}},e.playAds=function(t){w(this,B)[B].settings.setAutoPlayAdBreaks(!0),this.p(t),this.activate()},e.loadAds=function(t,i){w(this,B)[B].settings.setAutoPlayAdBreaks(!1),this.p(t,i)},e.p=function(t,i){var e=this;w(this,S)[S].ended&&(w(this,x)[x].reset(),w(this,S)[S].currentTime=0),this.reset().then(function(){w(e,K)[K]=i,t.linearAdSlotWidth=w(e,W)[W],t.linearAdSlotHeight=w(e,_)[_],t.nonLinearAdSlotWidth=w(e,W)[W],t.nonLinearAdSlotHeight=w(e,_)[_],null==t.contentDuration&&(t.contentDuration=-3),w(e,X)[X]=window.setTimeout(function(){var t=new P("No adsManagerLoadedEvent within 5000ms.");t.errorCode=P.ERROR_CODE_ADS_MANAGER_LOADED_TIMEOUT,e.l(t)},5e3),w(e,Y)[Y]=window.setTimeout(function(){var t=new P("No response for ads-request within 10000ms.");t.errorCode=P.ERROR_CODE_REQUEST_ADS_TIMEOUT,e.l(t)},1e4),w(e,q)[q].requestAds(t)})},e.skipAd=function(){w(this,D)[D]&&w(this,D)[D].skip()},e.discardAdBreak=function(){w(this,D)[D]&&w(this,D)[D].discardAdBreak()},e.play=function(){w(this,tt)[tt]=!1,!w(this,x)[x].enabled&&w(this,D)[D]?w(this,D)[D].resume():w(this,S)[S].play()},e.pause=function(){w(this,tt)[tt]=!0,!w(this,x)[x].enabled&&w(this,D)[D]?w(this,D)[D].pause():w(this,S)[S].pause()},e.g=function(t){w(this,$)[$]=[].concat(t),this.dispatchEvent(new g(T.MEDIA_CUE_POINTS_CHANGE,{detail:{cuePoints:[].concat(w(this,$)[$])}}))},e.j=function(t){var i=this.cuePoints.indexOf(t);i>-1&&(w(this,$)[$].splice(i,1),this.g(w(this,$)[$]))},e.resizeAd=function(t,i){w(this,W)[W]=t,w(this,_)[_]=i,w(this,D)[D]&&w(this,D)[D].resize(t,i,this.O()),w(this,M)[M].style.width=t+"px",w(this,M)[M].style.height=i+"px"},e.reset=function(t){var i=this;void 0===t&&(t=!1);var e=this.isCustomPlaybackUsed()&&w(this,D)[D]&&w(this,V)[V]&&w(this,V)[V].isLinear()&&t,n=function(){w(i,D)[D]&&(w(i,D)[D].destroy(),w(i,q)[q].contentComplete(),w(i,D)[D]=void 0)};return t&&(w(this,U)[U]=!1,w(this,Q)[Q]=!1,w(this,Z)[Z]=!1),this.A(),w(this,$)[$]=[],w(this,tt)[tt]=!1,w(this,K)[K]=void 0,e?new Promise(function(t){w(i,D)[D].stop(),w(i,D)[D].discardAdBreak(),w(i,S)[S].addEventListener("canplay",function e(){w(i,S)[S].removeEventListener("canplay",e),n(),setTimeout(function(){return t()},50)})}):(n(),Promise.resolve())},e.destroy=function(){var t=this;this.reset(),w(this,x)[x]&&w(this,x)[x].destroy(),R.forEach(function(i){w(t,S)[S].removeEventListener(i,t.o)}),w(this,q)[q].removeEventListener(w(this,B)[B].AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,this.u,!1),w(this,L)[L].destroy(),w(this,q)[q].destroy(),w(this,U)[U]=!1,w(this,Z)[Z]=!1,w(this,Q)[Q]=!1,w(this,N)[N]&&w(this,N)[N].disconnect()},e.isCustomPlaybackUsed=function(){return!1===w(this,B)[B].settings.getDisableCustomPlaybackForIOS10Plus()&&!w(this,M)[M].querySelector("video")},e.A=function(){window.clearTimeout(w(this,X)[X]),window.clearTimeout(w(this,Y)[Y]),w(this,V)[V]=void 0,w(this,H)[H]=void 0,w(this,J)[J]=void 0,w(this,M)[M].style.display="none",w(this,M)[M].classList.remove("nonlinear"),w(this,D)[D]&&this.k()},e.o=function(t){var i=this;if(w(this,x)[x].enabled||"volumechange"===t.type){if("timeupdate"===t.type){if(w(this,S)[S].currentTime<.5)return;if(w(this,D)[D]){var e=w(this,D)[D].getCuePoints().filter(function(t){return t>=0&&t<w(i,x)[x].currentTime}).pop();this.j(e)}w(this,U)[U]||(this.dispatchEvent(new g(T.MEDIA_IMPRESSION)),w(this,U)[U]=!0)}if("play"!==t.type||w(this,Q)[Q]||(this.dispatchEvent(new g(T.MEDIA_START)),w(this,Q)[Q]=!0),"ended"===t.type&&(this.isCustomPlaybackUsed()&&w(this,S)[S].currentTime===w(this,S)[S].duration&&w(this,$)[$].indexOf(-1)>-1&&(w(this,S)[S].currentTime=w(this,S)[S].duration-1e-5,w(this,Z)[Z]=!0),w(this,q)[q].contentComplete(),w(this,D)[D]||this.C()),!window.ResizeObserver&&w(this,F)[F].autoResize&&"loadedmetadata"===t.type){var n=w(this,S)[S],s=n.offsetHeight,h=n.offsetWidth;w(this,W)[W]=h,w(this,_)[_]=s,this.k()}w(this,z)[z]&&"volumechange"!==t.type||this.dispatchEvent(new g(t.type))}},e.R=function(t){var i=this,e=w(this,B)[B].AdEvent;switch(t.type){case e.Type.LOADED:var n=t.getAd();w(this,K)[K]&&0===w(this,$)[$].length?w(this,K)[K]({ad:n,start:function(){i.T(),w(i,K)[K]=void 0},startWithoutReset:function(){i.T()}}):w(this,G)[G]=n;break;case e.Type.AD_BREAK_READY:this.A(),w(this,K)[K]?(w(this,K)[K]({ad:w(this,G)[G],adBreakTime:t.getAdData().adBreakTime,start:function(){i.T(),w(i,K)[K]=void 0},startWithoutReset:function(){i.T()}}),w(this,G)[G]=void 0):this.T();break;case e.Type.STARTED:var s=w(this,V)[V]=t.getAd();s.getAdPodInfo().getAdPosition()>1&&w(this,D)[D].setVolume(w(this,D)[D].getVolume()),w(this,M)[M].classList.remove("nonlinear"),this.k(),s.isLinear()?(w(this,x)[x].disable(),w(this,J)[J]=s.getDuration(),w(this,H)[H]=0):(w(this,M)[M].classList.add("nonlinear"),this.P()),w(this,M)[M].style.display="",w(this,tt)[tt]&&(w(this,tt)[tt]=!1,w(this,D)[D].pause());break;case e.Type.ALL_ADS_COMPLETED:if(w(this,Z)[Z])return;this.isCustomPlaybackUsed()&&Boolean(w(this,V)[V])&&-1!==w(this,V)[V].getAdPodInfo().getTimeOffset()&&this.P(),this.reset();break;case e.Type.CONTENT_PAUSE_REQUESTED:this.A(),w(this,V)[V]=t.getAd(),w(this,M)[M].style.display="",w(this,S)[S].pause(),this.k(),w(this,V)[V]&&this.j(w(this,V)[V].getAdPodInfo().getTimeOffset()),w(this,D)[D].setVolume(w(this,S)[S].muted?0:w(this,S)[S].volume),w(this,x)[x].disable(),w(this,J)[J]=w(this,V)[V].getDuration(),w(this,H)[H]=0;break;case e.Type.CONTENT_RESUME_REQUESTED:var h=Boolean(w(this,V)[V]);if(h){var r=w(this,D)[D].getVolume();w(this,S)[S].muted=0===r,w(this,S)[S].volume=w(this,it)[it]}w(this,Z)[Z]&&(w(this,S)[S].currentTime=w(this,S)[S].duration+1,w(this,Z)[Z]=!1),w(this,S)[S].ended?(this.reset(),this.C()):this.A(),h&&this.P();break;case e.Type.AD_METADATA:this.g(w(this,D)[D].getCuePoints()),-1===w(this,$)[$].indexOf(0)&&(w(this,K)[K]?w(this,K)[K]({start:function(){i.P(),w(i,K)[K]=void 0},startWithoutReset:function(){i.P()}}):this.P());break;case e.Type.AD_PROGRESS:var o=t.getAdData();w(this,H)[H]=o.currentTime,w(this,J)[J]=o.duration;break;case e.Type.LOG:var a=t.getAdData();w(this,K)[K]?w(this,K)[K]({start:function(){i.P(),w(i,K)[K]=void 0},startWithoutReset:function(){i.P()}}):a.adError&&!w(this,V)[V]&&this.P();break;case e.Type.VOLUME_CHANGED:var u=w(this,D)[D].getVolume();u>0&&(w(this,it)[it]=u)}},e.u=function(t){var i=this,e=w(this,B)[B],n=e.AdEvent,s=e.AdErrorEvent.Type.AD_ERROR;window.clearTimeout(w(this,X)[X]);var h=w(this,D)[D]=t.getAdsManager(w(this,x)[x],w(this,I)[I]);Object.keys(n.Type).forEach(function(t){h.addEventListener(n.Type[t],function(e){if(i.R(e),T[t]){var n=["LOG","AD_PROGRESS"].indexOf(t)>-1;i.dispatchEvent(new g(T[t],{detail:{ad:e.getAd()||w(i,V)[V],adData:n?e.getAdData():{}}}))}})}),h.addEventListener(s,function(t){return i.l(i.v(t))});try{h.init(w(this,W)[W],w(this,_)[_],this.O()),h.setVolume(w(this,S)[S].muted?0:w(this,S)[S].volume),w(this,L)[L].initialize(),w(this,K)[K]||this.T()}catch(t){this.l(new P(t.message))}},e.T=function(){if(w(this,Q)[Q]||(this.dispatchEvent(new g(T.MEDIA_START)),w(this,Q)[Q]=!0),w(this,D)[D])try{w(this,D)[D].start()}catch(t){this.l(new P(t.message))}else this.P()},e.C=function(){var t=this;setTimeout(function(){w(t,U)[U]=!1,w(t,Q)[Q]=!1,w(t,Z)[Z]=!1,t.dispatchEvent(new g(T.MEDIA_STOP))},1)},e.m=function(t){for(var i,e=function(t,i){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,i){if(t){if("string"==typeof t)return l(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,i):void 0}}(t))){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(i=e()).done;){var n=i.value;n.contentBoxSize&&1===n.contentBoxSize.length?(w(this,W)[W]=n.contentBoxSize[0].inlineSize,w(this,_)[_]=n.contentBoxSize[0].blockSize):n.contentBoxSize&&n.contentBoxSize.inlineSize?(w(this,W)[W]=n.contentBoxSize.inlineSize,w(this,_)[_]=n.contentBoxSize.blockSize):(w(this,W)[W]=n.contentRect.width,w(this,_)[_]=n.contentRect.height)}this.k()},e.k=function(){if(w(this,F)[F].autoResize&&w(this,D)[D]){var t=w(this,V)[V],i=this.O();t&&!t.isLinear()?t&&(t.getWidth()>w(this,W)[W]||t.getHeight()>w(this,_)[_]?this.resizeAd(w(this,W)[W],w(this,_)[_]):(w(this,D)[D].resize(t.getWidth(),t.getHeight()+20,i),w(this,M)[M].style.width=t.getWidth()+"px",w(this,M)[M].style.height=t.getHeight()+20+"px")):this.resizeAd(w(this,W)[W],w(this,_)[_])}},e.O=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||w(this,S)[S].webkitDisplayingFullscreen?w(this,B)[B].ViewMode.FULLSCREEN:w(this,B)[B].ViewMode.NORMAL},e.P=function(){w(this,M)[M].style.display="none",w(this,S)[S].ended||(w(this,x)[x].enable(),w(this,tt)[tt]?(w(this,S)[S].pause(),this.dispatchEvent(new g("pause"))):(w(this,S)[S].play(),this.dispatchEvent(new g("play")),this.dispatchEvent(new g(T.MEDIA_RESUMED))),w(this,tt)[tt]=!1)},e.v=function(t){var i=t.getError(),e=new P(i.getMessage());return e.type=i.getType(),e.errorCode=i.getErrorCode(),e.vastErrorCode=i.getVastErrorCode&&i.getVastErrorCode(),e.innerError=i.getInnerError(),e},e.l=function(t){var i=this;this.dispatchEvent(new g(T.AD_ERROR,{detail:{error:t}})),this.A(),w(this,K)[K]?w(this,K)[K]({start:function(){i.P(),w(i,K)[K]=void 0},startWithoutReset:function(){i.P()}}):this.P()},s(i,[{key:"volume",get:function(){return!w(this,x)[x].enabled&&w(this,D)[D]?w(this,D)[D].getVolume():w(this,S)[S].volume},set:function(t){!w(this,x)[x].enabled&&w(this,D)[D]&&w(this,D)[D].setVolume(t),w(this,S)[S].volume=t}},{key:"muted",get:function(){return!w(this,x)[x].enabled&&w(this,D)[D]?0===w(this,D)[D].getVolume():w(this,S)[S].muted},set:function(t){!w(this,x)[x].enabled&&w(this,D)[D]&&w(this,D)[D].setVolume(t?0:w(this,it)[it]),w(this,S)[S].muted=t}},{key:"currentTime",get:function(){return void 0!==w(this,H)[H]?w(this,H)[H]:w(this,S)[S].currentTime},set:function(t){w(this,x)[x].enabled&&(w(this,S)[S].currentTime=t)}},{key:"duration",get:function(){return void 0!==w(this,J)[J]?w(this,J)[J]:w(this,S)[S].duration}},{key:"cuePoints",get:function(){return[].concat(w(this,$)[$])}}]),i}(C),t.PlayerError=P,t.PlayerEvent=T,t.PlayerOptions=E,t.loadImaSdk=function(){var t=window;return t.google&&t.google.ima?Promise.resolve(t.google.ima):i||((i=new Promise(function(t,i){var e=document.createElement("script");e.async=!0,e.src="https://imasdk.googleapis.com/js/sdkloader/ima3.js",e.onload=t,e.onerror=i,document.body.appendChild(e)}).then(function(){return t.google.ima})).then(e).catch(e),i)}});
//# sourceMappingURL=vast-ima-player.umd.js.map
