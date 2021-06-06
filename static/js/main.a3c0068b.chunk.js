(this["webpackJsonpportfolio-project-react"]=this["webpackJsonpportfolio-project-react"]||[]).push([[0],{41:function(e,t,a){},49:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(24),r=a.n(c),i=(a(41),a(42),a(43),a(44),a(45),a(48),a(49),a(66)),o=a(64),l=a(63),d=a(65),h=a(14),j=a(18),u=a(0),b=Object(s.createContext)(),m=function(e){var t=Object(s.useState)({cart:[],newCartId:0,showCart:!1}),a=Object(j.a)(t,2),n=a[0],c=a[1];function r(e){var t=n.cart,a=t.findIndex((function(t){return t.cartId===e.cartId}));t.splice(a,1),c(Object(h.a)(Object(h.a)({},n),{},{cart:t}))}return Object(u.jsx)(b.Provider,{value:{cart:{cart:n},add:{addToCart:function(e){var t=n.cart;t.push(Object(h.a)(Object(h.a)({},e),{},{cartId:n.newCartId+1,qtyPrice:e.qty*e.price})),c(Object(h.a)(Object(h.a)({},n),{},{cart:t,newCartId:n.newCartId++}))}},remove:{removeFromCart:r},change:{changeQuantity:function(e,t,a){var s=n.cart,i=s.findIndex((function(t){return t.cartId===e.cartId}));if("set"===t&&(s[i].qty=a),"add"===t&&(s[i].qty+=1),"subtract"===t){if(1===s[i].qty)return void r(e);s[i].qty-=1}s[i].qty<0&&(s[i].qty=0);var o=s[i].qty*n.cart[i].price;s[i]=Object(h.a)(Object(h.a)({},s[i]),{},{qtyPrice:o}),c(Object(h.a)(Object(h.a)({},n),{},{cart:s}))}},test:{testing:function(){console.log("Clicked the button")}},show:{toggleShowCart:function(){c(Object(h.a)(Object(h.a)({},n),{},{showCart:!n.showCart})),!1===n.showCart?document.getElementsByTagName("body")[0].classList.add("stop-scrolling"):document.getElementsByTagName("body")[0].classList.remove("stop-scrolling")}}},children:e.children})};function p(e){var t=e.item,a=e.action;return Object(u.jsxs)(l.a,{xs:{order:3,size:6,offset:3},md:{order:1,size:4,offset:0},className:"text-center d-flex align-items-center justify-content-center",children:[Object(u.jsx)(l.a,{className:"p-0",children:Object(u.jsx)(d.a,{onClick:function(){a.changeQuantity(t,"subtract",1)},className:"qty-btn btn-sm p-1",children:"\u2212"})}),Object(u.jsx)(l.a,{className:"p-0",children:Object(u.jsxs)("span",{className:"px-2 qty-text",children:[" ",t.qty," "]})}),Object(u.jsx)(l.a,{className:"p-0",children:Object(u.jsx)(d.a,{onClick:function(){a.changeQuantity(t,"add",1)},className:"qty-btn btn-sm p-1",children:"+"})})]})}function x(e){var t,a,s=e.item,c=e.cart;return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)(i.a,{className:"cart-item",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{xs:{order:3,size:12},md:{order:1,size:4},children:Object(u.jsx)("img",{src:s.imgPath,alt:s.imgAltText,className:"img-fluid"})}),Object(u.jsxs)(l.a,{xs:{order:1,size:9},md:{order:2,size:7},children:[Object(u.jsx)("h5",{children:s.title}),Object(u.jsx)("h6",{children:s.subTitle}),Object(u.jsx)("p",{className:"d-none d-md-block",children:s.specText}),Object(u.jsx)("p",{className:"d-none d-md-block",children:s.flavorText})]}),Object(u.jsx)(l.a,{xs:{order:2,size:3},md:{order:3,size:1},className:"text-right m-0 p-0",children:Object(u.jsx)(d.a,{className:"no-style close",onClick:function(){c.remove.removeFromCart(s)},children:Object(u.jsx)("i",{className:"fa fa-trash"})})})]}),Object(u.jsxs)(o.a,{children:[Object(u.jsx)(p,{item:s,action:c.change}),Object(u.jsx)(l.a,{xs:{order:1,size:9},md:{order:2,size:6},className:"d-flex align-items-center",children:Object(u.jsx)("span",{children:s.selectedDesign})}),Object(u.jsx)(l.a,{xs:{order:2,size:3},md:{order:3,size:2},className:"d-flex align-items-center justify-content-end",children:Object(u.jsxs)("span",{className:"price",children:["$",(t=s.price,a=s.qty,t*a)]})})]})]})})}var g=function(e){var t,a=e.items,s=a.cart.cart.cart.map((function(e){return Object(u.jsx)(x,{item:e,cart:a},e.cartId)}));function c(e){var t=e.cart,a=0;return t.forEach((function(e){return a+=e.qtyPrice})),a}return a.cart.cart.cart[0]?Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)(l.a,{xs:{size:12,offset:0},className:"mt-3",children:s}),Object(u.jsxs)(o.a,{className:"cart-footer p-4",children:[Object(u.jsxs)(l.a,{xs:12,md:7,className:"p-0",children:[Object(u.jsx)(l.a,{xs:12,className:"text-center text-md-left p-0",children:Object(u.jsxs)("h5",{children:["Subtotal: $",c(a.cart.cart)]})}),Object(u.jsx)(l.a,{xs:12,className:"text-center text-md-left p-0",children:Object(u.jsxs)("span",{className:"small",children:["Potential Donation: $",(t=a.cart.cart,(.03*c(t)).toFixed(2))]})})]}),Object(u.jsx)(l.a,{xs:12,md:5,className:" text-center text-md-right p-0",children:Object(u.jsx)(d.a,{color:"primary",className:"btn mt-3 mt-md-0",children:"Checkout"})})]})]}):Object(u.jsx)(l.a,{xs:{size:12,offset:0},className:"mt-3",children:Object(u.jsx)("p",{children:"Your Shopping Cart is Empty"})})},O=a(8),f=a(9),y=a(11),v=a(10),w=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).wrapperRef=Object(s.createRef)(),e.handleClickOutside=function(t){e.wrapperRef.current&&!e.wrapperRef.current.contains(t.target)&&e.props.isCartShown&&e.props.onOutsideClick()},e.handleEscapePress=function(t){e.props.isCartShown&&"Escape"===t.key&&e.props.onOutsideClick()},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.handleClickOutside),document.addEventListener("keyup",this.handleEscapePress)}},{key:"render",value:function(){return Object(u.jsx)("div",{ref:this.wrapperRef,children:this.props.children})}}]),a}(n.a.Component);var k=function(e){var t="",a="";return e.show?t="shopping-cart-show":(t="shopping-cart-hide",a="cart-bg-hide"),Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("div",{className:"cart-bg ".concat(a)}),Object(u.jsx)(b.Consumer,{children:function(e){return Object(u.jsx)(w,{isCartShown:e.cart.cart.showCart,onOutsideClick:function(){e.show.toggleShowCart()},children:Object(u.jsx)(i.a,{className:"shopping-cart m-0 px-3 ".concat(t),id:"shopping-cart-tray",children:Object(u.jsx)(o.a,{className:"py-3",children:Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)(l.a,{xs:{size:9,offset:0},className:"px-4",children:Object(u.jsx)("h4",{children:"Shopping Cart"})}),Object(u.jsx)(l.a,{xs:{size:3,offset:0},className:"text-right px-4",children:Object(u.jsx)(d.a,{className:"no-style text-black-50 close",onClick:function(){return e.show.toggleShowCart()},children:"\xd7"})}),Object(u.jsx)(g,{items:e})]})})})})}})]})},N=a(15),T=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){var e="".concat("/verynerdy-product-website-v2","/home#").concat(this.props.target.replace(/[^a-zA-Z0-9]/g,""));return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(N.b,{to:"".concat(e),className:"nav-link",children:[this.props.target," "]})})}}]),a}(n.a.Component),C=a(67);function S(e){if(e>0)return Object(u.jsx)(C.a,{color:"primary",className:"mx-1",children:e})}var I=function(){return Object(u.jsx)(b.Consumer,{children:function(e){return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(d.a,{className:"nav-link no-style",onClick:function(){e.show.toggleShowCart()},children:[Object(u.jsx)("i",{className:"fa fa-shopping-cart"}),S(e.cart.cart.cart.length)]})})})}})},A=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(O.a)(this,a),"standard"===(s=t.call(this,e)).props.navType?s.state={navClasses:"navbar navbar-expand col pt-0 pr-0 d-none d-md-block",ulClasses:"navbar-nav justify-content-end",navId:""}:s.state={navClasses:"collapse navbar-expand navbar-collapse d-flex justify-content-center p-0",ulClasses:"navbar-nav align-items-center",navId:"mobileNavbar"},s}return Object(f.a)(a,[{key:"render",value:function(){var e="".concat(this.state.navClasses);return Object(u.jsx)("nav",{className:e,id:this.state.navId,children:Object(u.jsxs)("ul",{className:this.state.ulClasses,children:[Object(u.jsx)(T,{target:"pre-order"}),Object(u.jsx)(T,{target:"our story"}),Object(u.jsx)(I,{})]})},this.props.navType)}}]),a}(n.a.Component),M=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(O.a)(this,a),(s=t.call(this,e)).state={mobileMenu:!1,hamDivClass:"hamburger-wrapper d-md-none",hamSpanClass:"hamburger"},s}return Object(f.a)(a,[{key:"toggleMobileMenu",value:function(){console.log("Hamburger Menu Clicked"),!0===this.state.mobileMenu?this.setState({mobileMenu:!1,hamDivClass:"hamburger-wrapper d-md-none",hamSpanClass:"hamburger"}):this.setState({mobileMenu:!0,hamDivClass:"hamburger-wrapper d-md-none ham-menu-on",hamSpanClass:"hamburger ham-menu-on"})}},{key:"render",value:function(){var e=this;return console.log("Header rendered: "+this.state.show),Object(u.jsx)("header",{className:"pb-2 pb-lg-3 pt-3 sticky-top bg-light",id:"header",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row align-items-center",children:[Object(u.jsx)("div",{className:"col-5 offset-1 pl-0",children:Object(u.jsx)(N.b,{to:"".concat("/verynerdy-product-website-v2","/home#"),children:Object(u.jsx)("img",{src:"./assets/verynerdylogo.png",alt:"",className:"img-fluid"})})}),Object(u.jsxs)("div",{className:"col-5 text-right pt-2 pr-0",children:[Object(u.jsx)("nav",{className:"navbar navbar-expand-md hidden-md navbar-light px-0 d-md-none",children:Object(u.jsxs)("div",{className:"container p-0 justify-content-end",children:[Object(u.jsx)("div",{className:this.state.hamDivClass,onClick:function(){e.toggleMobileMenu()},"data-toggle":"collapse","data-target":"#mobileNavbar",children:Object(u.jsx)("span",{className:this.state.hamSpanClass})}),Object(u.jsx)(A,{navType:"mobile"})]})}),Object(u.jsx)(A,{navType:"standard"})]})]})})})}}]),a}(n.a.Component),P=a(82),D=a(73),z=a(74),B=a(22),W=a(23),F=a(68),L=a(69),q=a(70),E=a(71),R=a(72),H=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(O.a)(this,a),(s=t.call(this,e)).handleBlur=function(e){return function(){s.setState({touched:Object(h.a)(Object(h.a)({},s.state.touched),{},Object(B.a)({},e,!0))})}},s.state={name:"",email:"",agree:!1,touched:{name:!1,email:!1}},s.handleInputChange=s.handleInputChange.bind(Object(W.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(W.a)(s)),s}return Object(f.a)(a,[{key:"validate",value:function(e,t){var a={name:"",email:""};return this.state.touched.name&&e.length<2&&(a.name="Name must be at least 2 characters."),this.state.touched.email&&!/^^[A-Za-z0-9+_`-]+[@][A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9][.][A-Za-z]+/.test(t)&&(a.email="Must be a valid email address."),a}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;this.setState(Object(B.a)({},a,s))}},{key:"handleSubmit",value:function(e){alert("Apologies, our newsletter is not setup at this time."),console.log("Thanks for trying, but this form is not yet functional"),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.validate(this.state.name,this.state.email);return Object(u.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(u.jsx)(L.a,{row:!0,children:Object(u.jsxs)(l.a,{sm:12,children:[Object(u.jsx)(q.a,{type:"name",name:"name",id:"name",placeholder:"Enter First Name",value:this.state.name,invalid:t.name,onBlur:this.handleBlur("name"),onChange:this.handleInputChange}),Object(u.jsx)(E.a,{children:t.name})]})}),Object(u.jsx)(L.a,{row:!0,children:Object(u.jsxs)(l.a,{sm:12,children:[Object(u.jsx)(q.a,{type:"email",name:"email",id:"email",placeholder:"Enter Email",value:this.state.email,invalid:t.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),Object(u.jsx)(E.a,{children:t.email})]})}),Object(u.jsx)(L.a,{check:!0,children:Object(u.jsxs)(R.a,{check:!0,children:[Object(u.jsx)(q.a,{type:"checkbox",name:"agree",invalid:t.agree,onChange:this.handleInputChange})," "," I agree to receive periodic emails from The Very Nerdy Clothing Company."]})}),Object(u.jsx)(L.a,{row:!0,children:Object(u.jsx)(l.a,{sm:{size:3,offset:9},xs:{size:4,offset:8},children:Object(u.jsx)(d.a,{color:"primary",size:"sm",type:"submit",onClick:function(){e.props.toggle()},children:"Let's Go!"})})})]})}}]),a}(s.Component),J=function(e){var t=Object(s.useState)(!1),a=Object(j.a)(t,2),n=a[0],c=a[1],r=function(){return c(!n)};return Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{color:"primary",onClick:r,children:e.btnText}),Object(u.jsxs)(P.a,{isOpen:n,toggle:r,children:[Object(u.jsx)(D.a,{toggle:r,children:"Newsletter Sign-up"}),Object(u.jsx)(z.a,{className:"collection-border",children:Object(u.jsx)(H,{toggle:r})})]})]})},G=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsxs)("h2",{className:"",children:["This is some seriously ",Object(u.jsx)("span",{className:"text-primary font-italic",children:"nerdy"})," clothing."]}),Object(u.jsx)("h5",{className:"",children:"It's coming soon and you're going to love it."}),Object(u.jsx)(J,{btnText:"Want To Stay In-The-Know?"})]})}}]),a}(n.a.Component),Y=a(36),K=a(75),Q=a(76),U=a(77),V=[{src:"./assets/hero-product-bigthree.jpg",altText:"First slide, Person wearing The Big Three T-Shirt",caption:""},{src:"./assets/hero-product-tankmain.jpg",altText:"Second slide, Person wearing the Tank Main tanktop",caption:""},{src:"./assets/hero-product-wasd.jpg",altText:"Third slide, Person wearing the WASD T-Shirt",caption:""}],Z=function(e){var t=Object(s.useState)(0),a=Object(j.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],d=V.map((function(e){return Object(u.jsxs)(Y.a,{className:"",onExiting:function(){return l(!0)},onExited:function(){return l(!1)},children:[Object(u.jsx)("img",{src:e.src,alt:e.altText,className:"d-block w-100"}),Object(u.jsx)(K.a,{captionText:e.caption,captionHeader:e.caption})]},e.src)}));return Object(u.jsxs)(Q.a,{activeIndex:n,next:function(){if(!o){var e=n===V.length-1?0:n+1;c(e)}},previous:function(){if(!o){var e=0===n?V.length-1:n-1;c(e)}},children:[Object(u.jsx)(U.a,{items:V,activeIndex:n,onClickHandler:function(e){o||c(e)}}),d]})},_=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("main",{className:"container-fluid mb-0 hero-section",children:[Object(u.jsx)("div",{className:"row hero-row hero-bg align-items-center d-lg-none",children:Object(u.jsx)("div",{className:"col text-light px-5",children:Object(u.jsx)(G,{})})}),Object(u.jsx)("div",{className:"row hero-row align-items-center d-none d-lg-block",children:Object(u.jsxs)("div",{className:"col p-0",children:[Object(u.jsx)(Z,{}),Object(u.jsx)("div",{className:"hero-text hidden-xs",children:Object(u.jsx)(G,{})})]})})]})}}]),a}(n.a.Component),X=a(79),$=a(80),ee=a(81);var te=a(78),ae=function(e){var t=Object(s.useState)(!1),a=Object(j.a)(t,2),n=a[0],c=a[1],r=function(){c(!n),i()},i=function(){e.toggleModal()},m=Object(s.useState)({selectedDesign:e.product.options[0]}),p=Object(j.a)(m,2),x=p[0],g=p[1],O=e.product.options.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}));return Object(u.jsx)("div",{children:Object(u.jsxs)(P.a,{isOpen:e.toggle,size:"lg",centered:!0,toggle:r,children:[Object(u.jsxs)(D.a,{className:"p-4",toggle:r,children:[Object(u.jsx)("span",{className:"product-header d-block",children:e.product.title}),Object(u.jsx)("span",{className:"product-subheader",children:e.product.subTitle})]}),Object(u.jsx)(z.a,{className:"collection-border p-lg-4 px-4 py-2",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{xs:"12",lg:"4",className:"text-center",children:Object(u.jsx)("img",{src:e.product.imgPath,alt:e.product.imgAltText,className:"img-fluid"})}),Object(u.jsxs)(l.a,{xs:"12",lg:"8",children:[Object(u.jsx)("p",{children:e.product.flavorText}),Object(u.jsx)("p",{children:e.product.specText}),Object(u.jsx)(F.a,{children:Object(u.jsx)(L.a,{row:!0,children:Object(u.jsxs)(l.a,{xs:"12",children:[Object(u.jsx)(R.a,{for:"orderDesign",children:"Design:"}),Object(u.jsxs)(q.a,{type:"select",name:"selectedDesign",id:"selectedDesign",value:x.selectedDesign,onChange:function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;g(Object(B.a)({},a,s))},children:[Object(u.jsx)("option",{disabled:!0,defaultValue:!0,children:"Select"}),O]})]})})})]})]})}),Object(u.jsx)(te.a,{children:Object(u.jsx)(F.a,{children:Object(u.jsx)(L.a,{row:!0,children:Object(u.jsxs)(l.a,{className:"text-center",xs:"12",children:[Object(u.jsx)(d.a,{size:"sm",color:"primary",outline:!0,className:"m-1",onClick:function(){e.toggleModal()},children:"Continue Shopping"}),Object(u.jsx)(b.Consumer,{children:function(t){return Object(u.jsx)(d.a,{size:"sm",color:"success",onClick:function(){t.add.addToCart(Object(h.a)(Object(h.a)({},e.product),{},{qty:1,selectedDesign:x.selectedDesign})),e.toggleModal()},children:"Add to Cart"})}})]})})})})]})})},se=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(O.a)(this,a),(s=t.call(this,e)).toggleModal=function(){s.setState({openModal:!s.state.openModal})},s.state={openModal:!1},s.toggleModal=s.toggleModal.bind(Object(W.a)(s)),s}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(X.a,{className:"card col-5 col-lg-3 mx-md-1 mt-md-5 mt-5 p-0",onClick:this.toggleModal,children:[Object(u.jsx)("img",{src:this.props.product.imgPath,alt:"The Big Three Special Edition Darkmode Cotton Hat",className:"card-img-top"}),Object(u.jsxs)($.a,{className:"card-body collection-border px-1 px-md-3 mb-2",children:[Object(u.jsx)("h5",{className:"card-title mb-0",children:this.props.product.title}),Object(u.jsx)("h6",{className:"mt-0",children:this.props.product.subTitle}),Object(u.jsx)("p",{className:"card-text d-none d-lg-block",children:this.props.product.flavorText})]}),Object(u.jsx)(ee.a,{className:"card-footer pt-2",children:Object(u.jsx)(o.a,{className:"row",children:Object(u.jsx)(l.a,{className:"col-12 col-sm-12 text-center text-sm-right",children:Object(u.jsxs)("h5",{className:"price",children:["$",this.props.product.price]})})})}),Object(u.jsx)(ae,{product:this.props.product,toggle:this.state.openModal,toggleModal:this.toggleModal})]})}}]),a}(n.a.Component),ne=[{id:1,title:"The Big Three",subTitle:"SE Dark Mode Hat",imgPath:"./assets/thebigthree-specialeditiondarkmode-cottonhat.jpg",imgPathSmall:"./assets/thebigthree-specialeditiondarkmode-cottonhat-200.jpg",imgAltText:"The Big Three Special Edition Darkmode Cotton Hat",flavorText:"Hey you! This cloth hat is ONLY available during the pre-order, so you'd definitely better get on it!",specText:"Dad hats aren't just for dads\u2014this cap is trendy and stylish. It has an unstructured form, a curved visor, and an adjustable buckle strap.",options:["One size fits all"],price:25},{id:2,title:"The Big Three",subTitle:"3/4 Raglan Shirt",imgPath:"./assets/thebigthree-raglanshirt.jpg",imgPathSmall:"./assets/thebigthree-raglanshirt-200.jpg",imgAltText:"The Big Three Raglan Shirt",flavorText:"You know, the big three: Aliens, androids, and wizards.",specText:"The Men's \xbe Sleeve Raglan Shirt gives a stylish spin to the classic baseball raglan. This shirt\u2019s locally-made in the US and, thanks to its cotton and polyester blend fabric, it\u2019s super soft and comfortable",options:["S - Gray/Black","M - Gray/Black","L - Gray/Black","XL - Gray/Black","S - White/Black","M - White/Black","L - White/Black","XL - White/Black"],price:30},{id:3,title:"TVNNC Logo",subTitle:"Bubble-free sticker",imgPath:"./assets/theverynerdyclothingcompany-bubblefreestickers.png",imgPathSmall:"./assets/theverynerdyclothingcompany-bubblefreestickers-200.png",imgAltText:"The Very Nerdy Clothing COmpany Bubble Free Stickers",flavorText:"Look, you need a new sticker for your laptop. Laptop full? Sounds like you need a new laptop... AND A NEW STICKER!",specText:"Don't forget to clean the surface before applying the sticker.",options:["3 in. x 3 in.","4 in. x 4 in.","5.5 in. x 5.5 in."],price:4},{id:4,title:"Tank Main",subTitle:"Jersey Tank Top",imgPath:"./assets/maintank-jerseytanktop.jpg",imgPathSmall:"./assets/maintank-jerseytanktop-200.jpg",imgAltText:"Main Tank Jersey Tank Top",flavorText:"Nothing says you're the toughest player in your squad than this tank top, no kap.",specText:"This Unisex Jersey Tank Top achieves a slim fit without sacrificing comfort.",options:["XS","S","M","L","XL"],price:25},{id:5,title:"WASD",subTitle:"Classic T-Shirt",imgPath:"./assets/wasd-tshirt.png",imgPathSmall:"./assets/wasd-tshirt-200.png",imgAltText:"WASD T-Shirt",flavorText:"Gamers know the power of WASD. True gamers know that W is the most important of them all. Why else would it stand alone, at the top?",specText:"The American Apparel 2001 is the classic t-shirt. Its fine jersey cotton construction makes it extremely soft and comfortable to wear, so it's a good choice for a day-to-day outfit. It's durable and retains its shape and color after washing.",options:["S","M","L","XL"],price:25},{id:6,title:"The Big Three - Singles",subTitle:"Premium face masks",imgPath:"./assets/thebigthree-premiumfacemask.jpg",imgPathSmall:"./assets/thebigthree-premiumfacemask-200.jpg",imgAltText:"The Big Three Premium Face Masks",flavorText:"Wearing a mask is cool right now. Get cooler with an alien, robot, or wizard mask.",specText:"This All-Over Print Premium Face Mask is made of two soft layers of polyester and has a pocket for a filter or napkin. The adjustable nose wire and elastic bands ensure a good fit",options:["Alien","Android","Wizard","Combo Pack (All Three for 45)"],price:18}],ce=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(O.a)(this,a),(s=t.call(this,e)).state={products:ne},s}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.products.map((function(e){return Object(u.jsx)(se,{product:e},e.id)}));return Object(u.jsxs)("main",{className:"container my-4 px-5",id:"preorder",children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h2",{className:"",children:"Behold! Our Exclusive Pre-Order Collection"}),Object(u.jsx)("p",{className:"text-muted",children:"Some of these pre-order designs will only be offered for a limited time! Once we launch, we're giving them the snap and they go the way of the blip!"})]}),Object(u.jsx)("div",{className:"row justify-content-around",children:e})]})}}]),a}(n.a.Component),re=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"media col-12 col-lg-4 offset-lg-0 px-4 p-2 px-lg-3 mt-3 mt-lg-3 align-items-center",children:[Object(u.jsx)("img",{src:this.props.story.imgSrc,alt:this.props.story.altText}),Object(u.jsx)("div",{className:"media-body align-self-center",children:Object(u.jsx)("h6",{className:"pl-3",children:this.props.story.mainText})})]})}}]),a}(n.a.Component),ie=[{id:1,imgSrc:"./assets/aboutus-dogood-300.jpg",altText:"'Do Good' written on rectangles",mainText:"We'll always strive to do our best because we want to be the good guys! Let's do things right!"},{id:2,imgSrc:"./assets/aboutus-shipping-300.jpg",altText:"A shipping box being taped up",mainText:"Transparency is key and charging separate for shipping is for chumps. Pay our price, plus tax: done."},{id:3,imgSrc:"./assets/aboutus-donate-300.jpg",altText:"A person holding cardboard sign that says 'Donation'",mainText:"We're always going to be giving back as best we can! A flat 10% of our profits are donated to a charitable organization on a 3-month cycle."}],oe=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(O.a)(this,a),(s=t.call(this,e)).state={stories:ie},s}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.stories.map((function(e){return Object(u.jsx)(re,{story:e},e.id)}));return Object(u.jsxs)("div",{className:"container my-4",id:"ourstory",children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h2",{className:"",children:"This is who we are..."}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"order-2 order-lg-1 col-6 col-lg-3 about-left mt-lg-4 pl-lg-5",children:[Object(u.jsx)("h4",{children:"Jason"}),Object(u.jsx)("h6",{children:"Jack-of-all-Trades"}),Object(u.jsx)("p",{children:"As a lifetime member of the nerd club, nothing feels better than being able to channel that into creative endevours and sharing that passion with others. I love making these designs, I love what they represent, and I hope you love them too!"})]}),Object(u.jsx)("div",{className:"order-1 order-lg-2 col-12 col-lg-6 py-3",children:Object(u.jsx)("img",{src:"./assets/aboutus8.jpg",alt:"The Founders",className:"img-fluid team-img"})}),Object(u.jsxs)("div",{className:"order-3 order-lg-3 col-6 col-lg-3 about-right mt-lg-4 pr-lg-5",children:[Object(u.jsx)("h4",{children:"Sarah"}),Object(u.jsx)("h6",{children:"The Motivator"}),Object(u.jsx)("p",{children:"To me, being a nerd is all about being in a space where I can be who I am. It doesn't matter your hobbies, your kinks, your orientations, etc. Come as you are and that's what this brand represents. I hope you feel the same when you wear our clothes."})]})]})]}),Object(u.jsxs)("div",{className:"row mt-5",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h2",{className:"text-center mb-n2",children:"...and how we'll continue to be."})}),e]})]})}}]),a}(n.a.Component),le=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsx)("hr",{className:"divider"})}}]),a}(n.a.Component),de=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"top-button",children:Object(u.jsx)(N.b,{to:"".concat("/verynerdy-product-website-v2","/home#"),children:Object(u.jsx)("i",{className:"fa fa-chevron-up p-1 mr-1 mb-2"})})})}}]),a}(n.a.Component);var he=function(e){return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)(_,{}),Object(u.jsx)(le,{}),Object(u.jsx)(ce,{}),Object(u.jsx)(le,{}),Object(u.jsx)(oe,{}),Object(u.jsx)(le,{}),Object(u.jsx)(de,{})]})};var je=function(e){return Object(u.jsx)("div",{className:"container mt-4",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-12 col-lg-10 offset-lg-1",children:[Object(u.jsx)("h2",{children:"Terms of Service"}),Object(u.jsxs)("ul",{className:"list-unstyled",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#shipping",children:"Fullfillment and Shipping"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#donations",children:"Donations"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#refunds",children:"Refunds and Returns"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#legit",children:"Legitimacy of Business"})})]})]}),Object(u.jsxs)("div",{className:"col-12 col-lg-10 offset-lg-1",id:"shipping",children:[Object(u.jsx)("h5",{children:"Fullfillment and Shipping"}),Object(u.jsx)("p",{children:"Once we receive your order, it takes roughly 3-5 days for fullfillment. After that, shipping depends on our fullfillment partner but typically its another 5-7 days for shipping. We're happy to ship to anywhere in the USA and unfortunately we are unable to ship internationally at this time."}),Object(u.jsx)("p",{children:"Please note, fullfillment and shipping times are completely dependant on our business partners. But if you have issues, please don't hesitate to reach out and we'll try to assist and make it right."}),Object(u.jsx)("h6",{children:"Pre-Order"}),Object(u.jsx)("p",{children:"Items purchased for pre-order are fullfilled before launch day, so when day 1 begins we ship your items out and you should receive them in 5-7 days."})]}),Object(u.jsxs)("div",{className:"col-12 col-lg-10 offset-lg-1",id:"donations",children:[Object(u.jsx)("h5",{children:"Donations"}),Object(u.jsx)("p",{children:"When you purchase an item with us, we'd like to donate a portion of that sale to a charitable cause. You can see what cause(s) we're currently donating to here and you can always opt out by unchecking \"I'd like a portion of my purchase to be donated.\" at checkout. The donations are a promise to donate portion of our sales to charitable causes and not a necessarily a contribution from you; for that reason, these amounts cannot be written off by you nor can we provide a discount in lieu of the donation."})]}),Object(u.jsxs)("div",{className:"col-12 col-lg-10 offset-lg-1",id:"refunds",children:[Object(u.jsx)("h5",{children:"Refunds and Returns"}),Object(u.jsx)("p",{children:"If you have an issue with a received (or unreceived order), we'd love to make it right. Contact us as soon as you can and we'll discuss your options. We've laid out some of our general policies below."}),Object(u.jsx)("h6",{children:"Wrong Items or Damaged on Arrival"}),Object(u.jsx)("p",{children:"If you receive the wrong items or your items are damaged when you open them, contact us immediately so we can fix the issue. We'll send you a shipping label, you return the affected items to us, and we'll ship you replacement items."}),Object(u.jsx)("h6",{children:"Packages Lost in Mail"}),Object(u.jsx)("p",{children:"If your package was lost in the mail, please contact the mail carrier responsible for shipping your item for further assistance. Contact us and we can let you know what carrier that was. We, unfortunately, cannot provide refunds in these situations."}),Object(u.jsx)("h6",{children:"Worn and Washed Damage, Ill-fitting Items"}),Object(u.jsx)("p",{children:"We currently cannot refund items that have been worn or washed, damaged due to being worn or washed, or items received that do not fit as expected. For items that don't fit as expected, please contact us and we can try to facilitate an exchange for a better fitting size."}),Object(u.jsx)("h6",{children:"Funds Refunded"}),Object(u.jsx)("p",{children:"Refunded funds may not be immediately available to your personal accounts. Please contact your banking or credit institution for further assistance."})]}),Object(u.jsxs)("div",{className:"col-12 col-lg-10 offset-lg-1",id:"legit",children:[Object(u.jsx)("h5",{children:"Ligitimacy of Business"}),Object(u.jsx)("p",{children:"This site is a portfolio project for Jason Smith and as such not a functioning / real clothing business."})]})]})})};var ue=function(e){var t=e.data.map((function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",id:"heading".concat(e.id),"data-toggle":"collapse","data-target":"#collapse".concat(e.id),children:Object(u.jsx)("h5",{children:e.headerText})}),Object(u.jsx)("div",{className:"collapse",id:"collapse".concat(e.id),children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("p",{children:e.bodyText})})})]})}));return Object(u.jsx)("div",{className:"faq",id:"accordion",children:t})};var be=function(e){return Object(u.jsx)("div",{className:"container mt-5",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-12 col-lg-10 offset-lg-1",children:[Object(u.jsx)("h2",{children:"FAQ"}),Object(u.jsx)(ue,{data:e.data})]})})})};var me=function(e){return Object(u.jsx)("div",{className:"container mt-5",id:"donation",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-12 col-lg-6 mb-5",children:[Object(u.jsx)("h2",{children:"Our Next Donation goes to..."}),Object(u.jsx)("h1",{children:"Kode With Klossy"}),Object(u.jsx)("p",{children:"Kode With Klossy creates multiple learning experiences and opportunities for young women and non-binary individuals."}),Object(u.jsx)("a",{type:"button",className:"btn btn-primary mb-3",href:"https://kodewithklossy.com",target:"_blank",rel:"noreferrer",children:"Learn More"}),Object(u.jsx)("p",{className:"small",children:"Our next donation target date is October 1st, 2021."}),Object(u.jsx)("img",{src:"./assets/donation-thankyou-crop.jpg",alt:"'Thank You' spelled out with toy bloods and a yellow heart in between",className:"img-fluid"})]}),Object(u.jsxs)("div",{className:"col-12 col-lg-6",children:[Object(u.jsx)("h4",{children:"How It Works"}),Object(u.jsx)("p",{children:"After each and every order, we set aside 10% of our profits and keep them somewhere safe. Once the 3-month cycle ends, we take all of that money and donate it to our next charitable cause on the list. It's just as simple as that."}),Object(u.jsx)("h4",{children:"Want to get more involved?"}),Object(u.jsx)("p",{children:"Make a post on Twitter with the hashtag #verynerdydonations and make a pact to donate with us! Promise to match what we donate (which we'll reveal here when the time comes), promise a couple of bucks, or just spread the word. When we make our donation, we'll call on everyone who used that hashtag to poney up and donate with us."}),Object(u.jsx)("h4",{children:"Why do we do it?"}),Object(u.jsx)("p",{children:"We think that everyone has the responsibility to give back to the communities, organizations, and causes that do good for others in the world. Big or small, every business that can should strive to do better and if by doing that we can convince just one other person or entity to do the same, well maybe we've just made the world a slightly better place to be."})]})]})})},pe=a(13),xe=[{id:0,headerText:"How do I know who you are donating to?",bodyText:"You can see who we are currently donating portions of sales to on our Donations page."},{id:1,headerText:"Is shipping really free?",bodyText:"We include the price of shipping into the bottom line of all our products, so while it's not like no one pays anything for shipping; that's not realistic. Instead, as long as we're sending it to somewhere in the USA, we're not going to deal with figure out how much it costs to send it there and then make you pay that price."},{id:2,headerText:"Are you a real brand? Can I actually purchase something from you?",bodyText:"Haha, you got us! Technically, this is portfolio project for my (Jason's) web development career. But if you really like something you see, all the pre-order products you see here are setup to be printed and shipped. Contact me and we can make it work!"},{id:3,headerText:"How come you don't ship outside the USA?",bodyText:"Unfortunately, it's a bit expensive and we're not set up for it at the moment. We hope to start shipping internationally as soon as possible after launch!"},{id:4,headerText:"How does the pre-order work? When will I get my clothes?",bodyText:"Once you pre-order your items, we'll add them to our internal queue. On day one of launch, we'll ship all pre-order items out and you should receive them within a week or two. As we get closer to launch, we'll also be emailing all pre-order customers more details."},{id:5,headerText:"Can I cancel my pre-order?",bodyText:"You can, just contact us before launch and we'll work to get that done."}];var ge=function(){var e=Object(pe.g)(),t=(e.pathname,e.hash);return Object(s.useEffect)((function(){""===t?window.scrollTo(0,0):setTimeout((function(){var e=t.replace("#",""),a=document.getElementById(e);a&&a.scrollIntoView()}),0)})),Object(u.jsx)(n.a.Fragment,{children:Object(u.jsxs)(pe.d,{children:[Object(u.jsx)(pe.b,{path:"".concat("/verynerdy-product-website-v2","/home"),component:function(){return Object(u.jsx)(he,{})}}),Object(u.jsx)(pe.b,{path:"".concat("/verynerdy-product-website-v2","/TOS"),component:function(){return Object(u.jsx)(je,{})}}),Object(u.jsx)(pe.b,{path:"".concat("/verynerdy-product-website-v2","/FAQ"),component:function(){return Object(u.jsx)(be,{data:xe})}}),Object(u.jsx)(pe.b,{path:"".concat("/verynerdy-product-website-v2","/Donations"),component:function(){return Object(u.jsx)(me,{})}}),Object(u.jsx)(pe.a,{to:"".concat("/verynerdy-product-website-v2","/home")})]})})},Oe=function(e){Object(y.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(O.a)(this,a),t.call(this,e)}return Object(f.a)(a,[{key:"render",value:function(){return Object(u.jsx)("footer",{className:"sticky fixed-bottom",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row justify-content-center",children:[Object(u.jsxs)("div",{className:"pb-0 px-2 pt-2 col-12 text-center",children:[Object(u.jsx)("a",{href:"https://twitter.com/jasonkylesmith/status/1381331071153868803?s=20",target:"_blank",children:Object(u.jsx)("i",{className:"fa fa-facebook-square mx-1"})}),Object(u.jsx)("a",{href:"https://twitter.com/jasonkylesmith/status/1381331071153868803?s=20",target:"_blank",children:Object(u.jsx)("i",{className:"fa fa-twitter-square mx-1"})}),Object(u.jsx)("a",{href:"https://twitter.com/jasonkylesmith/status/1381331071153868803?s=20",target:"_blank",children:Object(u.jsx)("i",{className:"fa fa-youtube-square mx-1"})}),Object(u.jsx)("a",{href:"https://www.instagram.com/p/CN-Bto8hLmj/",target:"_blank",children:Object(u.jsx)("i",{className:"fa fa-instagram mx-1"})})]}),Object(u.jsx)("nav",{className:"navbar navbar-expand col-12 col-lg-5 py-0 text-center justify-content-center",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(N.c,{to:"/faq",className:"nav-link",children:"FAQ"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(N.c,{to:"/tos",className:"nav-link",children:"Terms of Service"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(N.c,{to:"/donations",className:"nav-link",children:"Donations"})})]})}),Object(u.jsx)("div",{className:"col-12 text-center bg-dark text-light",children:Object(u.jsx)("span",{className:"small",children:"\xa9 The Very Nerdy Clothing Company 2021"})})]})})})}}]),a}(n.a.Component);var fe=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(N.a,{children:[Object(u.jsxs)(m,{children:[Object(u.jsx)(M,{}),Object(u.jsx)(ge,{}),Object(u.jsx)(b.Consumer,{children:function(e){return Object(u.jsx)(k,{show:e.cart.cart.showCart})}})]}),Object(u.jsx)(Oe,{})]})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(fe,{}),document.getElementById("root")),ye()}},[[62,1,2]]]);
//# sourceMappingURL=main.a3c0068b.chunk.js.map