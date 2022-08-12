(()=>{"use strict";const t=t=>e=>"checkout"==t?function({id:t,image:e,title:a,dimensions:n,materials:c,price:i}){return`\n    <article class="checkout-item" data-id="${t}">\n      \x3c!-- <div class="checkout-item__checkmark"></div> --\x3e\n      <div class="checkout-item__body">\n        <div class="checkout-item__image">\n          <img src="${e}" alt="Картинка">\n        </div>\n        <div class="checkout-item__about">\n          <strong>${a}</strong>\n          <p><span>Габариты:</span>${n.join("х")} см</p>\n          <p><span>Материалы:</span>${c.join(", ")}</p>\n        </div>\n        <div class="checkout-item__counter">\n          <div class="actions-product__quantity quantity">\n            <button type="button" class="quantity__button quantity__button_plus"></button>\n            <div class="quantity__input">\n              <input autocomplete="off" type="text" name="form[]" value="1">\n            </div>\n            <button type="button" class="quantity__button quantity__button_minus"></button>\n          </div>\n        </div>\n        <div class="checkout-item__price">\n          <p>${i} ₽</p>\n          <small>72 719 ₽</small>\n          <strong>72 719 ₽</strong>\n        </div>\n      </div>\n      <div class="checkout-item__action-bar">\n        <a class="add-to-favorites">В избранное</a>\n        <a class="delete-from-cart">Удалить</a>\n      </div>\n    </article>\n  `}(e):"catalog"==t?function({id:t,image:e,title:a,dimensions:n,materials:c,price:i,rating:d,feedbacks:r}){return`\n    <article class="product-card" data-id="${t}">\n      <a href="" class="product-card__image">\n        <span class="product-card__item-image-ibg product-card__item-image-ibg_contain">\n          <img src="${e}" alt="Картинка">\n        </span>\n      </a>\n      <div class="product-card__body">\n        <h4 class="product-card__title">\n          <a href="" class="product-card__link-title">${a}</a>\n        </h4>\n        <div class="product-card__info info-product-card">\n          <div class="info-product-card__size">${n.join("х")}</div>\n          <div class="info-product-card__materials">${c.join(", ")}</div>\n        </div>\n        <div class="product-card__rating rating rating_set">\n          <div class="rating__body">\n            <div class="rating__active" style="width: 72%;"></div>\n            <div class="rating__items">\n              <input type="radio" class="rating__item" value="1" name="rating">\n              <input type="radio" class="rating__item" value="2" name="rating">\n              <input type="radio" class="rating__item" value="3" name="rating">\n              <input type="radio" class="rating__item" value="4" name="rating">\n              <input type="radio" class="rating__item" value="5" name="rating">\n            </div>\n          </div>\n          <div class="rating__value">${d}</div>\n          <div class="rating__info">${r.length}</div>\n        </div>\n        <div class="product-card__footer">\n          <div class="product-card__price">от ${i} ₽</div>\n          <a href="" class="product-card__compare _icon-compare"></a>\n          <a href="" class="product-card__love _icon-love add-to-favorites"></a>\n        </div>\n        <button type="button" class="product-card__cart button add-to-cart">\n          <span class="_icon-cart">В корзину</span>\n        </button>\n      </div>\n    </article>\n  `}(e):"cart"==t?function({image:t,title:e,price:a,id:n}){return`\n\t\t<li class="cart-header__item"  data-id="${n}">\n\t\t\t<article class="cart-content__product card-product">\n\t\t\t\t<img src="${t}" alt="" class="card-product__item-image-ibg card-product__item-image">\n\t\t\t\t<div class="card-product__text">\n\t\t\t\t\t<h3 class="card-product__title">${e}</h3>\n\t\t\t\t\t<span class="card-product__price">${c=a,String(c).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")} ₽</span>\n\t\t\t\t</div>\n\t\t\t\t<button class="card-product__delete delete-from-cart" aria-label="Удалить из корзины"></button>\n\t\t\t</article>\n\t\t</li>\n\t`;var c}(e):"favorites"==t?function({image:t,title:e,price:a,id:n,dimensions:c,materials:i,rating:d,feedbacks:r}){return`\n  <article class="product-card" data-id="${n}">\n  <a href="" class="product-card__image">\n    <span class="product-card__item-image-ibg product-card__item-image-ibg_contain">\n      <img src="${t}" alt="Картинка">\n    </span>\n  </a>\n  <div class="product-card__body">\n    <h4 class="product-card__title">\n      <a href="" class="product-card__link-title">${e}</a>\n    </h4>\n    <div class="product-card__info info-product-card">\n      <div class="info-product-card__size">${c.join("х")}</div>\n      <div class="info-product-card__materials">${i.join(", ")}</div>\n    </div>\n    <div class="product-card__rating rating rating_set">\n      <div class="rating__body">\n        <div class="rating__active" style="width: 72%;"></div>\n        <div class="rating__items">\n          <input type="radio" class="rating__item" value="1" name="rating">\n          <input type="radio" class="rating__item" value="2" name="rating">\n          <input type="radio" class="rating__item" value="3" name="rating">\n          <input type="radio" class="rating__item" value="4" name="rating">\n          <input type="radio" class="rating__item" value="5" name="rating">\n        </div>\n      </div>\n      <div class="rating__value">${d}</div>\n      <div class="rating__info">${r.length}</div>\n    </div>\n    <div class="product-card__footer">\n      <div class="product-card__price">от ${a} ₽</div>\n      <a href="" class="product-card__compare _icon-compare"></a>\n      <a href="" class="product-card__love _icon-love add-to-favorites"></a>\n    </div>\n    <button type="button" class="product-card__cart button add-to-cart">\n      <span class="_icon-cart">В корзину</span>\n    </button>\n  </div>\n</article>\n  `}(e):void 0;const e={bubbles:!0,cancelable:!0},a={cart:{add:new Event("cartItemAdded",e),delete:new Event("cartItemRemoved",e)},favorites:{add:new Event("favoritesItemAdded",e),delete:new Event("favoritesItemRemoved",e)},checkout:{add:new Event("checkoutItemAdded",e),delete:new Event("checkoutItemRemoved",e)}};function n(t,e){return n=>{const c=JSON.parse(localStorage.getItem(e))??[],i=n.target.closest("[data-id]"),d=c.findIndex((t=>t.id===i.dataset.id));console.log(d),"add"==t&&-1!==d||("add"==t&&-1===d&&c.push({id:i.dataset.id}),"delete"==t&&c.splice(d,1),localStorage.setItem(e,JSON.stringify(c)),i.dispatchEvent(a[e][t]))}}window.addEventListener("DOMContentLoaded",(t=>{["cart","favorites"].forEach((t=>{localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify([]))}))}));const c=async()=>fetch("mocks/json/catalog.json").then((async t=>await t.json())),i=t=>({getOne:async t=>(await c()).find((e=>e.id==t)),getBulk:async()=>{const e=JSON.parse(localStorage.getItem(t));if(e.length){return(await c()).filter((t=>e.some((e=>e.id==t.id))))}}}),d=t("cart"),r=n("delete","cart"),o=n("add","cart"),{getBulk:s,getOne:l}=i("cart");window.addEventListener("DOMContentLoaded",(async t=>{g(await s());const e=document.querySelector(".cart-header__basket"),n=document.querySelector(".cart-header__content"),c=n.querySelector(".cart-header__list");e.addEventListener("click",(t=>{c.childElementCount&&(t.stopImmediatePropagation(),n.classList.toggle("active"))}));const i=document.querySelectorAll(".add-to-cart");i.length&&i.forEach((t=>{t.addEventListener("click",o)})),window.addEventListener("storage",(async t=>{if("cart"===t.key){t.stopImmediatePropagation();const e=JSON.parse(t.oldValue),n=JSON.parse(t.newValue);if(n.length===e.length)return;if(console.log("Cart Event: ",t),(n.length>e.length||!e)&&l(n[n.length-1].id).then((t=>{m(t),c.lastElementChild.dispatchEvent(a.checkout.add)})),n.length<e.length){const t=y(e,n);c.querySelectorAll("[data-id]").forEach((e=>{console.log(e),e.dataset.id==t&&e.dispatchEvent(a.cart.delete)}))}p()}})),document.addEventListener("cartItemAdded",f),document.addEventListener("cartItemRemoved",h)}));const u=document.querySelector(".cart-header__quantity"),_=document.querySelector(".cart-header__content"),v=_.querySelector(".cart-header__list");function p(){const t=JSON.parse(localStorage.getItem("cart"));u.textContent=t.length?t.length:0}function g(t){v.innerHTML="",p(),t&&t.forEach(m)}function m(t){const e=d(t);v.insertAdjacentHTML("beforeend",e),v.lastElementChild.querySelector(".card-product__delete").addEventListener("click",r)}function f(t){t.stopImmediatePropagation();const e=t.target.dataset.id;l(e).then(m),p()}function h(t){console.log("item removed"),t.target.closest("[data-id]").remove(),p(),0===v.children.length&&_.classList.remove("active")}function y(t=[],e=[]){const[{id:a}]=t.filter((t=>!e.some((e=>e.id===t.id))));return a}const b=n("add","favorites"),E=n("add","cart"),S=n("delete","favorites"),k=t("favorites"),{getBulk:w,getOne:$}=i("favorites");function q(t){t.addEventListener("click",(t=>{t.preventDefault();const e=JSON.parse(localStorage.getItem("favorites")),a=t.target.closest("[data-id]");if(-1!==e.findIndex((t=>t.id==a.dataset.id)))return S(t);b(t)}))}window.addEventListener("DOMContentLoaded",(t=>{const e=document.querySelectorAll(".add-to-favorites"),a=document.querySelector(".favorites__container");e&&e.forEach(q),window.addEventListener("storage",(t=>{if("favorites"===t.key){const e=JSON.parse(t.oldValue),n=JSON.parse(t.newValue);if(console.log(t),n.length===e.length)return;if(t.stopImmediatePropagation(),n.length>e.length&&$(n[n.length-1].id).then((t=>{a&&function(t){return e=>{const a=k(e);t.insertAdjacentHTML("beforeend",a);const n=t.lastElementChild.querySelector(".add-to-favorites"),c=t.lastElementChild.querySelector(".add-to-cart");var i;q(n),(i=n).addEventListener("click",(function(t){t.preventDefault();const e=i.closest(".product-card");e.classList.add("hide"),setTimeout((()=>{e.remove()}),500)})),c.addEventListener("click",E)}}(a)(t)})),n.length<e.length&&a){const t=y(e,n);a.querySelectorAll("[data-id]").forEach((e=>{e.dataset.id==t&&e.dispatchEvent(events.favorites.delete)}))}}}))}));const L=t("catalog"),I=n("add","cart");window.addEventListener("DOMContentLoaded",(async t=>{!async function(t){(await fetch("./mocks/json/catalog.json").then((async t=>await t.json()))).map(L).forEach((e=>t.insertAdjacentHTML("beforeend",e))),t.querySelectorAll(".product-card").forEach((t=>{const e=t.querySelector(".add-to-cart"),a=t.querySelector(".add-to-favorites");e.addEventListener("click",I),q(a)}))}(document.querySelector(".catalog__products"))}))})();