(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__pujYO",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2iE1_"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay___Sovn",Modal:"Modal_Modal__2dbMx"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2IhGi"}},24:function(e,t,a){e.exports={Loader:"Loder_Loader__RCtDC"}},25:function(e,t,a){e.exports={Button:"Button_Button__3rx8D"}},31:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(21),c=a.n(o),l=(a(31),a(12)),i=a(4),s=a(5),u=a(7),h=a(6),m=a(2),g=a.n(m),d=a(8),b=a.n(d),p=a(0),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleInputValue=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmin=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:b.a.Searchbar,onSubmit:this.handleSubmin,children:Object(p.jsxs)("form",{className:b.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(p.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:b.a.SearchFormInput,type:"text",name:"search",value:this.state.query,placeholder:"Search images and photos",onChange:this.handleInputValue})]})})}}]),a}(r.Component);y.proptTypes={onSubmit:g.a.func.isRequired};var j=y,f=a(10),I=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onKlickImg=function(t){e.props.toggleModal(t.target.dataset.img)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.largeImageURL;return Object(p.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:"",className:I.a.ImageGalleryItemImage,"data-img":a,onClick:this.onKlickImg})})}}]),a}(r.Component),O=a(22),_=a.n(O),S=function(e){var t=e.ArrGallary,a=e.toggleModal;return Object(p.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(p.jsx)(v,{webformatURL:r,largeImageURL:n,toggleModal:a},t)}))})},x=a(23),w=a.n(x),M=a(24),k=a.n(M),L=function(){return Object(p.jsx)("div",{className:k.a.Loader,children:Object(p.jsx)(w.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},F=a(25),G=a.n(F),B=function(e){var t=e.fetchImg;return Object(p.jsx)("button",{type:"button",className:G.a.Button,onClick:t,children:"Load more"})},N=a(11),C=a.n(N),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handlekeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlekeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlekeyDown)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:C.a.Overlay,children:Object(p.jsx)("div",{className:C.a.Module,children:Object(p.jsx)("img",{src:this.props.modalImg,alt:""})})})}}]),a}(r.Component),Q=a(26),R=a.n(Q),E=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return R.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=19673147-430400f08d3bcfd22f58b851f&image_type=photo&orientation=horizontal&per_page=12"))},P=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:"",gallery:[],currentPage:1,searchQuery:"",isLoding:!1,showModal:!1,modalImg:""},e.toggleModal=function(t){e.getModalImg(t),e.setState({showModal:!e.state.showModal})},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,gallery:[]})},e.fetchImg=function(){var t=e.state,a={currentPage:t.currentPage,searchQuery:t.searchQuery};e.setState({isLoding:!0}),E(a).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t.data.hits)),currentPage:e.currentPage+1}}))})).finally((function(){e.setState({isLoding:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImg()}},{key:"getModalImg",value:function(e){this.setState({modalImg:e})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoding,r=e.showModal,n=e.modalImg;return Object(p.jsxs)(p.Fragment,{children:[r&&Object(p.jsx)(D,{modalImg:n,toggleModal:this.toggleModal}),Object(p.jsx)(j,{onSubmit:this.onChangeQuery}),Object(p.jsx)(S,{ArrGallary:t,toggleModal:this.toggleModal}),a&&Object(p.jsx)(L,{}),!a&&t.length>0&&Object(p.jsx)(B,{fetchImg:this.fetchImg})]})}}]),a}(r.Component);c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__nd_a0",SearchForm:"Searchbar_SearchForm__1SVRm",SearchFormButton:"Searchbar_SearchFormButton__dEgEB",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2vrTB",SearchFormInput:"Searchbar_SearchFormInput__7FPXF"}}},[[71,1,2]]]);
//# sourceMappingURL=main.d8538ddf.chunk.js.map