(()=>{"use strict";function e(e){return document.querySelector(e)}function t(e){return document.querySelectorAll(e)}function n(){const n=e(".order-modal"),s=(e(".order-modal__content"),e(".order-modal__form")),a=(e("#customer_name_span"),e(".customer_phone_span"),e("#customer_name")),o=e("#customer_phone"),i=e(".order-modal__form .order-btn"),l=(e(".product-name-label span:first-child"),e(".product-name-label strong")),c=e("#product_name"),r=e("#scroll-top"),d=e(".error-message");function u(){document.body.style.overflow="",n.classList.add("hide-modal"),(document.body.scrollTop>300||document.documentElement.scrollTop>300)&&(r.style.display="block"),s.reset(),d.classList.add("hidden")}t("[data-product-name]").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target;var s,a;s=t.getAttribute("data-product-name"),a=t.getAttribute("data-product-name-show").replace(/_/gi," "),document.body.style.overflow="hidden",n.classList.remove("hide-modal"),r.style.display="none",l.textContent=a,c.value=s}))})),n.addEventListener("click",(e=>{e.target===n&&u()})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&u()})),e(".close-modal").addEventListener("click",(()=>{u()})),i.addEventListener("click",(()=>{let e=a.value,t=o.value;e.replace(/ /gi,"").length>=3&&17===t.length?(d.classList.add("hidden"),s.submit()):d.classList.remove("hidden")}))}document.addEventListener("DOMContentLoaded",(()=>{(function(){const t=e(".search-form"),n=e(".search-input"),s=e(".search-button"),a=e(".search-button img");function o(){n.classList.remove("search-input-open"),n.classList.add("search-input-close"),t.reset(),setTimeout((()=>{n.classList.add("hidden")}),400)}let i=!1;s.addEventListener("click",(e=>{i=!i,i?(a.src="img/icons/search_icon_green.svg",setTimeout((()=>{n.classList.remove("search-input-close"),n.classList.add("search-input-open"),n.classList.remove("hidden")}),200),setTimeout((()=>{n.focus()}),600)):(a.src="img/icons/search_icon.svg",o())})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&i&&(a.src="img/icons/search_icon.svg",o(),i=!i)}))})(),function(){const t=e(".menu-bar"),n=e(".site-nav");t.addEventListener("click",(()=>{n.classList.toggle("site-nav-open"),n.classList.contains("site-nav-open")?document.body.style.overflow="hidden":document.body.style.overflow=""})),n.addEventListener("click",(e=>{e.target.classList.contains("site-nav__link")&&(e.currentTarget.classList.remove("site-nav-open"),document.body.style.overflow="")}))}(),function(){e(".language");const s=e(".language__selected"),a=e(".language__list"),o=t(".language__item");function i(){a.classList.add("hidden")}let l;s.addEventListener("click",(e=>{a.classList.contains("hidden")?a.classList.remove("hidden"):i()})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&i()})),window.addEventListener("click",(e=>{e.target!==s&&i()})),localStorage.getItem("selectedLanguageIndex")?(l=localStorage.getItem("selectedLanguageIndex"),o.forEach((e=>e.classList.remove("language__item--active"))),o[l].classList.add("language__item--active")):(l=0,o.forEach((e=>e.classList.remove("language__item--active"))),o[l].classList.add("language__item--active")),s.textContent=o[l].dataset.selected,a.addEventListener("click",(e=>{const t=e.target;o.forEach(((e,n)=>{e.classList.remove("language__item--active"),t===e&&(l=n,s.textContent=o[l].dataset.selected,localStorage.setItem("selectedLanguageIndex",l))})),S(l),t.classList.add("language__item--active")}));const c=e(".site-nav__ul"),r=e(".search-input"),d=e(".site-intro .container"),u=e(".site-info__left"),_=e(".our-products h2"),m=e(".our-products .row"),v=e(".additional h2"),h=e(".shoe-covers__info h3"),g=e(".shoe-covers__ul"),p=e(".shoe-covers__info button"),f=e(".medical-masks h3"),L=e(".medical-masks ul"),k=e(".medical-masks button"),y=e(".greenhouse h3"),b=e(".greenhouse .shoe-covers__ul"),E=e(".greenhouse .order-btn"),$=e(".site-footer h2"),w=e(".map-link"),x=e(".order-modal__content h2"),T=e("#customer_name_span"),C=e("#customer_phone_span"),M=e(".order-modal__form .order-btn"),H=e(".product-name-label span:first-child"),I=e(".error-message");function S(e=0){const{site_nav:t,site_intro:s,site_info:a,our_products:o,additional:i,greenhouse:l,contact_us:S,order:N,search:j,fill_form:A,enter_name:q,enter_phone:B,product_name:D,error_message:O,thank_for_order:z}=content[e];c.innerHTML="",c.innerHTML+=`\n            <li class="site-nav__li">\n              <a class="site-nav__link" href="#our-products">${t[0]}</a>\n           </li>\n           <li class="site-nav__li">\n              <a class="site-nav__link" href="#additional">${t[1]}</a>\n           </li>\n           <li class="site-nav__li">\n              <a class="site-nav__link" href="#contacts">${t[2]}</a>\n           </li>\n        `,r.setAttribute("placeholder",j),d.innerHTML=`\n            <div class="site-intro__left">\n                <h1>${s.title}</h1>\n                <a href="#">${s.button_text}</a>\n            </div>\n            <div class="site-intro__right">\n                <div>15</div>\n                <div>${s.in_market}</div>\n            </div>\n        `,u.innerHTML=`\n            <h2 class="section-title">${a.title}</h2>\n            <ul class="site-info__ul">\n                <li class="site-info__li">\n                    <a class="site-info__link" href="#our-products">${a.links[0]}</a>\n                </li>\n                <li class="site-info__li">\n                    <a class="site-info__link" href="#additional">${a.links[1]}</a>\n                </li>\n                <li class="site-info__li">\n                    <a class="site-info__link" href="#greenhouse">${a.links[2]}</a>\n                </li>\n                <li class="site-info__li">\n                    <a class="site-info__link" href="#contacts">${a.links[3]}</a>\n                </li>\n            </ul>\n        `,_.textContent=o.title,m.innerHTML="",o.cards.forEach((({img:e,title:t,data:n,product_name:s})=>{m.innerHTML+=`\n                <div class="card">\n                    <div class="card-header">\n                        <div class="card-img">\n                            <img src=${e} alt=${t} width="200" height="200">\n                        </div>\n                    </div>\n                    <div class="card-body">\n                        <h3 class="card-title">${t}</h3>\n                        <div>\n                            <strong>${n[0].key}: </strong>\n                            <span>${n[0].value}</span>\n                        </div>\n                        <div>\n                            <strong>${n[1].key}: </strong>\n                            <span>${n[1].value}</span>\n                        </div>\n                        <div>\n                            <strong>${n[2].key}: </strong>\n                            <span>${n[2].value}</span>\n                        </div>\n                        <div>\n                            <button class="order-btn" data-product-name=${s} data-product-name-show=${t.split(" ").join("_")}>${N}</button>\n                        </div>\n                    </div>\n                </div>\n            `})),v.textContent=i.title,h.textContent=i.shoe_covers.title,g.innerHTML="",i.shoe_covers.data.forEach((({key:e,value:t})=>{g.innerHTML+=`\n                 <li class="shoe-covers__li">\n                    <strong>${e}: </strong>\n                    <span>${t}</span>\n                </li>\n            `})),p.textContent=N,p.dataset.productName="бахилы",p.dataset.productNameShow=i.shoe_covers.title.split(" ").join("_"),f.textContent=i.masks.title,L.innerHTML="",i.masks.data.forEach((({key:e,value:t})=>{L.innerHTML+=`\n               <li class="shoe-covers__li">\n                  <strong>${e}: </strong>\n                  <span>${t}</span>\n               </li> \n            `})),k.textContent=N,k.dataset.productName="медицинские_маски",k.dataset.productNameShow=i.masks.title.split(" ").join("_"),y.textContent=l.title,b.innerHTML="",l.data.forEach((({key:e,value:t})=>{b.innerHTML+=`\n                <li class="shoe-covers__li">\n                    <strong>${e}: </strong>\n                    <span>${t}</span>\n                </li>\n            `})),E.textContent=N,E.dataset.productName="тепличные_плёнки",E.dataset.productNameShow=l.title.split(" ").join("_"),$.textContent=S.title,w.textContent=S.address,x.textContent=A,T.textContent=q,C.textContent=B,H.textContent=D,M.textContent=N,I.textContent=O,n()}S(l)}(),function(){const t=e("#scroll-top");window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?t.style.display="block":t.style.display="none"},t.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0}))}(),function(){let e=document.getElementById("customer_phone");IMask(e,{mask:"+{998}(00)000-00-00"})}(),n()}))})();
//# sourceMappingURL=bundle.js.map