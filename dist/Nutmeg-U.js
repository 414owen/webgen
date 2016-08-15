/**
 * @license
 * Copyright (c) 2016 Owen Shepherd
 * This software is open-source under the MIT license.
 * The full license can be viewed here: https://opensource.org/licenses/MIT
 *
 */
/**
  * @preserve
  * This is Nutmeg. a tiny client-side website generator.
  * Homepage: https://github.com/414owen/Nutmeg
  *
  */
function nutmeg(){function n(e,t){if(void 0===t.length){var o,r=e.val.style;o=void 0!==t.base?t.base:t;for(var i in o)r[i]=o[i]}else for(var a=0;a<o.length;a++)n(e,o[a])}function e(n,t){switch(typeof t){case"function":n.appendChild(t.val);break;case"string":var r=o.createTextNode(t);n.appendChild(r);break;case"object":for(var i=0;i<t.length;i++)e(n,t[i]);break;default:e(n,t.toString())}}function t(n,e){e.forEach(function(e){n.classList.add(e)})}var o=document,r=window,i={};i.elify=function(o){var r=function(){return r.append(arguments),r};r.append=function(n){return e(o,n),r},r.link=function(n){return r.style({cursor:"pointer"}),r.onclick(function(){window.location=n}),r},r.style=function(e){return n(r,e),r},r.classes=function(n){return t(o,n),r},r.attr=function(n,e){return o.setAttribute(n,e),r},r.prop=function(n,e){return o[n]=e,r},r.clear=function(){for(;o.firstChild;)o.removeChild(o.firstChild);return r},u.forEach(function(n){r[n]=function(e){return o.setAttribute(n,e),r}}),c.forEach(function(n){r[n]=function(e){return o[n]=e,r}});var i={},a=0;return f.forEach(function(n){var e=n+"funcs";i[e]={},r["rem"+n]=function(n){return delete i[e][n],r},r[n]=function(n,t){var o=t;return void 0===t&&(o="_priv_"+a++),i[e][o]=n,r},o[n]=function(){var n=i[e];for(var t in n)n[t]()}}),r.val=o,r};var a=["a","audio","b","br","button","canvas","datalist","div","em","footer","form","h1","h2","h3","h4","h5","h6","header","hr","i","input","item","label","li","menu","menuitem","meter","nav","noscript","ol","p","pre","progress","script","select","span","strong","table","tbody","td","textarea","tfoot","th","thead","tr","ul","video"],u=["alt","contenteditable","href","id","readonly","src","title","type"],c=["checked","disabled","height","selected","value","width"],f=["onactivate","onblur","onchange","onclick","ondblclick","ondeactivate","onfocus","onkeydown","onkeyup","onmousedown","onmouseout","onmouseover","onmouseup"],s=[["hover","onmouseover","onmouseout"],["focus","onfocus","onblur"],["active","onactivate","ondeactivate"]];return i.body=function(){return i.elify(o.body).append(arguments)},a.forEach(function(n){i[n]=function(){return i.elify(o.createElement(n)).append(arguments)}}),i.mergeStyle=function(n){function e(t){void 0!==t.depends&&t.depends.forEach(function(t){e(n[t])}),s.forEach(function(n){var e=n[0];void 0!==t[e]&&pseudos[e].push(t[e])}),r.base.push(t)}var t={};for(var o in n){var r={base:[]};s.forEach(function(n){r[n[0]]=[]}),e(n[o]),t[o]=r}return t},i.global=function(){Object.keys(i).forEach(function(n){r[n]=i[n]})},i}