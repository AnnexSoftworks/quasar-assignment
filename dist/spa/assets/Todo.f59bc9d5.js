import{c as m_,a as ma,h as p_,b as g_,a4 as __,a6 as $r,a7 as pa,a8 as Dt,ab as Dd,a9 as pt,aa as Dl,al as y_,am as I_,an as Vl,ao as v_,ap as w_,ad as E_,aq as Nl,M as T_,ar as A_,as as R_,ae as b_,ac as P_,at as S_,ah as C_}from"./index.78bd9429.js";import{Q as k_,a as D_,b as ga}from"./QList.2832c330.js";import{Q as V_}from"./QPage.a88c9963.js";import{_ as N_}from"./plugin-vue_export-helper.21dcd24c.js";var x_=m_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(n,{slots:e}){const t=ma(()=>parseInt(n.lines,10)),r=ma(()=>"q-item__label"+(n.overline===!0?" q-item__label--overline text-overline":"")+(n.caption===!0?" q-item__label--caption text-caption":"")+(n.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),i=ma(()=>n.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>p_("div",{style:i.value,class:r.value},g_(e.default))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},O_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):O_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new M_;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class M_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L_=function(n){const e=Vd(n);return Nd.encodeByteArray(e,!0)},zs=function(n){return L_(n).replace(/\./g,"")},xd=function(n){try{return Nd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ks(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!F_(t)||(n[t]=Ks(n[t],e[t]));return n}function F_(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=()=>U_().__FIREBASE_DEFAULTS__,q_=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$_=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xd(n[1]);return e&&JSON.parse(e)},Lc=()=>{try{return B_()||q_()||$_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Od=()=>{var n;return(n=Lc())===null||n===void 0?void 0:n.config},G_=n=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[zs(JSON.stringify(t)),zs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Fc(){var n;const e=(n=Lc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function W_(){return typeof self=="object"&&self.self===self}function Md(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ld(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function H_(){return!Fc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _i(){try{return typeof indexedDB=="object"}catch{return!1}}function Q_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="FirebaseError";class Ve extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Y_,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Un.prototype.create)}}class Un{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?J_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ve(i,a,r)}}function J_(n,e){return n.replace(X_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const X_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Z_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ga(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ol(s)&&Ol(o)){if(!Ga(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ol(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ei(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Fd(n,e){const t=new ey(n,e);return t.subscribe.bind(t)}class ey{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ty(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_a),i.error===void 0&&(i.error=_a),i.complete===void 0&&(i.complete=_a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ty(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _a(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n){return n&&n._delegate?n._delegate:n}class ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new j_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iy(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ry(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ry(n){return n===ln?void 0:n}function iy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ny(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=[];var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Ud={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},oy=L.INFO,ay={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},cy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ay[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=oy,this._logHandler=cy,this._userLogHandler=null,Bc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ud[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}function uy(n){Bc.forEach(e=>{e.setLogLevel(n)})}function ly(n,e){for(const t of Bc){let r=null;e&&e.level&&(r=Ud[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:L[s].toLowerCase(),message:a,args:o,type:i.name})}}}const hy=(n,e)=>e.some(t=>n instanceof t);let Ml,Ll;function dy(){return Ml||(Ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fy(){return Ll||(Ll=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bd=new WeakMap,ja=new WeakMap,qd=new WeakMap,ya=new WeakMap,qc=new WeakMap;function my(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Bt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bd.set(t,n)}).catch(()=>{}),qc.set(e,n),e}function py(n){if(ja.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ja.set(n,e)}let za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gy(n){za=n(za)}function _y(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ia(this),e,...t);return qd.set(r,e.sort?e.sort():[e]),Bt(r)}:fy().includes(n)?function(...e){return n.apply(Ia(this),e),Bt(Bd.get(this))}:function(...e){return Bt(n.apply(Ia(this),e))}}function yy(n){return typeof n=="function"?_y(n):(n instanceof IDBTransaction&&py(n),hy(n,dy())?new Proxy(n,za):n)}function Bt(n){if(n instanceof IDBRequest)return my(n);if(ya.has(n))return ya.get(n);const e=yy(n);return e!==n&&(ya.set(n,e),qc.set(e,n)),e}const Ia=n=>qc.get(n);function Iy(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vy=["get","getKey","getAll","getAllKeys","count"],wy=["put","add","delete","clear"],va=new Map;function Fl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=wy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vy.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return va.set(e,s),s}gy(n=>({...n,get:(e,t,r)=>Fl(e,t)||n.get(e,t,r),has:(e,t)=>!!Fl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ty(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ty(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ka="@firebase/app",Ul="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new vo("@firebase/app"),Ay="@firebase/app-compat",Ry="@firebase/analytics-compat",by="@firebase/analytics",Py="@firebase/app-check-compat",Sy="@firebase/app-check",Cy="@firebase/auth",ky="@firebase/auth-compat",Dy="@firebase/database",Vy="@firebase/database-compat",Ny="@firebase/functions",xy="@firebase/functions-compat",Oy="@firebase/installations",My="@firebase/installations-compat",Ly="@firebase/messaging",Fy="@firebase/messaging-compat",Uy="@firebase/performance",By="@firebase/performance-compat",qy="@firebase/remote-config",$y="@firebase/remote-config-compat",Gy="@firebase/storage",jy="@firebase/storage-compat",zy="@firebase/firestore",Ky="@firebase/firestore-compat",Wy="firebase",Hy="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]",Qy={[Ka]:"fire-core",[Ay]:"fire-core-compat",[by]:"fire-analytics",[Ry]:"fire-analytics-compat",[Sy]:"fire-app-check",[Py]:"fire-app-check-compat",[Cy]:"fire-auth",[ky]:"fire-auth-compat",[Dy]:"fire-rtdb",[Vy]:"fire-rtdb-compat",[Ny]:"fire-fn",[xy]:"fire-fn-compat",[Oy]:"fire-iid",[My]:"fire-iid-compat",[Ly]:"fire-fcm",[Fy]:"fire-fcm-compat",[Uy]:"fire-perf",[By]:"fire-perf-compat",[qy]:"fire-rc",[$y]:"fire-rc-compat",[Gy]:"fire-gcs",[jy]:"fire-gcs-compat",[zy]:"fire-fst",[Ky]:"fire-fst-compat","fire-js":"fire-js",[Wy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Map,yi=new Map;function Ws(n,e){try{n.container.addComponent(e)}catch(t){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $d(n,e){n.container.addOrOverwriteComponent(e)}function Gt(n){const e=n.name;if(yi.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,n);for(const t of $t.values())Ws(t,n);return!0}function Gd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yy(n,e,t=qt){Gd(n,e).clearInstance(t)}function Jy(){yi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new Un("app","Firebase",Xy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=Hy;function wo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(t||(t=Od()),!t)throw vt.create("no-options");const s=$t.get(i);if(s){if(Ga(t,s.options)&&Ga(r,s.config))return s;throw vt.create("duplicate-app",{appName:i})}const o=new sy(i);for(const c of yi.values())o.addComponent(c);const a=new Zy(t,r,o);return $t.set(i,a),a}function eI(n=qt){const e=$t.get(n);if(!e&&n===qt&&Od())return wo();if(!e)throw vt.create("no-app",{appName:n});return e}function tI(){return Array.from($t.values())}async function jd(n){const e=n.name;$t.has(e)&&($t.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function He(n,e,t){var r;let i=(r=Qy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}Gt(new ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function zd(n,e){if(n!==null&&typeof n!="function")throw vt.create("invalid-log-argument");ly(n,e)}function Kd(n){uy(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebase-heartbeat-database",rI=1,Ii="firebase-heartbeat-store";let wa=null;function Wd(){return wa||(wa=Iy(nI,rI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ii)}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),wa}async function iI(n){try{return await(await Wd()).transaction(Ii).objectStore(Ii).get(Hd(n))}catch(e){if(e instanceof Ve)Pn.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(t.message)}}}async function Bl(n,e){try{const r=(await Wd()).transaction(Ii,"readwrite");await r.objectStore(Ii).put(e,Hd(n)),await r.done}catch(t){if(t instanceof Ve)Pn.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(r.message)}}}function Hd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1024,oI=30*24*60*60*1e3;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ql();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ql(),{heartbeatsToSend:t,unsentEntries:r}=cI(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ql(){return new Date().toISOString().substring(0,10)}function cI(n,e=sI){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$l(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$l(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _i()?Q_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $l(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n){Gt(new ht("platform-logger",e=>new Ey(e),"PRIVATE")),Gt(new ht("heartbeat",e=>new aI(e),"PRIVATE")),He(Ka,Ul,n),He(Ka,Ul,"esm2017"),He("fire-js","")}lI("");var hI=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:en,_DEFAULT_ENTRY_NAME:qt,_addComponent:Ws,_addOrOverwriteComponent:$d,_apps:$t,_clearComponents:Jy,_components:yi,_getProvider:Gd,_registerComponent:Gt,_removeServiceInstance:Yy,deleteApp:jd,getApp:eI,getApps:tI,initializeApp:wo,onLog:zd,registerVersion:He,setLogLevel:Kd,FirebaseError:Ve},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t){this._delegate=e,this.firebase=t,Ws(e,new ht("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),jd(this._delegate)))}_getService(e,t=qt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=qt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ws(this._delegate,e)}_addOrOverwriteComponent(e){$d(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Gl=new Un("app-compat","Firebase",fI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:He,setLogLevel:Kd,onLog:zd,apps:null,SDK_VERSION:en,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:hI}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||qt,!xl(e,u))throw Gl.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=wo(u,l);if(xl(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Gt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Gl.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Ks(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){const n=mI(dI);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Qd,extendNamespace:e,createSubscribe:Fd,ErrorFactory:Un,deepExtend:Ks});function e(t){Ks(n,t)}return n}const pI=Qd();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new vo("@firebase/app-compat"),gI="@firebase/app-compat",_I="0.2.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){He(gI,_I,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(W_()&&self.firebase!==void 0){jl.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&jl.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const br=pI;yI();var II="firebase",vI="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br.registerVersion(II,vI,"app-compat");function $c(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Gr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Wn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Yd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EI=wI,TI=Yd,Jd=new Un("auth","Firebase",Yd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new vo("@firebase/auth");function AI(n,...e){Hs.logLevel<=L.WARN&&Hs.warn(`Auth (${en}): ${n}`,...e)}function xs(n,...e){Hs.logLevel<=L.ERROR&&Hs.error(`Auth (${en}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,...e){throw Gc(n,...e)}function Ee(n,...e){return Gc(n,...e)}function Xd(n,e,t){const r=Object.assign(Object.assign({},TI()),{[e]:t});return new Un("auth","Firebase",r).create(e,{appName:n.name})}function Pr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(n,"argument-error"),Xd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Jd.create(n,...e)}function y(n,e,...t){if(!n)throw Gc(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xs(e),new Error(e)}function Ye(n,e){n||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jc(){return zl()==="http:"||zl()==="https:"}function zl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jc()||Md()||"connection"in navigator)?navigator.onLine:!0}function bI(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile=K_()||Uc()}get(){return RI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n,e){Ye(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Ki(3e4,6e4);function ce(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function le(n,e,t,r,i={}){return ef(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Zd.fetch()(tf(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ef(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},PI),e);try{const i=new CI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ti(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ti(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ti(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xd(n,l,u);Ae(n,l)}}catch(i){if(i instanceof Ve)throw i;Ae(n,"network-request-failed",{message:String(i)})}}async function Rt(n,e,t,r,i={}){const s=await le(n,e,t,r,i);return"mfaPendingCredential"in s&&Ae(n,"multi-factor-auth-required",{_serverResponse:s}),s}function tf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?zc(n.config,i):`${n.config.apiScheme}://${i}`}class CI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ee(this.auth,"network-request-failed")),SI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ee(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(n,e){return le(n,"POST","/v1/accounts:delete",e)}async function DI(n,e){return le(n,"POST","/v1/accounts:update",e)}async function VI(n,e){return le(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NI(n,e=!1){const t=S(n),r=await t.getIdToken(e),i=Eo(r);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ai(Ea(i.auth_time)),issuedAtTime:ai(Ea(i.iat)),expirationTime:ai(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ea(n){return Number(n)*1e3}function Eo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=xd(t);return i?JSON.parse(i):(xs("Failed to decode base64 JWT payload"),null)}catch(i){return xs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xI(n){const e=Eo(n);return y(e,"internal-error"),y(typeof e.exp!="undefined","internal-error"),y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ve&&OI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function OI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Et(n,VI(t,{idToken:r}));y(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UI(s.providerUserInfo):[],a=FI(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nf(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function LI(n){const e=S(n);await wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UI(n){return n.map(e=>{var{providerId:t}=e,r=$c(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,e){const t=await ef(n,{},async()=>{const r=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=tf(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken!="undefined","internal-error"),y(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):xI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await BI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ei;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){y(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class En{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Et(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return NI(this,e)}reload(){return LI(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Et(this,kI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=t.createdAt)!==null&&u!==void 0?u:void 0,x=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:q,isAnonymous:$,providerData:U,stsTokenManager:ye}=t;y(D&&ye,e,"internal-error");const kt=Ei.fromJSON(this.name,ye);y(typeof D=="string",e,"internal-error"),Vt(h,e.name),Vt(d,e.name),y(typeof q=="boolean",e,"internal-error"),y(typeof $=="boolean",e,"internal-error"),Vt(f,e.name),Vt(I,e.name),Vt(v,e.name),Vt(w,e.name),Vt(C,e.name),Vt(x,e.name);const qr=new En({uid:D,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:$,photoURL:I,phoneNumber:f,tenantId:v,stsTokenManager:kt,createdAt:C,lastLoginAt:x});return U&&Array.isArray(U)&&(qr.providerData=U.map(Is=>Object.assign({},Is))),w&&(qr._redirectEventId=w),qr}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ei;i.updateFromServerResponse(t);const s=new En({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map;function qe(n){Ye(n instanceof Function,"Expected a class definition");let e=Kl.get(n);return e?(Ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rf.type="NONE";const lr=rf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,e,t){return`firebase:${n}:${e}:${t}`}class nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nr(qe(lr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qe(lr);const o=Tn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=En._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new nr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new nr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(af(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cf(e))return"Blackberry";if(uf(e))return"Webos";if(Kc(e))return"Safari";if((e.includes("chrome/")||of(e))&&!e.includes("edge/"))return"Chrome";if(Wi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sf(n=X()){return/firefox\//i.test(n)}function Kc(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function of(n=X()){return/crios\//i.test(n)}function af(n=X()){return/iemobile/i.test(n)}function Wi(n=X()){return/android/i.test(n)}function cf(n=X()){return/blackberry/i.test(n)}function uf(n=X()){return/webos/i.test(n)}function Sr(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qI(n=X()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function $I(n=X()){var e;return Sr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GI(){return Ld()&&document.documentMode===10}function lf(n=X()){return Sr(n)||Wi(n)||uf(n)||cf(n)||/windows phone/i.test(n)||af(n)}function jI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e=[]){let t;switch(n){case"Browser":t=Wl(X());break;case"Worker":t=`${Wl(X())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(n){return(await le(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function df(n,e){return le(n,"GET","/v2/recaptchaConfig",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){return n!==void 0&&n.getResponse!==void 0}function Ql(n){return n!==void 0&&n.enterprise!==void 0}class ff{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Wc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ee("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",KI().appendChild(r)})}function mf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const WI="https://www.google.com/recaptcha/enterprise.js?render=",HI="recaptcha-enterprise",QI="NO_RECAPTCHA";class pf{constructor(e){this.type=HI,this.auth=se(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{df(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ff(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ql(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(QI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Ql(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wc(WI+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function jt(n,e,t,r=!1){const i=new pf(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yl(this),this.idTokenSubscription=new Yl(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}async initializeRecaptchaConfig(){const e=await df(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ff(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new pf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Un("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qe(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&AI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function se(n){return S(n)}class Yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(qe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZI(n,e,t){const r=se(n);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=gf(e),{host:o,port:a}=ev(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tv()}function gf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ev(n){const e=gf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jl(o)}}}function Jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n,e){return le(n,"POST","/v1/accounts:resetPassword",ce(n,e))}async function yf(n,e){return le(n,"POST","/v1/accounts:update",e)}async function nv(n,e){return le(n,"POST","/v1/accounts:update",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(n,e){return Rt(n,"POST","/v1/accounts:signInWithPassword",ce(n,e))}async function To(n,e){return le(n,"POST","/v1/accounts:sendOobCode",ce(n,e))}async function rv(n,e){return To(n,e)}async function Aa(n,e){return To(n,e)}async function Ra(n,e){return To(n,e)}async function iv(n,e){return To(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){return Rt(n,"POST","/v1/accounts:signInWithEmailLink",ce(n,e))}async function ov(n,e){return Rt(n,"POST","/v1/accounts:signInWithEmailLink",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Cr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ti(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ti(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await jt(e,r,"signInWithPassword");return Ta(e,i)}else return Ta(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await jt(e,r,"signInWithPassword");return Ta(e,s)}else return Promise.reject(i)});case"emailLink":return sv(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return yf(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ov(e,{idToken:t,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(n,e){return Rt(n,"POST","/v1/accounts:signInWithIdp",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="http://localhost";class dt extends Cr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=$c(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return wt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wt(e,t)}buildRequest(){const e={requestUri:av,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n,e){return le(n,"POST","/v1/accounts:sendVerificationCode",ce(n,e))}async function uv(n,e){return Rt(n,"POST","/v1/accounts:signInWithPhoneNumber",ce(n,e))}async function lv(n,e){const t=await Rt(n,"POST","/v1/accounts:signInWithPhoneNumber",ce(n,e));if(t.temporaryProof)throw ti(n,"account-exists-with-different-credential",t);return t}const hv={USER_NOT_FOUND:"user-not-found"};async function dv(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Rt(n,"POST","/v1/accounts:signInWithPhoneNumber",ce(n,t),hv)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Cr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new An({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new An({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return uv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return lv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new An({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mv(n){const e=er(ei(n)).link,t=e?er(ei(e)).deep_link_id:null,r=er(ei(n)).deep_link_id;return(r?er(ei(r)).link:null)||r||t||e||n}class Ao{constructor(e){var t,r,i,s,o,a;const c=er(ei(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=fv((i=c.mode)!==null&&i!==void 0?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=mv(e);try{return new Ao(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.providerId=tn.PROVIDER_ID}static credential(e,t){return Ti._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ao.parseLink(t);return y(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}tn.PROVIDER_ID="password";tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends bt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rr extends kr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return y("providerId"in t&&"signInMethod"in t,"argument-error"),dt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),dt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new rr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends kr{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends kr{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="http://localhost";class hr extends Cr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return wt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new hr(r,s)}static _create(e,t){return new hr(e,t)}buildRequest(){return{requestUri:pv,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="saml.";class Qs extends bt{constructor(e){y(e.startsWith(gv),"argument-error"),super(e)}static credentialFromResult(e){return Qs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Qs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=hr.fromJSON(e);return y(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return hr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends kr{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nt.credential(t,r)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(n,e){return Rt(n,"POST","/v1/accounts:signUp",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=Xl(r);return new Ke({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Xl(r);return new Ke({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Xl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(n){var e;const t=se(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ke({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Os(t,{returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Ve{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ys.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ys(e,t,r,i)}}function If(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ys._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e){const t=S(n);await Ro(!0,t,e);const{providerUserInfo:r}=await DI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=vf(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Hc(n,e,t=!1){const r=await Et(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ke._forOperation(n,"link",r)}async function Ro(n,e,t){await wi(e);const r=vf(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";y(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Et(n,If(r,i,e,n),t);y(s.idToken,r,"internal-error");const o=Eo(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(n.uid===a,r,"user-mismatch"),Ke._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(n,e,t=!1){const r="signIn",i=await If(n,r,e),s=await Ke._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function bo(n,e){return Ef(se(n),e)}async function Tf(n,e){const t=S(n);return await Ro(!1,t,e.providerId),Hc(t,e)}async function Af(n,e){return wf(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n,e){return Rt(n,"POST","/v1/accounts:signInWithCustomToken",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(n,e){const t=se(n),r=await Iv(t,{token:e,returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Qc._fromServerResponse(e,t):"totpInfo"in t?Yc._fromServerResponse(e,t):Ae(e,"internal-error")}}class Qc extends Hi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Qc(t)}}class Yc extends Hi{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Yc(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n,e,t){var r;y(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(n,e,t){var r;const i=se(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await jt(i,s,"getOobCode",!0);t&&ir(i,o,t),await Aa(i,o)}else t&&ir(i,s,t),await Aa(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await jt(i,s,"getOobCode",!0);t&&ir(i,a,t),await Aa(i,a)}else return Promise.reject(o)})}async function Ev(n,e,t){await _f(S(n),{oobCode:e,newPassword:t})}async function Tv(n,e){await nv(S(n),{oobCode:e})}async function Rf(n,e){const t=S(n),r=await _f(t,{oobCode:e}),i=r.requestType;switch(y(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(r.mfaInfo,t,"internal-error");default:y(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Hi._fromServerResponse(se(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Av(n,e){const{data:t}=await Rf(S(n),e);return t.email}async function Rv(n,e,t){var r;const i=se(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await jt(i,s,"signUpPassword");o=Os(i,u)}else o=Os(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await jt(i,s,"signUpPassword");return Os(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Ke._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function bv(n,e,t){return bo(S(n),tn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n,e,t){var r;const i=se(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){y(c.handleCodeInApp,i,"argument-error"),c&&ir(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await jt(i,s,"getOobCode",!0);o(a,t),await Ra(i,a)}else o(s,t),await Ra(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await jt(i,s,"getOobCode",!0);o(c,t),await Ra(i,c)}else return Promise.reject(a)})}function Sv(n,e){const t=Ao.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Cv(n,e,t){const r=S(n),i=tn.credentialWithLink(e,t||vi());return y(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),bo(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e){return le(n,"POST","/v1/accounts:createAuthUri",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n,e){const t=jc()?vi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await kv(S(n),r);return i||[]}async function Vv(n,e){const t=S(n),r=await n.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&ir(t.auth,i,e);const{email:s}=await rv(t.auth,i);s!==n.email&&await n.reload()}async function Nv(n,e,t){const r=S(n),i=await n.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};t&&ir(r.auth,s,t);const{email:o}=await iv(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(n,e){return le(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Et(r,xv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Mv(n,e){return bf(S(n),e,null)}function Lv(n,e){return bf(S(n),null,e)}async function bf(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Et(n,yf(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=Eo(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new sr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Uv(s,i);case"github.com":return new Bv(s,i);case"google.com":return new qv(s,i);case"twitter.com":return new $v(s,i,n.screenName||null);case"custom":case"anonymous":return new sr(s,null);default:return new sr(s,r,i)}}class sr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Pf extends sr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Uv extends sr{constructor(e,t){super(e,"facebook.com",t)}}class Bv extends Pf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class qv extends sr{constructor(e,t){super(e,"google.com",t)}}class $v extends Pf{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Gv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Fv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new _n("enroll",e,t)}static _fromMfaPendingCredential(e){return new _n("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return _n._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _n._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=se(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Hi._fromServerResponse(r,a));y(i.mfaPendingCredential,r,"internal-error");const o=_n._fromMfaPendingCredential(i.mfaPendingCredential);return new Jc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Ke._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return y(t.user,r,"internal-error"),Ke._forOperation(t.user,t.operationType,u);default:Ae(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function jv(n,e){var t;const r=S(n),i=e;return y(e.customData.operationType,r,"argument-error"),y((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Jc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:start",ce(n,e))}function Kv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:finalize",ce(n,e))}function Wv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ce(n,e))}class Xc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Hi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Xc(e)}async getSession(){return _n._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Et(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Et(this.user,Wv(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ba=new WeakMap;function Hv(n){const e=S(n);return ba.has(e)||ba.set(e,Xc._fromUser(e)),ba.get(e)}const Js="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Js,"1"),this.storage.removeItem(Js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(){const n=X();return Kc(n)||Sr(n)}const Yv=1e3,Jv=10;class Cf extends Sf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Qv()&&jI(),this.fallbackToPolling=lf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cf.type="LOCAL";const Zc=Cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends Sf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kf.type="SESSION";const Sn=kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Po(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Xv(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Po.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Qi("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return window}function ew(n){ae().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return typeof ae().WorkerGlobalScope!="undefined"&&typeof ae().importScripts=="function"}async function tw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rw(){return eu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firebaseLocalStorageDb",iw=1,Xs="firebaseLocalStorage",Vf="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function So(n,e){return n.transaction([Xs],e?"readwrite":"readonly").objectStore(Xs)}function sw(){const n=indexedDB.deleteDatabase(Df);return new Yi(n).toPromise()}function Wa(){const n=indexedDB.open(Df,iw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xs,{keyPath:Vf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xs)?e(r):(r.close(),await sw(),e(await Wa()))})})}async function Zl(n,e,t){const r=So(n,!0).put({[Vf]:e,value:t});return new Yi(r).toPromise()}async function ow(n,e){const t=So(n,!1).get(e),r=await new Yi(t).toPromise();return r===void 0?null:r.value}function eh(n,e){const t=So(n,!0).delete(e);return new Yi(t).toPromise()}const aw=800,cw=3;class Nf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Po._getInstance(rw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tw(),!this.activeServiceWorker)return;this.sender=new Zv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await Zl(e,Js,"1"),await eh(e,Js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ow(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=So(i,!1).getAll();return new Yi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nf.type="LOCAL";const Ai=Nf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n,e){return le(n,"POST","/v2/accounts/mfaSignIn:start",ce(n,e))}function lw(n,e){return le(n,"POST","/v2/accounts/mfaSignIn:finalize",ce(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=500,dw=6e4,vs=1e12;class fw{constructor(e){this.auth=e,this.counter=vs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new mw(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||vs;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||vs;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||vs;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class mw{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;y(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=pw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},dw)},hw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function pw(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=mf("rcb"),gw=new Ki(3e4,6e4),_w="https://www.google.com/recaptcha/api.js?";class yw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ae().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return y(Iw(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Hl(ae().grecaptcha)?Promise.resolve(ae().grecaptcha):new Promise((r,i)=>{const s=ae().setTimeout(()=>{i(Ee(e,"network-request-failed"))},gw.get());ae()[Pa]=()=>{ae().clearTimeout(s),delete ae()[Pa];const a=ae().grecaptcha;if(!a||!Hl(a)){i(Ee(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${_w}?${Rr({onload:Pa,render:"explicit",hl:t})}`;Wc(o).catch(()=>{clearTimeout(s),i(Ee(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ae().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Iw(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class vw{async load(e){return new fw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="recaptcha",ww={theme:"light",type:"image"};class Ew{constructor(e,t,r=Object.assign({},ww)){this.parameters=r,this.type=xf,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=se(e),this.isInvisible=this.parameters.size==="invisible",y(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;y(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vw:new yw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ae()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(jc()&&!eu(),this.auth,"internal-error"),await Tw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await zI(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Tw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=An._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Aw(n,e,t){const r=se(n),i=await Co(r,e,S(t));return new tu(i,s=>bo(r,s))}async function Rw(n,e,t){const r=S(n);await Ro(!1,r,"phone");const i=await Co(r.auth,e,S(t));return new tu(i,s=>Tf(r,s))}async function bw(n,e,t){const r=S(n),i=await Co(r.auth,e,S(t));return new tu(i,s=>Af(r,s))}async function Co(n,e,t){var r;const i=await t.verify();try{y(typeof i=="string",n,"argument-error"),y(t.type===xf,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return y(o.type==="enroll",n,"internal-error"),(await zv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{y(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return y(a,n,"missing-multi-factor-info"),(await uw(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await cv(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Pw(n,e){await Hc(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.providerId=Qe.PROVIDER_ID,this.auth=se(e)}verifyPhoneNumber(e,t){return Co(this.auth,e,S(t))}static credential(e,t){return An._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qe.credentialFromTaggedObject(t)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?An._fromTokenResponse(t,r):null}}Qe.PROVIDER_ID="phone";Qe.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,e){return e?qe(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Cr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sw(n){return Ef(n.auth,new nu(n),n.bypassAuthState)}function Cw(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),wf(t,new nu(n),n.bypassAuthState)}async function kw(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Hc(t,new nu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sw;case"linkViaPopup":case"linkViaRedirect":return kw;case"reauthViaPopup":case"reauthViaRedirect":return Cw;default:Ae(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new Ki(2e3,1e4);async function Vw(n,e,t){const r=se(n);Pr(n,e,bt);const i=Bn(r,t);return new gt(r,"signInViaPopup",e,i).executeNotNull()}async function Nw(n,e,t){const r=S(n);Pr(r.auth,e,bt);const i=Bn(r.auth,t);return new gt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function xw(n,e,t){const r=S(n);Pr(r.auth,e,bt);const i=Bn(r.auth,t);return new gt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class gt extends Of{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gt.currentPopupAction&&gt.currentPopupAction.cancel(),gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dw.get())};e()}}gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="pendingRedirect",ci=new Map;class Mw extends Of{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const r=await Lw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lw(n,e){const t=Lf(e),r=Mf(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ru(n,e){return Mf(n)._set(Lf(e),"true")}function Fw(){ci.clear()}function iu(n,e){ci.set(n._key(),e)}function Mf(n){return qe(n._redirectPersistence)}function Lf(n){return Tn(Ow,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n,e,t){return Bw(n,e,t)}async function Bw(n,e,t){const r=se(n);Pr(n,e,bt),await r._initializationPromise;const i=Bn(r,t);return await ru(i,r),i._openRedirect(r,e,"signInViaRedirect")}function qw(n,e,t){return $w(n,e,t)}async function $w(n,e,t){const r=S(n);Pr(r.auth,e,bt),await r.auth._initializationPromise;const i=Bn(r.auth,t);await ru(i,r.auth);const s=await Ff(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Gw(n,e,t){return jw(n,e,t)}async function jw(n,e,t){const r=S(n);Pr(r.auth,e,bt),await r.auth._initializationPromise;const i=Bn(r.auth,t);await Ro(!1,r,e.providerId),await ru(i,r.auth);const s=await Ff(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function zw(n,e){return await se(n)._initializationPromise,ko(n,e,!1)}async function ko(n,e,t=!1){const r=se(n),i=Bn(r,e),o=await new Mw(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ff(n){const e=Qi(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=10*60*1e3;class Uf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ww(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kw&&this.cachedEventUids.clear(),this.cachedEventUids.has(th(e))}saveEventToCache(e){this.cachedEventUids.add(th(e)),this.lastProcessedEventTime=Date.now()}}function th(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ww(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e={}){return le(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qw=/^https?/;async function Yw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qf(n);for(const t of e)try{if(Jw(t))return}catch{}Ae(n,"unauthorized-domain")}function Jw(n){const e=vi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Qw.test(t))return!1;if(Hw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Ki(3e4,6e4);function nh(){const n=ae().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zw(n){return new Promise((e,t)=>{var r,i,s;function o(){nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nh(),t(Ee(n,"network-request-failed"))},timeout:Xw.get()})}if(!((i=(r=ae().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ae().gapi)===null||s===void 0)&&s.load)o();else{const a=mf("iframefcb");return ae()[a]=()=>{gapi.load?o():t(Ee(n,"network-request-failed"))},Wc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ms=null,e})}let Ms=null;function eE(n){return Ms=Ms||Zw(n),Ms}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new Ki(5e3,15e3),nE="__/auth/iframe",rE="emulator/auth/iframe",iE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oE(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zc(e,rE):`https://${n.config.authDomain}/${nE}`,r={apiKey:e.apiKey,appName:n.name,v:en},i=sE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Rr(r).slice(1)}`}async function aE(n){const e=await eE(n),t=ae().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:oE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ee(n,"network-request-failed"),a=ae().setTimeout(()=>{s(o)},tE.get());function c(){ae().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uE=500,lE=600,hE="_blank",dE="http://localhost";class rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fE(n,e,t,r=uE,i=lE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=X().toLowerCase();t&&(a=of(u)?hE:t),sf(u)&&(e=e||dE,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,I])=>`${d}${f}=${I},`,"");if($I(u)&&a!=="_self")return mE(e||"",a),new rh(null);const h=window.open(e||"",a,l);y(h,n,"popup-blocked");try{h.focus()}catch{}return new rh(h)}function mE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="__/auth/handler",gE="emulator/auth/handler",_E=encodeURIComponent("fac");async function Ha(n,e,t,r,i,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:en,eventId:i};if(e instanceof bt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Z_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof kr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${_E}=${encodeURIComponent(c)}`:"";return`${yE(n)}?${Rr(a).slice(1)}${u}`}function yE({config:n}){return n.emulator?zc(n,gE):`https://${n.authDomain}/${pE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="webStorageSupport";class IE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sn,this._completeRedirectFn=ko,this._overrideRedirectResult=iu}async _openPopup(e,t,r,i){var s;Ye((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ha(e,t,r,vi(),i);return fE(e,o,Qi())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ha(e,t,r,vi(),i);return ew(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ye(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await aE(e),r=new Uf(e);return t.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sa];o!==void 0&&t(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lf()||Kc()||Sr()}}const vE=IE;class wE{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return it("unexpected MultiFactorSessionType")}}}class su extends wE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new su(e)}_finalizeEnroll(e,t,r){return Kv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return lw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $f{constructor(){}static assertion(e){return su._fromCredential(e)}}$f.FACTOR_ID="phone";var ih="@firebase/auth",sh="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AE(n){Gt(new ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hf(n)},u=new JI(r,i,s,c);return XI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new ht("auth-internal",e=>{const t=se(e.getProvider("auth").getImmediate());return(r=>new EE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(ih,sh,TE(n)),He(ih,sh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=5*60;G_("authIdTokenMaxAge");AE("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=2e3;async function PE(n,e,t){var r;const{BuildInfo:i}=Cn();Ye(e.sessionId,"AuthEvent did not contain a session ID");const s=await VE(e.sessionId),o={};return Sr()?o.ibi=i.packageName:Wi()?o.apn=i.packageName:Ae(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ha(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function SE(n){const{BuildInfo:e}=Cn(),t={};Sr()?t.iosBundleId=e.packageName:Wi()?t.androidPackageName=e.packageName:Ae(n,"operation-not-supported-in-this-environment"),await qf(n,t)}function CE(n){const{cordova:e}=Cn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,qI()?"_blank":"_system","location=yes"),t(i)})})}async function kE(n,e,t){const{cordova:r}=Cn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Ee(n,"redirect-cancelled-by-user"))},bE))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Wi()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function DE(n){var e,t,r,i,s,o,a,c,u,l;const h=Cn();y(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),y(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)!="undefined",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),y(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function VE(n){const e=NE(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function NE(n){if(Ye(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=20;class OE extends Uf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function ME(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:UE(),postBody:null,tenantId:n.tenantId,error:Ee(n,"no-auth-event")}}function LE(n,e){return Qa()._set(Ya(n),e)}async function oh(n){const e=await Qa()._get(Ya(n));return e&&await Qa()._remove(Ya(n)),e}function FE(n,e){var t,r;const i=qE(e);if(i.includes("/__/auth/callback")){const s=Ls(i),o=s.firebaseError?BE(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Ee(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function UE(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<xE;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Qa(){return qe(Zc)}function Ya(n){return Tn("authEvent",n.config.apiKey,n.name)}function BE(n){try{return JSON.parse(n)}catch{return null}}function qE(n){const e=Ls(n),t=e.link?decodeURIComponent(e.link):void 0,r=Ls(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ls(i).link||i||r||t||n}function Ls(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return er(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=500;class GE{constructor(){this._redirectPersistence=Sn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ko,this._overrideRedirectResult=iu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new OE(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ae(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){DE(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Fw(),await this._originValidation(e);const o=ME(e,r,i);await LE(e,o);const a=await PE(e,o,t),c=await CE(a);return kE(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SE(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Cn(),o=setTimeout(async()=>{await oh(e),t.onEvent(ah())},$E),a=async l=>{clearTimeout(o);const h=await oh(e);let d=null;h&&(l==null?void 0:l.url)&&(d=FE(h,l.url)),t.onEvent(d||ah())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Cn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const jE=GE;function ah(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ee("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n,e){se(n)._logFramework(e)}var KE="@firebase/auth-compat",WE="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=1e3;function ui(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function QE(){return ui()==="http:"||ui()==="https:"}function Gf(n=X()){return!!((ui()==="file:"||ui()==="ionic:"||ui()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function YE(){return Uc()||Fc()}function JE(){return Ld()&&(document==null?void 0:document.documentMode)===11}function XE(n=X()){return/Edge\/\d+/.test(n)}function ZE(n=X()){return JE()||XE(n)}function jf(){try{const n=self.localStorage,e=Qi();if(n)return n.setItem(e,"1"),n.removeItem(e),ZE()?_i():!0}catch{return ou()&&_i()}return!1}function ou(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ca(){return(QE()||Md()||Gf())&&!YE()&&jf()&&!ou()}function zf(){return Gf()&&typeof document!="undefined"}async function eT(){return zf()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},HE);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function tT(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={LOCAL:"local",NONE:"none",SESSION:"session"},jr=y,Kf="persistence";function nT(n,e){if(jr(Object.values(Be).includes(e),n,"invalid-persistence-type"),Uc()){jr(e!==Be.SESSION,n,"unsupported-persistence-type");return}if(Fc()){jr(e===Be.NONE,n,"unsupported-persistence-type");return}if(ou()){jr(e===Be.NONE||e===Be.LOCAL&&_i(),n,"unsupported-persistence-type");return}jr(e===Be.NONE||jf(),n,"unsupported-persistence-type")}async function Ja(n){await n._initializationPromise;const e=Wf(),t=Tn(Kf,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function rT(n,e){const t=Wf();if(!t)return[];const r=Tn(Kf,n,e);switch(t.getItem(r)){case Be.NONE:return[lr];case Be.LOCAL:return[Ai,Sn];case Be.SESSION:return[Sn];default:return[]}}function Wf(){var n;try{return((n=tT())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=y;class Ft{constructor(){this.browserResolver=qe(vE),this.cordovaResolver=qe(jE),this.underlyingResolver=null,this._redirectPersistence=Sn,this._completeRedirectFn=ko,this._overrideRedirectResult=iu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return zf()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return iT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await eT();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){return n.unwrap()}function sT(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n){return Qf(n)}function aT(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new cT(n,jv(n,e))}else if(r){const i=Qf(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Qf(n){const{_tokenResponse:e}=n instanceof Ve?n.customData:n;if(!e)return null;if(!(n instanceof Ve)&&"temporaryProof"in e&&"phoneNumber"in e)return Qe.credentialFromResult(n);const t=e.providerId;if(!t||t===Gr.PASSWORD)return null;let r;switch(t){case Gr.GOOGLE:r=et;break;case Gr.FACEBOOK:r=Ze;break;case Gr.GITHUB:r=tt;break;case Gr.TWITTER:r=nt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?hr._create(t,a):dt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new rr(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ve?r.credentialFromError(n):r.credentialFromResult(n)}function xe(n,e){return e.catch(t=>{throw t instanceof Ve&&aT(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:oT(t),additionalUserInfo:Gv(t),user:_t.getOrCreate(i)}})}async function Xa(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>xe(n,t.confirm(r))}}class cT{constructor(e,t){this.resolver=t,this.auth=sT(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xe(Hf(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._delegate=e,this.multiFactor=Hv(e)}static getOrCreate(e){return _t.USER_MAP.has(e)||_t.USER_MAP.set(e,new _t(e)),_t.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xe(this.auth,Tf(this._delegate,e))}async linkWithPhoneNumber(e,t){return Xa(this.auth,Rw(this._delegate,e,t))}async linkWithPopup(e){return xe(this.auth,xw(this._delegate,e,Ft))}async linkWithRedirect(e){return await Ja(se(this.auth)),Gw(this._delegate,e,Ft)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xe(this.auth,Af(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Xa(this.auth,bw(this._delegate,e,t))}reauthenticateWithPopup(e){return xe(this.auth,Nw(this._delegate,e,Ft))}async reauthenticateWithRedirect(e){return await Ja(se(this.auth)),qw(this._delegate,e,Ft)}sendEmailVerification(e){return Vv(this._delegate,e)}async unlink(e){return await yv(this._delegate,e),this}updateEmail(e){return Mv(this._delegate,e)}updatePassword(e){return Lv(this._delegate,e)}updatePhoneNumber(e){return Pw(this._delegate,e)}updateProfile(e){return Ov(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Nv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_t.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=y;class Za{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;zr(r,"invalid-api-key",{appName:e.name}),zr(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Ft:void 0;this._delegate=t.initialize({options:{persistence:uT(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(EI),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_t.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){ZI(this._delegate,e,t)}applyActionCode(e){return Tv(this._delegate,e)}checkActionCode(e){return Rf(this._delegate,e)}confirmPasswordReset(e,t){return Ev(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return xe(this._delegate,Rv(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Dv(this._delegate,e)}isSignInWithEmailLink(e){return Sv(this._delegate,e)}async getRedirectResult(){zr(Ca(),this._delegate,"operation-not-supported-in-this-environment");const e=await zw(this._delegate,Ft);return e?xe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){zE(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=ch(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=ch(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return Pv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return wv(this._delegate,e,t||void 0)}async setPersistence(e){nT(this._delegate,e);let t;switch(e){case Be.SESSION:t=Sn;break;case Be.LOCAL:t=await qe(Ai)._isAvailable()?Ai:Zc;break;case Be.NONE:t=lr;break;default:return Ae("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xe(this._delegate,_v(this._delegate))}signInWithCredential(e){return xe(this._delegate,bo(this._delegate,e))}signInWithCustomToken(e){return xe(this._delegate,vv(this._delegate,e))}signInWithEmailAndPassword(e,t){return xe(this._delegate,bv(this._delegate,e,t))}signInWithEmailLink(e,t){return xe(this._delegate,Cv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Xa(this._delegate,Aw(this._delegate,e,t))}async signInWithPopup(e){return zr(Ca(),this._delegate,"operation-not-supported-in-this-environment"),xe(this._delegate,Vw(this._delegate,e,Ft))}async signInWithRedirect(e){return zr(Ca(),this._delegate,"operation-not-supported-in-this-environment"),await Ja(this._delegate),Uw(this._delegate,e,Ft)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Av(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Za.Persistence=Be;function ch(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&_t.getOrCreate(o)),error:e,complete:t}}function uT(n,e){const t=rT(n,e);if(typeof self!="undefined"&&!t.includes(Ai)&&t.push(Ai),typeof window!="undefined")for(const r of[Zc,Sn])t.includes(r)||t.push(r);return t.includes(lr)||t.push(lr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.providerId="phone",this._delegate=new Qe(Hf(br.auth()))}static credential(e,t){return Qe.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}au.PHONE_SIGN_IN_METHOD=Qe.PHONE_SIGN_IN_METHOD;au.PROVIDER_ID=Qe.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=y;class hT{constructor(e,t,r=br.app()){var i;lT((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Ew(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="auth-compat";function fT(n){n.INTERNAL.registerComponent(new ht(dT,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Za(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Wn.EMAIL_SIGNIN,PASSWORD_RESET:Wn.PASSWORD_RESET,RECOVER_EMAIL:Wn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Wn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Wn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Wn.VERIFY_EMAIL}},EmailAuthProvider:tn,FacebookAuthProvider:Ze,GithubAuthProvider:tt,GoogleAuthProvider:et,OAuthProvider:rr,SAMLAuthProvider:Qs,PhoneAuthProvider:au,PhoneMultiFactorGenerator:$f,RecaptchaVerifier:hT,TwitterAuthProvider:nt,Auth:Za,AuthCredential:Cr,Error:Ve}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(KE,WE)}fT(br);var mT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A,cu=cu||{},k=mT||self;function Do(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ji(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function pT(n){return Object.prototype.hasOwnProperty.call(n,ka)&&n[ka]||(n[ka]=++gT)}var ka="closure_uid_"+(1e9*Math.random()>>>0),gT=0;function _T(n,e,t){return n.call.apply(n.bind,arguments)}function yT(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=_T:Pe=yT,Pe.apply(null,arguments)}function ws(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function pe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function nn(){this.s=this.s,this.o=this.o}var IT=0;nn.prototype.s=!1;nn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),IT!=0)&&pT(this)};nn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function uu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function uh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Do(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Se(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var vT=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",()=>{},e),k.removeEventListener("test",()=>{},e)}catch{}return n}();function Ri(n){return/^[\s\xa0]*$/.test(n)}function Vo(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function rt(n){return Vo().indexOf(n)!=-1}function lu(n){return lu[" "](n),n}lu[" "]=function(){};function wT(n,e){var t=fA;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var ET=rt("Opera"),dr=rt("Trident")||rt("MSIE"),Jf=rt("Edge"),ec=Jf||dr,Xf=rt("Gecko")&&!(Vo().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),TT=Vo().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function Zf(){var n=k.document;return n?n.documentMode:void 0}var tc;e:{var Da="",Va=function(){var n=Vo();if(Xf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Jf)return/Edge\/([\d\.]+)/.exec(n);if(dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(TT)return/WebKit\/(\S+)/.exec(n);if(ET)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Va&&(Da=Va?Va[1]:""),dr){var Na=Zf();if(Na!=null&&Na>parseFloat(Da)){tc=String(Na);break e}}tc=Da}var nc;if(k.document&&dr){var lh=Zf();nc=lh||parseInt(tc,10)||void 0}else nc=void 0;var AT=nc;function bi(n,e){if(Se.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Xf){e:{try{lu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:RT[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&bi.$.h.call(this)}}pe(bi,Se);var RT={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Xi="closure_listenable_"+(1e6*Math.random()|0),bT=0;function PT(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++bT,this.fa=this.ia=!1}function No(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function hu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function ST(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function em(n){const e={};for(const t in n)e[t]=n[t];return e}const hh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tm(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<hh.length;s++)t=hh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function xo(n){this.src=n,this.g={},this.h=0}xo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ic(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new PT(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function rc(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Yf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(No(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ic(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var du="closure_lm_"+(1e6*Math.random()|0),xa={};function nm(n,e,t,r,i){if(r&&r.once)return im(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)nm(n,e[s],t,r,i);return null}return t=pu(t),n&&n[Xi]?n.O(e,t,Ji(r)?!!r.capture:!!r,i):rm(n,e,t,!1,r,i)}function rm(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ji(i)?!!i.capture:!!i,a=mu(n);if(a||(n[du]=a=new xo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=CT(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)vT||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(om(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function CT(){function n(t){return e.call(n.src,n.listener,t)}const e=kT;return n}function im(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)im(n,e[s],t,r,i);return null}return t=pu(t),n&&n[Xi]?n.P(e,t,Ji(r)?!!r.capture:!!r,i):rm(n,e,t,!0,r,i)}function sm(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)sm(n,e[s],t,r,i);else r=Ji(r)?!!r.capture:!!r,t=pu(t),n&&n[Xi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ic(s,t,r,i),-1<t&&(No(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=mu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ic(e,t,r,i)),(t=-1<n?e[n]:null)&&fu(t))}function fu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Xi])rc(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(om(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=mu(e))?(rc(t,n),t.h==0&&(t.src=null,e[du]=null)):No(n)}}}function om(n){return n in xa?xa[n]:xa[n]="on"+n}function kT(n,e){if(n.fa)n=!0;else{e=new bi(e,this);var t=n.listener,r=n.la||n.src;n.ia&&fu(n),n=t.call(r,e)}return n}function mu(n){return n=n[du],n instanceof xo?n:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function pu(n){return typeof n=="function"?n:(n[Oa]||(n[Oa]=function(e){return n.handleEvent(e)}),n[Oa])}function me(){nn.call(this),this.i=new xo(this),this.S=this,this.J=null}pe(me,nn);me.prototype[Xi]=!0;me.prototype.removeEventListener=function(n,e,t,r){sm(this,n,e,t,r)};function Te(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Se(e,n);else if(e instanceof Se)e.target=e.target||n;else{var i=e;e=new Se(r,n),tm(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Es(o,r,!0,e)&&i}if(o=e.g=n,i=Es(o,r,!0,e)&&i,i=Es(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Es(o,r,!1,e)&&i}me.prototype.N=function(){if(me.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)No(t[r]);delete n.g[e],n.h--}}this.J=null};me.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};me.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Es(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&rc(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var gu=k.JSON.stringify;class DT{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function VT(){var n=_u;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class NT{constructor(){this.h=this.g=null}add(e,t){const r=am.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var am=new DT(()=>new xT,n=>n.reset());class xT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function OT(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function MT(n){k.setTimeout(()=>{throw n},0)}let Pi,Si=!1,_u=new NT,cm=()=>{const n=k.Promise.resolve(void 0);Pi=()=>{n.then(LT)}};var LT=()=>{for(var n;n=VT();){try{n.h.call(n.g)}catch(t){MT(t)}var e=am;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Si=!1};function Oo(n,e){me.call(this),this.h=n||1,this.g=e||k,this.j=Pe(this.qb,this),this.l=Date.now()}pe(Oo,me);A=Oo.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Te(this,"tick"),this.ga&&(yu(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){Oo.$.N.call(this),yu(this),delete this.g};function Iu(n,e,t){if(typeof n=="function")t&&(n=Pe(n,t));else if(n&&typeof n.handleEvent=="function")n=Pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function um(n){n.g=Iu(()=>{n.g=null,n.i&&(n.i=!1,um(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class FT extends nn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:um(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(n){nn.call(this),this.h=n,this.g={}}pe(Ci,nn);var dh=[];function lm(n,e,t,r){Array.isArray(t)||(t&&(dh[0]=t.toString()),t=dh);for(var i=0;i<t.length;i++){var s=nm(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function hm(n){hu(n.g,function(e,t){this.g.hasOwnProperty(t)&&fu(e)},n),n.g={}}Ci.prototype.N=function(){Ci.$.N.call(this),hm(this)};Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mo(){this.g=!0}Mo.prototype.Ea=function(){this.g=!1};function UT(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function BT(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function tr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+$T(n,t)+(r?" "+r:"")})}function qT(n,e){n.info(function(){return"TIMEOUT: "+e})}Mo.prototype.info=function(){};function $T(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gu(t)}catch{return e}}var qn={},fh=null;function Lo(){return fh=fh||new me}qn.Ta="serverreachability";function dm(n){Se.call(this,qn.Ta,n)}pe(dm,Se);function ki(n){const e=Lo();Te(e,new dm(e))}qn.STAT_EVENT="statevent";function fm(n,e){Se.call(this,qn.STAT_EVENT,n),this.stat=e}pe(fm,Se);function De(n){const e=Lo();Te(e,new fm(e,n))}qn.Ua="timingevent";function mm(n,e){Se.call(this,qn.Ua,n),this.size=e}pe(mm,Se);function Zi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var Fo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vu(){}vu.prototype.h=null;function mh(n){return n.h||(n.h=n.i())}function gm(){}var es={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function wu(){Se.call(this,"d")}pe(wu,Se);function Eu(){Se.call(this,"c")}pe(Eu,Se);var sc;function Uo(){}pe(Uo,vu);Uo.prototype.g=function(){return new XMLHttpRequest};Uo.prototype.i=function(){return{}};sc=new Uo;function ts(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Ci(this),this.P=GT,n=ec?125:void 0,this.V=new Oo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _m}function _m(){this.i=null,this.g="",this.h=!1}var GT=45e3,oc={},Zs={};A=ts.prototype;A.setTimeout=function(n){this.P=n};function ac(n,e,t){n.L=1,n.v=qo(Tt(e)),n.s=t,n.S=!0,ym(n,null)}function ym(n,e){n.G=Date.now(),ns(n),n.A=Tt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),bm(t.i,"t",r),n.C=0,t=n.l.J,n.h=new _m,n.g=Wm(n.l,t?e:null,!n.s),0<n.O&&(n.M=new FT(Pe(n.Pa,n,n.g),n.O)),lm(n.U,n.g,"readystatechange",n.nb),e=n.I?em(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ki(),UT(n.j,n.u,n.A,n.m,n.W,n.s)}A.nb=function(n){n=n.target;const e=this.M;e&&st(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const l=st(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ec||this.g&&(this.h.h||this.g.ja()||yh(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ki(3):ki(2)),Bo(this);var t=this.g.da();this.ca=t;t:if(Im(this)){var r=yh(this.g);n="";var i=r.length,s=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){yn(this),li(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,BT(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ri(a)){var u=a;break t}}u=null}if(t=u)tr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,t);else{this.i=!1,this.o=3,De(12),yn(this),li(this);break e}}this.S?(vm(this,l,o),ec&&this.i&&l==3&&(lm(this.U,this.V,"tick",this.mb),this.V.start())):(tr(this.j,this.m,o,null),cc(this,o)),l==4&&yn(this),this.i&&!this.J&&(l==4?Gm(this.l,this):(this.i=!1,ns(this)))}else lA(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),yn(this),li(this)}}}catch{}finally{}};function Im(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function vm(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=jT(n,t),i==Zs){e==4&&(n.o=4,De(14),r=!1),tr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==oc){n.o=4,De(15),tr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else tr(n.j,n.m,i,null),cc(n,i);Im(n)&&i!=Zs&&i!=oc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,De(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Su(e),e.M=!0,De(11))):(tr(n.j,n.m,t,"[Invalid Chunked Response]"),yn(n),li(n))}A.mb=function(){if(this.g){var n=st(this.g),e=this.g.ja();this.C<e.length&&(Bo(this),vm(this,n,e),this.i&&n!=4&&ns(this))}};function jT(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Zs:(t=Number(e.substring(t,r)),isNaN(t)?oc:(r+=1,r+t>e.length?Zs:(e=e.slice(r,r+t),n.C=r+t,e)))}A.cancel=function(){this.J=!0,yn(this)};function ns(n){n.Y=Date.now()+n.P,wm(n,n.P)}function wm(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Zi(Pe(n.lb,n),e)}function Bo(n){n.B&&(k.clearTimeout(n.B),n.B=null)}A.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(qT(this.j,this.A),this.L!=2&&(ki(),De(17)),yn(this),this.o=2,li(this)):wm(this,this.Y-n)};function li(n){n.l.H==0||n.J||Gm(n.l,n)}function yn(n){Bo(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,yu(n.V),hm(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function cc(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||uc(t.i,n))){if(!n.K&&uc(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)no(t),jo(t);else break e;Pu(t),De(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Zi(Pe(t.ib,t),6e3));if(1>=Cm(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else In(t,11)}else if((n.K||t.g==n)&&no(t),!Ri(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Tu(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,K(r.I,r.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Km(r,r.J?r.pa:null,r.Y),o.K){km(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Bo(a),ns(a)),r.g=o}else qm(r);0<t.j.length&&zo(t)}else u[0]!="stop"&&u[0]!="close"||In(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?In(t,7):bu(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}ki(4)}catch{}}function zT(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Do(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function KT(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(Do(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Em(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Do(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=KT(n),r=zT(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WT(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Rn){this.h=n.h,eo(this,n.j),this.s=n.s,this.g=n.g,to(this,n.m),this.l=n.l;var e=n.i,t=new Di;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ph(this,t),this.o=n.o}else n&&(e=String(n).match(Tm))?(this.h=!1,eo(this,e[1]||"",!0),this.s=ni(e[2]||""),this.g=ni(e[3]||"",!0),to(this,e[4]),this.l=ni(e[5]||"",!0),ph(this,e[6]||"",!0),this.o=ni(e[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}Rn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ri(e,gh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ri(e,gh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ri(t,t.charAt(0)=="/"?YT:QT,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ri(t,XT)),n.join("")};function Tt(n){return new Rn(n)}function eo(n,e,t){n.j=t?ni(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function to(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ph(n,e,t){e instanceof Di?(n.i=e,ZT(n.i,n.h)):(t||(e=ri(e,JT)),n.i=new Di(e,n.h))}function K(n,e,t){n.i.set(e,t)}function qo(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ni(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ri(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,HT),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function HT(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var gh=/[#\/\?@]/g,QT=/[#\?:]/g,YT=/[#\?]/g,JT=/[#\?@]/g,XT=/#/g;function Di(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function rn(n){n.g||(n.g=new Map,n.h=0,n.i&&WT(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=Di.prototype;A.add=function(n,e){rn(this),this.i=null,n=Dr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Am(n,e){rn(n),e=Dr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Rm(n,e){return rn(n),e=Dr(n,e),n.g.has(e)}A.forEach=function(n,e){rn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){rn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){rn(this);let e=[];if(typeof n=="string")Rm(this,n)&&(e=e.concat(this.g.get(Dr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return rn(this),this.i=null,n=Dr(this,n),Rm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function bm(n,e,t){Am(n,e),0<t.length&&(n.i=null,n.g.set(Dr(n,e),uu(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Dr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ZT(n,e){e&&!n.j&&(rn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Am(this,r),bm(this,i,t))},n)),n.j=e}var eA=class{constructor(n,e){this.g=n,this.map=e}};function Pm(n){this.l=n||tA,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tA=10;function Sm(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Cm(n){return n.h?1:n.g?n.g.size:0}function uc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Tu(n,e){n.g?n.g.add(e):n.h=e}function km(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Pm.prototype.cancel=function(){if(this.i=Dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Dm(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return uu(n.i)}var nA=class{stringify(n){return k.JSON.stringify(n,void 0)}parse(n){return k.JSON.parse(n,void 0)}};function rA(){this.g=new nA}function iA(n,e,t){const r=t||"";try{Em(n,function(i,s){let o=i;Ji(i)&&(o=gu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sA(n,e){const t=new Mo;if(k.Image){const r=new Image;r.onload=ws(Ts,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ws(Ts,t,r,"TestLoadImage: error",!1,e),r.onabort=ws(Ts,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ws(Ts,t,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ts(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function rs(n){this.l=n.fc||null,this.j=n.ob||!1}pe(rs,vu);rs.prototype.g=function(){return new $o(this.l,this.j)};rs.prototype.i=function(n){return function(){return n}}({});function $o(n,e){me.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pe($o,me);var Au=0;A=$o.prototype;A.open=function(n,e){if(this.readyState!=Au)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Vi(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=Au};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vm(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Vm(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?is(this):Vi(this),this.readyState==3&&Vm(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,is(this))};A.Ya=function(n){this.g&&(this.response=n,is(this))};A.ka=function(){this.g&&is(this)};function is(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Vi(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Vi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty($o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var oA=k.JSON.parse;function ee(n){me.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nm,this.L=this.M=!1}pe(ee,me);var Nm="",aA=/^https?$/i,cA=["POST","PUT"];A=ee.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sc.g(),this.C=this.u?mh(this.u):mh(sc),this.g.onreadystatechange=Pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){_h(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=Yf(cA,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mm(this),0<this.B&&((this.L=uA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.ua,this)):this.A=Iu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){_h(this,s)}};function uA(n){return dr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof cu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function _h(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,xm(n),Go(n)}function xm(n){n.F||(n.F=!0,Te(n,"complete"),Te(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Te(this,"complete"),Te(this,"abort"),Go(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Go(this,!0)),ee.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Om(this):this.kb())};A.kb=function(){Om(this)};function Om(n){if(n.h&&typeof cu!="undefined"&&(!n.C[1]||st(n)!=4||n.da()!=2)){if(n.v&&st(n)==4)Iu(n.La,0,n);else if(Te(n,"readystatechange"),st(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Tm)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!aA.test(i?i.toLowerCase():"")}t=r}if(t)Te(n,"complete"),Te(n,"success");else{n.m=6;try{var s=2<st(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",xm(n)}}finally{Go(n)}}}}function Go(n,e){if(n.g){Mm(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Te(n,"ready");try{t.onreadystatechange=r}catch{}}}function Mm(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function st(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),oA(e)}};function yh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Nm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function lA(n){const e={};n=(n.g&&2<=st(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ri(n[r]))continue;var t=OT(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}ST(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lm(n){let e="";return hu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Ru(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Lm(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):K(n,e,t))}function Kr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Fm(n){this.Ga=0,this.j=[],this.l=new Mo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kr("baseRetryDelayMs",5e3,n),this.hb=Kr("retryDelaySeedMs",1e4,n),this.eb=Kr("forwardChannelMaxRetries",2,n),this.xa=Kr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Pm(n&&n.concurrentRequestLimit),this.Ja=new rA,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Fm.prototype;A.ra=8;A.H=1;function bu(n){if(Um(n),n.H==3){var e=n.W++,t=Tt(n.I);if(K(t,"SID",n.K),K(t,"RID",e),K(t,"TYPE","terminate"),ss(n,t),e=new ts(n,n.l,e),e.L=2,e.v=qo(Tt(t)),t=!1,k.navigator&&k.navigator.sendBeacon)try{t=k.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=Wm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ns(e)}zm(n)}function jo(n){n.g&&(Su(n),n.g.cancel(),n.g=null)}function Um(n){jo(n),n.u&&(k.clearTimeout(n.u),n.u=null),no(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function zo(n){if(!Sm(n.i)&&!n.m){n.m=!0;var e=n.Na;Pi||cm(),Si||(Pi(),Si=!0),_u.add(e,n),n.C=0}}function hA(n,e){return Cm(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Zi(Pe(n.Na,n,e),jm(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ts(this,this.l,n);let s=this.s;if(this.U&&(s?(s=em(s),tm(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Bm(this,i,e),t=Tt(this.I),K(t,"RID",n),K(t,"CVER",22),this.F&&K(t,"X-HTTP-Session-Id",this.F),ss(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Lm(s)))+"&"+e:this.o&&Ru(t,this.o,s)),Tu(this.i,i),this.bb&&K(t,"TYPE","init"),this.P?(K(t,"$req",e),K(t,"SID","null"),i.aa=!0,ac(i,t,null)):ac(i,t,e),this.H=2}}else this.H==3&&(n?Ih(this,n):this.j.length==0||Sm(this.i)||Ih(this))};function Ih(n,e){var t;e?t=e.m:t=n.W++;const r=Tt(n.I);K(r,"SID",n.K),K(r,"RID",t),K(r,"AID",n.V),ss(n,r),n.o&&n.s&&Ru(r,n.o,n.s),t=new ts(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Bm(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Tu(n.i,t),ac(t,r,e)}function ss(n,e){n.na&&hu(n.na,function(t,r){K(e,r,t)}),n.h&&Em({},function(t,r){K(e,r,t)})}function Bm(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Pe(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{iA(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function qm(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Pi||cm(),Si||(Pi(),Si=!0),_u.add(e,n),n.A=0}}function Pu(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Zi(Pe(n.Ma,n),jm(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,$m(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Zi(Pe(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,De(10),jo(this),$m(this))};function Su(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function $m(n){n.g=new ts(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Tt(n.wa);K(e,"RID","rpc"),K(e,"SID",n.K),K(e,"AID",n.V),K(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(e,"TO",n.qa),K(e,"TYPE","xmlhttp"),ss(n,e),n.o&&n.s&&Ru(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=qo(Tt(e)),t.s=null,t.S=!0,ym(t,n)}A.ib=function(){this.v!=null&&(this.v=null,jo(this),Pu(this),De(19))};function no(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function Gm(n,e){var t=null;if(n.g==e){no(n),Su(n),n.g=null;var r=2}else if(uc(n.i,e))t=e.F,km(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Lo(),Te(r,new mm(r,t)),zo(n)}else qm(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&hA(n,e)||r==2&&Pu(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:In(n,5);break;case 4:In(n,10);break;case 3:In(n,6);break;default:In(n,2)}}}function jm(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function In(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Pe(n.pb,n);t||(t=new Rn("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||eo(t,"https"),qo(t)),sA(t.toString(),r)}else De(2);n.H=0,n.h&&n.h.za(e),zm(n),Um(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),De(2)):(this.l.info("Failed to ping google.com"),De(1))};function zm(n){if(n.H=0,n.ma=[],n.h){const e=Dm(n.i);(e.length!=0||n.j.length!=0)&&(uh(n.ma,e),uh(n.ma,n.j),n.i.i.length=0,uu(n.j),n.j.length=0),n.h.ya()}}function Km(n,e,t){var r=t instanceof Rn?Tt(t):new Rn(t);if(r.g!="")e&&(r.g=e+"."+r.g),to(r,r.m);else{var i=k.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Rn(null);r&&eo(s,r),e&&(s.g=e),i&&to(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&K(r,t,e),K(r,"VER",n.ra),ss(n,r),r}function Wm(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ee(new rs({ob:!0})):new ee(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hm(){}A=Hm.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function ro(){if(dr&&!(10<=Number(AT)))throw Error("Environmental error: no available transport.")}ro.prototype.g=function(n,e){return new $e(n,e)};function $e(n,e){me.call(this),this.g=new Fm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ri(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ri(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Vr(this)}pe($e,me);$e.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;De(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Km(n,null,n.Y),zo(n)};$e.prototype.close=function(){bu(this.g)};$e.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=gu(n),n=t);e.j.push(new eA(e.fb++,n)),e.H==3&&zo(e)};$e.prototype.N=function(){this.g.h=null,delete this.j,bu(this.g),delete this.g,$e.$.N.call(this)};function Qm(n){wu.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}pe(Qm,wu);function Ym(){Eu.call(this),this.status=1}pe(Ym,Eu);function Vr(n){this.g=n}pe(Vr,Hm);Vr.prototype.Ba=function(){Te(this.g,"a")};Vr.prototype.Aa=function(n){Te(this.g,new Qm(n))};Vr.prototype.za=function(n){Te(this.g,new Ym)};Vr.prototype.ya=function(){Te(this.g,"b")};function dA(){this.blockSize=-1}function Je(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pe(Je,dA);Je.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ma(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Je.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ma(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ma(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ma(this,r),i=0;break}}this.h=i,this.i+=e};Je.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function j(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var fA={};function Cu(n){return-128<=n&&128>n?wT(n,function(e){return new j([e|0],0>e?-1:0)}):new j([n|0],0>n?-1:0)}function ot(n){if(isNaN(n)||!isFinite(n))return or;if(0>n)return ve(ot(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=lc;return new j(e,0)}function Jm(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ve(Jm(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ot(Math.pow(e,8)),r=or,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=ot(Math.pow(e,s)),r=r.R(s).add(ot(o))):(r=r.R(t),r=r.add(ot(o)))}return r}var lc=4294967296,or=Cu(0),hc=Cu(1),vh=Cu(16777216);A=j.prototype;A.ea=function(){if(je(this))return-ve(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:lc+r)*e,e*=lc}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(yt(this))return"0";if(je(this))return"-"+ve(this).toString(n);for(var e=ot(Math.pow(n,6)),t=this,r="";;){var i=so(t,e).g;t=io(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,yt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function yt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function je(n){return n.h==-1}A.X=function(n){return n=io(this,n),je(n)?-1:yt(n)?0:1};function ve(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new j(t,~n.h).add(hc)}A.abs=function(){return je(this)?ve(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new j(t,t[t.length-1]&-2147483648?-1:0)};function io(n,e){return n.add(ve(e))}A.R=function(n){if(yt(this)||yt(n))return or;if(je(this))return je(n)?ve(this).R(ve(n)):ve(ve(this).R(n));if(je(n))return ve(this.R(ve(n)));if(0>this.X(vh)&&0>n.X(vh))return ot(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,As(t,2*r+2*i),t[2*r+2*i+1]+=s*c,As(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,As(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,As(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new j(t,0)};function As(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Wr(n,e){this.g=n,this.h=e}function so(n,e){if(yt(e))throw Error("division by zero");if(yt(n))return new Wr(or,or);if(je(n))return e=so(ve(n),e),new Wr(ve(e.g),ve(e.h));if(je(e))return e=so(n,ve(e)),new Wr(ve(e.g),e.h);if(30<n.g.length){if(je(n)||je(e))throw Error("slowDivide_ only works with positive integers.");for(var t=hc,r=e;0>=r.X(n);)t=wh(t),r=wh(r);var i=Hn(t,1),s=Hn(r,1);for(r=Hn(r,2),t=Hn(t,2);!yt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Hn(r,1),t=Hn(t,1)}return e=io(n,i.R(e)),new Wr(i,e)}for(i=or;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ot(t),o=s.R(e);je(o)||0<o.X(n);)t-=r,s=ot(t),o=s.R(e);yt(s)&&(s=hc),i=i.add(s),n=io(n,o)}return new Wr(i,n)}A.gb=function(n){return so(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new j(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new j(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new j(t,this.h^n.h)};function wh(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new j(t,n.h)}function Hn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new j(i,n.h)}ro.prototype.createWebChannel=ro.prototype.g;$e.prototype.send=$e.prototype.u;$e.prototype.open=$e.prototype.m;$e.prototype.close=$e.prototype.close;Fo.NO_ERROR=0;Fo.TIMEOUT=8;Fo.HTTP_ERROR=6;pm.COMPLETE="complete";gm.EventType=es;es.OPEN="a";es.CLOSE="b";es.ERROR="c";es.MESSAGE="d";me.prototype.listen=me.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;Je.prototype.digest=Je.prototype.l;Je.prototype.reset=Je.prototype.reset;Je.prototype.update=Je.prototype.j;j.prototype.add=j.prototype.add;j.prototype.multiply=j.prototype.R;j.prototype.modulo=j.prototype.gb;j.prototype.compare=j.prototype.X;j.prototype.toNumber=j.prototype.ea;j.prototype.toString=j.prototype.toString;j.prototype.getBits=j.prototype.D;j.fromNumber=ot;j.fromString=Jm;var mA=function(){return new ro},pA=function(){return Lo()},La=Fo,gA=pm,_A=qn,Eh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yA=rs,Rs=gm,IA=ee,vA=Je,ar=j;const Th="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new vo("@firebase/firestore");function dc(){return zt.logLevel}function wA(n){zt.setLogLevel(n)}function _(n,...e){if(zt.logLevel<=L.DEBUG){const t=e.map(ku);zt.debug(`Firestore (${Nr}): ${n}`,...t)}}function ne(n,...e){if(zt.logLevel<=L.ERROR){const t=e.map(ku);zt.error(`Firestore (${Nr}): ${n}`,...t)}}function Xe(n,...e){if(zt.logLevel<=L.WARN){const t=e.map(ku);zt.warn(`Firestore (${Nr}): ${n}`,...t)}}function ku(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+n;throw ne(e),new Error(e)}function P(n,e){n||R()}function EA(n,e){n||R()}function T(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Ve{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(de.UNAUTHENTICATED))}shutdown(){}}class AA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class RA{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(P(typeof r.accessToken=="string"),new Xm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new de(e)}}class bA{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=de.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class PA{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new bA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(P(typeof t.token=="string"),this.R=t.token,new SA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function V(n,e){return n<e?-1:n>e?1:0}function fr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function ep(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new J(0,0))}static max(){return new b(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(),r===void 0?r=e.length-t:r>e.length-t&&R(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends Ni{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const DA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends Ni{construct(e,t,r){return new re(e,t,r)}static isValidIdentifier(e){return DA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(F.fromString(e))}static fromName(e){return new E(F.fromString(e).popFirst(5))}static empty(){return new E(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new F(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function fc(n){return n.fields.find(e=>e.kind===2)}function hn(n){return n.fields.filter(e=>e.kind!==2)}tp.UNKNOWN_ID=-1;class VA{constructor(e,t){this.fieldPath=e,this.kind=t}}class oo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new oo(0,Ge.min())}}function np(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new Ge(i,E.empty(),e)}function rp(n){return new Ge(n.readTime,n.key,-1)}class Ge{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ge(b.min(),E.empty(),-1)}static max(){return new Ge(b.max(),E.empty(),-1)}}function Du(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:V(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ip)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new fe,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new hi(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=Vu(r.target.error);this.m.reject(new hi(e,i))}}static open(e,t,r,i){try{return new Ko(t,e.transaction(i,r))}catch(s){throw new hi(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new xA(t)}}class We{constructor(e,t,r){this.name=e,this.version=t,this.S=r,We.D(X())===12.2&&ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),dn(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!_i())return!1;if(We.C())return!0;const e=X(),t=We.D(e),r=0<t&&t<10,i=We.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new hi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hi(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Ko.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class NA{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return dn(this.q.delete())}}class hi extends g{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function on(n){return n.name==="IndexedDbTransactionError"}class xA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),dn(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),dn(this.store.add(e))}get(e){return dn(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),dn(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),dn(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=Vu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new NA(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function dn(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Vu(r.target.error);t(i)}})}let Ah=!1;function Vu(n){const e=We.D(X());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ah||(Ah=!0,setTimeout(()=>{throw r},0)),r}}return n}class OA{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){on(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await sn(t)}await this.te(6e4)})}}class MA{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=rp(s);Du(o,r)>0&&(r=o)}),new Ge(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Me.ae=-1;function os(n){return n==null}function xi(n){return n===0&&1/n==-1/0}function op(n){return typeof n=="number"&&Number.isInteger(n)&&!xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Rh(e)),e=LA(n.get(t),e);return Rh(e)}function LA(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Rh(n){return n+""}function at(n){const e=n.length;if(P(e>=2),e===2)return P(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:R()}s=o+2}return new F(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n,e){return[n,Ne(e)]}function ap(n,e,t){return[n,Ne(e),t]}const FA={},UA=["prefixPath","collectionGroup","readTime","documentId"],BA=["prefixPath","collectionGroup","documentId"],qA=["collectionGroup","readTime","prefixPath","documentId"],$A=["canonicalId","targetId"],GA=["targetId","path"],jA=["path","targetId"],zA=["collectionId","parent"],KA=["indexId","uid"],WA=["uid","sequenceNumber"],HA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],QA=["indexId","uid","orderedDocumentKey"],YA=["userId","collectionPath","documentId"],JA=["userId","collectionPath","largestBatchId"],XA=["userId","collectionGroup","largestBatchId"],cp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ZA=[...cp,"documentOverlays"],up=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lp=up,eR=[...lp,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends sp{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function ge(n,e){const t=T(n);return We.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bs(this.root,e,this.comparator,!0)}}class bs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Ie.RED,this.left=i!=null?i:Ie.EMPTY,this.right=s!=null?s:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ie(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sh(this.data.getIterator())}getIteratorFrom(e){return new Sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof H)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new H(this.comparator);return t.data=e,t}}class Sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new Le([])}unionWith(e){let t=new H(re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new dp("Invalid base64 string: "+s):s}}(e);return new ue(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const nR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(n){if(P(!!n),typeof n=="string"){let e=0;const t=nR.exec(n);if(P(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?ue.fromBase64String(n):ue.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Nu(n){const e=n.mapValue.fields.__previous_value__;return Wo(e)?Nu(e):e}function Oi(n){const e=Kt(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ht{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ht("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ht&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Us={nullValue:"NULL_VALUE"};function kn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wo(n)?4:fp(n)?9007199254740991:10:R()}function ft(n,e){if(n===e)return!0;const t=kn(n);if(t!==kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Oi(n).isEqual(Oi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kt(i.timestampValue),a=Kt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Wt(i.bytesValue).isEqual(Wt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Z(i.geoPointValue.latitude)===Z(s.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Z(i.integerValue)===Z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Z(i.doubleValue),a=Z(s.doubleValue);return o===a?xi(o)===xi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return fr(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ph(o)!==Ph(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ft(o[c],a[c])))return!1;return!0}(n,e);default:return R()}}function Mi(n,e){return(n.values||[]).find(t=>ft(t,e))!==void 0}function Qt(n,e){if(n===e)return 0;const t=kn(n),r=kn(e);if(t!==r)return V(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Z(s.integerValue||s.doubleValue),c=Z(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Ch(n.timestampValue,e.timestampValue);case 4:return Ch(Oi(n),Oi(e));case 5:return V(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Wt(s),c=Wt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=V(a[u],c[u]);if(l!==0)return l}return V(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=V(Z(s.latitude),Z(o.latitude));return a!==0?a:V(Z(s.longitude),Z(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Qt(a[u],c[u]);if(l)return l}return V(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ut.mapValue&&o===Ut.mapValue)return 0;if(s===Ut.mapValue)return 1;if(o===Ut.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=V(c[h],l[h]);if(d!==0)return d;const f=Qt(a[c[h]],u[l[h]]);if(f!==0)return f}return V(c.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function Ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return V(n,e);const t=Kt(n),r=Kt(e),i=V(t.seconds,r.seconds);return i!==0?i:V(t.nanos,r.nanos)}function mr(n){return pc(n)}function pc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return E.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=pc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pc(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function Dn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gc(n){return!!n&&"integerValue"in n}function Li(n){return!!n&&"arrayValue"in n}function kh(n){return!!n&&"nullValue"in n}function Dh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bs(n){return!!n&&"mapValue"in n}function di(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $n(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=di(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=di(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function iR(n){return"nullValue"in n?Us:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Dn(Ht.empty(),E.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function sR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Dn(Ht.empty(),E.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ut:R()}function Vh(n,e){const t=Qt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Nh(n,e){const t=Qt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(t)}setAll(e){let t=re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=di(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Bs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){$n(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new we(di(this.value))}}function mp(n){const e=[];return $n(n.fields,(t,r)=>{const i=new re([t]);if(Bs(r)){const s=mp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new W(e,0,b.min(),b.min(),b.min(),we.empty(),0)}static newFoundDocument(e,t,r,i){return new W(e,1,t,b.min(),r,i,0)}static newNoDocument(e,t){return new W(e,2,t,b.min(),b.min(),we.empty(),0)}static newUnknownDocument(e,t){return new W(e,3,t,b.min(),b.min(),we.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof W&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.position=e,this.inclusive=t}}function xh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),t.key):r=Qt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t="asc"){this.field=e,this.dir=t}}function oR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{}class O extends pp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new aR(e,t,r):t==="array-contains"?new lR(e,r):t==="in"?new wp(e,r):t==="not-in"?new hR(e,r):t==="array-contains-any"?new dR(e,r):new O(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cR(e,r):new uR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qt(t,this.value)):t!==null&&kn(this.value)===kn(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class G extends pp{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new G(e,t)}matches(e){return pr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function pr(n){return n.op==="and"}function _c(n){return n.op==="or"}function xu(n){return gp(n)&&pr(n)}function gp(n){for(const e of n.filters)if(e instanceof G)return!1;return!0}function yc(n){if(n instanceof O)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(xu(n))return n.filters.map(e=>yc(e)).join(",");{const e=n.filters.map(t=>yc(t)).join(",");return`${n.op}(${e})`}}function _p(n,e){return n instanceof O?function(r,i){return i instanceof O&&r.op===i.op&&r.field.isEqual(i.field)&&ft(r.value,i.value)}(n,e):n instanceof G?function(r,i){return i instanceof G&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_p(o,i.filters[a]),!0):!1}(n,e):void R()}function yp(n,e){const t=n.filters.concat(e);return G.create(t,n.op)}function Ip(n){return n instanceof O?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof G?function(t){return t.op.toString()+" {"+t.getFilters().map(Ip).join(" ,")+"}"}(n):"Filter"}class aR extends O{constructor(e,t,r){super(e,t,r),this.key=E.fromName(r.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class cR extends O{constructor(e,t){super(e,"in",t),this.keys=vp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uR extends O{constructor(e,t){super(e,"not-in",t),this.keys=vp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>E.fromName(r.referenceValue))}class lR extends O{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Li(t)&&Mi(t.arrayValue,this.value)}}class wp extends O{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mi(this.value.arrayValue,t)}}class hR extends O{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Mi(this.value.arrayValue,t)}}class dR extends O{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Li(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ic(n,e=null,t=[],r=[],i=null,s=null,o=null){return new fR(n,e,t,r,i,s,o)}function Vn(n){const e=T(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>yc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.he=t}return e.he}function as(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!oR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_p(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oh(n.startAt,e.startAt)&&Oh(n.endAt,e.endAt)}function ao(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function co(n,e){return n.filters.filter(t=>t instanceof O&&t.field.isEqual(e))}function Mh(n,e,t){let r=Us,i=!0;for(const s of co(n,e)){let o=Us,a=!0;switch(s.op){case"<":case"<=":o=iR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Us}Vh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Vh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Lh(n,e,t){let r=Ut,i=!0;for(const s of co(n,e)){let o=Ut,a=!0;switch(s.op){case">=":case">":o=sR(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ut}Nh({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Nh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Ep(n,e,t,r,i,s,o,a){return new Pt(n,e,t,r,i,s,o,a)}function xr(n){return new Pt(n)}function Fh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ou(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ho(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Mu(n){return n.collectionGroup!==null}function bn(n){const e=T(n);if(e.Pe===null){e.Pe=[];const t=Ho(e),r=Ou(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new cr(t)),e.Pe.push(new cr(re.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new cr(re.keyField(),s))}}}return e.Pe}function Ue(n){const e=T(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Ic(e.path,e.collectionGroup,bn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of bn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new cr(s.field,o))}const r=e.endAt?new Yt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Yt(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ic(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function vc(n,e){e.getFirstInequalityField(),Ho(n);const t=n.filters.concat([e]);return new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uo(n,e,t){return new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cs(n,e){return as(Ue(n),Ue(e))&&n.limitType===e.limitType}function Tp(n){return`${Vn(Ue(n))}|lt:${n.limitType}`}function wc(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Ip(i)).join(", ")}]`),os(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>mr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>mr(i)).join(",")),`Target(${r})`}(Ue(n))}; limitType=${n.limitType})`}function us(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of bn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=xh(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,bn(r),i)||r.endAt&&!function(o,a,c){const u=xh(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,bn(r),i))}(n,e)}function Ap(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Rp(n){return(e,t)=>{let r=!1;for(const i of bn(n)){const s=mR(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mR(n,e,t){const r=n.field.isKeyField()?E.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Qt(c,u):R()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$n(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new z(E.comparator);function Fe(){return pR}const bp=new z(E.comparator);function ii(...n){let e=bp;for(const t of n)e=e.insert(t.key,t);return e}function Pp(n){let e=bp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ct(){return fi()}function Sp(){return fi()}function fi(){return new an(n=>n.toString(),(n,e)=>n.isEqual(e))}const gR=new z(E.comparator),_R=new H(E.comparator);function N(...n){let e=_R;for(const t of n)e=e.add(t);return e}const yR=new H(V);function Lu(){return yR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xi(e)?"-0":e}}function kp(n){return{integerValue:""+n}}function Dp(n,e){return op(e)?kp(e):Cp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this._=void 0}}function IR(n,e,t){return n instanceof gr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wo(s)&&(s=Nu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Nn?Np(n,e):n instanceof xn?xp(n,e):function(i,s){const o=Vp(i,s),a=Uh(o)+Uh(i.Te);return gc(o)&&gc(i.Te)?kp(a):Cp(i.serializer,a)}(n,e)}function vR(n,e,t){return n instanceof Nn?Np(n,e):n instanceof xn?xp(n,e):t}function Vp(n,e){return n instanceof _r?function(r){return gc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gr extends Qo{}class Nn extends Qo{constructor(e){super(),this.elements=e}}function Np(n,e){const t=Op(e);for(const r of n.elements)t.some(i=>ft(i,r))||t.push(r);return{arrayValue:{values:t}}}class xn extends Qo{constructor(e){super(),this.elements=e}}function xp(n,e){let t=Op(e);for(const r of n.elements)t=t.filter(i=>!ft(i,r));return{arrayValue:{values:t}}}class _r extends Qo{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Uh(n){return Z(n.integerValue||n.doubleValue)}function Op(n){return Li(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.field=e,this.transform=t}}function wR(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Nn&&i instanceof Nn||r instanceof xn&&i instanceof xn?fr(r.elements,i.elements,ft):r instanceof _r&&i instanceof _r?ft(r.Te,i.Te):r instanceof gr&&i instanceof gr}(n.transform,e.transform)}class ER{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yo{}function Mp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mr(n.key,Y.none()):new Or(n.key,n.data,Y.none());{const t=n.data,r=we.empty();let i=new H(re.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new St(n.key,r,new Le(i.toArray()),Y.none())}}function TR(n,e,t){n instanceof Or?function(i,s,o){const a=i.value.clone(),c=qh(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof St?function(i,s,o){if(!qs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qh(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Lp(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function mi(n,e,t,r){return n instanceof Or?function(s,o,a,c){if(!qs(s.precondition,o))return a;const u=s.value.clone(),l=$h(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof St?function(s,o,a,c){if(!qs(s.precondition,o))return a;const u=$h(s.fieldTransforms,c,o),l=o.data;return l.setAll(Lp(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return qs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function AR(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Vp(r.transform,i||null);s!=null&&(t===null&&(t=we.empty()),t.set(r.field,s))}return t||null}function Bh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fr(r,i,(s,o)=>wR(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Or extends Yo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class St extends Yo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qh(n,e,t){const r=new Map;P(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vR(o,a,t[i]))}return r}function $h(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,IR(s,o,e))}return r}class Mr extends Yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fu extends Yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TR(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Sp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Mp(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,(t,r)=>Bh(t,r))&&fr(this.baseMutations,e.baseMutations,(t,r)=>Bh(t,r))}}class Bu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){P(e.mutations.length===r.length);let i=function(){return gR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bu(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,M;function Fp(n){switch(n){default:return R();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Up(n){if(n===void 0)return ne("GRPC error has no .code"),p.UNKNOWN;switch(n){case oe.OK:return p.OK;case oe.CANCELLED:return p.CANCELLED;case oe.UNKNOWN:return p.UNKNOWN;case oe.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case oe.INTERNAL:return p.INTERNAL;case oe.UNAVAILABLE:return p.UNAVAILABLE;case oe.UNAUTHENTICATED:return p.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case oe.NOT_FOUND:return p.NOT_FOUND;case oe.ALREADY_EXISTS:return p.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return p.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case oe.ABORTED:return p.ABORTED;case oe.OUT_OF_RANGE:return p.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return p.UNIMPLEMENTED;case oe.DATA_LOSS:return p.DATA_LOSS;default:return R()}}(M=oe||(oe={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ps}static getOrCreateInstance(){return Ps===null&&(Ps=new $u),Ps}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ps=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=new ar([4294967295,4294967295],0);function Gh(n){const e=Bp().encode(n),t=new vA;return t.update(e),new Uint8Array(t.digest())}function jh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ar([t,r],0),new ar([i,s],0)]}class Gu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=ar.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(ar.fromNumber(r)));return i.compare(bR)===1&&(i=new ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=Gh(e),[r,i]=jh(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gu(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=Gh(e),[r,i]=jh(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hs(b.min(),i,new z(V),Fe(),N())}}class ds{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ds(r,t,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class qp{constructor(e,t){this.targetId=e,this.pe=t}}class $p{constructor(e,t,r=ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class zh{constructor(){this.ye=0,this.we=Wh(),this.Se=ue.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=N(),t=N(),r=N();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:R()}}),new ds(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=Wh()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class PR{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Fe(),this.$e=Kh(),this.Ue=new z(V)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(ao(a))if(s===0){const c=new E(a.path);this.ze(i,c,W.newNoDocument(c,b.min()))}else P(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(e,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(t=$u.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,I){var v,w,C,x,D,q;const $={localCacheCount:f,existenceFilterCount:I.count},U=I.unchangedNames;return U&&($.bloomFilter={applied:h===0,hashCount:(v=U==null?void 0:U.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(x=(C=(w=U==null?void 0:U.bits)===null||w===void 0?void 0:w.bitmap)===null||C===void 0?void 0:C.length)!==null&&x!==void 0?x:0,padding:(q=(D=U==null?void 0:U.bits)===null||D===void 0?void 0:D.padding)!==null&&q!==void 0?q:0},d&&($.bloomFilter.mightContain=d)),$}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Wt(s).toUint8Array()}catch(h){if(h instanceof dp)return Xe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Gu(c,o,a)}catch(h){return Xe(h instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===t-this.it(e.targetId,l)?0:2,nt:l}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&ao(a.target)){const c=new E(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,W.newNoDocument(c,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=N();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new hs(e,t,this.Ue,this.Ke,r);return this.Ke=Fe(),this.$e=Kh(),this.Ue=new z(V),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new zh,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new H(V),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new zh),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function Kh(){return new z(E.comparator)}function Wh(){return new z(E.comparator)}const SR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),CR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kR=(()=>({and:"AND",or:"OR"}))();class DR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ec(n,e){return n.useProto3Json||os(e)?e:{value:e}}function yr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function VR(n,e){return yr(n,e.toTimestamp())}function ie(n){return P(!!n),b.fromTimestamp(function(t){const r=Kt(t);return new J(r.seconds,r.nanos)}(n))}function ju(n,e){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function jp(n){const e=F.fromString(n);return P(Zp(e)),e}function Fi(n,e){return ju(n.databaseId,e.path)}function ut(n,e){const t=jp(e);if(t.get(1)!==n.databaseId.projectId)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(Kp(t))}function Tc(n,e){return ju(n.databaseId,e)}function zp(n){const e=jp(n);return e.length===4?F.emptyPath():Kp(e)}function Ui(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kp(n){return P(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hh(n,e,t){return{name:Fi(n,e),fields:t.value.mapValue.fields}}function Wp(n,e,t){const r=ut(n,e.name),i=ie(e.updateTime),s=e.createTime?ie(e.createTime):b.min(),o=new we({mapValue:{fields:e.fields}}),a=W.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function NR(n,e){return"found"in e?function(r,i){P(!!i.found),i.found.name,i.found.updateTime;const s=ut(r,i.found.name),o=ie(i.found.updateTime),a=i.found.createTime?ie(i.found.createTime):b.min(),c=new we({mapValue:{fields:i.found.fields}});return W.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){P(!!i.missing),P(!!i.readTime);const s=ut(r,i.missing),o=ie(i.readTime);return W.newNoDocument(s,o)}(n,e):R()}function xR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(P(l===void 0||typeof l=="string"),ue.fromBase64String(l||"")):(P(l===void 0||l instanceof Uint8Array),ue.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Up(u.code);return new g(l,u.message||"")}(o);t=new $p(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ut(n,r.document.name),s=ie(r.document.updateTime),o=r.document.createTime?ie(r.document.createTime):b.min(),a=new we({mapValue:{fields:r.document.fields}}),c=W.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new $s(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ut(n,r.document),s=r.readTime?ie(r.readTime):b.min(),o=W.newNoDocument(i,s),a=r.removedTargetIds||[];t=new $s([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ut(n,r.document),s=r.removedTargetIds||[];t=new $s([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new RR(i,s),a=r.targetId;t=new qp(a,o)}}return t}function Bi(n,e){let t;if(e instanceof Or)t={update:Hh(n,e.key,e.value)};else if(e instanceof Mr)t={delete:Fi(n,e.key)};else if(e instanceof St)t={update:Hh(n,e.key,e.data),updateMask:BR(e.fieldMask)};else{if(!(e instanceof Fu))return R();t={verify:Fi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _r)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw R()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R()}(n,e.precondition)),t}function Ac(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Y.updateTime(ie(s.updateTime)):s.exists!==void 0?Y.exists(s.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)P(a.setToServerValue==="REQUEST_TIME"),c=new gr;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Nn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new xn(l)}else"increment"in a?c=new _r(o,a.increment):R();const u=re.fromServerFormat(a.fieldPath);return new ls(u,c)}(n,i)):[];if(e.update){e.update.name;const i=ut(n,e.update.name),s=new we({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Le(u.map(l=>re.fromServerFormat(l)))}(e.updateMask);return new St(i,s,o,t,r)}return new Or(i,s,t,r)}if(e.delete){const i=ut(n,e.delete);return new Mr(i,t)}if(e.verify){const i=ut(n,e.verify);return new Fu(i,t)}return R()}function OR(n,e){return n&&n.length>0?(P(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ie(i.updateTime):ie(s);return o.isEqual(b.min())&&(o=ie(s)),new ER(o,i.transformResults||[])}(t,e))):[]}function Hp(n,e){return{documents:[Tc(n,e.path)]}}function Qp(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Tc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Tc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Xp(G.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Jn(h.field),direction:LR(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Ec(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Yp(n){let e=zp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){P(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Jp(h);return d instanceof G&&xu(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(I){return new cr(Xn(I.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,os(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Yt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Yt(f,d)}(t.endAt)),Ep(e,i,o,s,a,"F",c,u)}function MR(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xn(t.unaryFilter.field);return O.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xn(t.unaryFilter.field);return O.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xn(t.unaryFilter.field);return O.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xn(t.unaryFilter.field);return O.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return O.create(Xn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return G.create(t.compositeFilter.filters.map(r=>Jp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function LR(n){return SR[n]}function FR(n){return CR[n]}function UR(n){return kR[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Xn(n){return re.fromServerFormat(n.fieldPath)}function Xp(n){return n instanceof O?function(t){if(t.op==="=="){if(Dh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(kh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(kh(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:FR(t.op),value:t.value}}}(n):n instanceof G?function(t){const r=t.getFilters().map(i=>Xp(i));return r.length===1?r[0]:{compositeFilter:{op:UR(t.op),filters:r}}}(n):R()}function BR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,r,i,s=b.min(),o=b.min(),a=ue.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.ct=e}}function qR(n,e){let t;if(e.document)t=Wp(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=E.fromSegments(e.noDocument.path),i=Mn(e.noDocument.readTime);t=W.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=E.fromSegments(e.unknownDocument.path),i=Mn(e.unknownDocument.version);t=W.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new J(i[0],i[1]);return b.fromTimestamp(s)}(e.readTime)),t}function Qh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:lo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Fi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:yr(s,o.version.toTimestamp()),createTime:yr(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:On(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:t.path.toArray(),version:On(e.version)}}return r}function lo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function On(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Mn(n){const e=new J(n.seconds,n.nanoseconds);return b.fromTimestamp(e)}function fn(n,e){const t=(e.baseMutations||[]).map(s=>Ac(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ac(n.ct,s)),i=J.fromMillis(e.localWriteTimeMs);return new Uu(e.batchId,i,t,r)}function oi(n){const e=Mn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Mn(n.lastLimboFreeSnapshotVersion):b.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return P(s.documents.length===1),Ue(xr(zp(s.documents[0])))}(n.query):function(s){return Ue(Yp(s))}(n.query),new It(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ue.fromBase64String(n.resumeToken))}function tg(n,e){const t=On(e.snapshotVersion),r=On(e.lastLimboFreeSnapshotVersion);let i;i=ao(e.target)?Hp(n.ct,e.target):Qp(n.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Vn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function zu(n){const e=Yp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uo(e,e.limit,"L"):e}function Fa(n,e){return new qu(e.largestBatchId,Ac(n.ct,e.overlayMutation))}function Yh(n,e){const t=e.path.lastSegment();return[n,Ne(e.path.popLast()),t]}function Jh(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:On(r.readTime),documentKey:Ne(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{getBundleMetadata(e,t){return Xh(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Mn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Xh(e).put(function(i){return{bundleId:i.id,createTime:On(ie(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Zh(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:zu(s.bundledQuery),readTime:Mn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Zh(e).put(function(i){return{name:i.name,readTime:On(ie(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Xh(n){return ge(n,"bundles")}function Zh(n){return ge(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Jo(e,r)}getOverlay(e,t){return Hr(e).get(Yh(this.userId,t)).next(r=>r?Fa(this.serializer,r):null)}getOverlays(e,t){const r=ct();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new qu(t,o);i.push(this.ht(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ne(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Hr(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ct(),s=Ne(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Hr(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Fa(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ct();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Hr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Fa(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,t){return Hr(e).put(function(i,s,o){const[a,c,u]=Yh(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Bi(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Hr(n){return ge(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Z(e.integerValue));else if("doubleValue"in e){const r=Z(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),xi(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Wt(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?fp(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):R()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const i of r)this.It(i,t)}gt(e,t){this.Et(t,37),E.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}mn.bt=new mn;function GR(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function ed(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=GR(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class jR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.vt(r.value),r=t.next();this.Ct()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=t.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const t=this.Lt(e),r=ed(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Lt(e),r=ed(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}vt(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class zR{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class KR{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Qr{constructor(){this.Gt=new jR,this.zt=new zR(this.Gt),this.jt=new KR(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new pn(this.indexId,this.documentKey,this.arrayValue,r)}}function Nt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=td(n.arrayValue,e.arrayValue),t!==0?t:(t=td(n.directionalValue,e.directionalValue),t!==0?t:E.comparator(n.documentKey,e.documentKey)))}function td(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){P(e.collectionGroup===this.collectionId);const t=fc(e);if(t!==void 0&&!this.tn(t))return!1;const r=hn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n){var e,t;if(P(n instanceof O||n instanceof G),n instanceof O){if(n instanceof wp){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>O.create(n.field,"==",s)))||[];return G.create(i,"or")}return n}const r=n.filters.map(i=>ng(i));return G.create(r,n.op)}function HR(n){if(n.getFilters().length===0)return[];const e=Pc(ng(n));return P(rg(e)),Rc(e)||bc(e)?[e]:e.getFilters()}function Rc(n){return n instanceof O}function bc(n){return n instanceof G&&xu(n)}function rg(n){return Rc(n)||bc(n)||function(t){if(t instanceof G&&_c(t)){for(const r of t.getFilters())if(!Rc(r)&&!bc(r))return!1;return!0}return!1}(n)}function Pc(n){if(P(n instanceof O||n instanceof G),n instanceof O)return n;if(n.filters.length===1)return Pc(n.filters[0]);const e=n.filters.map(r=>Pc(r));let t=G.create(e,n.op);return t=ho(t),rg(t)?t:(P(t instanceof G),P(pr(t)),P(t.filters.length>1),t.filters.reduce((r,i)=>Ku(r,i)))}function Ku(n,e){let t;return P(n instanceof O||n instanceof G),P(e instanceof O||e instanceof G),t=n instanceof O?e instanceof O?function(i,s){return G.create([i,s],"and")}(n,e):nd(n,e):e instanceof O?nd(e,n):function(i,s){if(P(i.filters.length>0&&s.filters.length>0),pr(i)&&pr(s))return yp(i,s.getFilters());const o=_c(i)?i:s,a=_c(i)?s:i,c=o.filters.map(u=>Ku(u,a));return G.create(c,"or")}(n,e),ho(t)}function nd(n,e){if(pr(e))return yp(e,n.getFilters());{const t=e.filters.map(r=>Ku(n,r));return G.create(t,"or")}}function ho(n){if(P(n instanceof O||n instanceof G),n instanceof O)return n;const e=n.getFilters();if(e.length===1)return ho(e[0]);if(gp(n))return n;const t=e.map(i=>ho(i)),r=[];return t.forEach(i=>{i instanceof O?r.push(i):i instanceof G&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:G.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.sn=new Wu}addToCollectionParentIndex(e,t){return this.sn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ge.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ge.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class Wu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new H(F.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new H(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Uint8Array(0);class YR{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Wu,this._n=new an(r=>Vn(r),(r,i)=>as(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:Ne(i)};return rd(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[ep(t),""],!1,!0);return rd(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(at(o.parent))}return r})}addFieldIndex(e,t){const r=Cs(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Jr(e);return s.next(a=>{o.put(Jh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Cs(e),i=Jr(e),s=Yr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Yr(e);let i=!0;const s=new Map;return m.forEach(this.an(t),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=N();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(c)} to execute ${Vn(t)}`);const l=function(D,q){const $=fc(q);if($===void 0)return null;for(const U of co(D,$.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(u,c),h=function(D,q){const $=new Map;for(const U of hn(q))for(const ye of co(D,U.fieldPath))switch(ye.op){case"==":case"in":$.set(U.fieldPath.canonicalString(),ye.value);break;case"not-in":case"!=":return $.set(U.fieldPath.canonicalString(),ye.value),Array.from($.values())}return null}(u,c),d=function(D,q){const $=[];let U=!0;for(const ye of hn(q)){const kt=ye.kind===0?Mh(D,ye.fieldPath,D.startAt):Lh(D,ye.fieldPath,D.startAt);$.push(kt.value),U&&(U=kt.inclusive)}return new Yt($,U)}(u,c),f=function(D,q){const $=[];let U=!0;for(const ye of hn(q)){const kt=ye.kind===0?Lh(D,ye.fieldPath,D.endAt):Mh(D,ye.fieldPath,D.endAt);$.push(kt.value),U&&(U=kt.inclusive)}return new Yt($,U)}(u,c),I=this.cn(c,u,d),v=this.cn(c,u,f),w=this.ln(c,u,h),C=this.hn(c.indexId,l,I,d.inclusive,v,f.inclusive,w);return m.forEach(C,x=>r.H(x,t.limit).next(D=>{D.forEach(q=>{const $=E.fromSegments(q.documentKey);o.has($)||(o=o.add($),a.push($))})}))}).next(()=>a)}return m.resolve(null)})}an(e){let t=this._n.get(e);return t||(e.filters.length===0?t=[e]:t=HR(G.create(e.filters,"and")).map(r=>Ic(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,t),t)}hn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Pn(t[h/u]):Ss,f=this.In(e,d,r[h%u],i),I=this.Tn(e,d,s[h%u],o),v=a.map(w=>this.In(e,d,w,!0));l.push(...this.createRange(f,I,v))}return l}In(e,t,r,i){const s=new pn(e,E.empty(),t,r);return i?s:s.Jt()}Tn(e,t,r,i){const s=new pn(e,E.empty(),t,r);return i?s.Jt():s}un(e,t){const r=new WR(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.an(t);return m.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new H(re.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}En(e,t){const r=new Qr;for(const i of hn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);mn.bt.Pt(s,o)}return r.Wt()}Pn(e){const t=new Qr;return mn.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){const r=new Qr;return mn.bt.Pt(Dn(this.databaseId,t),r.Ht(function(s){const o=hn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new Qr);let s=0;for(const o of hn(e)){const a=r[s++];for(const c of i)if(this.An(t,o.fieldPath)&&Li(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);mn.bt.Pt(a,u)}}return this.Vn(i)}cn(e,t,r){return this.ln(e,t,r.position)}Vn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}Rn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Qr;c.seed(a.Wt()),mn.bt.Pt(o,c.Ht(t.kind)),s.push(c)}return s}An(e,t){return!!e.filters.find(r=>r instanceof O&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Cs(e),i=Jr(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new oo(h.sequenceNumber,new Ge(Mn(h.readTime),new E(at(h.documentKey)),h.largestBatchId)):oo.empty(),f=l.fields.map(([I,v])=>new VA(re.fromServerFormat(I),v));return new tp(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:V(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Cs(e),s=Jr(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(Jh(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.fn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?m.resolve():this.pn(e,s,c,u,l)}))))})}yn(e,t,r,i){return Yr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,t.key),documentKey:t.key.path.toArray()})}wn(e,t,r,i){return Yr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,t.key),t.key.path.toArray()])}fn(e,t,r){const i=Yr(e);let s=new H(Nt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,t)])},(o,a)=>{s=s.add(new pn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,t){let r=new H(Nt);const i=this.En(t,e);if(i==null)return r;const s=fc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Li(o))for(const a of o.arrayValue.values||[])r=r.add(new pn(t.indexId,e.key,this.Pn(a),i))}else r=r.add(new pn(t.indexId,e.key,Ss,i));return r}pn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),I=u.getIterator();let v=Qn(f),w=Qn(I);for(;v||w;){let C=!1,x=!1;if(v&&w){const D=l(v,w);D<0?x=!0:D>0&&(C=!0)}else v!=null?x=!0:C=!0;C?(h(w),w=Qn(I)):x?(d(v),v=Qn(f)):(v=Qn(f),w=Qn(I))}}(i,s,Nt,a=>{o.push(this.yn(e,t,r,a))},a=>{o.push(this.wn(e,t,r,a))}),m.waitFor(o)}mn(e){let t=1;return Jr(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Nt(o,a)).filter((o,a,c)=>!a||Nt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Nt(o,e),c=Nt(o,t);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ss,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ss,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(e,t){return Nt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(id)}getMinOffset(e,t){return m.mapArray(this.an(t),r=>this.un(e,r).next(i=>i||R())).next(id)}}function rd(n){return ge(n,"collectionParents")}function Yr(n){return ge(n,"indexEntries")}function Cs(n){return ge(n,"indexConfiguration")}function Jr(n){return ge(n,"indexState")}function id(n){P(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Du(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ge(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Oe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{P(a===1)}));const u=[];for(const l of t.mutations){const h=ap(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function fo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(41943040,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);class Xo{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,t,r,i){P(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Xo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Zn(e),o=xt(e);return o.add({}).next(a=>{P(typeof a=="number");const c=new Uu(a,t,r,i),u=function(f,I,v){const w=v.baseMutations.map(x=>Bi(f.ct,x)),C=v.mutations.map(x=>Bi(f.ct,x));return{userId:I,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:C}}(this.serializer,this.userId,c),l=[];let h=new H((d,f)=>V(d.canonicalString(),f.canonicalString()));for(const d of i){const f=ap(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,FA))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return xt(e).get(t).next(r=>r?(P(r.userId===this.userId),fn(this.serializer,r)):null)}Dn(e,t){return this.bn[t]?m.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.bn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return xt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(P(a.batchId>=r),s=fn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return xt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).G("userMutationsIndex",t).next(r=>r.map(i=>fn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Fs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Zn(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=at(l);if(u===this.userId&&t.path.isEqual(d))return xt(e).get(h).next(f=>{if(!f)throw R();P(f.userId===this.userId),s.push(fn(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new H(V);const i=[];return t.forEach(s=>{const o=Fs(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Zn(e).Z({range:a},(u,l,h)=>{const[d,f,I]=u,v=at(f);d===this.userId&&s.path.isEqual(v)?r=r.add(I):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Fs(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new H(V);return Zn(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,I=at(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(xt(e).get(s).next(o=>{if(o===null)throw R();P(o.userId===this.userId),r.push(fn(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return ig(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Zn(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=at(s[1]);i.push(c)}else a.done()}).next(()=>{P(i.length===0)})})}containsKey(e,t){return sg(e,this.userId,t)}Fn(e){return og(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sg(n,e,t){const r=Fs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Zn(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function xt(n){return ge(n,"mutations")}function Zn(n){return ge(n,"documentMutations")}function og(n){return ge(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Ln(0)}static On(){return new Ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next(t=>{const r=new Ln(t.highestTargetId);return t.highestTargetId=r.next(),this.Bn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(t=>b.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Bn(e,i)))}addTargetData(e,t){return this.Ln(e,t).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(t,r),this.Bn(e,r))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Yn(e).delete(t.targetId)).next(()=>this.Nn(e)).next(r=>(P(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Yn(e).Z((o,a)=>{const c=oi(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Yn(e).Z((r,i)=>{const s=oi(i);t(s)})}Nn(e){return od(e).get("targetGlobalKey").next(t=>(P(t!==null),t))}Bn(e,t){return od(e).put("targetGlobalKey",t)}Ln(e,t){return Yn(e).put(tg(this.serializer,t))}kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Vn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Yn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=oi(a);as(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Mt(e);return t.forEach(o=>{const a=Ne(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=Mt(e);return m.forEach(t,s=>{const o=Ne(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Mt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Mt(e);let s=N();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=at(o[1]),l=new E(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ne(t.path),i=IDBKeyRange.bound([r],[ep(r)],!1,!0);let s=0;return Mt(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,t){return Yn(e).get(t).next(r=>r?oi(r):null)}}function Yn(n){return ge(n,"targets")}function od(n){return ge(n,"targetGlobal")}function Mt(n){return ge(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad([n,e],[t,r]){const i=V(n,t);return i===0?V(e,r):i}class XR{constructor(e){this.qn=e,this.buffer=new H(ad),this.Qn=0}Kn(){return++this.Qn}$n(e){const t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ad(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){on(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await sn(t)}await this.Wn(3e5)})}}class eb{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Me.ae);const r=new XR(t);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Gn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(sd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sd):this.Hn(e,t))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),dc()<=L.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function tb(n,e){return new eb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.db=e,this.garbageCollector=tb(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return ks(e,r)}removeReference(e,t,r){return ks(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ks(e,t)}Zn(e,t){return function(i,s){let o=!1;return og(i).X(a=>sg(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Zn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,b.min()),Mt(e).delete(function(h){return[0,Ne(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ks(e,t)}Yn(e,t){const r=Mt(e);let i,s=Me.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Me.ae&&t(new E(at(i)),s),s=u,i=c):s=Me.ae}).next(()=>{s!==Me.ae&&t(new E(at(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ks(n,e){return Mt(n).put(function(r,i){return{targetId:0,path:Ne(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.changes=new an(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,W.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return un(e).put(r)}removeEntry(e,t,r){return un(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],lo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Xn(e,r)))}getEntry(e,t){let r=W.newInvalidDocument(t);return un(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(i,s)=>{r=this.er(t,s)}).next(()=>r)}tr(e,t){let r={size:0,document:W.newInvalidDocument(t)};return un(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(i,s)=>{r={document:this.er(t,s),size:fo(s)}}).next(()=>r)}getEntries(e,t){let r=Fe();return this.nr(e,t,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,t){let r=Fe(),i=new z(E.comparator);return this.nr(e,t,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,fo(o))}).next(()=>({documents:r,ir:i}))}nr(e,t,r){if(t.isEmpty())return m.resolve();let i=new H(ld);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Xr(i.first()),Xr(i.last())),o=i.getIterator();let a=o.getNext();return un(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=E.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&ld(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Xr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),lo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return un(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Fe();for(const l of c){const h=this.er(E.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(us(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Fe();const o=ud(t,r),a=ud(t,Ge.max());return un(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(E.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new ib(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return cd(e).get("remoteDocumentGlobalKey").next(t=>(P(!!t),t))}Xn(e,t){return cd(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){const r=qR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(b.min())))return r}return W.newInvalidDocument(e)}}function cg(n){return new rb(n)}class ib extends ag{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new an(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new H((s,o)=>V(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(t.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Qh(this.sr.serializer,o);i=i.add(s.path.popLast()),r+=fo(c)-a.size,t.push(this.sr.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Qh(this.sr.serializer,o.convertToNoDocument(b.min()));t.push(this.sr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.sr.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next(r=>(this._r.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.sr.rr(e,t).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function cd(n){return ge(n,"remoteDocumentGlobal")}function un(n){return ge(n,"remoteDocumentsV14")}function Xr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ud(n,e){const t=e.documentKey.path.toArray();return[n,lo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ld(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=V(t[s],r[s]),i)return i;return i=V(t.length,r.length),i||(i=V(t[t.length-2],r[r.length-2]),i||V(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&mi(r.mutation,i,Le.empty(),J.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,N()).next(()=>r))}getLocalViewOfDocuments(e,t,r=N()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ii();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,N()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Fe();const o=fi(),a=function(){return fi()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof St)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),mi(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,Le.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new sb(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=fi();let i=new z((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Le.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||N()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Sp();l.forEach(d=>{if(!s.has(d)){const f=Mp(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return E.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(ct());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,N())).next(l=>({batchId:a,changes:Pp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(r=>{let i=ii();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ii();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Pt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,W.newInvalidDocument(u)))});let o=ii();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&mi(u.mutation,c,Le.empty(),J.now()),us(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return m.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ie(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:zu(i.bundledQuery),readTime:ie(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.overlays=new z(E.comparator),this.cr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ct();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=ct(),s=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ct(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qu(t,r));let s=this.cr.get(t);s===void 0&&(s=N(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.lr=new H(he.hr),this.Pr=new H(he.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new he(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new he(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new E(new F([])),r=new he(t,e),i=new he(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new E(new F([])),r=new he(t,e),i=new he(t,e+1);let s=N();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new he(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return E.comparator(e.key,t.key)||V(e.mr,t.mr)}static Ir(e,t){return V(e.mr,t.mr)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new H(he.hr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Uu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new he(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new H(V);return t.forEach(i=>{const s=new he(i,0),o=new he(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new he(new E(s),0);let a=new H(V);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){P(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(t.mutations,i=>{const s=new he(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new he(t,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.Dr=e,this.docs=function(){return new z(E.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():W.newInvalidDocument(t))}getEntries(e,t){let r=Fe();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():W.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Fe();const o=t.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Du(rp(l),r)<=0||(i.has(l.key)||us(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){R()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new lb(this)}getSize(e){return m.resolve(this.size)}}class lb extends ag{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.persistence=e,this.Cr=new an(t=>Vn(t),as),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Hu,this.targetCount=0,this.Or=Ln.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),m.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Ln(t),m.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Me(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new hb(this),this.indexManager=new QR,this.remoteDocumentCache=function(i){return new ub(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new eg(t),this.Qr=new ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ab,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new cb(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new db(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class db extends sp{constructor(e){super(),this.currentSequenceNumber=e}}class Zo{constructor(e){this.persistence=e,this.Wr=new Hu,this.Gr=null}static zr(e){return new Zo(e)}get jr(){if(this.Gr)return this.Gr;throw R()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=E.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,b.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return m.or([()=>m.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.serializer=e}B(e,t,r,i){const s=new Ko("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bh,{unique:!0}),c.createObjectStore("documentMutations")}(e),hd(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),hd(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:b.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bh,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:YA});u.createIndex("collectionPathOverlayIndex",JA,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",XA,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:UA});u.createIndex("documentKeyIndex",BA),u.createIndex("collectionGroupIndex",qA)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:KA}).createIndex("sequenceNumberIndex",WA,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:HA}).createIndex("documentKeyIndex",QA,{unique:!1})}(e))),o}Zr(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=fo(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{P(c.userId===s.userId);const u=fn(this.serializer,c);return ig(e,s.userId,u).next(()=>{})}))}))}Xr(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(h){return[0,Ne(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:Ne(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ei(e,t){e.createObjectStore("collectionParents",{keyPath:zA});const r=t.store("collectionParents"),i=new Wu,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ne(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=at(a);return s(l.popLast())}))}ti(e){const t=e.store("targets");return t.Z((r,i)=>{const s=oi(i),o=tg(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new E(F.fromString(h.document.name).popFirst(5)):h.noDocument?E.fromSegments(h.noDocument.path):h.unknownDocument?E.fromSegments(h.unknownDocument.path):R()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ri(e,t){const r=t.store("mutations"),i=cg(this.serializer),s=new lg(Zo.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:N();fn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new de(u),h=Jo.lt(this.serializer,l),d=s.getIndexManager(l),f=Xo.lt(l,this.serializer,d,s.referenceDelegate);return new ug(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new mc(t,Me.ae),c).next()})})}}function hd(n){n.createObjectStore("targetDocuments",{keyPath:GA}).createIndex("documentTargetsIndex",jA,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",$A,{unique:!0}),n.createObjectStore("targetGlobal")}const Ua="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Qu{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!Qu.v())throw new g(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new nb(this,i),this.Pi=t+"main",this.serializer=new eg(c),this.Ii=new We(this.Pi,this._i,new fb(this.serializer)),this.kr=new JR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=cg(this.serializer),this.Qr=new $R,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,Ua);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Me(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ds(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.gi(e).next(()=>!1):!!t&&this.pi(e).next(()=>!0))).catch(e=>{if(on(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return Zr(e).get("owner").next(t=>m.resolve(this.yi(t)))}wi(e){return Ds(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ge(t,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?m.resolve(!0):Zr(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,Ua);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ds(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new mc(e,Me.ae);return this.gi(t).next(()=>this.wi(t))}),this.Ii.close(),this.Oi()}Di(e,t){return e.filter(r=>this.bi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>Ds(e).G().next(t=>this.Di(t,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,t){return Xo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new YR(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Jo.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?eR:c===14?lp:c===13?up:c===12?ZA:c===11?cp:void R()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new mc(a,this.Br?this.Br.next():Me.ae),t==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new g(p.FAILED_PRECONDITION,ip);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return Zr(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.yi(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(p.FAILED_PRECONDITION,Ua)})}pi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Zr(e).put("owner",t)}static v(){return We.v()}gi(e){const t=Zr(e);return t.get("owner").next(r=>this.yi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}bi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const t=/(?:Version|Mobile)\/1[456]/;H_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{const r=((t=this.Ti)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ne("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Zr(n){return ge(n,"owner")}function Ds(n){return ge(n,"clientMetadata")}function Yu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=N(),i=N();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ju(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(Fh(t))return m.resolve(null);let r=Ue(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=uo(t,null,"F"),r=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=N(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(t,a);return this.zi(t,u,o,c.readTime)?this.$i(e,uo(t,null,"F")):this.ji(e,u,t,c)}))})))}Ui(e,t,r,i){return Fh(t)||i.isEqual(b.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(dc()<=L.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wc(t)),this.ji(e,o,t,np(i,-1)))})}Gi(e,t){let r=new H(Rp(e));return t.forEach((i,s)=>{us(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return dc()<=L.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",wc(t)),this.Ki.getDocumentsMatchingQuery(e,t,Ge.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new z(V),this.Yi=new an(s=>Vn(s),as),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ug(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function dg(n,e,t,r){return new mb(n,e,t,r)}async function fg(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=N();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function pb(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(c,I)).next(v=>{const w=u.docVersions.get(I);P(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=N();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function mg(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function gb(n,e){const t=T(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ue.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(v,w,C){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,l)&&a.push(t.kr.updateTargetData(s,f))});let c=Fe(),u=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(pg(s,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(b.min())){const l=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function pg(n,e,t){let r=N(),i=N();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Fe();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function _b(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ir(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new It(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function vr(n,e,t){const r=T(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!on(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function mo(n,e,t){const r=T(n);let i=b.min(),s=N();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=T(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,Ue(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:b.min(),t?s:N())).next(a=>(yg(r,Ap(e),a),{documents:a,ss:s})))}function gg(n,e){const t=T(n),r=T(t.kr),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function _g(n,e){const t=T(n),r=t.Zi.get(e)||b.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Xi.getAllFromCollectionGroup(i,e,np(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(yg(t,e,i),i))}function yg(n,e,t){let r=n.Zi.get(e)||b.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}async function yb(n,e,t,r){const i=T(n);let s=N(),o=Fe();for(const u of t){const l=e.os(u.metadata.name);u.document&&(s=s.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Ir(i,function(l){return Ue(xr(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>pg(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function Ib(n,e,t=N()){const r=await Ir(n,Ue(zu(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ie(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(ue.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function dd(n,e){return`firestore_clients_${n}_${e}`}function fd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ba(n,e){return`firestore_targets_${n}_${e}`}class po{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static cs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new po(e,t,i.state,s):(ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static cs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new pi(e,r.state,i):(ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class go{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Lu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=op(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new go(e,s):(ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Xu{constructor(e,t){this.clientId=e,this.onlineState=t}static cs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Xu(t.clientId,t.onlineState):(ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sc{constructor(){this.activeTargetIds=Lu()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qa{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new z(V),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=dd(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Sc),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(dd(this.persistenceKey,r));if(i){const s=go.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const t=this.storage.getItem(this.ys);if(t){const r=this.bs(t);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let t=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,t,r){this.Cs(e,t,r),this.Fs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ba(this.persistenceKey,e));if(r){const i=pi.cs(e,r);i&&(t=i.state)}}return this.Ms.hs(e),this.Ss(),t}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ba(this.persistenceKey,e))}updateQueryState(e,t,r){this.xs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Rs)return void ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.fs.test(t.key)){if(t.newValue==null){const r=this.Bs(t.key);return this.Ls(r,null)}{const r=this.ks(t.key,t.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(t.key)){if(t.newValue!==null){const r=this.qs(t.key,t.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Ks(t.key,t.newValue);if(r)return this.$s(r)}}else if(t.key===this.ys){if(t.newValue!==null){const r=this.bs(t.newValue);if(r)return this.Ds(r)}}else if(t.key===this.Vs){const r=function(s){let o=Me.ae;if(s!=null)try{const a=JSON.parse(s);P(typeof a=="number"),o=a}catch(a){ne("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Me.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.ws){const r=this.Us(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(t)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,t,r){const i=new po(this.currentUser,e,t,r),s=fd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const t=fd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Os(e){const t={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(t))}xs(e,t,r){const i=Ba(this.persistenceKey,e),s=new pi(e,t,r);this.setItem(i,s.ls())}Ns(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ws,t)}Bs(e){const t=this.fs.exec(e);return t?t[1]:null}ks(e,t){const r=this.Bs(e);return go.cs(r,t)}qs(e,t){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return po.cs(new de(s),i,t)}Ks(e,t){const r=this.ps.exec(e),i=Number(r[1]);return pi.cs(i,t)}bs(e){return Xu.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,t){const r=t?this.ds.insert(e,t):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let t=Lu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Ig{constructor(){this.Hs=new Sc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Sc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs=null;function $a(){return Vs===null?Vs=function(){return 268435456+Math.round(2147483648*Math.random())}():Vs++,"0x"+Vs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class Tb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+t.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(t,r,i,s,o){const a=$a(),c=this.mo(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Xe("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(t,r,i,s,o,a){return this.Vo(t,r,i,s,o)}fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}mo(t,r){const i=wb[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,r,i){const s=$a();return new Promise((o,a)=>{const c=new IA;c.setWithCredentials(!0),c.listenOnce(gA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case La.NO_ERROR:const l=c.getResponseJson();_(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case La.TIMEOUT:_(be,`RPC '${e}' ${s} timed out`),a(new g(p.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const h=c.getStatus();if(_(be,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const I=function(w){const C=w.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(C)>=0?C:p.UNKNOWN}(f.status);a(new g(I,f.message))}else a(new g(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(p.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{_(be,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(be,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}wo(e,t,r){const i=$a(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mA(),a=pA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new yA({})),this.fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(be,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const I=new Eb({so:w=>{f?_(be,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(_(be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(be,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),v=(w,C,x)=>{w.listen(C,D=>{try{x(D)}catch(q){setTimeout(()=>{throw q},0)}})};return v(h,Rs.EventType.OPEN,()=>{f||_(be,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Rs.EventType.CLOSE,()=>{f||(f=!0,_(be,`RPC '${e}' stream ${i} transport closed`),I.Po())}),v(h,Rs.EventType.ERROR,w=>{f||(f=!0,Xe(be,`RPC '${e}' stream ${i} transport errored:`,w),I.Po(new g(p.UNAVAILABLE,"The operation could not be completed")))}),v(h,Rs.EventType.MESSAGE,w=>{var C;if(!f){const x=w.data[0];P(!!x);const D=x,q=D.error||((C=D[0])===null||C===void 0?void 0:C.error);if(q){_(be,`RPC '${e}' stream ${i} received error:`,q);const $=q.status;let U=function(qr){const Is=oe[qr];if(Is!==void 0)return Up(Is)}($),ye=q.message;U===void 0&&(U=p.INTERNAL,ye="Unknown error status: "+$+" with message "+q.message),f=!0,I.Po(new g(U,ye)),h.close()}else _(be,`RPC '${e}' stream ${i} received:`,x),I.Io(x)}}),v(a,_A.STAT_EVENT,w=>{w.stat===Eh.PROXY?_(be,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Eh.NOPROXY&&_(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.ho()},0),I}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){return typeof window!="undefined"?window:null}function Gs(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){return new DR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Zu(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(ne(t.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===t&&this.e_(r,i)},r=>{e(()=>{const i=new g(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,t){const r=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ab extends wg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=xR(this.serializer,e),r=function(s){if(!("targetChange"in s))return b.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?ie(o.readTime):b.min()}(e);return this.listener.r_(t,r)}i_(e){const t={};t.database=Ui(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=ao(c)?{documents:Hp(s,c)}:{query:Qp(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gp(s,o.resumeToken);const u=Ec(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=yr(s,o.snapshotVersion.toTimestamp());const u=Ec(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=MR(this.serializer,e);r&&(t.labels=r),this.Ho(t)}s_(e){const t={};t.database=Ui(this.serializer),t.removeTarget=e,this.Ho(t)}}class Rb extends wg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=OR(e.writeResults,e.commitTime),r=ie(e.commitTime);return this.listener.u_(r,t)}return P(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Ui(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bi(this.serializer,r))};this.Ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(p.UNKNOWN,i.toString())})}yo(e,t,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(p.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class Pb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ne(t),this.d_=!1):_("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{cn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.y_.add(4),await Lr(u),u.b_.set("Unknown"),u.y_.delete(4),await ms(u)}(this))})}),this.b_=new Pb(r,i)}}async function ms(n){if(cn(n))for(const e of n.w_)await e(!0)}async function Lr(n){for(const e of n.w_)await e(!1)}function ea(n,e){const t=T(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),nl(t)?tl(t):Ur(t).Uo()&&el(t,e))}function qi(n,e){const t=T(n),r=Ur(t);t.p_.delete(e),r.Uo()&&Eg(t,e),t.p_.size===0&&(r.Uo()?r.zo():cn(t)&&t.b_.set("Unknown"))}function el(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(b.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ur(n).i_(e)}function Eg(n,e){n.D_.Be(e),Ur(n).s_(e)}function tl(n){n.D_=new PR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),Ur(n).start(),n.b_.A_()}function nl(n){return cn(n)&&!Ur(n).$o()&&n.p_.size>0}function cn(n){return T(n).y_.size===0}function Tg(n){n.D_=void 0}async function Cb(n){n.p_.forEach((e,t)=>{el(n,e)})}async function kb(n,e){Tg(n),nl(n)?(n.b_.m_(e),tl(n)):n.b_.set("Unknown")}async function Db(n,e,t){if(n.b_.set("Online"),e instanceof $p&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _o(n,r)}else if(e instanceof $s?n.D_.We(e):e instanceof qp?n.D_.Ze(e):n.D_.je(e),!t.isEqual(b.min()))try{const r=await mg(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(ue.EMPTY_BYTE_STRING,l.snapshotVersion)),Eg(s,c);const h=new It(l.target,c,u,l.sequenceNumber);el(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await _o(n,r)}}async function _o(n,e,t){if(!on(e))throw e;n.y_.add(1),await Lr(n),n.b_.set("Offline"),t||(t=()=>mg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await ms(n)})}function Ag(n,e){return e().catch(t=>_o(n,t,e))}async function Fr(n){const e=T(n),t=Jt(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Vb(e);)try{const i=await _b(e.localStore,r);if(i===null){e.g_.length===0&&t.zo();break}r=i.batchId,Nb(e,i)}catch(i){await _o(e,i)}Rg(e)&&bg(e)}function Vb(n){return cn(n)&&n.g_.length<10}function Nb(n,e){n.g_.push(e);const t=Jt(n);t.Uo()&&t.__&&t.a_(e.mutations)}function Rg(n){return cn(n)&&!Jt(n).$o()&&n.g_.length>0}function bg(n){Jt(n).start()}async function xb(n){Jt(n).l_()}async function Ob(n){const e=Jt(n);for(const t of n.g_)e.a_(t.mutations)}async function Mb(n,e,t){const r=n.g_.shift(),i=Bu.from(r,e,t);await Ag(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Fr(n)}async function Lb(n,e){e&&Jt(n).__&&await async function(r,i){if(function(o){return Fp(o)&&o!==p.ABORTED}(i.code)){const s=r.g_.shift();Jt(r).Go(),await Ag(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fr(r)}}(n,e),Rg(n)&&bg(n)}async function pd(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=cn(t);t.y_.add(3),await Lr(t),r&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await ms(t)}async function Cc(n,e){const t=T(n);e?(t.y_.delete(2),await ms(t)):e||(t.y_.add(2),await Lr(t),t.b_.set("Unknown"))}function Ur(n){return n.v_||(n.v_=function(t,r,i){const s=T(t);return s.P_(),new Ab(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:Cb.bind(null,n),uo:kb.bind(null,n),r_:Db.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),nl(n)?tl(n):n.b_.set("Unknown")):(await n.v_.stop(),Tg(n))})),n.v_}function Jt(n){return n.C_||(n.C_=function(t,r,i){const s=T(t);return s.P_(),new Rb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:xb.bind(null,n),uo:Lb.bind(null,n),c_:Ob.bind(null,n),u_:Mb.bind(null,n)}),n.w_.push(async e=>{e?(n.C_.Go(),await Fr(n)):(await n.C_.stop(),n.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new rl(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Br(n,e){if(ne("AsyncQueue",`${e}: ${n}`),on(n))return new g(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.comparator=e?(t,r)=>e(t,r)||E.comparator(t.key,r.key):(t,r)=>E.comparator(t.key,r.key),this.keyedMap=ii(),this.sortedSet=new z(this.comparator)}static emptySet(e){return new ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.F_=new z(E.comparator)}track(e){const t=e.doc.key,r=this.F_.get(t);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(t,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(t):e.type===1&&r.type===2?this.F_=this.F_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):R():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,r)=>{e.push(r)}),e}}class wr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new wr(e,t,ur.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.x_=void 0,this.listeners=[]}}class Ub{constructor(){this.queries=new an(e=>Tp(e),cs),this.onlineState="Unknown",this.O_=new Set}}async function il(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new Fb),i)try{s.x_=await t.onListen(r)}catch(o){const a=Br(o,`Initialization of query '${wc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.N_(t.onlineState),s.x_&&e.B_(s.x_)&&ol(t)}async function sl(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function Bb(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&ol(t)}function qb(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function ol(n){n.O_.forEach(e=>{e.next()})}class al{constructor(e,t,r){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,t){this.G_=e,this.byteLength=t}z_(){return"metadata"in this.G_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.serializer=e}os(e){return ut(this.serializer,e)}_s(e){return e.metadata.exists?Wp(this.serializer,e.document,!1):W.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return ie(e)}}class Gb{constructor(e,t,r){this.j_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Pg(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++t;const r=F.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}J_(e){const t=new Map,r=new _d(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||N()).add(s);t.set(o,a)}}return t}async complete(){const e=await yb(this.localStore,new _d(this.serializer),this.documents,this.j_.id),t=this.J_(this.documents);for(const r of this.queries)await Ib(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function Pg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.key=e}}class Cg{constructor(e){this.key=e}}class kg{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=N(),this.mutatedKeys=N(),this.na=Rp(e),this.ra=new ur(this.na)}get ia(){return this.X_}sa(e,t){const r=t?t.oa:new gd,i=t?t.ra:this.ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=us(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?I!==v&&(r.track({type:3,doc:f}),w=!0):this._a(d,f)||(r.track({type:2,doc:f}),w=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,l)=>function(d,f){const I=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return I(d)-I(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new wr(this.query,e.ra,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new gd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=N(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const t=[];return e.forEach(r=>{this.ta.has(r)||t.push(new Cg(r))}),this.ta.forEach(r=>{e.has(r)||t.push(new Sg(r))}),t}ha(e){this.X_=e.ss,this.ta=N();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return wr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class jb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zb{constructor(e){this.key=e,this.Ia=!1}}class Kb{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new an(a=>Tp(a),cs),this.da=new Map,this.Aa=new Set,this.Ra=new z(E.comparator),this.Va=new Map,this.ma=new Hu,this.fa={},this.ga=new Map,this.pa=Ln.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Wb(n,e){const t=dl(n);let r,i;const s=t.Ea.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await Ir(t.localStore,Ue(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await cl(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&ea(t.remoteStore,o)}return i}async function cl(n,e,t,r,i){n.wa=(h,d,f)=>async function(v,w,C,x){let D=w.view.sa(C);D.zi&&(D=await mo(v.localStore,w.query,!1).then(({documents:U})=>w.view.sa(U,D)));const q=x&&x.targetChanges.get(w.targetId),$=w.view.applyChanges(D,v.isPrimaryClient,q);return kc(v,w.targetId,$.ca),$.snapshot}(n,h,d,f);const s=await mo(n.localStore,e,!0),o=new kg(e,s.ss),a=o.sa(s.documents),c=ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);kc(n,t,u.ca);const l=new jb(e,t,o);return n.Ea.set(e,l),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),u.snapshot}async function Hb(n,e){const t=T(n),r=t.Ea.get(e),i=t.da.get(r.targetId);if(i.length>1)return t.da.set(r.targetId,i.filter(s=>!cs(s,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await vr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),qi(t.remoteStore,r.targetId),Er(t,r.targetId)}).catch(sn)):(Er(t,r.targetId),await vr(t.localStore,r.targetId,!0))}async function Qb(n,e,t){const r=fl(n);try{const i=await function(o,a){const c=T(o),u=J.now(),l=a.reduce((f,I)=>f.add(I.key),N());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Fe(),v=N();return c.Xi.getEntries(f,l).next(w=>{I=w,I.forEach((C,x)=>{x.isValidDocument()||(v=v.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(w=>{h=w;const C=[];for(const x of a){const D=AR(x,h.get(x.key).overlayedDocument);D!=null&&C.push(new St(x.key,D,mp(D.value.mapValue),Y.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,C,a)}).next(w=>{d=w;const C=w.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,w.batchId,C)})}).then(()=>({batchId:d.batchId,changes:Pp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new z(V)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,t),await Ct(r,i.changes),await Fr(r.remoteStore)}catch(i){const s=Br(i,"Failed to persist write");t.reject(s)}}async function Dg(n,e){const t=T(n);try{const r=await gb(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Va.get(s);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?P(o.Ia):i.removedDocuments.size>0&&(P(o.Ia),o.Ia=!1))}),await Ct(t,r,e)}catch(r){await sn(r)}}function yd(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&ol(c)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yb(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new z(E.comparator);o=o.insert(s,W.newNoDocument(s,b.min()));const a=N().add(s),c=new hs(b.min(),new Map,new z(V),o,a);await Dg(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(e),hl(r)}else await vr(r.localStore,e,!1).then(()=>Er(r,e,t)).catch(sn)}async function Jb(n,e){const t=T(n),r=e.batch.batchId;try{const i=await pb(t.localStore,e);ll(t,r,null),ul(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ct(t,i)}catch(i){await sn(i)}}async function Xb(n,e,t){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(P(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);ll(r,e,t),ul(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ct(r,i)}catch(i){await sn(i)}}async function Zb(n,e){const t=T(n);cn(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ga.get(r)||[];i.push(e),t.ga.set(r,i)}catch(r){const i=Br(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ul(n,e){(n.ga.get(e)||[]).forEach(t=>{t.resolve()}),n.ga.delete(e)}function ll(n,e,t){const r=T(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Er(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.da.get(e))n.Ea.delete(r),t&&n.Ta.Sa(r,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(r=>{n.ma.containsKey(r)||Vg(n,r)})}function Vg(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(qi(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),hl(n))}function kc(n,e,t){for(const r of t)r instanceof Sg?(n.ma.addReference(r.key,e),eP(n,r)):r instanceof Cg?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,e),n.ma.containsKey(r.key)||Vg(n,r.key)):R()}function eP(n,e){const t=e.key,r=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(r)||(_("SyncEngine","New document in limbo: "+t),n.Aa.add(r),hl(n))}function hl(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new E(F.fromString(e)),r=n.pa.next();n.Va.set(r,new zb(t)),n.Ra=n.Ra.insert(t,r),ea(n.remoteStore,new It(Ue(xr(t.path)),r,"TargetPurposeLimboResolution",Me.ae))}}async function Ct(n,e,t){const r=T(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Ju.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!on(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),I=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(I);l.Ji=l.Ji.insert(d,v)}}}(r.localStore,s))}async function tP(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await fg(t.localStore,e);t.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new g(p.CANCELLED,o))})}),s.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ct(t,r.ts)}}function nP(n,e){const t=T(n),r=t.Va.get(e);if(r&&r.Ia)return N().add(r.key);{let i=N();const s=t.da.get(e);if(!s)return i;for(const o of s){const a=t.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}async function rP(n,e){const t=T(n),r=await mo(t.localStore,e.query,!0),i=e.view.ha(r);return t.isPrimaryClient&&kc(t,e.targetId,i.ca),i}async function iP(n,e){const t=T(n);return _g(t.localStore,e).then(r=>Ct(t,r))}async function sP(n,e,t,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Fr(i.remoteStore):t==="acknowledged"||t==="rejected"?(ll(i,e,r||null),ul(i,e),function(a,c){T(T(a).mutationQueue).Cn(c)}(i.localStore,e)):R(),await Ct(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function oP(n,e){const t=T(n);if(dl(t),fl(t),e===!0&&t.ya!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Id(t,r.toArray());t.ya=!0,await Cc(t.remoteStore,!0);for(const s of i)ea(t.remoteStore,s)}else if(e===!1&&t.ya!==!1){const r=[];let i=Promise.resolve();t.da.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Er(t,o),vr(t.localStore,o,!0))),qi(t.remoteStore,o)}),await i,await Id(t,r),function(o){const a=T(o);a.Va.forEach((c,u)=>{qi(a.remoteStore,u)}),a.ma.Rr(),a.Va=new Map,a.Ra=new z(E.comparator)}(t),t.ya=!1,await Cc(t.remoteStore,!1)}}async function Id(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await Ir(r.localStore,Ue(c[0]));for(const u of c){const l=r.Ea.get(u),h=await rP(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await gg(r.localStore,o);a=await Ir(r.localStore,u),await cl(r,Ng(u),o,!1,a.resumeToken)}i.push(a)}return r.Ta.r_(s),i}function Ng(n){return Ep(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function aP(n){return function(t){return T(T(t).persistence).Ni()}(T(n).localStore)}async function cP(n,e,t,r){const i=T(n);if(i.ya)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.da.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await _g(i.localStore,Ap(s[0])),a=hs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ue.EMPTY_BYTE_STRING);await Ct(i,o,a);break}case"rejected":await vr(i.localStore,e,!0),Er(i,e,r);break;default:R()}}async function uP(n,e,t){const r=dl(n);if(r.ya){for(const i of e){if(r.da.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await gg(r.localStore,i),o=await Ir(r.localStore,s);await cl(r,Ng(s),o.targetId,!1,o.resumeToken),ea(r.remoteStore,o)}for(const i of t)r.da.has(i)&&await vr(r.localStore,i,!1).then(()=>{qi(r.remoteStore,i),Er(r,i)}).catch(sn)}}function dl(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yb.bind(null,e),e.Ta.r_=Bb.bind(null,e.eventManager),e.Ta.Sa=qb.bind(null,e.eventManager),e}function fl(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xb.bind(null,e),e}function lP(n,e,t){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,I){const v=T(f),w=ie(I.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",C=>v.Qr.getBundleMetadata(C,I.id)).then(C=>!!C&&C.createTime.compareTo(w)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(Pg(c));const u=new Gb(c,s.localStore,o.serializer);let l=await o.ba();for(;l;){const d=await u.H_(l);d&&a._updateProgress(d),l=await o.ba()}const h=await u.complete();return await Ct(s,h.Z_,void 0),await function(f,I){const v=T(f);return v.persistence.runTransaction("Save bundle","readwrite",w=>v.Qr.saveBundleMetadata(w,I))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return Xe("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Dc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return dg(this.persistence,new hg,e.initialUser,this.serializer)}createPersistence(e){return new lg(Zo.zr,this.serializer)}createSharedClientState(e){return new Ig}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xg extends Dc{constructor(e,t,r){super(),this.Da=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await fl(this.Da.syncEngine),await Fr(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return dg(this.persistence,new hg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new ZR(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new MA(t,this.persistence);return new OA(e.asyncQueue,r)}createPersistence(e){const t=Yu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Qu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,vg(),Gs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Ig}}class hP extends xg{constructor(e,t){super(e,t,!1),this.Da=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Da.syncEngine;this.sharedClientState instanceof qa&&(this.sharedClientState.syncEngine={Gs:sP.bind(null,t),zs:cP.bind(null,t),js:uP.bind(null,t),Ni:aP.bind(null,t),Ws:iP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await oP(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=vg();if(!qa.v(t))throw new g(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Yu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class ml{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tP.bind(null,this.syncEngine),await Cc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ub}()}createDatastore(e){const t=fs(e.databaseInfo.databaseId),r=function(s){return new Tb(s)}(e.databaseInfo);return function(s,o,a,c){return new bb(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new Sb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>yd(this.syncEngine,t,0),function(){return md.v()?new md:new vb}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new Kb(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=T(t);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Lr(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ne("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t){this.Fa=e,this.serializer=t,this.metadata=new fe,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(e===null)return null;const t=this.Ma.decode(e),r=Number(t);isNaN(r)&&this.Na(`length string (${t}) is not valid number`);const i=await this.Ba(r);return new $b(JSON.parse(i),e.length+r)}La(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const t=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=T(i),a=Ui(o.serializer)+"/documents",c={documents:s.map(d=>Fi(o.serializer,d))},u=await o.yo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=NR(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());P(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=E.fromPath(r);this.mutations.push(new Fu(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Ui(s.serializer)+"/documents",a={writes:i.map(c=>Bi(s.serializer,c))};await s.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=b.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(b.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(b.min()))throw new g(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.qa=r.maxAttempts,this.Ko=new Zu(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new fP(this.datastore),t=this.Ka(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.$a(i)}))}).catch(r=>{this.$a(r)})})}Ka(e){try{const t=this.updateFunction(e);return!os(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Fp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=Zm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Br(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function js(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pl(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>pd(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>pd(e.remoteStore,s)),n._onlineComponents=e}function Og(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function pl(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await js(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Og(t))throw t;Xe("Error using user provided cache. Falling back to memory cache: "+t),await js(n,new Dc)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await js(n,new Dc);return n._offlineComponents}async function na(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Vc(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Vc(n,new ml))),n._onlineComponents}function Mg(n){return pl(n).then(e=>e.persistence)}function gl(n){return pl(n).then(e=>e.localStore)}function Lg(n){return na(n).then(e=>e.remoteStore)}function _l(n){return na(n).then(e=>e.syncEngine)}function gP(n){return na(n).then(e=>e.datastore)}async function Tr(n){const e=await na(n),t=e.eventManager;return t.onListen=Wb.bind(null,e.syncEngine),t.onUnlisten=Hb.bind(null,e.syncEngine),t}function _P(n){return n.asyncQueue.enqueue(async()=>{const e=await Mg(n),t=await Lg(n);return e.setNetworkEnabled(!0),function(i){const s=T(i);return s.y_.delete(0),ms(s)}(t)})}function yP(n){return n.asyncQueue.enqueue(async()=>{const e=await Mg(n),t=await Lg(n);return e.setNetworkEnabled(!1),async function(i){const s=T(i);s.y_.add(0),await Lr(s),s.b_.set("Offline")}(t)})}function IP(n,e){const t=new fe;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Br(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await gl(n),e,t)),t.promise}function Fg(n,e,t={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ta({next:d=>{o.enqueueAndForget(()=>sl(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new g(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new al(xr(a.path),l,{includeMetadataChanges:!0,W_:!0});return il(s,h)}(await Tr(n),n.asyncQueue,e,t,r)),r.promise}function vP(n,e){const t=new fe;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await mo(i,s,!0),c=new kg(s,a.ss),u=c.sa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Br(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await gl(n),e,t)),t.promise}function Ug(n,e,t={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new ta({next:d=>{o.enqueueAndForget(()=>sl(s,h)),d.fromCache&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new al(a,l,{includeMetadataChanges:!0,W_:!0});return il(s,h)}(await Tr(n),n.asyncQueue,e,t,r)),r.promise}function wP(n,e){const t=new ta(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).O_.add(s),s.next()}(await Tr(n),t)),()=>{t.Ca(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).O_.delete(s)}(await Tr(n),t))}}function EP(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?Bp().encode(o):o,function(l,h){return new dP(l,h)}(function(l,h){if(l instanceof Uint8Array)return vd(l,h);if(l instanceof ArrayBuffer)return vd(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,fs(e));n.asyncQueue.enqueueAndForget(async()=>{lP(await _l(n),i,r)})}function TP(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await gl(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n,e,t){if(!t)throw new g(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qg(n,e,t,r){if(e===!0&&r===!0)throw new g(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ed(n){if(!E.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Td(n){if(E.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function B(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new g(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $g(n,e){if(e<=0)throw new g(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ps{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ad({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ad(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TA;switch(r.type){case"firstParty":return new PA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wd.get(t);r&&(_("ComponentProvider","Removing Datastore"),wd.delete(t),r.terminate())}(this),Promise.resolve()}}function AP(n,e,t,r={}){var i;const s=(n=B(n,ps))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=de.MOCK_USER;else{a=z_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new g(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new de(u)}n._authCredentials=new AA(new Xm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Re(this.firestore,e,this._query)}}class Q{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Q(this.firestore,e,this._key)}}class lt extends Re{constructor(e,t,r){super(e,t,xr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Q(this.firestore,null,new E(e))}withConverter(e){return new lt(this.firestore,e,this._path)}}function Gg(n,e,...t){if(n=S(n),yl("collection","path",e),n instanceof ps){const r=F.fromString(e,...t);return Td(r),new lt(n,null,r)}{if(!(n instanceof Q||n instanceof lt))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return Td(r),new lt(n.firestore,null,r)}}function RP(n,e){if(n=B(n,ps),yl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Re(n,null,function(r){return new Pt(F.emptyPath(),r)}(e))}function yo(n,e,...t){if(n=S(n),arguments.length===1&&(e=Zm.V()),yl("doc","path",e),n instanceof ps){const r=F.fromString(e,...t);return Ed(r),new Q(n,null,new E(r))}{if(!(n instanceof Q||n instanceof lt))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return Ed(r),new Q(n.firestore,n instanceof lt?n.converter:null,new E(r))}}function jg(n,e){return n=S(n),e=S(e),(n instanceof Q||n instanceof lt)&&(e instanceof Q||e instanceof lt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function zg(n,e){return n=S(n),e=S(e),n instanceof Re&&e instanceof Re&&n.firestore===e.firestore&&cs(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Zu(this,"async_queue_retry"),this.Xa=()=>{const t=Gs();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=Gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=Gs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new fe;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!on(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=t,t}enqueueAfterDelay(e,t,r){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const i=rl.createAndSchedule(this,e,t,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&R()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function Nc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class PP{constructor(){this._progressObserver={},this._taskCompletionResolver=new fe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=-1;class te extends ps{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new bP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kg(this),this._firestoreClient.terminate()}}function _e(n){return n._firestoreClient||Kg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Kg(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new rR(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Bg(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new pP(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=i.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function CP(n,e){Hg(n=B(n,te));const t=_e(n);if(t._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Xe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new ml;return Wg(t,i,new xg(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function kP(n){Hg(n=B(n,te));const e=_e(n);if(e._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Xe("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new ml;return Wg(e,r,new hP(r,t.cacheSizeBytes))}function Wg(n,e,t){const r=new fe;return n.asyncQueue.enqueue(async()=>{try{await js(n,t),await Vc(n,e),r.resolve()}catch(i){const s=i;if(!Og(s))throw s;Xe("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function DP(n){if(n._initialized&&!n._terminated)throw new g(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new fe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!We.v())return Promise.resolve();const i=r+"main";await We.delete(i)}(Yu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function VP(n){return function(t){const r=new fe;return t.asyncQueue.enqueueAndForget(async()=>Zb(await _l(t),r)),r.promise}(_e(n=B(n,te)))}function NP(n){return _P(_e(n=B(n,te)))}function xP(n){return yP(_e(n=B(n,te)))}function OP(n,e){const t=_e(n=B(n,te)),r=new PP;return EP(t,n._databaseId,e,r),r}function MP(n,e){return TP(_e(n=B(n,te)),e).then(t=>t?new Re(n,null,t.query):null)}function Hg(n){if(n._initialized||n._terminated)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(ue.fromBase64String(e))}catch(t){throw new g(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=/^__.*__$/;class FP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new Or(e,this.data,t,this.fieldTransforms)}}class Qg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class sa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new sa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Io(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(Yg(this.uu)&&LP.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class UP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fs(e)}Ru(e,t,r,i=!1){return new sa({uu:e,methodName:t,Au:r,path:re.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jn(n){const e=n._freezeSettings(),t=fs(n._databaseId);return new UP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oa(n,e,t,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,e,t,i);El("Data must be an object, but it was:",o,r);const a=Zg(r,o);let c,u;if(s.merge)c=new Le(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=xc(e,h,t);if(!o.contains(d))throw new g(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);t_(l,d)||l.push(d)}c=new Le(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new FP(new we(a),c,u)}class gs extends Gn{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gs}}function Jg(n,e,t){return new sa({uu:3,Au:e.settings.Au,methodName:n._methodName,hu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Il extends Gn{_toFieldTransform(e){return new ls(e.path,new gr)}isEqual(e){return e instanceof Il}}class BP extends Gn{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=Jg(this,e,!0),r=this.Vu.map(s=>zn(s,t)),i=new Nn(r);return new ls(e.path,i)}isEqual(e){return this===e}}class qP extends Gn{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=Jg(this,e,!0),r=this.Vu.map(s=>zn(s,t)),i=new xn(r);return new ls(e.path,i)}isEqual(e){return this===e}}class $P extends Gn{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=new _r(e.serializer,Dp(e.serializer,this.mu));return new ls(e.path,t)}isEqual(e){return this===e}}function vl(n,e,t,r){const i=n.Ru(1,e,t);El("Data must be an object, but it was:",i,r);const s=[],o=we.empty();$n(r,(c,u)=>{const l=Tl(e,c,t);u=S(u);const h=i.Iu(l);if(u instanceof gs)s.push(l);else{const d=zn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Le(s);return new Qg(o,a,i.fieldTransforms)}function wl(n,e,t,r,i,s){const o=n.Ru(1,e,t),a=[xc(e,r,t)],c=[i];if(s.length%2!=0)throw new g(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xc(e,s[d])),c.push(s[d+1]);const u=[],l=we.empty();for(let d=a.length-1;d>=0;--d)if(!t_(u,a[d])){const f=a[d];let I=c[d];I=S(I);const v=o.Iu(f);if(I instanceof gs)u.push(f);else{const w=zn(I,v);w!=null&&(u.push(f),l.set(f,w))}}const h=new Le(u);return new Qg(l,h,o.fieldTransforms)}function Xg(n,e,t,r=!1){return zn(t,n.Ru(r?4:3,e))}function zn(n,e){if(e_(n=S(n)))return El("Unsupported field value:",e,n),Zg(n,e);if(n instanceof Gn)return function(r,i){if(!Yg(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=zn(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=S(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=J.fromDate(r);return{timestampValue:yr(i.serializer,s)}}if(r instanceof J){const s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yr(i.serializer,s)}}if(r instanceof ia)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mt)return{bytesValue:Gp(i.serializer,r._byteString)};if(r instanceof Q){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ju(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${ra(r)}`)}(n,e)}function Zg(n,e){const t={};return hp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$n(n,(r,i)=>{const s=zn(i,e.lu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function e_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof ia||n instanceof mt||n instanceof Q||n instanceof Gn)}function El(n,e,t){if(!e_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ra(t);throw r==="an object"?e.Eu(n+" a custom object"):e.Eu(n+" "+r)}}function xc(n,e,t){if((e=S(e))instanceof Xt)return e._internalPath;if(typeof e=="string")return Tl(n,e);throw Io("Field path arguments must be of type string or ",n,!1,void 0,t)}const GP=new RegExp("[~\\*/\\[\\]]");function Tl(n,e,t){if(e.search(GP)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xt(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Io(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(p.INVALID_ARGUMENT,a+n+c)}function t_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Q(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jP extends $i{data(){return super.data()}}function aa(n,e){return typeof e=="string"?Tl(n,e):e instanceof Xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Al{}class _s extends Al{}function Ot(n,e,...t){let r=[];e instanceof Al&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof Rl).length,a=s.filter(c=>c instanceof ca).length;if(o>1||o>0&&a>0)throw new g(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ca extends _s{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ca(e,t,r)}_apply(e){const t=this._parse(e);return i_(e._query,t),new Re(e.firestore,e.converter,vc(e._query,t))}_parse(e){const t=jn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){bd(h,l);const f=[];for(const I of h)f.push(Rd(c,s,I));d={arrayValue:{values:f}}}else d=Rd(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||bd(h,l),d=Xg(a,o,h,l==="in"||l==="not-in");return O.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zP(n,e,t){const r=e,i=aa("where",n);return ca._create(i,r,t)}class Rl extends Al{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:G.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)i_(o,c),o=vc(o,c)}(e._query,t),new Re(e.firestore,e.converter,vc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bl extends _s{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new cr(s,o);return function(u,l){if(Ou(u)===null){const h=Ho(u);h!==null&&s_(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new Re(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Pt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function KP(n,e="asc"){const t=e,r=aa("orderBy",n);return bl._create(r,t)}class ua extends _s{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ua(e,t,r)}_apply(e){return new Re(e.firestore,e.converter,uo(e._query,this._limit,this._limitType))}}function WP(n){return $g("limit",n),ua._create("limit",n,"F")}function HP(n){return $g("limitToLast",n),ua._create("limitToLast",n,"L")}class la extends _s{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new la(e,t,r)}_apply(e){const t=r_(e,this.type,this._docOrFields,this._inclusive);return new Re(e.firestore,e.converter,function(i,s){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function QP(...n){return la._create("startAt",n,!0)}function YP(...n){return la._create("startAfter",n,!1)}class ha extends _s{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ha(e,t,r)}_apply(e){const t=r_(e,this.type,this._docOrFields,this._inclusive);return new Re(e.firestore,e.converter,function(i,s){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function JP(...n){return ha._create("endBefore",n,!1)}function XP(...n){return ha._create("endAt",n,!0)}function r_(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof $i)return function(s,o,a,c,u){if(!c)throw new g(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of bn(s))if(h.field.isKeyField())l.push(Dn(o,c.key));else{const d=c.data.field(h.field);if(Wo(d))throw new g(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new g(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Yt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=jn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(p.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const v=l[I];if(d[I].field.isKeyField()){if(typeof v!="string")throw new g(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Mu(o)&&v.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const w=o.path.child(F.fromString(v));if(!E.isDocumentKey(w))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const C=new E(w);f.push(Dn(a,C))}else{const w=Xg(c,u,v);f.push(w)}}return new Yt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Rd(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new g(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mu(e)&&t.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!E.isDocumentKey(r))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dn(n,new E(r))}if(t instanceof Q)return Dn(n,t._key);throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ra(t)}.`)}function bd(n,e){if(!Array.isArray(n)||n.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function i_(n,e){if(e.isInequality()){const r=Ho(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new g(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Ou(n);s!==null&&s_(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function s_(n,e,t){if(!t.isEqual(e))throw new g(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Pl{convertValue(e,t="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $n(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new ia(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Nu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);P(Zp(r));const i=new Ht(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(t)||ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ZP extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class At extends $i{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class gi extends At{data(e={}){return super.data(e)}}class Zt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new gi(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new gi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new gi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:e0(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function e0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function o_(n,e){return n instanceof At&&e instanceof At?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Zt&&e instanceof Zt&&n._firestore===e._firestore&&zg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){n=B(n,Q);const e=B(n.firestore,te);return Fg(_e(e),n._key).then(t=>Sl(e,n,t))}class Kn extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Q(this.firestore,null,t)}}function n0(n){n=B(n,Q);const e=B(n.firestore,te),t=_e(e),r=new Kn(e);return IP(t,n._key).then(i=>new At(e,r,n._key,i,new vn(i!==null&&i.hasLocalMutations,!0),n.converter))}function r0(n){n=B(n,Q);const e=B(n.firestore,te);return Fg(_e(e),n._key,{source:"server"}).then(t=>Sl(e,n,t))}function i0(n){n=B(n,Re);const e=B(n.firestore,te),t=_e(e),r=new Kn(e);return n_(n._query),Ug(t,n._query).then(i=>new Zt(e,r,n,i))}function s0(n){n=B(n,Re);const e=B(n.firestore,te),t=_e(e),r=new Kn(e);return vP(t,n._query).then(i=>new Zt(e,r,n,i))}function o0(n){n=B(n,Re);const e=B(n.firestore,te),t=_e(e),r=new Kn(e);return Ug(t,n._query,{source:"server"}).then(i=>new Zt(e,r,n,i))}function Pd(n,e,t){n=B(n,Q);const r=B(n.firestore,te),i=da(n.converter,e,t);return ys(r,[oa(jn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function Sd(n,e,t,...r){n=B(n,Q);const i=B(n.firestore,te),s=jn(i);let o;return o=typeof(e=S(e))=="string"||e instanceof Xt?wl(s,"updateDoc",n._key,e,t,r):vl(s,"updateDoc",n._key,e),ys(i,[o.toMutation(n._key,Y.exists(!0))])}function a0(n){return ys(B(n.firestore,te),[new Mr(n._key,Y.none())])}function c0(n,e){const t=B(n.firestore,te),r=yo(n),i=da(n.converter,e);return ys(t,[oa(jn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function a_(n,...e){var t,r,i;n=S(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Q)u=B(n.firestore,te),l=xr(n._key.path),c={next:h=>{e[o]&&e[o](Sl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=B(n,Re);u=B(h.firestore,te),l=h._query;const d=new Kn(u);c={next:f=>{e[o]&&e[o](new Zt(u,d,h,f))},error:e[o+1],complete:e[o+2]},n_(n._query)}return function(d,f,I,v){const w=new ta(v),C=new al(f,w,I);return d.asyncQueue.enqueueAndForget(async()=>il(await Tr(d),C)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>sl(await Tr(d),C))}}(_e(u),l,a,c)}function u0(n,e){return wP(_e(n=B(n,te)),Nc(e)?e:{next:e})}function ys(n,e){return function(r,i){const s=new fe;return r.asyncQueue.enqueueAndForget(async()=>Qb(await _l(r),i,s)),s.promise}(_e(n),e)}function Sl(n,e,t){const r=t.docs.get(e._key),i=new Kn(n);return new At(n,i,e._key,r,new vn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jn(e)}set(e,t,r){this._verifyNotCommitted();const i=Lt(e,this._firestore),s=da(i.converter,t,r),o=oa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Lt(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Xt?wl(this._dataReader,"WriteBatch.update",s._key,t,r,i):vl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Lt(e,this._firestore);return this._mutations=this._mutations.concat(new Mr(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lt(n,e){if((n=S(n)).firestore!==e)throw new g(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=jn(t)}get(t){const r=Lt(t,this._firestore),i=new ZP(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return R();const o=s[0];if(o.isFoundDocument())return new $i(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new $i(this._firestore,i,r._key,null,r.converter);throw R()})}set(t,r,i){const s=Lt(t,this._firestore),o=da(s.converter,r,i),a=oa(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Lt(t,this._firestore);let a;return a=typeof(r=S(r))=="string"||r instanceof Xt?wl(this._dataReader,"Transaction.update",o._key,r,i,s):vl(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Lt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Lt(e,this._firestore),r=new Kn(this._firestore);return super.get(e).then(i=>new At(this._firestore,r,t._key,i._document,new vn(!1,!1),t.converter))}}function f0(n,e,t){n=B(n,te);const r=Object.assign(Object.assign({},l0),t);return function(s){if(s.maxAttempts<1)throw new g(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new fe;return s.asyncQueue.enqueueAndForget(async()=>{const u=await gP(s);new mP(s.asyncQueue,u,a,o,c).run()}),c.promise}(_e(n),i=>e(new d0(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){return new gs("deleteField")}function p0(){return new Il("serverTimestamp")}function g0(...n){return new BP("arrayUnion",n)}function _0(...n){return new qP("arrayRemove",n)}function y0(n){return new $P("increment",n)}(function(e,t=!0){(function(i){Nr=i})(en),Gt(new ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new te(new RA(r.getProvider("auth-internal")),new CA(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new g(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ht(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),He(Th,"4.1.0",e),He(Th,"4.1.0","esm2017")})();const I0="@firebase/firestore-compat",v0="0.3.14";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){if(typeof Uint8Array=="undefined")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function kd(){if(!tR())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Gi{constructor(e){this._delegate=e}static fromBase64String(e){return kd(),new Gi(mt.fromBase64String(e))}static fromUint8Array(e){return Cd(),new Gi(mt.fromUint8Array(e))}toBase64(){return kd(),this._delegate.toBase64()}toUint8Array(){return Cd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){return w0(n,["next","error","complete"])}function w0(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{enableIndexedDbPersistence(e,t){return CP(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return kP(e._delegate)}clearIndexedDbPersistence(e){return DP(e._delegate)}}class c_{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ht||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Xe("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){AP(this._delegate,e,t,r)}enableNetwork(){return NP(this._delegate)}disableNetwork(){return xP(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,qg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return VP(this._delegate)}onSnapshotsInSync(e){return u0(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ar(this,Gg(this._delegate,e))}catch(t){throw ke(t,"collection()","Firestore.collection()")}}doc(e){try{return new ze(this,yo(this._delegate,e))}catch(t){throw ke(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ce(this,RP(this._delegate,e))}catch(t){throw ke(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return f0(this._delegate,t=>e(new u_(this,t)))}batch(){return _e(this._delegate),new l_(new h0(this._delegate,e=>ys(this._delegate,e)))}loadBundle(e){return OP(this._delegate,e)}namedQuery(e){return MP(this._delegate,e).then(t=>t?new Ce(this,t):null)}}class fa extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(new mt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ze.forKey(t,this.firestore,null)}}function T0(n){wA(n)}class u_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new fa(e)}get(e){const t=wn(e);return this._delegate.get(t).then(r=>new ji(this._firestore,new At(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=wn(e);return r?(Cl("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=wn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=wn(e);return this._delegate.delete(t),this}}class l_{constructor(e){this._delegate=e}set(e,t,r){const i=wn(e);return r?(Cl("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=wn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=wn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Fn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new gi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new zi(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Fn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Fn(e,new fa(e),t),i.set(t,s)),s}}Fn.INSTANCES=new WeakMap;class ze{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new fa(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ze(t,new Q(t._delegate,r,new E(e)))}static forKey(e,t,r){return new ze(t,new Q(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ar(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ar(this.firestore,Gg(this._delegate,e))}catch(t){throw ke(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof Q?jg(this._delegate,e):!1}set(e,t){t=Cl("DocumentReference.set",t);try{return t?Pd(this._delegate,e,t):Pd(this._delegate,e)}catch(r){throw ke(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Sd(this._delegate,e):Sd(this._delegate,e,t,...r)}catch(i){throw ke(i,"updateDoc()","DocumentReference.update()")}}delete(){return a0(this._delegate)}onSnapshot(...e){const t=h_(e),r=d_(e,i=>new ji(this.firestore,new At(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return a_(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=n0(this._delegate):(e==null?void 0:e.source)==="server"?t=r0(this._delegate):t=t0(this._delegate),t.then(r=>new ji(this.firestore,new At(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new ze(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ke(n,e,t){return n.message=n.message.replace(e,t),n}function h_(n){for(const e of n)if(typeof e=="object"&&!Oc(e))return e;return{}}function d_(n,e){var t,r;let i;return Oc(n[0])?i=n[0]:Oc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ji{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ze(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return o_(this._delegate,e._delegate)}}class zi extends ji{data(e){const t=this._delegate.data(e);return EA(t!==void 0),t}}class Ce{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new fa(e)}where(e,t,r){try{return new Ce(this.firestore,Ot(this._delegate,zP(e,t,r)))}catch(i){throw ke(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ce(this.firestore,Ot(this._delegate,KP(e,t)))}catch(r){throw ke(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ce(this.firestore,Ot(this._delegate,WP(e)))}catch(t){throw ke(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ce(this.firestore,Ot(this._delegate,HP(e)))}catch(t){throw ke(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ce(this.firestore,Ot(this._delegate,QP(...e)))}catch(t){throw ke(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ce(this.firestore,Ot(this._delegate,YP(...e)))}catch(t){throw ke(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ce(this.firestore,Ot(this._delegate,JP(...e)))}catch(t){throw ke(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ce(this.firestore,Ot(this._delegate,XP(...e)))}catch(t){throw ke(t,"endAt()","Query.endAt()")}}isEqual(e){return zg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=s0(this._delegate):(e==null?void 0:e.source)==="server"?t=o0(this._delegate):t=i0(this._delegate),t.then(r=>new Mc(this.firestore,new Zt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=h_(e),r=d_(e,i=>new Mc(this.firestore,new Zt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return a_(this._delegate,t,r)}withConverter(e){return new Ce(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class A0{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new zi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ce(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new zi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new A0(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new zi(this._firestore,r))})}isEqual(e){return o_(this._delegate,e._delegate)}}class Ar extends Ce{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ze(this.firestore,e):null}doc(e){try{return e===void 0?new ze(this.firestore,yo(this._delegate)):new ze(this.firestore,yo(this._delegate,e))}catch(t){throw ke(t,"doc()","CollectionReference.doc()")}}add(e){return c0(this._delegate,e).then(t=>new ze(this.firestore,t))}isEqual(e){return jg(this._delegate,e._delegate)}withConverter(e){return new Ar(this.firestore,e?this._delegate.withConverter(Fn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function wn(n){return B(n,Q)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(...e){this._delegate=new Xt(...e)}static documentId(){return new kl(re.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Xt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._delegate=e}static serverTimestamp(){const e=p0();return e._methodName="FieldValue.serverTimestamp",new gn(e)}static delete(){const e=m0();return e._methodName="FieldValue.delete",new gn(e)}static arrayUnion(...e){const t=g0(...e);return t._methodName="FieldValue.arrayUnion",new gn(t)}static arrayRemove(...e){const t=_0(...e);return t._methodName="FieldValue.arrayRemove",new gn(t)}static increment(e){const t=y0(e);return t._methodName="FieldValue.increment",new gn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0={Firestore:c_,GeoPoint:ia,Timestamp:J,Blob:Gi,Transaction:u_,WriteBatch:l_,DocumentReference:ze,DocumentSnapshot:ji,Query:Ce,QueryDocumentSnapshot:zi,QuerySnapshot:Mc,CollectionReference:Ar,FieldPath:kl,FieldValue:gn,setLogLevel:T0,CACHE_SIZE_UNLIMITED:SP};function b0(n,e){n.INTERNAL.registerComponent(new ht("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},R0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(n){b0(n,(e,t)=>new c_(e,t,new E0)),n.registerVersion(I0,v0)}P0(br);var S0="firebase",C0="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(S0,C0,"app");const f_={apiKey:"AIzaSyDjcMadIEfa36H7MhSzBCmw4-ZWv3msyBI",authDomain:"quasartodolist-93955.firebaseapp.com",projectId:"quasartodolist-93955",storageBucket:"quasartodolist-93955.appspot.com",messagingSenderId:"528024443411",appId:"1:528024443411:web:be3eff5db5ae4996a0fde6"};wo(f_);const k0=br.initializeApp(f_);var Ns=k0.firestore();const D0=__({data(){return{newTask:"",task:{},tasks:[]}},created(){Ns.collection("ToDoItems").onSnapshot(n=>{this.tasks=[],n.forEach(e=>{e.data().title&&this.tasks.push({key:e.id,title:e.data().title,done:e.data().done})})})},methods:{deleteTask(n,e){this.$q.dialog({title:"Confirm",message:"Are you sure you would like to delete this task?",cancel:!0,persistent:!0}).onOk(()=>{Ns.collection("ToDoItems").doc(e).delete().then(()=>{}).catch(t=>{console.error(t)}),this.$q.notify("Task has been deleted")})},addTask(){this.task={title:this.newTask,done:!1},this.tasks.push({title:this.task.title,done:this.task.done}),Ns.collection("ToDoItems").add(this.task).then(()=>{console.log("added to firebase DB"),this.newTask=""})},updateTask(n,e){n.done=!n.done,Ns.collection("ToDoItems").doc(e).update(n).then(()=>{console.log("updated firebase DB")}).catch(t=>{console.log(t),alert("Error updating task")})}}}),V0={class:"row q-pa-sm bg-primary"},N0={key:0,class:"no-tasks absolute-center"},x0=Dd("div",{class:"text-h5 text-primary text-center"}," No tasks ",-1);function O0(n,e,t,r,i,s){return $r(),pa(V_,{class:"bg-grey-3 column"},{default:Dt(()=>[Dd("div",V0,[pt(I_,{modelValue:n.newTask,"onUpdate:modelValue":e[0]||(e[0]=o=>n.newTask=o),onKeyup:y_(n.addTask,["enter"]),class:"col",square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},{append:Dt(()=>[pt(Dl,{onClick:n.addTask,round:"",dense:"",flat:"",icon:"add"},null,8,["onClick"])]),_:1},8,["modelValue","onKeyup"])]),pt(k_,{class:"bg-white",separator:"",bordered:""},{default:Dt(()=>[($r(!0),Vl(w_,null,v_(n.tasks,(o,a)=>T_(($r(),pa(D_,{key:o.key,onClick:c=>n.updateTask(o,o.key),class:A_({"done bg-blue-1":o.done}),clickable:""},{default:Dt(()=>[pt(ga,{avatar:""},{default:Dt(()=>[pt(R_,{modelValue:o.done,"onUpdate:modelValue":c=>o.done=c,class:"no-pointer-events",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),pt(ga,null,{default:Dt(()=>[pt(x_,null,{default:Dt(()=>[b_(P_(o.title),1)]),_:2},1024)]),_:2},1024),o.done?($r(),pa(ga,{key:0,side:""},{default:Dt(()=>[pt(Dl,{onClick:S_(c=>n.deleteTask(a,o.key),["stop"]),round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])]),_:2},1024)):Nl("",!0)]),_:2},1032,["onClick","class"])),[[C_]])),128))]),_:1}),n.tasks.length?Nl("",!0):($r(),Vl("div",N0,[pt(E_,{name:"check",size:"100px",color:"primary"}),x0]))]),_:1})}var j0=N_(D0,[["render",O0]]);export{j0 as default};
