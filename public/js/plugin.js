/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;/**
 * turn.js
 * turnjs.com
 *
 * Copyright (C) 2012 Emmanuel Garcia
 * MIT Licensed
 *
 **/

(function($) {

var pi = Math.PI,

	a90 = pi/2,

	has3d = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()),

	isTouch = 'Touch' in window,

	// Contansts used for defining each corner
	// tl *** tr
	// *       *
	// bl *** br

	corners = {
		backward: ['bl', 'tl'],
		forward: ['br', 'tr'],
		all: ['tl', 'bl', 'tr', 'br']
	},

	// Default options used by turn

	turnOptions = {

		// First page

		page: 1,
		
		// Enables shadows (Only available for desktops)

		shadows: true,

		// Duration of transition in milliseconds

		duration: 600,

		// Enables hardware acceleration

		acceleration: true
	},

	// Default options used by flip

	flipOptions = {

		// Back page
		
		back: null,

		// Corners allowed
		// backward: Activates both tl and bl corners
		// forward: Activates both tr and br corners
		// all: Activates all the corners

		corners: 'forward',
		
		// Size of the active zone of each corner

		cornerSize: 100,

		// Enables shadows (Only available for desktops)

		shadows: true,

		// Duration of transition in milliseconds

		duration: 600,

		// Enables hardware acceleration

		acceleration: true
	},
	
	// Gets basic attributes for a layer

	divAtt = function(top, left, zindex, overf) {
		return {'css': {
					position: 'absolute',
					top: top,
					left: left,
					overflow: overf || 'hidden',
					'z-index': zindex || 'auto'
					}
			};
	},

	// Gets the 2D point from a bezier curve of four points
	// This function is called in order to interpolate the position of the piece of page.

	bezier = function(p1, p2, p3, p4, t) {
		var mum1 = 1 - t,
			mum13 = mum1 * mum1 * mum1;
			mu3 = t * t * t;

		return P(Math.round(mum13*p1.x + 3*t*mum1*mum1*p2.x + 3*t*t*mum1*p3.x + mu3*p4.x),
				 Math.round(mum13*p1.y + 3*t*mum1*mum1*p2.y + 3*t*t*mum1*p3.y + mu3*p4.y));
	},
	
	// Converts an angle from degrees to radians

	rad = function(a) {
		return a/180*pi;	
	},

	// Converts an angle from radians to degrees

	deg = function(rad) {
		return rad/pi*180;	
	},

	// Gets a 2D point

	P = function(x, y) {
		return {x: x, y: y};	
	},


	translate = function(x, y, a) {
		return (has3d && a) ? ' translate3d(' + x + 'px,' + y + 'px, 0px) ' : ' translate(' + x + 'px, ' + y + 'px) ';
	},

	rotate = function(r) {
		return ' rotate(' + r + 'deg) ';	
	},

	
// Methods and properties for turn
// Methods or properties name started by underscore are private

turnMethods = {

	init: function(opt) {

		var p, pair, d = this.data(), ch = this.children(), l = ch.length;

	
		opt = $.extend({width: this.width(), height: this.height()}, turnOptions, opt);
		d.opt = opt;
		d.pageObjs = {}
		d.pages = {};
		d.pageWrap = {};
		d.pagePlace  = {};
		d.pageMv    = [];
		d.totalPages = l;

	
		this.css({position: 'relative'});

		// This will avoid the blue screen in webkit-based browsers caused by hardware acceleration

		if (has3d && !isTouch && opt.acceleration)
			this.transform(translate(0, 0, true));


		for (p = 1; p <= l; p++) {
			d.pagePlace[p] = p;
			d.pageObjs[p] = $(ch[p-1]).addClass('turn-page p'+p);
			d.pageWrap[p] = $('<div/>', {'class': 'turn-page-wrapper', css: {position: 'absolute'}}).
					attr('page', p).
						appendTo(this).
							prepend(d.pageObjs[p]);
		}

		for (p = 1; p <= l; p++) {
			pair = p%2==0;
			d.pages[p] = d.pageWrap[p].
				css((pair) ? {top: 0, left: 0} : {top: 0, right: 0}).
					children(':first').
						flip({
							next: (pair) ? p-1 : p+1,
							page : p,
							turn: this,
							duration: opt.duration,
							acceleration : opt.acceleration,
							corners: (pair) ? 'backward' : 'forward',
							back: (pair) ? d.pageObjs[p-1] : d.pageObjs[p+1],
							backShadow: opt.shadows && p!=2 && p!=l-1,
							frontShadow: opt.shadows
							}).bind('pressed', turnMethods._pressed).
								bind('released', turnMethods._released).
										bind('start', turnMethods._start).
											bind('end', turnMethods._end).
												bind('flip', turnMethods._flip);

		}

		turnMethods.page.call(this, opt.page);

		d.done = true;

		this.turn('size', opt.width, opt.height);

		return this;

	},

	size: function(width, height) {

		if (width && height) {

			var d = this.data(), pageWidth = width/2, p;

			this.css({width: width, height: height});
			
			for (p = 1; p <= d.totalPages; p++) {
				d.pageWrap[p].css({width: pageWidth, height: height});
				if (d.pages[p])
					d.pages[p].css({width: pageWidth, height: height});
			}

			this.turn('resize');

			return this;

		} else {
			
			return {width: this.width(), height: this.height()};

		}	
	},

	_visiblePages: function(page) {
	
		var page = page || this.data().page;
		return (page%2==0) ? [page, page+1] : [page-1, page];

	},

	_removeMv: function(page) {
	
		var i, d = this.data();
			
		for (i=0; i<d.pageMv.length; i++) {
			if (d.pageMv[i]==page) {
				d.pageMv.splice(i, 1);
				i--;
			}
		}
	},
	
	_addMv: function(page) {

		var d = this.data();
		turnMethods._removeMv.call(this, page);
		d.pageMv.push(page);

	},

	view: function(page) {

		var  d = this.data(), v = turnMethods._visiblePages.call(this, page);
		return [(d.pages[v[0]]) ? v[0] : 0, (d.pages[v[1]]) ? v[1] : 0];

	},

	stop: function() {
	
		var d = this.data(), p;

		d.pageMv = [];

		if (d.tpage) {
			d.page = d.tpage;
			delete d['tpage'];
		}

		this.turn('update');

		for (p=1; p<=d.totalPages; p++) {
			var dd = d.pages[p].data(), o = dd.pageFlip.opt;
			d.pages[p].flip('hideThumbIndex');
			flipMethods._moveBackPage.call(d.pages[p], null);
			d.pagePlace[o.next] = o.next;

			if (o.force) {
				o.next = (o.page%2==0) ? o.page-1 : o.page+1;
				d.pages[p].flip('setBackPage', d.pageObjs[o.next]);
				delete o['force'];
			}
		}

		return this;
	},

	page: function(page) {
	
		var d = this.data(), view = this.turn('view');

		if (pg = d.pages[page]) {

			if ( !d.done || (!view[0] || page>=view[0]) && (!view[1] || page<=view[1])) {

				d.tpage = page;
				this.turn('stop');

				this.trigger('turned', [page, pg]);

			} else {
				
				d.tpage = page;

				this.turn('stop');
			
				var current, next, newView = this.turn('view', page);

				if (view[1] && page>view[1]) {
					current = view[1];
					next = newView[0];
				} else if (view[0] && page<view[0]) {
					current = view[0];
					next = newView[1];
				}

				var o = d.pages[current].data().pageFlip.opt, p;

				d.tpage =  next;

				if (o.next!=next) {
					o.next = next; 
					d.pagePlace[o.next] = o.page;
					o.force = true;
					flipMethods._moveBackPage.call(d.pages[current], false);
					d.pages[current].flip('setBackPage', d.pageObjs[next]);
				}

					d.pages[current].flip('turnPage');

			}
		
		} else 
			return view[0] || view[1];

		return this;

	},

	next: function() {

		turnMethods._moveTo.call(this, 1);

		return this;
	
	},

	previous: function() {

		turnMethods._moveTo.call(this, -1);

		return this;

	},

	_moveTo: function(direction) {

		var i,
			d = this.data(),
			page = turnMethods._visiblePages.call(this, d.tpage || d.page)[(direction==1) ? 1 : 0],
			prev = page + direction,
			data = function(p) { return d.pages[p].data().pageFlip; };

		for (i=0; i<d.pageMv.length; i++) {
		 	if (data(d.pageMv[i]).opt.force){
				this.turn('stop');
				break;
		 	}
		}
	
		if (d.pages[prev]) {
			if (d.pages[prev])
				if (d.pages[prev].flip('moving') || d.pagePlace[page]==prev) {

					var o = data(prev).opt;

					turnMethods._removeMv.call(this, o.pageMv);
					turnMethods._addMv.call(this, page);

					d.tpage = prev;
					o.pageMv = page;
				
		
					d.pages[prev].flip('hideThumbIndex', true);
					d.pages[page].trigger('flip');
					this.turn('update');

				} else {

					d.tpage = prev;
					
					if (data(page).fwrapper.is(":visible")) {
						var o = data(page).opt;
						turnMethods._removeMv.call(this, o.pageMv);
						turnMethods._addPage.call(d.pages[page]);
					}

					d.pages[page].flip('turnPage');
				}
			}
				
	},

	_addPage: function() {

		var o = $(this).data().pageFlip.opt,
			turn = o.turn,
			dd = turn.data();

		o.pageMv = o.page;

		turnMethods._addMv.call(turn, o.pageMv);
		dd.pagePlace[o.next] = o.page;
		turn.turn('update');

	},

	_start: function(e) {
	
		var o = $(this).data().pageFlip.opt;
		e.stopPropagation();

		turnMethods._addPage.call(this);

		o.turn.trigger('start', [o.page]);

	}, 

	_end: function(e, turned) {
	
		e.stopPropagation();

		var that = $(this),
			o = that.data().pageFlip.opt, 
			turn = o.turn,
            dd = turn.data();


        if (turned || dd.tpage) {

       		if (dd.tpage==o.next || dd.pageMv.length==0) { 
      
         		dd.page = dd.tpage || o.next;
         		delete dd['tpage'];
         		turn.turn('page', dd.page);

         	}

         	if (o.force) {

         		o.next = (o.page%2==0) ? o.page-1 : o.page+1;
         		that.flip('setBackPage', turn.data().pageObjs[o.next]);
         		delete o['force'];

         	}

         } else {
         	turnMethods._removeMv.call(turn, o.pageMv);
         	turn.turn('update');
         }

        // console.trace();
		turn.trigger('end', [o.page, this]);
	
	},

	resize: function() {

		var d = this.data();

		for (p = 1; p <= d.totalPages; p++)
			d.pages[p].flip('resize', true);

	},

	calculateZ: function(mv) {

		var that = this,
			d = this.data(),
			page,
			nextPage,
			placePage,
			dpage,
			z,
			minZ =  d.totalPages,
			pagesMoving = mv.length,
		 	r = {pageZ: {}, partZ: {}, pageV: {}},

			next = function(pg) {
				return pg.data().pageFlip.opt.next;
			},

			addView = function(pg) {
				var view = that.turn('view', pg);
				if (view[0]) r.pageV[view[0]] = true;
				if (view[1]) r.pageV[view[1]] = true;
			};

		var view = this.turn('view'), pp = view[0] || view[1];

		for (var i = 0; i < pagesMoving; i++) {

			page = mv[i];
			nextPage = next(d.pages[page]);
			placePage = d.pagePlace[page];

			addView(page);
			addView(nextPage);

			dpage = (d.pagePlace[nextPage]==nextPage) ? nextPage : page;

			z = d.totalPages - Math.abs(pp-dpage);

			r.pageZ[dpage] = z;
			r.partZ[placePage] = d.totalPages*2 + Math.abs(pp-dpage);

			if (dpage%2!=0 && d.pages[dpage-1]) {
				z = z - (pagesMoving-1);
				r.pageZ[dpage-1] = z;
			} else if (dpage%2==0 && d.pages[dpage+1]) {
				z = z - (dpage-1);
				r.pageZ[dpage+1] = z;
			}

			if (z<minZ) minZ = z;

		}

		for (var pg in r.pageV) {
			if (!r.pageZ[pg]) {
				r.pageZ[pg] = --minZ;
			}
		}

		return r;
	},

	update: function() {

		var p, d = this.data();

		if (d.pageMv.length) {

			// Update motion

			var pos = this.turn('calculateZ', d.pageMv), view = this.turn('view', d.tpage), apage;

			if (d.pagePlace[view[0]]==view[0]) apage = view[0];
			else if (d.pagePlace[view[1]]==view[1]) apage = view[1];

        	for (p = 1; p <= d.totalPages; p++) { 

        		d.pageWrap[p].css({display: (pos.pageV[p]) ? '' : 'none', 'z-index': pos.pageZ[p] || 0});
        		d.pages[p].flip('z', pos.partZ[p] || null);

        		if (pos.pageV[p])
					d.pages[p].flip('resize');

        		if (d.tpage)
        			d.pages[p].flip('disable', p!=apage);
        	}
		
		} else {
        	
        	// Update static pages 

			var isFront, view = this.turn('view');

			for (p = 1; p <= d.totalPages; p++) {

				if (isFront = (p==view[0] || p==view[1]))
					d.pageWrap[p].css({'z-index': d.totalPages, display: ''});
				else if(p==view[0]-2 || p==view[1]+2)
					d.pageWrap[p].css({'z-index': d.totalPages-1, display: ''});
				else 
					d.pageWrap[p].css({'z-index': 0, display: 'none'});
			
				d.pages[p].flip('z', null);
				d.pages[p].flip('disable', !isFront);
			}

		}

	},

	_pressed: function() {

		var p, 
			that = $(this),
			d = that.data().pageFlip, 
			turn = d.opt.turn,
			page = d.opt.page,
			pages = turn.data().pages;
	
		for (p in pages)
			if (p!=page)
				pages[p].flip('disable', true);

		return this.time = new Date().getTime();

	},

	_released: function(e, p) {

		var that = $(this),
			dtime = new Date().getTime() - this.time,
			d = that.data().pageFlip;

		if (dtime<200 || p.x<0 || p.x>$(this).width()) {
			e.stopPropagation();
			d.opt.turn.data().tpage = d.opt.next;
			d.opt.turn.turn('update');
			$(that).flip('turnPage');
		}

	},

	_flip: function() {

		var o = $(this).data().pageFlip.opt;

		o.turn.trigger('turning', [o.next]);

	},

	disable: function(bool) {

		var d = this.data(),
			bool = (typeof(bool)=='undefined') ? true : bool===true;

		for (p = 1; p <= d.totalPages; p++) 
        	d.pages[p].flip('disable', bool);

	}
},


// Methods and properties for the flip page effect

flipMethods = {

	// Constructor

	init: function(opt) {

		if (opt.shadows) {
			opt.frontShadow = true;
			opt.backShadow = true;
		}

		flipMethods.setData.call(this, {opt: $.extend({}, flipOptions, opt) });
		flipMethods._addEvents.call(this);
		flipMethods._addPageWrapper.call(this);

		return this;
	},
	
	setData: function(data) {
		
		var d = this.data();
		d.pageFlip = $.extend(d.pageFlip||{}, data);

	},

	// Detects which corner was activated, this event is called right after mousedown

	_cAllowed: function() {
		
		return corners[this.data().pageFlip.opt.corners] || this.data().pageFlip.opt.corners;

	},

	_cornerActivated: function(e) {
	
		e = (isTouch) ? e.originalEvent.touches : [e];

		var corner,
			d = this.data().pageFlip,
			pos = d.parent.offset(),
			width = this.width(), 
			height = this.height(), 
			x = Math.max(0, e[0].pageX-pos.left), 
			y = Math.max(0, e[0].pageY-pos.top), 
			csz = d.opt.cornerSize,
			cAllowed = flipMethods._cAllowed.call(this);

			if (!d.opt.back || x<=0 || y<=0 || x>=width || y>=height) corner = false;
			else if (x<=csz && y<=csz) corner = 'tl';
			else if (x>=width-csz && y<=csz) corner = 'tr';
			else if (x<=csz && y>=height-csz) corner = 'bl';
			else if (x>=width-csz && y>=height-csz) corner = 'br';
			else return false;

		return (jQuery.inArray(corner, cAllowed)!=-1) ? {corner: corner, x: x, y: y} : false;

	},

	_c: function(corner, o) {

		o = o || 0; 
		return ({tl: P(o, o), tr: P(this.width()-o, o), bl: P(o, this.height()-o), br: P(this.width()-o, this.height()-o)})[corner];

	},

	_c2: function(corner) {

		return {tl: P(this.width()*2, 0), tr: P(-this.width(), 0), bl: P(this.width()*2, this.height()), br: P(-this.width(), this.height())}[corner];

	},


    z: function(z) {
   		
   		var d = this.data().pageFlip;
        d.opt['z-index'] = z;
        d.fwrapper.css({'z-index': z || parseInt(d.parent.css('z-index')) || 0});

    },

	resize: function(full) {
        var d = this.data().pageFlip,
        	width = this.width(),
        	height = this.height(),
        	size = Math.round(Math.sqrt(Math.pow(width, 2)+Math.pow(height, 2)));

        if (full) {
        	d.wrapper.css({width: size, height: size});

        	d.fwrapper.css({width: size, height: size}).
        		children(':first-child').
        			css({width: width, height: height});

        	d.fpage.css({width: height, height: width});

        	if (d.opt.frontShadow)
        		d.ashadow.css({width: height, height: width});
        	
        	if (d.opt.backShadow)
        		d.bshadow.css({width: width, height: height});
        }

        if (d.parent.is(':visible')) {
    		d.fwrapper.css({top: d.parent.offset().top,
    						left: d.parent.offset().left});

    		if (d.opt.turn)
    			d.fparent.css({top: -d.opt.turn.offset().top, left: -d.opt.turn.offset().left});
        }
       
         this.flip('z', d.opt['z-index']);

	},
    
    // Prepares the page by adding a general wrapper and another objects

	_addPageWrapper: function() {

		var att,
			d = this.data().pageFlip, 
			parent = this.parent();

		if (!d.wrapper) {

			var left = this.css('left'),
				top = this.css('top'),
				width = this.width(),
				height = this.height(),
				size = Math.round(Math.sqrt(Math.pow(width, 2)+Math.pow(height, 2)));
			

			d.parent = parent;
			d.fparent = (d.opt.turn) ? d.opt.turn.data().fparent : $('#turn-fwrappers');

			if (!d.fparent) {
				var fparent = $('<div/>').hide();
					fparent.data().flips = 0;

				if (d.opt.turn) {
					fparent.css(divAtt(-d.opt.turn.offset().top, -d.opt.turn.offset().left, 'auto', 'visible').css).appendTo(d.opt.turn);
					d.opt.turn.data().fparent = fparent;
				} else {
					fparent.css(divAtt(0, 0, 'auto', 'visible').css).attr('id', 'turn-fwrappers').appendTo($('body'));
				}

				d.fparent = fparent;
			}
		

			this.css({position: 'absolute', top: 0, left: 0, bottom: 'auto', right: 'auto'});

			d.wrapper = $('<div/>', divAtt(0, 0, this.css('z-index'))).
								appendTo(parent).
									prepend(this);

			d.fwrapper = $('<div/>', divAtt(parent.offset().top, parent.offset().left)).
								hide().
									appendTo(d.fparent);

			d.fpage = $('<div/>', {css: {cursor: 'default'}}).
					appendTo($('<div/>', divAtt(0, 0, 0, 'visible')).
								appendTo(d.fwrapper));

			if (d.opt.frontShadow)
				d.ashadow = $('<div/>', divAtt(0, 0,  1)).
					appendTo(d.fpage);

			if (d.opt.backShadow)
				d.bshadow = $('<div/>', divAtt(0, 0, 1)).
					css({'position': ''}).
						appendTo(parent);
			
			// Save data

			flipMethods.setData.call(this, d);

			// Set size
			flipMethods.resize.call(this, true);
		}

	},

	_displayCorner: function(p) {


		var that = this,
			a = 0,
			alpha = 0,
			beta,
			px,
			gradientEndPointA,
			gradientEndPointB,
			gradientStartV,
			gradientOpacity,
			mv = P(0, 0),
			df = P(0, 0),
			tr = P(0, 0),
			width = this.width(),
			height = this.height(),
			tan = Math.tan(alpha),
			d = this.data().pageFlip,
			ac = d.opt.acceleration,
			h = d.wrapper.height(),
			o = flipMethods._c.call(this, p.corner),
			top = p.corner.substr(0, 1) == 't',
			left = p.corner.substr(1, 1) == 'l',

			compute = function() {
				var rel = P((o.x) ? o.x - p.x : p.x, (o.y) ? o.y - p.y : p.y),
				    tan = (Math.atan2(rel.y, rel.x)), 
					middle;
			
				alpha = a90 - tan;
				a = deg(alpha);
				middle = P((left) ? width - rel.x/2 : p.x + rel.x/2, rel.y/2);

				var gamma = alpha - Math.atan2(middle.y, middle.x), 
					distance =  Math.max(0, Math.sin(gamma) * Math.sqrt(Math.pow(middle.x, 2) + Math.pow(middle.y, 2)));

					tr = P(distance * Math.sin(alpha), distance * Math.cos(alpha));

					if (alpha > a90) {
					
						tr.x = tr.x + Math.abs(tr.y * Math.tan(tan));
						tr.y = 0;

						if (Math.round(tr.x*Math.tan(pi-alpha)) < height) {

							p.y = Math.sqrt(Math.pow(height, 2)+2 * middle.x * rel.x);
							if (top) p.y =  height - p.y;
							return compute();

						}
					}
			

				px = Math.round(tr.y/Math.tan(alpha) + tr.x);
				if (left) px =  width - px;

				var side = (left) ? px : width - px, 
					sideX = side*Math.cos(alpha*2), sideY = side*Math.sin(alpha*2),
					gradientSize = side*Math.sin(alpha),
					endingPoint = flipMethods._c2.call(that, p.corner),
					far = Math.sqrt(Math.pow(endingPoint.x-p.x, 2)+Math.pow(endingPoint.y-p.y, 2));
					df = P(Math.round(px + (left ? -sideX : sideX)), Math.round((top) ? sideY : height - sideY));
				
					gradientOpacity = (far<width) ? far/width : 1;

				if (alpha>a90) {
				
					var beta = pi-alpha, dd = h - height/Math.sin(beta);
					mv = P(Math.round(dd*Math.cos(beta)), Math.round(dd*Math.sin(beta)));
					if (left) mv.x = - mv.x;
					if (top) mv.y = - mv.y;

				}
				
				if (d.opt.frontShadow) {

					gradientStartV = gradientSize>100 ? (gradientSize-100)/gradientSize : 0;
					gradientEndPointA = P(gradientSize*Math.sin(a90-alpha)/height*100, gradientSize*Math.cos(a90-alpha)/width*100);
				
					if (top) gradientEndPointA.y = 100-gradientEndPointA.y;
					if (left) gradientEndPointA.x = 100-gradientEndPointA.x;
				}

				if (d.opt.backShadow) {

					gradientEndPointB = P(gradientSize*Math.sin(alpha)/width*100, gradientSize*Math.cos(alpha)/height*100);
					if (!left) gradientEndPointB.x = 100-gradientEndPointB.x;
					if (!top) gradientEndPointB.y = 100-gradientEndPointB.y;
				}

				tr.x = Math.round(tr.x);
				tr.y = Math.round(tr.y);

				return true;
			},

			transform = function(tr, c, x, a) {
			
				var f = ['0', 'auto'], mvW = (width-h)*x[0]/100, mvH = (height-h)*x[1]/100, x = x[0] + '% ' + x[1] + '%',
					v = {left: f[c[0]], top: f[c[1]], right: f[c[2]], bottom: f[c[3]]};

				that.css(v).transform(rotate(a) + translate(tr.x, tr.y, ac), x);

				d.fpage.parent().css(v);
				d.wrapper.transform(translate(-tr.x + mvW, -tr.y + mvH, ac) + rotate(-a), x);

				d.fwrapper.transform(translate(-tr.x + mv.x + mvW, -tr.y + mv.y + mvH, ac) + rotate(-a), x);
				d.fpage.parent().transform(rotate(a) + translate(tr.x + df.x - mv.x, tr.y + df.y - mv.y, ac), x);

				if (d.opt.frontShadow)
					d.ashadow.css({'background-image':
									'-webkit-gradient(linear, ' + (left?100:0)+'% '+(top?100:0)+'%, ' + gradientEndPointA.x + '% ' + gradientEndPointA.y + '%, color-stop(' + gradientStartV + ',rgba(0,0,0,0)), color-stop(' + (((1-gradientStartV)*0.8)+gradientStartV) + ',rgba(0,0,0,'+(0.2*gradientOpacity)+')), to(rgba(255,255,255,'+(0.2*gradientOpacity)+')) )'});
			
		
				if (d.opt.backShadow)
					d.bshadow.css({'background-image': 
									'-webkit-gradient(linear, ' + (left?0:100)+'% '+(top?0:100)+'%, ' + gradientEndPointB.x + '% ' + gradientEndPointB.y + '%,  color-stop(0.8,rgba(0,0,0,0)), color-stop(1, rgba(0,0,0,'+(0.2*gradientOpacity)+')), to(rgba(0,0,0,0)) )'});

			};


		switch (p.corner) {
			case 'tl' :
				p.x = Math.max(p.x, 1);

				compute();

				transform(tr, [1,0,0,1], [100, 0], a);
				d.fpage.transform(translate(-height, -width, ac) + rotate(90-a*2) , '100% 100%');
				d.opt.back.transform(rotate(90) + translate(0, -height, ac), '0% 0%');

			break;
			case 'tr' :
				p.x = Math.min(p.x, width-1);

				compute();

				transform(P(-tr.x, tr.y), [0,0,0,1], [0, 0], -a);
				d.fpage.transform(translate(0, -width, ac) + rotate(-90+a*2) , '0% 100%');
				d.opt.back.transform(rotate(270) + translate(-width, 0, ac), '0% 0%');

			break;
			case 'bl' :
				p.x = Math.max(p.x, 1);

				compute();

				transform(P(tr.x, -tr.y), [1,1,0,0], [100, 100], -a);
				d.fpage.transform(translate(-height, 0, ac) + rotate(-90+a*2 ), '100% 0%');
				d.opt.back.transform(rotate(270) + translate(-width, 0, ac), '0% 0%');

			break;
			case 'br' :
				p.x = Math.min(p.x, width-1);
				
				compute();

				transform(P(-tr.x, -tr.y), [0,1,1,0], [0, 100], a);
				d.fpage.transform(rotate(90-a*2), '0% 0%');
				d.opt.back.transform(rotate(90) + translate(0, -height, ac), '0% 0%');

			break;
		}

		d.p = p;
	
	},

	setBackPage: function(back) {

		var d = this.data().pageFlip;
		d.opt.back = back;
		d.backParent = back.parent();

	},

	_moveBackPage: function(bool) {

		var d = this.data().pageFlip;

		if (d.opt.back) {

			// Chrome 17-18 beta bug
			// http://code.google.com/p/chromium/issues/detail?id=114617

			var user = navigator.userAgent;

			if (user.indexOf('Chrome/17.')!=-1 || user.indexOf('Chrome/18.')!=-1) {
				var bg = d.opt.back.css('background-image');
				d.opt.back.css({'background-image': ''}).css({'background-image': bg});
			}
			// end

			if (bool) {
				if (!( (d.ashadow? '1' : '0') in d.fpage.children())) {
					flipMethods.setData.call(this, {backParent: d.opt.back.parent() });
					d.fpage.prepend(d.opt.back);
				}
			} else {
				if (d.backParent)
					d.backParent.prepend(d.opt.back);

			}
		}	

	},

	_showThumbIndex: function(c, interpolate) {

		var dd = this.data(),
			d = dd.pageFlip;

		if (d.opt.back) {

			if (interpolate) {

				var that = this, p = d.p || flipMethods._c.call(this, c.corner, 1);

				this.animatef({from: [p.x, p.y], to:[c.x, c.y], duration: 500, frame: function(v) { 
					flipMethods._displayCorner.call(that, {corner: c.corner, x: v[0], y: v[1]});
				}});

			} else	{

				flipMethods._displayCorner.call(this, c);
				if (dd.effect && !dd.effect.turning)
					this.animatef(false);

			}


			if (!d.fwrapper.is(':visible')) {
				d.fparent.show().data().flips++;

				flipMethods._moveBackPage.call(this, true);
				d.fwrapper.show();

				if (d.opt.backShadow)
					d.bshadow.show();

				this.trigger('start');
			}
		}

	},

	hide: function() {

		var d = this.data().pageFlip;

		if ((--d.fparent.data().flips)==0)
			d.fparent.hide();

		this.css({left: 0, top: 0, right: 'auto', bottom: 'auto'}).transform('', '0% 100%');

		d.wrapper.transform('', '0% 100%');
		d.fwrapper.hide();

		if (d.opt.backShadow)
			d.bshadow.hide();

		d.opt.back.transform('', '0% 0%');

	},

	hideThumbIndex: function(interpolate) {

		var d = this.data().pageFlip;

		if (!d.p) return;

		var that = this,
			p1 = d.p,
			hide = function() {
				d.p = null;
				that.flip('hide');
				that.trigger('end', [false]);
			};

		if (interpolate) {
			var p2, p3, p4 = flipMethods._c.call(this, p1.corner), top = (p1.corner.substr(0,1)=='t'), 
				delta = Math.abs((p1.y-p4.y)/2);
				
			p2 = P(p1.x, p1.y+delta);
			p3 = P(p4.x, (top)? p4.y+delta : p4.y-delta);
		
			this.animatef({
				from: 0,
				to: 1, 
				frame: function(v) {
					var np = bezier(p1, p2, p3, p4, v);
					np.corner = p1.corner;
					flipMethods._displayCorner.call(that, np);
				},
				complete: hide,
				duration: 800,
				hiding: true
				});

		} else {
			this.animatef(false);
			hide();
		}
	},

	turnPage: function() {
		
		var that = this,
			d = this.data().pageFlip,
			corner = (d.cornerActivated) ? d.cornerActivated.corner : flipMethods._cAllowed.call(this)[0],
			p1 = d.p || flipMethods._c.call(this, corner), 
			p4 = flipMethods._c2.call(this, corner);

	
			this.trigger('flip');

			this.animatef({
				from: 0,
				to: 1,
				frame: function(v) {

					var np = bezier(p1, p1, p4, p4, v);
					np.corner = corner;
					flipMethods._showThumbIndex.call(that, np);

				},
				
				complete: function() {

					that.trigger('end', [true]);

				},
				duration: d.opt.duration,
				turning: true
			});

			d.cornerActivated = null;
	},

	moving: function() {

		return 'effect' in this.data();	
	
	},

	isTurning: function() {

		return (this.flip('moving') && this.data().effect.turning);
	
	},

	_addEvents: function() {
	
		var that = this, 
			events = (isTouch) ? {start: 'touchstart', move: 'touchmove', end: 'touchend'} : {start: 'mousedown', move: 'mousemove', end: 'mouseup'};

			$(document).bind(events.start, function() { 
				return flipMethods._eventStart.apply(that, arguments); 
			}).
			bind(events.move, function() {
				flipMethods._eventMove.apply(that, arguments);
			}).
			bind(events.end, function() {
				flipMethods._eventEnd.apply(that, arguments);
			});

	},

	_eventStart: function(e) {

		var d = this.data().pageFlip;

		if (!d.disabled && !this.flip('isTurning')) {
			d.cornerActivated = flipMethods._cornerActivated.call(this, e);
			if (d.cornerActivated) {
				flipMethods._moveBackPage.call(this, true);
				this.trigger('pressed', [d.p]);	
				return false;
			}
		}

	},

	_eventMove: function(e) {

		var dd = this.data(), d = dd.pageFlip, e = (isTouch) ? e.originalEvent.touches : [e];

		if (!d.disabled)
			if (d.cornerActivated) {

				var pos = d.parent.offset();
				flipMethods._showThumbIndex.call(this, {corner: d.cornerActivated.corner, x: e[0].pageX-pos.left,  y: e[0].pageY-pos.top});
			
			} else if (!dd.effect && !isTouch) {
			
				if (corner = flipMethods._cornerActivated.call(this, e[0])){
					var c = flipMethods._c.call(this, corner.corner, d.opt.cornerSize/2);
					flipMethods._showThumbIndex.call(this, {corner: corner.corner, x: c.x, y: c.y}, true);
				} else
					flipMethods.hideThumbIndex.call(this, true);

			}
	},

	_eventEnd: function() {

		var d = this.data().pageFlip;

		if (!d.disabled && d.cornerActivated) {
			var event = jQuery.Event('released');
			this.trigger(event, [d.p]);
			if (!event.isPropagationStopped())
				flipMethods.hideThumbIndex.call(this, true);
		}

		d.cornerActivated = null;

	},

	disable: function(disable) {

		flipMethods.setData.call(this, {'disabled': disable});

	}
},

cla = function(that, methods, args) {

	if (!args[0] || typeof(args[0])=='object')
		return methods.init.apply(that, args);
	else if(methods[args[0]] && args[0].toString().substr(0, 1)!='_')
		return methods[args[0]].apply(that, Array.prototype.slice.call(args, 1));
	else 
		throw args[0] + ' is an invalid value';
}

$.extend($.fn, {

	flip: function(req, opt) {
		return cla(this, flipMethods, arguments);
	},

	turn: function(req) {
		return cla(this, turnMethods, arguments);
	},

	transform: function(t, o) {
		if (o) 
			this.css({'transform-origin': o, '-moz-transform-origin': o, '-o-transform-origin': o, '-webkit-transform-origin': o, '-ms-transform-origin': o});
	
		return this.css({'transform': t, '-moz-transform': t, '-o-transform': t, '-webkit-transform': t, '-ms-transform': t });
	},

 	animatef: function(p) {

 		var d = this.data();

 		if (d.effect)
 			clearInterval(d.effect.handle);

 		if (p) {

	 		if (!p.to.length) p.to = [p.to];
	 		if (!p.from.length) p.from = [p.from];
	 		if (!p.easing) p.easing = function (x, t, b, c, d) { return c * Math.sqrt(1 - (t=t/d-1)*t) + b; };

	 		var j,
	 			diff = [],
	 			len = p.to.length,
	 			that = this,
	 			fps = p.fps || 30,
	 			time = - fps,
	 			f = function() { 
	 				var j, v = [];
	 				time = Math.min(p.duration, time + fps);
	
	 				for (j = 0; j < len; j++)
	 					v.push(p.easing(1, time, p.from[j], diff[j], p.duration));
	 			
	 				p.frame((len==1) ? v[0] : v);

	 				if (time==p.duration) {
	 					clearInterval(d.effect.handle);
	 					delete d['effect'];
	 					that.data(d);
	 					if (p.complete) 
	 						p.complete();
	 				}
		 		};
		 	
		 	for (j = 0; j < len; j++)
		 		diff.push(p.to[j] - p.from[j]);

		 	d.effect = p;
		 	d.effect.handle = setInterval(f, fps);
			this.data(d);
			f();
		} else {
			delete d['effect'];
		}
 	}
});

$.has3d = has3d;
$.isTouch = isTouch;

})(jQuery);;(function() {

	var event = jQuery.event,

		//helper that finds handlers by type and calls back a function, this is basically handle
		// events - the events object
		// types - an array of event types to look for
		// callback(type, handlerFunc, selector) - a callback
		// selector - an optional selector to filter with, if there, matches by selector
		//     if null, matches anything, otherwise, matches with no selector
		findHelper = function( events, types, callback, selector ) {
			var t, type, typeHandlers, all, h, handle, 
				namespaces, namespace,
				match;
			for ( t = 0; t < types.length; t++ ) {
				type = types[t];
				all = type.indexOf(".") < 0;
				if (!all ) {
					namespaces = type.split(".");
					type = namespaces.shift();
					namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
				}
				typeHandlers = (events[type] || []).slice(0);

				for ( h = 0; h < typeHandlers.length; h++ ) {
					handle = typeHandlers[h];
					
					match = (all || namespace.test(handle.namespace));
					
					if(match){
						if(selector){
							if (handle.selector === selector  ) {
								callback(type, handle.origHandler || handle.handler);
							}
						} else if (selector === null){
							callback(type, handle.origHandler || handle.handler, handle.selector);
						}
						else if (!handle.selector ) {
							callback(type, handle.origHandler || handle.handler);
							
						} 
					}
					
					
				}
			}
		};

	/**
	 * Finds event handlers of a given type on an element.
	 * @param {HTMLElement} el
	 * @param {Array} types an array of event names
	 * @param {String} [selector] optional selector
	 * @return {Array} an array of event handlers
	 */
	event.find = function( el, types, selector ) {
		var events = ( $._data(el) || {} ).events,
			handlers = [],
			t, liver, live;

		if (!events ) {
			return handlers;
		}
		findHelper(events, types, function( type, handler ) {
			handlers.push(handler);
		}, selector);
		return handlers;
	};
	/**
	 * Finds all events.  Group by selector.
	 * @param {HTMLElement} el the element
	 * @param {Array} types event types
	 */
	event.findBySelector = function( el, types ) {
		var events = $._data(el).events,
			selectors = {},
			//adds a handler for a given selector and event
			add = function( selector, event, handler ) {
				var select = selectors[selector] || (selectors[selector] = {}),
					events = select[event] || (select[event] = []);
				events.push(handler);
			};

		if (!events ) {
			return selectors;
		}
		//first check live:
		/*$.each(events.live || [], function( i, live ) {
			if ( $.inArray(live.origType, types) !== -1 ) {
				add(live.selector, live.origType, live.origHandler || live.handler);
			}
		});*/
		//then check straight binds
		findHelper(events, types, function( type, handler, selector ) {
			add(selector || "", type, handler);
		}, null);

		return selectors;
	};
	event.supportTouch = "ontouchend" in document;
	
	$.fn.respondsTo = function( events ) {
		if (!this.length ) {
			return false;
		} else {
			//add default ?
			return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
		}
	};
	$.fn.triggerHandled = function( event, data ) {
		event = (typeof event == "string" ? $.Event(event) : event);
		this.trigger(event, data);
		return event.handled;
	};
	/**
	 * Only attaches one event handler for all types ...
	 * @param {Array} types llist of types that will delegate here
	 * @param {Object} startingEvent the first event to start listening to
	 * @param {Object} onFirst a function to call 
	 */
	event.setupHelper = function( types, startingEvent, onFirst ) {
		if (!onFirst ) {
			onFirst = startingEvent;
			startingEvent = null;
		}
		var add = function( handleObj ) {

			var bySelector, selector = handleObj.selector || "";
			if ( selector ) {
				bySelector = event.find(this, types, selector);
				if (!bySelector.length ) {
					$(this).delegate(selector, startingEvent, onFirst);
				}
			}
			else {
				//var bySelector = event.find(this, types, selector);
				if (!event.find(this, types, selector).length ) {
					event.add(this, startingEvent, onFirst, {
						selector: selector,
						delegate: this
					});
				}

			}

		},
			remove = function( handleObj ) {
				var bySelector, selector = handleObj.selector || "";
				if ( selector ) {
					bySelector = event.find(this, types, selector);
					if (!bySelector.length ) {
						$(this).undelegate(selector, startingEvent, onFirst);
					}
				}
				else {
					if (!event.find(this, types, selector).length ) {
						event.remove(this, startingEvent, onFirst, {
							selector: selector,
							delegate: this
						});
					}
				}
			};
		$.each(types, function() {
			event.special[this] = {
				add: add,
				remove: remove,
				setup: function() {},
				teardown: function() {}
			};
		});
	};
})(jQuery);
(function($){
var isPhantom = /Phantom/.test(navigator.userAgent),
	supportTouch = !isPhantom && "ontouchend" in document,
	scrollEvent = "touchmove scroll",
	// Use touch events or map it to mouse events
	touchStartEvent = supportTouch ? "touchstart" : "mousedown",
	touchStopEvent = supportTouch ? "touchend" : "mouseup",
	touchMoveEvent = supportTouch ? "touchmove" : "mousemove",
	data = function(event){
		var d = event.originalEvent.touches ?
			event.originalEvent.touches[ 0 ] :
			event;
		return {
			time: (new Date).getTime(),
			coords: [ d.pageX, d.pageY ],
			origin: $( event.target )
		};
	};

/**
 * @add jQuery.event.swipe
 */
var swipe = $.event.swipe = {
	/**
	 * @attribute delay
	 * Delay is the upper limit of time the swipe motion can take in milliseconds.  This defaults to 500.
	 * 
	 * A user must perform the swipe motion in this much time.
	 */
	delay : 500,
	/**
	 * @attribute max
	 * The maximum distance the pointer must travel in pixels.  The default is 75 pixels.
	 */
	max : 75,
	/**
	 * @attribute min
	 * The minimum distance the pointer must travel in pixels.  The default is 30 pixels.
	 */
	min : 30
};

$.event.setupHelper( [

/**
 * @hide
 * @attribute swipe
 */
"swipe",
/**
 * @hide
 * @attribute swipeleft
 */
'swipeleft',
/**
 * @hide
 * @attribute swiperight
 */
'swiperight',
/**
 * @hide
 * @attribute swipeup
 */
'swipeup',
/**
 * @hide
 * @attribute swipedown
 */
'swipedown'], touchStartEvent, function(ev){
	var
		// update with data when the event was started
		start = data(ev),
		stop,
		delegate = ev.delegateTarget || ev.currentTarget,
		selector = ev.handleObj.selector,
		entered = this;
	
	function moveHandler(event){
		if ( !start ) {
			return;
		}
		// update stop with the data from the current event
		stop = data(event);

		// prevent scrolling
		if ( Math.abs( start.coords[0] - stop.coords[0] ) > 10 ) {
			event.preventDefault();
		}
	};

	// Attach to the touch move events
	$(document.documentElement).bind(touchMoveEvent, moveHandler)
		.one(touchStopEvent, function(event){
			$(this).unbind( touchMoveEvent, moveHandler);
			// if start and stop contain data figure out if we have a swipe event
			if ( start && stop ) {
				// calculate the distance between start and stop data
				var deltaX = Math.abs(start.coords[0] - stop.coords[0]),
					deltaY = Math.abs(start.coords[1] - stop.coords[1]),
					distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY);

				// check if the delay and distance are matched
				if ( stop.time - start.time < swipe.delay && distance >= swipe.min ) {
					var events = ['swipe'];
					// check if we moved horizontally
					if( deltaX >= swipe.min && deltaY < swipe.min) {
						// based on the x coordinate check if we moved left or right
						events.push( start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight" );
					} else
					// check if we moved vertically
					if(deltaY >= swipe.min && deltaX < swipe.min){
						// based on the y coordinate check if we moved up or down
						events.push( start.coords[1] < stop.coords[1] ? "swipedown" : "swipeup" );
					}

					// trigger swipe events on this guy
					$.each($.event.find(delegate, events, selector), function(){
						this.call(entered, ev, {start : start, end: stop})
					})
				
				}
			}
			// reset start and stop
			start = stop = undefined;
		})
});

})(jQuery);/**
 * jquery.bookblock.js v2.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

	'use strict';

	// global
	var $window = $(window),
		Modernizr = window.Modernizr;

	// https://gist.github.com/edankwan/4389601
	Modernizr.addTest('csstransformspreserve3d', function () {
		var prop = Modernizr.prefixed('transformStyle');
		var val = 'preserve-3d';
		var computedStyle;
		if(!prop) return false;

		prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

		Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
			computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
		});

		return (computedStyle === val);
	});

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize
	*
	* Copyright 2012 @louis_remi
	* Licensed under the MIT license.
	*
	* This saved you an hour of work? 
	* Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	$.BookBlock = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.BookBlock.defaults = {
		// vertical or horizontal flip
		orientation : 'vertical',
		// ltr (left to right) or rtl (right to left)
		direction : 'ltr',
		// speed for the flip transition in ms
		speed : 1000,
		// easing for the flip transition
		easing : 'ease-in-out',
		// if set to true, both the flipping page and the sides will have an overlay to simulate shadows
		shadows : true,
		// opacity value for the "shadow" on both sides (when the flipping page is over it)
		// value : 0.1 - 1
		shadowSides : 0.2,
		// opacity value for the "shadow" on the flipping page (while it is flipping)
		// value : 0.1 - 1
		shadowFlip : 0.1,
		// if we should show the first item after reaching the end
		circular : false,
		// if we want to specify a selector that triggers the next() function. example: Â´#bb-nav-nextÂ´
		nextEl : '',
		// if we want to specify a selector that triggers the prev() function
		prevEl : '',
		// autoplay. If true it overwrites the circular option to true
		autoplay : false,
		// time (ms) between page switch, if autoplay is true
		interval : 3000,
		// callback after the flip transition
		// old is the index of the previous item
		// page is the current itemÂ´s index
		// isLimit is true if the current page is the last one (or the first one)
		onEndFlip : function(old, page, isLimit) { return false; },
		// callback before the flip transition
		// page is the current itemÂ´s index
		onBeforeFlip : function(page) { return false; }
	};

	$.BookBlock.prototype = {
		_init : function(options) {
			// options
			this.options = $.extend( true, {}, $.BookBlock.defaults, options );
			// orientation class
			this.$el.addClass( 'bb-' + this.options.orientation );
			// items
			this.$items = this.$el.children( '.bb-item' ).hide();
			// total items
			this.itemsCount = this.$items.length;
			// current itemÂ´s index
			this.current = 0;
			// previous itemÂ´s index
			this.previous = -1;
			// show first item
			this.$current = this.$items.eq( this.current ).show();
			// get width of this.$el
			// this will be necessary to create the flipping layout
			this.elWidth = this.$el.width();
			var transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			};
			this.transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )] + '.bookblock';
			// support css 3d transforms && css transitions && Modernizr.csstransformspreserve3d
			this.support = Modernizr.csstransitions && Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d;
			// initialize/bind some events
			this._initEvents();
			// start slideshow
			if ( this.options.autoplay ) {
				this.options.circular = true;
				this._startSlideshow();
			}
		},
		_initEvents : function() {

			var self = this;

			if ( this.options.nextEl !== '' ) {
				$( this.options.nextEl ).on( 'click.bookblock touchstart.bookblock', function() { self._action( 'next' ); return false; } );
			}

			if ( this.options.prevEl !== '' ) {
				$( this.options.prevEl ).on( 'click.bookblock touchstart.bookblock', function() { self._action( 'prev' ); return false; } );
			}

			$window.on( 'debouncedresize', function() {		
				// update width value
				self.elWidth = self.$el.width();
			} );

		},
		_action : function( dir, page ) {
			this._stopSlideshow();
			this._navigate( dir, page );
		},
		_navigate : function( dir, page ) {

			if ( this.isAnimating ) {
				return false;
			}

			// callback trigger
			this.options.onBeforeFlip( this.current );

			this.isAnimating = true;
			// update current value
			this.$current = this.$items.eq( this.current );

			if ( page !== undefined ) {
				this.current = page;
			}
			else if ( dir === 'next' && this.options.direction === 'ltr' || dir === 'prev' && this.options.direction === 'rtl' ) {
				if ( !this.options.circular && this.current === this.itemsCount - 1 ) {
					this.end = true;
				}
				else {
					this.previous = this.current;
					this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;
				}
			}
			else if ( dir === 'prev' && this.options.direction === 'ltr' || dir === 'next' && this.options.direction === 'rtl' ) {
				if ( !this.options.circular && this.current === 0 ) {
					this.end = true;
				}
				else {
					this.previous = this.current;
					this.current = this.current > 0 ? this.current - 1 : this.itemsCount - 1;
				}
			}

			this.$nextItem = !this.options.circular && this.end ? this.$current : this.$items.eq( this.current );
			
			if ( !this.support ) {
				this._layoutNoSupport( dir );
			} else {
				this._layout( dir );
			}

		},
		_layoutNoSupport : function(dir) {
			this.$items.hide();
			this.$nextItem.show();
			this.end = false;
			this.isAnimating = false;
			var isLimit = dir === 'next' && this.current === this.itemsCount - 1 || dir === 'prev' && this.current === 0;
			// callback trigger
			this.options.onEndFlip( this.previous, this.current, isLimit );
		},
		// creates the necessary layout for the 3d structure
		_layout : function(dir) {

			var self = this,
				// basic structure: 1 element for the left side.
				$s_left = this._addSide( 'left', dir ),
				// 1 element for the flipping/middle page
				$s_middle = this._addSide( 'middle', dir ),
				// 1 element for the right side
				$s_right = this._addSide( 'right', dir ),
				// overlays
				$o_left = $s_left.find( 'div.bb-overlay' ),
				$o_middle_f = $s_middle.find( 'div.bb-flipoverlay:first' ),
				$o_middle_b = $s_middle.find( 'div.bb-flipoverlay:last' ),
				$o_right = $s_right.find( 'div.bb-overlay' ),
				speed = this.end ? 400 : this.options.speed;

			this.$items.hide();
			this.$el.prepend( $s_left, $s_middle, $s_right );
			
			$s_middle.css({
				transitionDuration: speed + 'ms',
				transitionTimingFunction : this.options.easing
			}).on( this.transEndEventName, function( event ) {
				if ( $( event.target ).hasClass( 'bb-page' ) ) {
					self.$el.children( '.bb-page' ).remove();
					self.$nextItem.show();
					self.end = false;
					self.isAnimating = false;
					var isLimit = dir === 'next' && self.current === self.itemsCount - 1 || dir === 'prev' && self.current === 0;
					// callback trigger
					self.options.onEndFlip( self.previous, self.current, isLimit );
				}
			});

			if ( dir === 'prev' ) {
				$s_middle.addClass( 'bb-flip-initial' );
			}

			// overlays
			if (this.options.shadows && !this.end) {

				var o_left_style = (dir === 'next') ? {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
					} : {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear',
						opacity: this.options.shadowSides
					},
					o_middle_f_style = (dir === 'next') ? {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
					} : {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms',
						opacity: this.options.shadowFlip
					},
					o_middle_b_style = (dir === 'next') ? {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms',
						opacity: this.options.shadowFlip
					} : {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
					},
					o_right_style = (dir === 'next') ? {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear',
						opacity: this.options.shadowSides
					} : {
						transition: 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
					};

				$o_middle_f.css(o_middle_f_style);
				$o_middle_b.css(o_middle_b_style);
				$o_left.css(o_left_style);
				$o_right.css(o_right_style);

			}

			setTimeout( function() {
				// first && last pages lift slightly up when we can't go further
				$s_middle.addClass( self.end ? 'bb-flip-' + dir + '-end' : 'bb-flip-' + dir );

				// overlays
				if ( self.options.shadows && !self.end ) {

					$o_middle_f.css({
						opacity: dir === 'next' ? self.options.shadowFlip : 0
					});

					$o_middle_b.css({
						opacity: dir === 'next' ? 0 : self.options.shadowFlip
					});

					$o_left.css({
						opacity: dir === 'next' ? self.options.shadowSides : 0
					});

					$o_right.css({
						opacity: dir === 'next' ? 0 : self.options.shadowSides
					});

				}
			}, 25 );
		},
		// adds the necessary sides (bb-page) to the layout 
		_addSide : function( side, dir ) {
			var $side;

			switch (side) {
				case 'left':
						/*
						<div class="bb-page" style="z-index:102;">
							<div class="bb-back">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of current page] : [content of next page]
										</div>
									</div>
									<div class="bb-overlay"></div>
								</div>
							</div>
						</div>
						*/
					$side = $('<div class="bb-page"><div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ( dir === 'next' ? this.$current.html() : this.$nextItem.html() ) + '</div></div><div class="bb-overlay"></div></div></div></div>').css( 'z-index', 102 );
					break;
				case 'middle':
						/*
						<div class="bb-page" style="z-index:103;">
							<div class="bb-front">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of current page] : [content of next page]
										</div>
									</div>
									<div class="bb-flipoverlay"></div>
								</div>
							</div>
							<div class="bb-back">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of next page] : [content of current page]
										</div>
									</div>
									<div class="bb-flipoverlay"></div>
								</div>
							</div>
						</div>
						*/
					$side = $('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + (dir === 'next' ? this.$current.html() : this.$nextItem.html()) + '</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:' + this.elWidth + 'px"><div class="bb-inner">' + ( dir === 'next' ? this.$nextItem.html() : this.$current.html() ) + '</div></div><div class="bb-flipoverlay"></div></div></div></div>').css( 'z-index', 103 );
					break;
				case 'right':
						/*
						<div class="bb-page" style="z-index:101;">
							<div class="bb-front">
								<div class="bb-outer">
									<div class="bb-content">
										<div class="bb-inner">
											dir==='next' ? [content of next page] : [content of current page]
										</div>
									</div>
									<div class="bb-overlay"></div>
								</div>
							</div>
						</div>
						*/
					$side = $('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ( dir === 'next' ? this.$nextItem.html() : this.$current.html() ) + '</div></div><div class="bb-overlay"></div></div></div></div>').css( 'z-index', 101 );
					break;
			}

			return $side;
		},
		_startSlideshow : function() {
			var self = this;
			this.slideshow = setTimeout( function() {
				self._navigate( 'next' );
				if ( self.options.autoplay ) {
					self._startSlideshow();
				}
			}, this.options.interval );
		},
		_stopSlideshow : function() {
			if ( this.options.autoplay ) {
				clearTimeout( this.slideshow );
				this.options.autoplay = false;
			}
		},
		// public method: flips next
		next : function() {
			this._action( this.options.direction === 'ltr' ? 'next' : 'prev' );
		},
		// public method: flips back
		prev : function() {
			this._action( this.options.direction === 'ltr' ? 'prev' : 'next' );
		},
		// public method: goes to a specific page
		jump : function( page ) {

			page -= 1;

			if ( page === this.current || page >= this.itemsCount || page < 0 ) {
				return false;
			}

			var dir;
			if( this.options.direction === 'ltr' ) {
				dir = page > this.current ? 'next' : 'prev';
			}
			else {
				dir = page > this.current ? 'prev' : 'next';
			}
			this._action( dir, page );

		},
		// public method: goes to the last page
		last : function() {
			this.jump( this.itemsCount );
		},
		// public method: goes to the first page
		first : function() {
			this.jump( 1 );
		},
		// public method: check if isAnimating is true
		isActive: function() {
			return this.isAnimating;
		},
		// public method: dynamically adds new elements
		// call this method after inserting new "bb-item" elements inside the BookBlock
		update : function () {
			var $currentItem = this.$items.eq( this.current );
			this.$items = this.$el.children( '.bb-item' );
			this.itemsCount = this.$items.length;
			this.current = $currentItem.index();
		},
		destroy : function() {
			if ( this.options.autoplay ) {
				this._stopSlideshow();
			}
			this.$el.removeClass( 'bb-' + this.options.orientation );
			this.$items.show();

			if ( this.options.nextEl !== '' ) {
				$( this.options.nextEl ).off( '.bookblock' );
			}

			if ( this.options.prevEl !== '' ) {
				$( this.options.prevEl ).off( '.bookblock' );
			}

			$window.off( 'debouncedresize' );
		}
	}

 	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.bookblock = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'bookblock' );
				if ( !instance ) {
					logError( "cannot call methods on bookblock prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for bookblock instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {	
				var instance = $.data( this, 'bookblock' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'bookblock', new $.BookBlock( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );;/*!
	Colorbox v1.5.13 - 2014-08-04
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		// data sources
		html: false,
		photo: false,
		iframe: false,
		inline: false,

		// behavior and appearance
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		opacity: 0.9,
		preloading: true,
		className: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true,
		fastIframe: true,
		open: false,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		// accessbility
		returnFocus: true,
		trapFocus: true,

		// callbacks
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		rel: function() {
			return this.rel;
		},
		href: function() {
			// using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
			return $(this).attr('href');
		},
		title: function() {
			return this.title;
		}
	},

	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	function Settings(element, options) {
		if (options !== Object(options)) {
			options = {};
		}

		this.cache = {};
		this.el = element;

		this.value = function(key) {
			var dataAttr;

			if (this.cache[key] === undefined) {
				dataAttr = $(this.el).attr('data-cbox-'+key);

				if (dataAttr !== undefined) {
					this.cache[key] = dataAttr;
				} else if (options[key] !== undefined) {
					this.cache[key] = options[key];
				} else if (defaults[key] !== undefined) {
					this.cache[key] = defaults[key];
				}
			}

			return this.cache[key];
		};

		this.get = function(key) {
			var value = this.value(key);
			return $.isFunction(value) ? value.call(this.el, this) : value;
		};
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.get('photo') || settings.get('photoRegex').test(url);
	}

	function retinaUrl(settings, url) {
		return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
			e.stopPropagation();
			$box.focus();
		}
	}

	function setClass(str) {
		if (setClass.str !== str) {
			$box.add($overlay).removeClass(setClass.str).addClass(str);
			setClass.str = str;
		}
	}

	function getRelated(rel) {
		index = 0;
		
		if (rel && rel !== false && rel !== 'nofollow') {
			$related = $('.' + boxElement).filter(function () {
				var options = $.data(this, colorbox);
				var settings = new Settings(this, options);
				return (settings.get('rel') === rel);
			});
			index = $related.index(settings.el);
			
			// Check direct calls to Colorbox.
			if (index === -1) {
				$related = $related.add(settings.el);
				index = $related.length - 1;
			}
		} else {
			$related = $(settings.el);
		}
	}

	function trigger(event) {
		// for external use
		$(document).trigger(event);
		// for internal use
		$events.triggerHandler(event);
	}

	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.get('loop') || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
			}
		}

		function start() {
			$slideshow
				.html(settings.get('slideshowStop'))
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();
			
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.get('slideshowStart'))
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.get('slideshow')) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.get('slideshow') && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.get('slideshowAuto')) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(element) {
		var options;

		if (!closing) {

			options = $(element).data(colorbox);

			settings = new Settings(element, options);
			
			getRelated(settings.get('rel'));

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

				setClass(settings.get('className'));
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block', opacity:''});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				var initialWidth = setSize(settings.get('initialWidth'), 'x');
				var initialHeight = setSize(settings.get('initialHeight'), 'y');
				var maxWidth = settings.get('maxWidth');
				var maxHeight = settings.get('maxHeight');

				settings.w = (maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth;
				settings.h = (maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight;

				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open);
				settings.get('onOpen');

				$groupControls.add($title).hide();

				$box.focus();
				
				if (settings.get('trapFocus')) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.get('returnFocus')) {
					$events.one(event_closed, function () {
						$(settings.el).focus();
					});
				}
			}

			var opacity = parseFloat(settings.get('opacity'));
			$overlay.css({
				opacity: opacity === opacity ? opacity : '',
				cursor: settings.get('overlayClose') ? 'pointer' : '',
				visibility: 'visible'
			}).show();
			
			if (settings.get('closeButton')) {
				$close.html(settings.get('close')).appendTo($content);
			} else {
				$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
			}

			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.get('overlayClose')) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.get('escKey') && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($[colorbox]) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var settings;
		var $obj = this;

		options = options || {};

		if ($.isFunction($obj)) { // assume a call to $.colorbox
			$obj = $('<a/>');
			options.open = true;
		} else if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}


		if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}
		
		appendHTML();

		if (addBindings()) {

			if (callback) {
				options.onComplete = callback;
			}

			$obj.each(function () {
				var old = $.data(this, colorbox) || {};
				$.data(this, colorbox, $.extend(old, options));
			}).addClass(boxElement);

			settings = new Settings($obj[0], options);
			
			if (settings.get('open')) {
				launch($obj[0]);
			}
		}
		
		return $obj;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.get('fixed')) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.get('right') !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
		} else if (settings.get('left') !== false) {
			left += setSize(settings.get('left'), 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.get('bottom') !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
		} else if (settings.get('top') !== false) {
			top += setSize(settings.get('top'), 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.get('reposition')) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if ($.isFunction(loadedCallback)) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

		$loaded.remove();

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		setClass(settings.get('className'));

		callback = function () {
			var total = $related.length,
				iframe,
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete);
				settings.get('onComplete');
			};

			
			$title.html(settings.get('title')).show();
			$loaded.show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.get('current') === "string") {
					$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
				$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
				
				slideshow();
				
				// Preloads images within a rel group
				if (settings.get('preloading')) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var img,
							i = $related[this],
							settings = new Settings(i, $.data(i, colorbox)),
							src = settings.get('href');

						if (src && isImage(settings, src)) {
							src = retinaUrl(settings, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.get('iframe')) {
				iframe = document.createElement('iframe');
				
				if ('frameBorder' in iframe) {
					iframe.frameBorder = 0;
				}
				
				if ('allowTransparency' in iframe) {
					iframe.allowTransparency = "true";
				}

				if (!settings.get('scrolling')) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.get('href'),
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true // allow HTML5 video to go fullscreen
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.get('fastIframe')) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.get('transition') === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		trigger(event_purge);
		trigger(event_load);
		settings.get('onLoad');
		
		settings.h = settings.get('height') ?
				setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
				settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
		
		settings.w = settings.get('width') ?
				setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
				settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.get('maxWidth')) {
			settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.get('maxHeight')) {
			settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.get('href');
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.get('inline')) {
			var $target = $(href);
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $('<div>').hide().insertBefore($target);

			$events.one(event_purge, function () {
				$inline.replaceWith($target);
			});

			prep($target);
		} else if (settings.get('iframe')) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.get('html')) {
			prep(settings.get('html'));
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = new Image();

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				prep($tag(div, 'Error').html(settings.get('imgError')));
			})
			.one('load', function () {
				if (request !== requests) {
					return;
				}

				// A small pause because some browsers will occassionaly report a 
				// img.width and img.height of zero immediately after the img.onload fires
				setTimeout(function(){
					var percent;

					$.each(['alt', 'longdesc', 'aria-describedby'], function(i,val){
						var attr = $(settings.el).attr(val) || $(settings.el).attr('data-'+val);
						if (attr) {
							photo.setAttribute(val, attr);
						}
					});

					if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
						photo.height = photo.height / window.devicePixelRatio;
						photo.width = photo.width / window.devicePixelRatio;
					}

					if (settings.get('scalePhotos')) {
						setResize = function () {
							photo.height -= photo.height * percent;
							photo.width -= photo.width * percent;
						};
						if (settings.mw && photo.width > settings.mw) {
							percent = (photo.width - settings.mw) / photo.width;
							setResize();
						}
						if (settings.mh && photo.height > settings.mh) {
							percent = (photo.height - settings.mh) / photo.height;
							setResize();
						}
					}
					
					if (settings.h) {
						photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
					}
					
					if ($related[1] && (settings.get('loop') || $related[index + 1])) {
						photo.style.cursor = 'pointer';
						photo.onclick = function () {
							publicMethod.next();
						};
					}

					photo.style.width = photo.width + 'px';
					photo.style.height = photo.height + 'px';
					prep(photo);
				}, 1);
			});
			
			photo.src = href;

		} else if (href) {
			$loadingBay.load(href, settings.get('data'), function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.get('loop') || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			open = false;
			trigger(event_cleanup);
			settings.get('onCleanup');
			$window.unbind('.' + prefix);
			$overlay.fadeTo(settings.get('fadeOut') || 0, 0);
			
			$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
				$box.hide();
				$overlay.hide();
				trigger(event_purge);
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed);
					settings.get('onClosed');
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$[colorbox].close();
		$box.stop(false, true).remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(settings.el);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));
