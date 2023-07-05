
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
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x1b7b(){const _0x28cd06=['WebSocket','_webSocketErrorDocsLink','_reconnectTimeout','9eGNMiB','unhandledRejection','_disposeWebsocket','readyState','split','astro','errorHandlerInstalled','Unknown\\\\x20error','reload','call','onopen',[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"Lucas-MacBook-Pro.local\\\",\\\"192.168.1.60\\\"],'_sendErrorMessage','unref','getPrototypeOf','message','_console_ninja_session','error','getOwnPropertyNames','bind','1184072MrFdVu','135027xoIPqZ','getWebSocketClass','join','object','_connectToHostNow','onerror','209052TlBopV','__es'+'Module','versions','\\\\x20browser','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','nuxt','317581vucxtt','location','914060FFEOLG','catch','_attemptToReconnectShortly','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','pathToFileURL','node','now','\\\\x20server','prototype','onclose','_WebSocket','then','_triedToInstallGlobalErrorHandler','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','onmessage','ws/index.js','defineProperty','https://tinyurl.com/37x8b79t','13495FhKITS','1.0.0','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','_maxConnectAttemptCount','_allowedToSend','data','url','_connecting','forEach','_socket','6ygSwQd','addEventListener','string','104gnvBsc','create','console','path','_connectAttemptCount','function','send','enumerable','stack','_WebSocketClass','logger\\\\x20websocket\\\\x20error','warn','global','getOwnPropertyDescriptor','8429740FaiFMx','_ws','host','ws://','_connected','hostname','port','_allowedToConnectOnSend','reason','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','_consoleNinjaAllowedToStart','nodeModules','stringify','_inBrowser','process'];_0x1b7b=function(){return _0x28cd06;};return _0x1b7b();}const _0x427abe=_0x530d;(function(_0x383dfa,_0x332b1f){const _0x3069cf=_0x530d,_0xb7fdd0=_0x383dfa();while(!![]){try{const _0x413305=-parseInt(_0x3069cf(0x1c2))/0x1+-parseInt(_0x3069cf(0x1bc))/0x2*(parseInt(_0x3069cf(0x1a1))/0x3)+parseInt(_0x3069cf(0x1b5))/0x4+-parseInt(_0x3069cf(0x1d6))/0x5*(-parseInt(_0x3069cf(0x1e0))/0x6)+-parseInt(_0x3069cf(0x1c4))/0x7+parseInt(_0x3069cf(0x1e3))/0x8*(-parseInt(_0x3069cf(0x1b6))/0x9)+parseInt(_0x3069cf(0x1f1))/0xa;if(_0x413305===_0x332b1f)break;else _0xb7fdd0['push'](_0xb7fdd0['shift']());}catch(_0x2f6cdd){_0xb7fdd0['push'](_0xb7fdd0['shift']());}}}(_0x1b7b,0x2d251));function _0x530d(_0x2950ab,_0x5b0378){const _0x1b7b34=_0x1b7b();return _0x530d=function(_0x530d96,_0x58dc29){_0x530d96=_0x530d96-0x19a;let _0xaa22bf=_0x1b7b34[_0x530d96];return _0xaa22bf;},_0x530d(_0x2950ab,_0x5b0378);}var T=Object[_0x427abe(0x1e4)],p=Object[_0x427abe(0x1d4)],k=Object[_0x427abe(0x1f0)],C=Object[_0x427abe(0x1b3)],E=Object[_0x427abe(0x1af)],y=Object[_0x427abe(0x1cc)]['hasOwnProperty'],g=(_0x3da654,_0x1f098a,_0x15e0e1,_0x1acc57)=>{const _0x1ce49a=_0x427abe;if(_0x1f098a&&typeof _0x1f098a==_0x1ce49a(0x1b9)||typeof _0x1f098a==_0x1ce49a(0x1e8)){for(let _0x1be8a3 of C(_0x1f098a))!y[_0x1ce49a(0x1aa)](_0x3da654,_0x1be8a3)&&_0x1be8a3!==_0x15e0e1&&p(_0x3da654,_0x1be8a3,{'get':()=>_0x1f098a[_0x1be8a3],'enumerable':!(_0x1acc57=k(_0x1f098a,_0x1be8a3))||_0x1acc57[_0x1ce49a(0x1ea)]});}return _0x3da654;},m=(_0x5512ef,_0x1b2a67,_0x4d11c7)=>(_0x4d11c7=_0x5512ef!=null?T(E(_0x5512ef)):{},g(_0x1b2a67||!_0x5512ef||!_0x5512ef[_0x427abe(0x1bd)]?p(_0x4d11c7,'default',{'value':_0x5512ef,'enumerable':!0x0}):_0x4d11c7,_0x5512ef)),_=class{constructor(_0x575baa,_0x39f6f9,_0x130622,_0x499b3c){const _0x223d53=_0x427abe;this[_0x223d53(0x1ef)]=_0x575baa,this[_0x223d53(0x1f3)]=_0x39f6f9,this[_0x223d53(0x1f7)]=_0x130622,this[_0x223d53(0x19a)]=_0x499b3c,this[_0x223d53(0x1da)]=!0x0,this[_0x223d53(0x1f8)]=!0x0,this[_0x223d53(0x1f5)]=!0x1,this[_0x223d53(0x1dd)]=!0x1,this['_inBrowser']=!!this[_0x223d53(0x1ef)][_0x223d53(0x19e)],this[_0x223d53(0x1ec)]=null,this[_0x223d53(0x1e7)]=0x0,this[_0x223d53(0x1d9)]=0x14,this[_0x223d53(0x19f)]=_0x223d53(0x1d5),this[_0x223d53(0x1ad)]=(this[_0x223d53(0x19c)]?_0x223d53(0x1d8):_0x223d53(0x1fa))+this['_webSocketErrorDocsLink'];}async[_0x427abe(0x1b7)](){const _0x4f116c=_0x427abe;if(this['_WebSocketClass'])return this['_WebSocketClass'];let _0x138785;if(this[_0x4f116c(0x19c)])_0x138785=this['global'][_0x4f116c(0x19e)];else{if(this[_0x4f116c(0x1ef)][_0x4f116c(0x19d)]?.[_0x4f116c(0x1ce)])_0x138785=this['global']['process']?.[_0x4f116c(0x1ce)];else try{let _0x55f829=await import(_0x4f116c(0x1e6));_0x138785=(await import((await import(_0x4f116c(0x1dc)))[_0x4f116c(0x1c8)](_0x55f829[_0x4f116c(0x1b8)](this[_0x4f116c(0x19a)],_0x4f116c(0x1d3)))['toString']()))['default'];}catch{try{_0x138785=require(require(_0x4f116c(0x1e6))[_0x4f116c(0x1b8)](this[_0x4f116c(0x19a)],'ws'));}catch{throw new Error('failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket');}}}return this[_0x4f116c(0x1ec)]=_0x138785,_0x138785;}[_0x427abe(0x1ba)](){const _0x4225ce=_0x427abe;this[_0x4225ce(0x1dd)]||this[_0x4225ce(0x1f5)]||this['_connectAttemptCount']>=this[_0x4225ce(0x1d9)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this[_0x4225ce(0x1e7)]++,this[_0x4225ce(0x1f2)]=new Promise((_0x581da3,_0x3769a0)=>{const _0x402742=_0x4225ce;this[_0x402742(0x1b7)]()[_0x402742(0x1cf)](_0x1b7a23=>{const _0x57a7c5=_0x402742;let _0x1da97d=new _0x1b7a23(_0x57a7c5(0x1f4)+this[_0x57a7c5(0x1f3)]+':'+this[_0x57a7c5(0x1f7)]);_0x1da97d[_0x57a7c5(0x1bb)]=()=>{const _0x415d40=_0x57a7c5;this[_0x415d40(0x1da)]=!0x1,this[_0x415d40(0x1a3)](_0x1da97d),this[_0x415d40(0x1c6)](),_0x3769a0(new Error(_0x415d40(0x1ed)));},_0x1da97d[_0x57a7c5(0x1ab)]=()=>{const _0xdefbad=_0x57a7c5;this[_0xdefbad(0x19c)]||_0x1da97d[_0xdefbad(0x1df)]&&_0x1da97d[_0xdefbad(0x1df)]['unref']&&_0x1da97d['_socket']['unref'](),_0x581da3(_0x1da97d);},_0x1da97d[_0x57a7c5(0x1cd)]=()=>{const _0x7ea096=_0x57a7c5;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x1da97d),this[_0x7ea096(0x1c6)]();},_0x1da97d[_0x57a7c5(0x1d2)]=_0x305e78=>{const _0x4c3856=_0x57a7c5;try{_0x305e78&&_0x305e78[_0x4c3856(0x1db)]&&this[_0x4c3856(0x19c)]&&JSON['parse'](_0x305e78[_0x4c3856(0x1db)])['method']===_0x4c3856(0x1a9)&&this[_0x4c3856(0x1ef)][_0x4c3856(0x1c3)][_0x4c3856(0x1a9)]();}catch{}};})[_0x402742(0x1cf)](_0x14fff7=>(this[_0x402742(0x1f5)]=!0x0,this['_connecting']=!0x1,this[_0x402742(0x1f8)]=!0x1,this[_0x402742(0x1da)]=!0x0,this[_0x402742(0x1e7)]=0x0,_0x14fff7))[_0x402742(0x1c5)](_0x5a0e5f=>(this[_0x402742(0x1f5)]=!0x1,this[_0x402742(0x1dd)]=!0x1,console[_0x402742(0x1ee)](_0x402742(0x1d1)+this[_0x402742(0x19f)]),_0x3769a0(new Error(_0x402742(0x1c0)+(_0x5a0e5f&&_0x5a0e5f[_0x402742(0x1b0)])))));}));}['_disposeWebsocket'](_0x25dd53){const _0x443980=_0x427abe;this[_0x443980(0x1f5)]=!0x1,this[_0x443980(0x1dd)]=!0x1;try{_0x25dd53[_0x443980(0x1cd)]=null,_0x25dd53['onerror']=null,_0x25dd53[_0x443980(0x1ab)]=null;}catch{}try{_0x25dd53[_0x443980(0x1a4)]<0x2&&_0x25dd53['close']();}catch{}}[_0x427abe(0x1c6)](){const _0x4d6c93=_0x427abe;clearTimeout(this[_0x4d6c93(0x1a0)]),!(this[_0x4d6c93(0x1e7)]>=this[_0x4d6c93(0x1d9)])&&(this['_reconnectTimeout']=setTimeout(()=>{const _0x43f368=_0x4d6c93;this[_0x43f368(0x1f5)]||this[_0x43f368(0x1dd)]||(this[_0x43f368(0x1ba)](),this[_0x43f368(0x1f2)]?.['catch'](()=>this[_0x43f368(0x1c6)]()));},0x1f4),this[_0x4d6c93(0x1a0)][_0x4d6c93(0x1ae)]&&this[_0x4d6c93(0x1a0)][_0x4d6c93(0x1ae)]());}async[_0x427abe(0x1e9)](_0x24ae37){const _0x389a46=_0x427abe;try{if(!this[_0x389a46(0x1da)])return;this[_0x389a46(0x1f8)]&&this['_connectToHostNow'](),(await this[_0x389a46(0x1f2)])[_0x389a46(0x1e9)](JSON[_0x389a46(0x19b)](_0x24ae37));}catch(_0x35b65b){console[_0x389a46(0x1ee)](this[_0x389a46(0x1ad)]+':\\\\x20'+(_0x35b65b&&_0x35b65b[_0x389a46(0x1b0)])),this[_0x389a46(0x1da)]=!0x1,this[_0x389a46(0x1c6)]();}}};function u(_0x57598a,_0x55493f,_0x1c5b65,_0x4f517f,_0x1e701e){const _0x28d3ff=_0x427abe;let _0x2dfd1c=_0x1c5b65[_0x28d3ff(0x1a5)](',')['map'](_0x1c522a=>{const _0x1ff5d4=_0x28d3ff;try{_0x57598a[_0x1ff5d4(0x1b1)]||((_0x1e701e==='next.js'||_0x1e701e==='remix'||_0x1e701e===_0x1ff5d4(0x1a6))&&(_0x1e701e+=_0x57598a[_0x1ff5d4(0x19d)]?.[_0x1ff5d4(0x1be)]?.[_0x1ff5d4(0x1c9)]?_0x1ff5d4(0x1cb):_0x1ff5d4(0x1bf)),_0x57598a[_0x1ff5d4(0x1b1)]={'id':+new Date(),'tool':_0x1e701e});let _0x55e845=new _(_0x57598a,_0x55493f,_0x1c522a,_0x4f517f);return _0x55e845[_0x1ff5d4(0x1e9)][_0x1ff5d4(0x1b4)](_0x55e845);}catch(_0x11f856){return console['warn'](_0x1ff5d4(0x1c7),_0x11f856&&_0x11f856['message']),()=>{};}});return _0x5c9f8c=>_0x2dfd1c[_0x28d3ff(0x1de)](_0xf7036c=>_0xf7036c(_0x5c9f8c));}function f(_0x514dc7,_0x2f0cf,_0x499f33){const _0x489c1e=_0x427abe;if(_0x514dc7[_0x489c1e(0x1fb)]!==void 0x0)return _0x514dc7[_0x489c1e(0x1fb)];let _0x11b9d1=_0x514dc7[_0x489c1e(0x19d)]?.[_0x489c1e(0x1be)]?.[_0x489c1e(0x1c9)];return _0x11b9d1&&_0x499f33===_0x489c1e(0x1c1)?_0x514dc7[_0x489c1e(0x1fb)]=!0x1:_0x514dc7[_0x489c1e(0x1fb)]=_0x11b9d1||!_0x2f0cf||_0x514dc7[_0x489c1e(0x1c3)]?.[_0x489c1e(0x1f6)]&&_0x2f0cf['includes'](_0x514dc7[_0x489c1e(0x1c3)][_0x489c1e(0x1f6)]),_0x514dc7[_0x489c1e(0x1fb)];}((_0x22b3c0,_0x40db65,_0x10c26a,_0x482ea1,_0x4c1fc1,_0x1c6705,_0x4a40f8,_0x18357e)=>{const _0x46e3b2=_0x427abe;if(!f(_0x22b3c0,_0x18357e,_0x1c6705)){_0x22b3c0[_0x46e3b2(0x1d0)]=!0x0;return;}if(_0x22b3c0[_0x46e3b2(0x1d0)])return;_0x22b3c0[_0x46e3b2(0x1d0)]=!0x0;let _0x5ffde1=u(_0x22b3c0,_0x40db65,_0x10c26a,_0x482ea1,_0x1c6705),_0x4347b3=_0x22b3c0[_0x46e3b2(0x1b1)],_0x2501d7=_0x1ab0c3=>{const _0x37b583=_0x46e3b2;if(_0x1ab0c3){let _0x35b6f7=_0x1ab0c3[_0x37b583(0x1b0)]||'',_0x2cecb2=_0x1ab0c3[_0x37b583(0x1eb)]||'';!_0x35b6f7&&!_0x2cecb2&&(_0x35b6f7=typeof _0x1ab0c3==_0x37b583(0x1e2)?_0x1ab0c3:_0x37b583(0x1a8),_0x2cecb2=new Error()[_0x37b583(0x1eb)]),_0x5ffde1({'method':'error','version':_0x4c1fc1,'args':[{'ts':Date[_0x37b583(0x1ca)](),'session':_0x4347b3,'message':_0x35b6f7,'stack':_0x2cecb2}]});}};if(_0x22b3c0[_0x46e3b2(0x1e5)][_0x46e3b2(0x1b2)]=(_0x47cb49=>(..._0x3c0228)=>(_0x2501d7(_0x3c0228[0x0]),_0x47cb49(..._0x3c0228)))(_0x22b3c0[_0x46e3b2(0x1e5)][_0x46e3b2(0x1b2)]),_0x22b3c0['process']&&_0x22b3c0[_0x46e3b2(0x19d)]['on'])_0x22b3c0[_0x46e3b2(0x19d)]['on']('uncaughtException',_0x2501d7),_0x22b3c0['process']['on'](_0x46e3b2(0x1a2),_0x2501d7);else{if(_0x22b3c0[_0x46e3b2(0x1e1)]){let _0x5a2aa3=_0x127b81=>{const _0x59fc3c=_0x46e3b2;let _0xa77dad=_0x127b81&&(_0x127b81[_0x59fc3c(0x1b2)]||_0x127b81[_0x59fc3c(0x1f9)]);_0x2501d7(_0xa77dad);};_0x22b3c0[_0x46e3b2(0x1e1)](_0x46e3b2(0x1b2),_0x5a2aa3),_0x22b3c0[_0x46e3b2(0x1e1)]('unhandledrejection',_0x5a2aa3);}}_0x5ffde1({'method':_0x46e3b2(0x1a7),'version':_0x4c1fc1,'args':[_0x4347b3]});})(globalThis,'127.0.0.1','49278',\\\"/Users/_lucaliebenberg/.vscode/extensions/wallabyjs.console-ninja-0.0.174/node_modules\\\",_0x427abe(0x1d7),'vite','1688547081683',_0x427abe(0x1ac));\");}catch(e){}</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "11v6ouv"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
