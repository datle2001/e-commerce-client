"use strict";(self.webpackChunke_commerce_client=self.webpackChunke_commerce_client||[]).push([[226],{1226:(x,_,i)=>{i.r(_),i.d(_,{ProductDetailPageComponent:()=>r});var d=i(3327),l=i(1757),u=i(4850),g=i(6958),P=i(7124),h=i(6895),p=i(4859),t=i(4650),m=i(8869),C=i(6754),v=i(910),E=i(4465);const D=function(){return{display:"flex",alignItems:"baseline"}},O=function(){return{marginLeft:"20px"}};function M(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"div",3),t._UZ(1,"img",4),t.TgZ(2,"div",5)(3,"h1"),t._uU(4),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9,"Availability: Yes"),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"star",6),t.NdJ("onRatingChange",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.setRating(o))}),t.qZA(),t.TgZ(12,"p",7),t._uU(13),t.qZA(),t._UZ(14,"br")(15,"mat-divider")(16,"br"),t.TgZ(17,"div")(18,"quant-select",8),t.NdJ("onClick",function(o){t.CHM(n);const s=t.oxw();return t.KtG(s.setQuantitySelect(o))}),t.qZA(),t.TgZ(19,"div")(20,"button",9),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onAddClick())}),t._uU(21," Add to cart "),t.qZA()()(),t._UZ(22,"br")(23,"mat-divider")(24,"br"),t.TgZ(25,"p"),t._uU(26),t.qZA()()()}if(2&a){const n=t.oxw();t.xp6(1),t.s9C("src",n.product.photoUrl,t.LSH),t.xp6(3),t.Oqu(n.product.name),t.xp6(3),t.hij("Item #",n.product.id,""),t.xp6(4),t.Q6J("rating",n.product.rating)("isReadOnly",!1),t.xp6(2),t.hij("$",n.product.price,""),t.xp6(4),t.Akn(t.DdM(12,D)),t.xp6(1),t.Q6J("quant",n.quantity),t.xp6(1),t.Akn(t.DdM(13,O)),t.xp6(7),t.Oqu(n.product.description)}}class r{constructor(e,n,c,o){this.route=e,this.productServices=n,this.cartServices=c,this.toastServices=o,this.id=this.route.snapshot.paramMap.get("id"),this.quantity=1}ngOnInit(){this.getProduct()}getProduct(){this.productServices.getProductById(this.id).subscribe({next:e=>{this.product=this.productServices.initProductFrom(e)},error:e=>{console.log(e)}})}setQuantitySelect(e){this.quantity=e}onAddClick(){this.cartServices.addProduct({product:this.product,quantity:this.quantity}),this.toastServices.showToast(`${this.quantity} ${this.product.name}(s) added to your cart`,d.pC.SUCCESS),this.setQuantitySelect(1)}setRating(e){this.productServices.updateProduct(this.id,{rating:e}).subscribe({next:n=>{this.toastServices.showToast(`Successfully rated ${n.name}`,d.pC.SUCCESS)},error:n=>{console.log(n)}})}}r.\u0275fac=function(e){return new(e||r)(t.Y36(m.gz),t.Y36(C.o),t.Y36(v.U),t.Y36(E.j))},r.\u0275cmp=t.Xpm({type:r,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[1,"route-container"],[3,"isDisplayed"],["id","product-detail-page-container",4,"ngIf"],["id","product-detail-page-container"],[3,"src"],["id","product-detail-container"],[3,"rating","isReadOnly","onRatingChange"],["id","price"],[3,"quant","onClick"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"spinner",1),t.YNc(2,M,27,14,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("isDisplayed",!n.product),t.xp6(1),t.Q6J("ngIf",n.product))},dependencies:[p.ot,p.lW,h.O5,P.u,g.r,u.t,u.d,l.O],styles:["#product-detail-page-container[_ngcontent-%COMP%]{display:flex}h1[_ngcontent-%COMP%]{font-size:45px;font-weight:600px}img[_ngcontent-%COMP%]{width:500px;margin-right:100px}#price[_ngcontent-%COMP%]{font-size:24px;font-weight:400px}p[_ngcontent-%COMP%]{font-size:18px;font-weight:200px}"]})}}]);