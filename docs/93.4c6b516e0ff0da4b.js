"use strict";(self.webpackChunke_commerce_client=self.webpackChunke_commerce_client||[]).push([[93],{2093:(C,m,i)=>{i.r(m),i.d(m,{CartComponent:()=>f});var r=i(6895),d=i(4859),l=i(4850),p=i(3060),a=i(3327),M=i(6958),t=i(4650),y=i(910),T=i(6082),x=i(4465);function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"img",2),t.TgZ(2,"div",3)(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"div",4)(10,"div",5)(11,"quant-select",6),t.NdJ("onClick",function(v){t.CHM(e);const P=t.oxw();return t.KtG(P.setQuantitySelect(v))}),t.qZA(),t.TgZ(12,"i",7),t.NdJ("click",function(){t.CHM(e);const v=t.oxw();return t.KtG(v.onRemoveClick())}),t.qZA()(),t.TgZ(13,"p",8),t._uU(14),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(1),t.s9C("src",e.selectedProduct.product.photoUrl,t.LSH),t.xp6(3),t.Oqu(e.selectedProduct.product.name),t.xp6(2),t.hij("Item #",e.selectedProduct.product.id,""),t.xp6(2),t.hij("$",e.selectedProduct.product.price,""),t.xp6(3),t.Q6J("quant",e.selectedProduct.quantity),t.xp6(3),t.hij("$",e.selectedProduct.quantity*e.selectedProduct.product.price,"")}}class _{constructor(o,e,g){this.cartServices=o,this.productServices=e,this.toastServices=g,this.quantityOptions=Array.from({length:10},(v,P)=>P+1)}onRemoveClick(){this.cartServices.removeProduct(this.selectedProduct.product.id),this.toastServices.showToast(`${this.selectedProduct.product.name} removed from your cart`,a.pC.SUCCESS)}setQuantitySelect(o){this.selectedProduct.quantity=o}}_.\u0275fac=function(o){return new(o||_)(t.Y36(y.N),t.Y36(T.o),t.Y36(x.j))},_.\u0275cmp=t.Xpm({type:_,selectors:[["cart-product"]],inputs:{selectedProduct:"selectedProduct"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["id","cart-product-container",4,"ngIf"],["id","cart-product-container"],[3,"src"],["id","detail-container"],[2,"display","flex","position","relative","align-items","center"],[2,"display","flex","position","relative","align-items","center","width","90%"],[3,"quant","onClick"],[1,"bi","bi-trash2",3,"click"],[2,"position","relative","margin-top","auto","margin-bottom","auto","display","inline-block","width","10%","text-align","end"]],template:function(o,e){1&o&&t.YNc(0,O,15,6,"div",0),2&o&&t.Q6J("ngIf",e.selectedProduct)},dependencies:[r.O5,M.r],styles:["#cart-product-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;height:200px;padding:10px;border-bottom:.5px rgb(196,196,196) solid}img[_ngcontent-%COMP%]{position:relative;height:100%}#detail-container[_ngcontent-%COMP%]{position:relative;display:inline-block;width:100%;margin-left:10px}#detail-container[_ngcontent-%COMP%]:nth-child(1){font-weight:600;font-size:larger}i[_ngcontent-%COMP%]{display:inline-block;font-size:30px;margin-left:20px}i[_ngcontent-%COMP%]:hover{cursor:pointer}"]});var S=i(4466),Z=i(4120);function U(n,o){1&n&&(t.TgZ(0,"h1"),t._uU(1," Your cart is empty. Click "),t.TgZ(2,"a",3),t._uU(3,"here"),t.qZA(),t._uU(4," to go back to Products page. "),t.qZA())}function b(n,o){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"cart-product",11),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("selectedProduct",e)}}function D(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"h1"),t._uU(3," Your Cart "),t.TgZ(4,"h2",6),t._uU(5),t.qZA()(),t._UZ(6,"mat-divider"),t.YNc(7,b,2,1,"div",7),t.qZA(),t.TgZ(8,"div",8)(9,"h2"),t._uU(10,"Order Summary"),t.qZA(),t.TgZ(11,"h4"),t._uU(12," Subtotal "),t.TgZ(13,"div",9),t._uU(14),t.qZA()(),t.TgZ(15,"h4"),t._uU(16," Estimated Shipping "),t.TgZ(17,"div",9),t._uU(18,"$9.95"),t.qZA()(),t.TgZ(19,"h4"),t._uU(20," Estimated Total "),t.TgZ(21,"div",9),t._uU(22),t.qZA()(),t.TgZ(23,"button",10),t.NdJ("click",function(){t.CHM(e);const v=t.oxw();return t.KtG(v.onCheckoutClick())}),t._uU(24," Checkout "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(5),t.hij(" (",e.cartServices.countProducts()," items) "),t.xp6(2),t.Q6J("ngForOf",e.cartServices.selectedProducts),t.xp6(7),t.hij("$",e.cartServices.getSubtotal(),""),t.xp6(8),t.hij("$",e.cartServices.getSubtotal()+9.95,""),t.xp6(1),t.Q6J("disabled",e.orderServices.isOrderSubmitting())}}class f{constructor(o,e,g,v){this.cartServices=o,this.toastServices=e,this.orderServices=g,this.loginServices=v}onCheckoutClick(){this.loginServices.hasLoggedIn()?this.orderServices.createOrder().subscribe({next:({url:o})=>{this.orderServices.setOrderState(a.Kq.SUBMITTED),this.toastServices.showToast("Thank you for placing an order with us!",a.pC.SUCCESS).subscribe({next:()=>{!function u(n){window.location.href=n}(o)}})},error:o=>{this.orderServices.setOrderState(a.Kq.NOT_SUBMIITED),console.log(o)}}):this.toastServices.showToast("You need to login to place orders.",a.pC.WARNING)}onRemoveAllClick(){this.cartServices.removeAllProducts(),this.toastServices.showToast("All products have been removed from your cart",a.pC.SUCCESS)}}f.\u0275fac=function(o){return new(o||f)(t.Y36(y.N),t.Y36(x.j),t.Y36(S.r),t.Y36(Z.J))},f.\u0275cmp=t.Xpm({type:f,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[1,"route-container"],[4,"ngIf"],["style","display: flex; align-items: flex-start",4,"ngIf"],["routerLink","/products"],[2,"display","flex","align-items","flex-start"],[2,"display","inline-block","width","70%"],[2,"display","inline","font-weight","lighter"],[4,"ngFor","ngForOf"],["id","os-container"],[1,"prices"],["mat-raised-button","",3,"disabled","click"],[3,"selectedProduct"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,U,5,0,"h1",1),t.YNc(2,D,25,5,"div",2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",0==e.cartServices.selectedProducts.length),t.xp6(1),t.Q6J("ngIf",e.cartServices.selectedProducts.length>0))},dependencies:[r.ax,r.O5,l.t,l.d,_,d.ot,d.lW,p.rH],styles:[".route-container[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:100px auto auto;text-align:center;font-weight:200}button[_ngcontent-%COMP%]{width:100%}#os-container[_ngcontent-%COMP%]{background-color:#f0f0f080;border-radius:10%;display:inline-block;margin-left:20px;padding:20px;width:30%}h4[_ngcontent-%COMP%]{padding:auto}a[_ngcontent-%COMP%]{text-decoration:underline;color:#00f}.prices[_ngcontent-%COMP%]{display:inline;float:right}"]})},6958:(C,m,i)=>{i.d(m,{r:()=>d});var r=i(4650);class d{constructor(){this.onClick=new r.vpe}onIncrementClick(){this.onClick.emit(this.quant+1)}onDecrementClick(){this.quant>1&&this.onClick.emit(this.quant-1)}}d.\u0275fac=function(p){return new(p||d)},d.\u0275cmp=r.Xpm({type:d,selectors:[["quant-select"]],inputs:{quant:"quant"},outputs:{onClick:"onClick"},standalone:!0,features:[r.jDz],decls:6,vars:1,consts:[["id","quant-select-container"],["id","left",3,"click"],["readonly","",3,"value"],["id","right",3,"click"]],template:function(p,a){1&p&&(r.TgZ(0,"div",0)(1,"button",1),r.NdJ("click",function(){return a.onDecrementClick()}),r._uU(2,"-"),r.qZA(),r._UZ(3,"input",2),r.TgZ(4,"button",3),r.NdJ("click",function(){return a.onIncrementClick()}),r._uU(5,"+"),r.qZA()()),2&p&&(r.xp6(3),r.s9C("value",a.quant))},styles:["#quant-select-container[_ngcontent-%COMP%]{position:relative;display:flex;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;margin-left:auto;margin-right:auto}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:50px;height:50px}input[_ngcontent-%COMP%]{border-left:none;border-right:none;border-bottom:solid;border-top:solid;border-width:.5px;text-align:center;margin-left:-25px;margin-right:-25px;z-index:2}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{border:1px solid black;border-radius:50%;background-color:#fff;padding:10px}#left[_ngcontent-%COMP%]{text-align:left;font-weight:600}#right[_ngcontent-%COMP%]{text-align:right}"]})},6082:(C,m,i)=>{i.d(m,{o:()=>c});var r=i(5698),d=i(2340),l=i(4650),p=i(529),a=i(4120);class c{constructor(s,u){this.http=s,this.loginServices=u,this.productsUrl=`${d.N.api.url}/products`}getProducts(s){return this.http.get(this.productsUrl,{params:s}).pipe((0,r.q)(1))}getProductsById(s){return this.http.get(`${this.productsUrl}/${s}`).pipe((0,r.q)(1))}updateProduct(s,u={}){return this.http.patch(`${this.productsUrl}/${s}`,u,{headers:this.loginServices.getHeaders()})}}c.\u0275fac=function(s){return new(s||c)(l.LFG(p.eN),l.LFG(a.J))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})},4850:(C,m,i)=>{i.d(m,{d:()=>p,t:()=>a});var r=i(4650),d=i(1281),l=i(3238);let p=(()=>{class c{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(s){this._vertical=(0,d.Ig)(s)}get inset(){return this._inset}set inset(s){this._inset=(0,d.Ig)(s)}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(s,u){2&s&&(r.uIk("aria-orientation",u.vertical?"vertical":"horizontal"),r.ekj("mat-divider-vertical",u.vertical)("mat-divider-horizontal",!u.vertical)("mat-divider-inset",u.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(s,u){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),c})(),a=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[l.BQ,l.BQ]}),c})()}}]);