"use strict";(self.webpackChunke_commerce_client=self.webpackChunke_commerce_client||[]).push([[455],{5455:(Z,p,n)=>{n.r(p),n.d(p,{ConfirmationPageComponent:()=>d});var a=n(1757),c=n(6895),t=n(4650);function s(r,e){if(1&r&&(t.TgZ(0,"div",1),t._UZ(1,"img",2),t.TgZ(2,"div",3)(3,"div",4)(4,"p",5),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"p",6),t._uU(13),t.qZA()()()),2&r){const o=t.oxw();t.xp6(1),t.s9C("src",o.orderedProduct.product.photoUrl,t.LSH),t.xp6(4),t.hij(" ",o.orderedProduct.product.name," "),t.xp6(2),t.hij("Item #",o.orderedProduct.product.id,""),t.xp6(2),t.hij("Price: $",o.orderedProduct.product.price,""),t.xp6(2),t.hij("Quantity: ",o.orderedProduct.quantity,""),t.xp6(2),t.hij(" Total: $",o.orderedProduct.quantity*o.orderedProduct.product.price," ")}}class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["confirmation-product"]],inputs:{orderedProduct:"orderedProduct"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["id","confirmation-product",4,"ngIf"],["id","confirmation-product"],[3,"src"],["id","detail-container"],[2,"text-align","left"],[2,"font-weight","600","font-size","larger"],[2,"position","relative","margin-top","auto","margin-bottom","auto","display","inline-block"]],template:function(e,o){1&e&&t.YNc(0,s,14,6,"div",0),2&e&&t.Q6J("ngIf",o.orderedProduct)},dependencies:[c.O5],styles:["#confirmation-product[_ngcontent-%COMP%]{position:relative;display:flex;height:200px;border-bottom:.5px rgb(196,196,196) solid}img[_ngcontent-%COMP%]{position:relative;height:150px}#detail-container[_ngcontent-%COMP%]{position:relative;display:inline-block;width:100%;margin-left:10px;text-align:right}i[_ngcontent-%COMP%]{display:inline-block;font-size:30px;margin-left:20px}i[_ngcontent-%COMP%]:hover{cursor:pointer}"]});var u=n(910),l=n(4466),g=n(8869);function m(r,e){if(1&r&&(t.TgZ(0,"div",8),t._UZ(1,"confirmation-product",9),t.qZA()),2&r){const o=e.$implicit;t.xp6(1),t.Q6J("orderedProduct",o)}}const f=function(){return{textAlign:"center",marginTop:"50px"}};function h(r,e){if(1&r&&(t.TgZ(0,"div")(1,"div")(2,"h1"),t._uU(3,"Thank you for shopping with us!"),t.qZA(),t.TgZ(4,"h2"),t._uU(5,"Here is a summary of your order"),t.qZA(),t.TgZ(6,"div",3),t.YNc(7,m,2,1,"div",4),t.TgZ(8,"div",5)(9,"ul",6)(10,"li"),t._uU(11,"Subtotal:"),t.qZA(),t.TgZ(12,"li"),t._uU(13,"Shipping:"),t.qZA(),t.TgZ(14,"li"),t._uU(15),t.qZA(),t.TgZ(16,"li"),t._uU(17,"Total charge:"),t.qZA()(),t.TgZ(18,"ul",7)(19,"li"),t._uU(20),t.qZA(),t.TgZ(21,"li"),t._uU(22),t.qZA(),t.TgZ(23,"li"),t._uU(24),t.qZA(),t.TgZ(25,"li"),t._uU(26),t.qZA()()()()()()),2&r){const o=t.oxw();t.xp6(1),t.Akn(t.DdM(8,f)),t.xp6(6),t.Q6J("ngForOf",o.confirmedOrder.orderedProducts),t.xp6(8),t.hij("Tax (",o.confirmedOrder.tax,"%)"),t.xp6(5),t.hij("$",o.confirmedOrder.subtotal,""),t.xp6(2),t.Oqu(o.confirmedOrder.shippingFee),t.xp6(2),t.hij("$",o.confirmedOrder.taxFee,""),t.xp6(2),t.hij("$",o.confirmedOrder.totalCharge,"")}}class d{constructor(e,o,x){this.cartServices=e,this.orderServices=o,this.route=x,this.orderId=""}ngOnInit(){this.orderId=this.route.snapshot.paramMap.get("id"),this.cartServices.removeAllProducts(),this.getOrder()}getOrder(){this.orderServices.getOrderById(this.orderId).subscribe({next:e=>{console.log(e),this.confirmedOrder=this.orderServices.initOrderFrom(e)},error:e=>{console.log(e)}})}}d.\u0275fac=function(e){return new(e||d)(t.Y36(u.U),t.Y36(l.r),t.Y36(g.gz))},d.\u0275cmp=t.Xpm({type:d,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[1,"route-container"],[3,"isDisplayed"],[4,"ngIf"],["id","order"],["id","ordered-products",4,"ngFor","ngForOf"],["id","prices"],[2,"text-align","left","padding-left","0"],[2,"text-align","right"],["id","ordered-products"],[3,"orderedProduct"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"spinner",1),t.YNc(2,h,27,9,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("isDisplayed",!o.confirmedOrder),t.xp6(1),t.Q6J("ngIf",o.confirmedOrder))},dependencies:[a.O,c.ax,c.O5,i],styles:["#ordered-products[_ngcontent-%COMP%]{margin-top:50px}h1[_ngcontent-%COMP%]{font-size:50px;margin-bottom:50px}#order[_ngcontent-%COMP%]{width:500px;margin-left:auto;margin-right:auto}#prices[_ngcontent-%COMP%]{margin-top:25px;font-size:16px;display:flex;justify-content:space-between}li[_ngcontent-%COMP%]{margin-bottom:5px}ul[_ngcontent-%COMP%]{display:inline-block;list-style-type:none}"]})}}]);