"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5758],{9155:function(e,n,t){var r=t(1055),o=t(824),c=t(1168),i=t(3778),a=t(687),s=t(8789),u=t(4805),f=t(1644),l=t(8979),d=t(5117),g=t(4711),m=t(2893),w=t(1733);const p=new JSZip;function Z(e){let n;p.load(e);const t=p.file(/\.kml$/i)[0];return t&&(n=t.asText()),n}function h(e){const n=window.location.href.lastIndexOf("/");if(-1!==n){const t=p.file(e.slice(n+1));if(t)return URL.createObjectURL(new Blob([t.asArrayBuffer()]))}return e}class k extends a.ZP{constructor(e){const n=e||{};n.iconUrlFunction=h,super(n)}getType(){return"arraybuffer"}readFeature(e,n){const t=Z(e);return super.readFeature(t,n)}readFeatures(e,n){const t=Z(e);return super.readFeatures(t,n)}}const b=new c.Z({formatConstructors:[k,s.Z,u.Z,f.Z,a.ZP,l.Z]}),y=new r.Z({interactions:(0,i.c)().extend([b]),layers:[new m.Z({source:new d.Z})],target:"map",view:new o.ZP({center:[0,0],zoom:2})});b.on("addfeatures",(function(e){const n=new g.Z({features:e.features});y.addLayer(new w.Z({source:n})),y.getView().fit(n.getExtent())}));const E=function(e){const n=[];if(y.forEachFeatureAtPixel(e,(function(e){n.push(e)})),n.length>0){const e=[];let t,r;for(t=0,r=n.length;t<r;++t){const r=n[t].get("description")||n[t].get("name")||n[t].get("_name")||n[t].get("layer");r&&e.push(r)}document.getElementById("info").innerHTML=e.join("<br/>")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};y.on("pointermove",(function(e){if(e.dragging)return;const n=y.getEventPixel(e.originalEvent);E(n)})),y.on("click",(function(e){E(e.pixel)}));const v=document.getElementById("download");document.getElementById("download-kmz").addEventListener("click",(function(){var e;e="iceland.kmz",fetch("data/kmz/iceland.kmz").then((function(e){return e.blob()})).then((function(n){v.href=URL.createObjectURL(n),v.download=e,v.click()}))}))}},function(e){var n;n=9155,e(e.s=n)}]);
//# sourceMappingURL=drag-and-drop-custom-kmz.js.map