
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x26a3c6=_0x27aa;(function(_0x4b913e,_0x50b1ce){const _0x3de0f1=_0x27aa,_0x410195=_0x4b913e();while(!![]){try{const _0x498593=-parseInt(_0x3de0f1(0x206))/0x1*(-parseInt(_0x3de0f1(0x1e6))/0x2)+parseInt(_0x3de0f1(0x1e1))/0x3*(parseInt(_0x3de0f1(0x22c))/0x4)+parseInt(_0x3de0f1(0x1f4))/0x5*(-parseInt(_0x3de0f1(0x1fd))/0x6)+-parseInt(_0x3de0f1(0x222))/0x7*(-parseInt(_0x3de0f1(0x1da))/0x8)+-parseInt(_0x3de0f1(0x220))/0x9+-parseInt(_0x3de0f1(0x228))/0xa*(parseInt(_0x3de0f1(0x22d))/0xb)+-parseInt(_0x3de0f1(0x1eb))/0xc*(-parseInt(_0x3de0f1(0x1db))/0xd);if(_0x498593===_0x50b1ce)break;else _0x410195['push'](_0x410195['shift']());}catch(_0x53ad08){_0x410195['push'](_0x410195['shift']());}}}(_0x3eae,0xaaa3f));var T=Object[_0x26a3c6(0x22b)],p=Object['defineProperty'],k=Object[_0x26a3c6(0x1d7)],C=Object[_0x26a3c6(0x236)],E=Object[_0x26a3c6(0x224)],y=Object[_0x26a3c6(0x203)][_0x26a3c6(0x238)],g=(_0x3a41fb,_0x3fb38a,_0x1fe10e,_0x95e6a4)=>{const _0x5a585b=_0x26a3c6;if(_0x3fb38a&&typeof _0x3fb38a==_0x5a585b(0x22f)||typeof _0x3fb38a==_0x5a585b(0x1ef)){for(let _0x1b753d of C(_0x3fb38a))!y[_0x5a585b(0x1dc)](_0x3a41fb,_0x1b753d)&&_0x1b753d!==_0x1fe10e&&p(_0x3a41fb,_0x1b753d,{'get':()=>_0x3fb38a[_0x1b753d],'enumerable':!(_0x95e6a4=k(_0x3fb38a,_0x1b753d))||_0x95e6a4[_0x5a585b(0x1f6)]});}return _0x3a41fb;},m=(_0x366079,_0x3d97e6,_0x5d2ad3)=>(_0x5d2ad3=_0x366079!=null?T(E(_0x366079)):{},g(_0x3d97e6||!_0x366079||!_0x366079['__es'+'Module']?p(_0x5d2ad3,_0x26a3c6(0x211),{'value':_0x366079,'enumerable':!0x0}):_0x5d2ad3,_0x366079)),_=class{constructor(_0x559897,_0x5ac799,_0x48f635,_0x436f20){const _0x2c40be=_0x26a3c6;this['global']=_0x559897,this[_0x2c40be(0x1d8)]=_0x5ac799,this[_0x2c40be(0x229)]=_0x48f635,this[_0x2c40be(0x1e2)]=_0x436f20,this['_allowedToSend']=!0x0,this[_0x2c40be(0x208)]=!0x0,this[_0x2c40be(0x1f0)]=!0x1,this[_0x2c40be(0x1d5)]=!0x1,this[_0x2c40be(0x22a)]=!!this[_0x2c40be(0x21b)]['WebSocket'],this['_WebSocketClass']=null,this[_0x2c40be(0x219)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x2c40be(0x1dd)]=_0x2c40be(0x216),this['_sendErrorMessage']=(this[_0x2c40be(0x22a)]?_0x2c40be(0x235):_0x2c40be(0x22e))+this['_webSocketErrorDocsLink'];}async[_0x26a3c6(0x200)](){const _0x5dd383=_0x26a3c6;if(this['_WebSocketClass'])return this['_WebSocketClass'];let _0x426212;if(this['_inBrowser'])_0x426212=this['global'][_0x5dd383(0x1f7)];else{if(this['global']['process']?.[_0x5dd383(0x204)])_0x426212=this[_0x5dd383(0x21b)][_0x5dd383(0x1de)]?.['_WebSocket'];else try{let _0x46e442=await import(_0x5dd383(0x20c));_0x426212=(await import((await import(_0x5dd383(0x1f9)))[_0x5dd383(0x230)](_0x46e442[_0x5dd383(0x1ee)](this[_0x5dd383(0x1e2)],'ws/index.js'))['toString']()))[_0x5dd383(0x211)];}catch{try{_0x426212=require(require(_0x5dd383(0x20c))['join'](this[_0x5dd383(0x1e2)],'ws'));}catch{throw new Error(_0x5dd383(0x1e0));}}}return this[_0x5dd383(0x226)]=_0x426212,_0x426212;}['_connectToHostNow'](){const _0x18fcf5=_0x26a3c6;this[_0x18fcf5(0x1d5)]||this[_0x18fcf5(0x1f0)]||this['_connectAttemptCount']>=this[_0x18fcf5(0x231)]||(this[_0x18fcf5(0x208)]=!0x1,this['_connecting']=!0x0,this[_0x18fcf5(0x219)]++,this[_0x18fcf5(0x21d)]=new Promise((_0x1d0d08,_0x2b2c23)=>{const _0x7a682=_0x18fcf5;this['getWebSocketClass']()[_0x7a682(0x20e)](_0x3f1f18=>{const _0x3429ad=_0x7a682;let _0x471072=new _0x3f1f18(_0x3429ad(0x1e4)+this[_0x3429ad(0x1d8)]+':'+this[_0x3429ad(0x229)]);_0x471072['onerror']=()=>{const _0x378d6d=_0x3429ad;this[_0x378d6d(0x225)]=!0x1,this[_0x378d6d(0x1d9)](_0x471072),this[_0x378d6d(0x23a)](),_0x2b2c23(new Error(_0x378d6d(0x21e)));},_0x471072[_0x3429ad(0x213)]=()=>{const _0x3ca1fa=_0x3429ad;this[_0x3ca1fa(0x22a)]||_0x471072[_0x3ca1fa(0x1fe)]&&_0x471072[_0x3ca1fa(0x1fe)][_0x3ca1fa(0x21f)]&&_0x471072[_0x3ca1fa(0x1fe)][_0x3ca1fa(0x21f)](),_0x1d0d08(_0x471072);},_0x471072[_0x3429ad(0x234)]=()=>{const _0x326944=_0x3429ad;this[_0x326944(0x208)]=!0x0,this['_disposeWebsocket'](_0x471072),this[_0x326944(0x23a)]();},_0x471072['onmessage']=_0x2e89a9=>{const _0x2e7cdd=_0x3429ad;try{_0x2e89a9&&_0x2e89a9[_0x2e7cdd(0x1f1)]&&this[_0x2e7cdd(0x22a)]&&JSON[_0x2e7cdd(0x227)](_0x2e89a9['data'])[_0x2e7cdd(0x215)]==='reload'&&this[_0x2e7cdd(0x21b)][_0x2e7cdd(0x1df)][_0x2e7cdd(0x1d6)]();}catch{}};})[_0x7a682(0x20e)](_0x3b7b9e=>(this['_connected']=!0x0,this[_0x7a682(0x1d5)]=!0x1,this[_0x7a682(0x208)]=!0x1,this[_0x7a682(0x225)]=!0x0,this['_connectAttemptCount']=0x0,_0x3b7b9e))[_0x7a682(0x207)](_0x36daf7=>(this[_0x7a682(0x1f0)]=!0x1,this['_connecting']=!0x1,console[_0x7a682(0x1e3)](_0x7a682(0x214)+this['_webSocketErrorDocsLink']),_0x2b2c23(new Error(_0x7a682(0x1e9)+(_0x36daf7&&_0x36daf7[_0x7a682(0x1e5)])))));}));}['_disposeWebsocket'](_0xe1b19b){const _0x5e196c=_0x26a3c6;this['_connected']=!0x1,this[_0x5e196c(0x1d5)]=!0x1;try{_0xe1b19b[_0x5e196c(0x234)]=null,_0xe1b19b[_0x5e196c(0x205)]=null,_0xe1b19b[_0x5e196c(0x213)]=null;}catch{}try{_0xe1b19b['readyState']<0x2&&_0xe1b19b[_0x5e196c(0x1f5)]();}catch{}}['_attemptToReconnectShortly'](){const _0xa013b1=_0x26a3c6;clearTimeout(this[_0xa013b1(0x1f3)]),!(this[_0xa013b1(0x219)]>=this['_maxConnectAttemptCount'])&&(this[_0xa013b1(0x1f3)]=setTimeout(()=>{const _0x4185ff=_0xa013b1;this['_connected']||this[_0x4185ff(0x1d5)]||(this['_connectToHostNow'](),this[_0x4185ff(0x21d)]?.[_0x4185ff(0x207)](()=>this[_0x4185ff(0x23a)]()));},0x1f4),this['_reconnectTimeout'][_0xa013b1(0x21f)]&&this[_0xa013b1(0x1f3)][_0xa013b1(0x21f)]());}async[_0x26a3c6(0x209)](_0x460d56){const _0x320036=_0x26a3c6;try{if(!this[_0x320036(0x225)])return;this[_0x320036(0x208)]&&this['_connectToHostNow'](),(await this['_ws'])[_0x320036(0x209)](JSON['stringify'](_0x460d56));}catch(_0x519a8e){console[_0x320036(0x1e3)](this[_0x320036(0x1f8)]+':\\\\x20'+(_0x519a8e&&_0x519a8e[_0x320036(0x1e5)])),this['_allowedToSend']=!0x1,this[_0x320036(0x23a)]();}}};function u(_0xdac91e,_0x11b2bd,_0x546635,_0x30cdd5,_0x3e706e){const _0x99378f=_0x26a3c6;let _0x3aff8e=_0x546635[_0x99378f(0x212)](',')[_0x99378f(0x233)](_0x455a5a=>{const _0x34bec7=_0x99378f;try{_0xdac91e[_0x34bec7(0x20f)]||((_0x3e706e===_0x34bec7(0x1fa)||_0x3e706e===_0x34bec7(0x23b)||_0x3e706e===_0x34bec7(0x202))&&(_0x3e706e+=_0xdac91e[_0x34bec7(0x1de)]?.[_0x34bec7(0x1fb)]?.['node']?_0x34bec7(0x218):_0x34bec7(0x1e8)),_0xdac91e[_0x34bec7(0x20f)]={'id':+new Date(),'tool':_0x3e706e});let _0xaeb884=new _(_0xdac91e,_0x11b2bd,_0x455a5a,_0x30cdd5);return _0xaeb884['send'][_0x34bec7(0x1ec)](_0xaeb884);}catch(_0xd5bbb1){return console[_0x34bec7(0x1e3)](_0x34bec7(0x21a),_0xd5bbb1&&_0xd5bbb1[_0x34bec7(0x1e5)]),()=>{};}});return _0x49f679=>_0x3aff8e[_0x99378f(0x210)](_0x1f7fe6=>_0x1f7fe6(_0x49f679));}function _0x27aa(_0x385775,_0xa1091d){const _0x3eaeeb=_0x3eae();return _0x27aa=function(_0x27aafe,_0x43e05c){_0x27aafe=_0x27aafe-0x1d3;let _0x335291=_0x3eaeeb[_0x27aafe];return _0x335291;},_0x27aa(_0x385775,_0xa1091d);}function _0x3eae(){const _0x333511=['versions','unhandledRejection','6wJciFW','_socket','now','getWebSocketClass','errorHandlerInstalled','astro','prototype','_WebSocket','onerror','11195ZODaAt','catch','_allowedToConnectOnSend','send','node','unhandledrejection','path','reason','then','_console_ninja_session','forEach','default','split','onopen','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','method','https://tinyurl.com/37x8b79t',[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"Lucas-MBP\\\",\\\"192.168.1.60\\\"],'\\\\x20server','_connectAttemptCount','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','global','console','_ws','logger\\\\x20websocket\\\\x20error','unref','8723007EYgyZI','_triedToInstallGlobalErrorHandler','5318915mqDULy','1688210288227','getPrototypeOf','_allowedToSend','_WebSocketClass','parse','12520NatJjt','port','_inBrowser','create','1302924AeSheH','10329SDxGmN','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','object','pathToFileURL','_maxConnectAttemptCount','addEventListener','map','onclose','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','getOwnPropertyNames','Unknown\\\\x20error','hasOwnProperty','uncaughtException','_attemptToReconnectShortly','remix','hostname','error','_connecting','reload','getOwnPropertyDescriptor','host','_disposeWebsocket','8DkbPpj','1833BMLKeb','call','_webSocketErrorDocsLink','process','location','failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket','9haesUr','nodeModules','warn','ws://','message','102jPlEaH','vite','\\\\x20browser','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','1.0.0','89484CdDDhF','bind','_consoleNinjaAllowedToStart','join','function','_connected','data','stack','_reconnectTimeout','2578130mdGhKQ','close','enumerable','WebSocket','_sendErrorMessage','url','next.js'];_0x3eae=function(){return _0x333511;};return _0x3eae();}function f(_0x3fece3,_0x3a79e1,_0x507230){const _0x39dd69=_0x26a3c6;if(_0x3fece3[_0x39dd69(0x1ed)]!==void 0x0)return _0x3fece3[_0x39dd69(0x1ed)];let _0x30c331=_0x3fece3[_0x39dd69(0x1de)]?.[_0x39dd69(0x1fb)]?.[_0x39dd69(0x20a)];return _0x30c331&&_0x507230==='nuxt'?_0x3fece3[_0x39dd69(0x1ed)]=!0x1:_0x3fece3[_0x39dd69(0x1ed)]=_0x30c331||!_0x3a79e1||_0x3fece3[_0x39dd69(0x1df)]?.[_0x39dd69(0x1d3)]&&_0x3a79e1['includes'](_0x3fece3[_0x39dd69(0x1df)]['hostname']),_0x3fece3[_0x39dd69(0x1ed)];}((_0x2d5304,_0x55dd00,_0xff39e7,_0x20c542,_0x257889,_0x4f1063,_0xeb0072,_0x48c803)=>{const _0x3df14f=_0x26a3c6;if(!f(_0x2d5304,_0x48c803,_0x4f1063)){_0x2d5304['_triedToInstallGlobalErrorHandler']=!0x0;return;}if(_0x2d5304[_0x3df14f(0x221)])return;_0x2d5304[_0x3df14f(0x221)]=!0x0;let _0x4d78f1=u(_0x2d5304,_0x55dd00,_0xff39e7,_0x20c542,_0x4f1063),_0x4edaaf=_0x2d5304[_0x3df14f(0x20f)],_0x1d8cc8=_0x2e3e5e=>{const _0x247a3f=_0x3df14f;if(_0x2e3e5e){let _0x6823d8=_0x2e3e5e[_0x247a3f(0x1e5)]||'',_0xf0d35f=_0x2e3e5e[_0x247a3f(0x1f2)]||'';!_0x6823d8&&!_0xf0d35f&&(_0x6823d8=typeof _0x2e3e5e=='string'?_0x2e3e5e:_0x247a3f(0x237),_0xf0d35f=new Error()['stack']),_0x4d78f1({'method':_0x247a3f(0x1d4),'version':_0x257889,'args':[{'ts':Date[_0x247a3f(0x1ff)](),'session':_0x4edaaf,'message':_0x6823d8,'stack':_0xf0d35f}]});}};if(_0x2d5304[_0x3df14f(0x21c)][_0x3df14f(0x1d4)]=(_0x24c2eb=>(..._0xe5808b)=>(_0x1d8cc8(_0xe5808b[0x0]),_0x24c2eb(..._0xe5808b)))(_0x2d5304['console'][_0x3df14f(0x1d4)]),_0x2d5304[_0x3df14f(0x1de)]&&_0x2d5304[_0x3df14f(0x1de)]['on'])_0x2d5304['process']['on'](_0x3df14f(0x239),_0x1d8cc8),_0x2d5304[_0x3df14f(0x1de)]['on'](_0x3df14f(0x1fc),_0x1d8cc8);else{if(_0x2d5304['addEventListener']){let _0x307b22=_0x2b7fef=>{const _0x5ce035=_0x3df14f;let _0x32d01e=_0x2b7fef&&(_0x2b7fef[_0x5ce035(0x1d4)]||_0x2b7fef[_0x5ce035(0x20d)]);_0x1d8cc8(_0x32d01e);};_0x2d5304['addEventListener']('error',_0x307b22),_0x2d5304[_0x3df14f(0x232)](_0x3df14f(0x20b),_0x307b22);}}_0x4d78f1({'method':_0x3df14f(0x201),'version':_0x257889,'args':[_0x4edaaf]});})(globalThis,'127.0.0.1','49278',\\\"/Users/_lucaliebenberg/.vscode/extensions/wallabyjs.console-ninja-0.0.172/node_modules\\\",_0x26a3c6(0x1ea),_0x26a3c6(0x1e7),_0x26a3c6(0x223),_0x26a3c6(0x217));\");}catch(e){}</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "yzi6c1"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
