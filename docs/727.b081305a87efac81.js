"use strict";(self.webpackChunke_commerce_client=self.webpackChunke_commerce_client||[]).push([[727],{1757:(S,h,n)=>{n.d(h,{O:()=>u});var d=n(6895),r=n(4650),p=n(3238),g=n(1281);const _=["determinateSpinner"];function m(t,o){if(1&t&&(r.O4$(),r.TgZ(0,"svg",11),r._UZ(1,"circle",12),r.qZA()),2&t){const i=r.oxw();r.uIk("viewBox",i._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),r.uIk("r",i._circleRadius())}}const f=(0,p.pj)(class{constructor(t){this._elementRef=t}},"primary"),e=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function a(){return{diameter:l}}}),l=100;let y=(()=>{class t extends f{constructor(i,c,s){super(i),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=l,this._noopAnimations="NoopAnimations"===c&&!!s&&!s._forceAnimations,s&&(s.color&&(this.color=this.defaultColor=s.color),s.diameter&&(this.diameter=s.diameter),s.strokeWidth&&(this.strokeWidth=s.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,(0,g.su)(i)))}get diameter(){return this._diameter}set diameter(i){this._diameter=(0,g.su)(i)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=(0,g.su)(i)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return t.\u0275fac=function(i){return new(i||t)(r.Y36(r.SBq),r.Y36(r.QbO,8),r.Y36(e))},t.\u0275cmp=r.Xpm({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,c){if(1&i&&r.Gf(_,5),2&i){let s;r.iGM(s=r.CRH())&&(c._determinateCircle=s.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:12,hostBindings:function(i,c){2&i&&(r.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===c.mode?c.value:null)("mode",c.mode),r.Udp("width",c.diameter,"px")("height",c.diameter,"px"),r.ekj("_mat-animation-noopable",c._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===c.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,c){if(1&i&&(r.YNc(0,m,2,8,"ng-template",null,0,r.W1O),r.TgZ(2,"div",1,2),r.O4$(),r.TgZ(4,"svg",3),r._UZ(5,"circle",4),r.qZA()(),r.kcU(),r.TgZ(6,"div",5)(7,"div",6)(8,"div",7),r.GkF(9,8),r.qZA(),r.TgZ(10,"div",9),r.GkF(11,8),r.qZA(),r.TgZ(12,"div",10),r.GkF(13,8),r.qZA()()()),2&i){const s=r.MAs(1);r.xp6(4),r.uIk("viewBox",c._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",c._strokeCircumference(),"px")("stroke-dashoffset",c._strokeDashOffset(),"px")("stroke-width",c._circleStrokeWidth(),"%"),r.uIk("r",c._circleRadius()),r.xp6(4),r.Q6J("ngTemplateOutlet",s),r.xp6(2),r.Q6J("ngTemplateOutlet",s),r.xp6(2),r.Q6J("ngTemplateOutlet",s)}},dependencies:[d.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, transparent)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[d.ez,p.BQ]}),t})();function x(t,o){1&t&&r._UZ(0,"mat-spinner")}class u{constructor(){this.isDisplayed=!1}}u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=r.Xpm({type:u,selectors:[["spinner"]],inputs:{isDisplayed:"isDisplayed"},standalone:!0,features:[r.jDz],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(o,i){1&o&&r.YNc(0,x,1,0,"mat-spinner",0),2&o&&r.Q6J("ngIf",i.isDisplayed)},dependencies:[k,y,d.O5],styles:["mat-spinner[_ngcontent-%COMP%]{position:fixed;top:30vh;left:45vw;z-index:4}"]})},6754:(S,h,n)=>{n.d(h,{o:()=>m});var d=n(2340);class r{constructor(e,a,l,v,y,b,k){this.id=e,this.name=a,this.price=l,this.description=v,this.photoUrl=y,this.rating=b,this.numRating=k}static clone(e){return new r(e.id,e.name,e.price,e.description,e.photoUrl,e.rating,e.numRating)}}var p=n(4650),g=n(529),_=n(6105);class m{constructor(e,a){this.http=e,this.loginServices=a,this.products=[],this.productsUrl=`${d.N.api.url}/products`}getProducts(){this.products.length>0||this.http.get(this.productsUrl).subscribe({next:e=>{e.forEach(a=>{let l=this.initProductFrom(a);this.products.push(l)})},error:e=>{console.log(e)}})}getProductById(e){return this.http.get(`${this.productsUrl}/${e}`)}initProductFrom(e){return new r(e.id,e.name,e.price,e.description,`${d.N.googleStorageURL}/products/${e.photo_key}`,e.rating,e.num_rating)}updateProduct(e,a={}){return this.http.patch(`${this.productsUrl}/${e}`,a,{headers:this.loginServices.getHeaders()})}}m.\u0275fac=function(e){return new(e||m)(p.LFG(g.eN),p.LFG(_.J))},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}}]);