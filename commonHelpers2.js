import"./assets/modulepreload-polyfill-3cfb730f.js";const t="feedback-form-state",a=document.querySelector(".feedback-form"),r=a.querySelector("textarea"),l=a.querySelector('input[type="email"]');a.addEventListener("submit",n);a.addEventListener("input",m);s();function n(e){e.preventDefault(),m(),e.target.reset();let o=localStorage.getItem(t);o=JSON.parse(o),console.log(o),localStorage.removeItem(t)}function m(){const e={email:l.value.trim(),message:r.value.trim()};localStorage.setItem(t,JSON.stringify(e))}function s(){let e=localStorage.getItem(t);e=JSON.parse(e),e!=null&&e.email&&(l.value=e.email),e!=null&&e.message&&(r.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
