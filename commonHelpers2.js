import"./assets/modulepreload-polyfill-3cfb730f.js";const r="feedback-form-state",m=document.querySelector(".feedback-form"),s=m.querySelector("textarea"),i=m.querySelector('input[type="email"]');m.addEventListener("submit",n);m.addEventListener("input",a);o();function n(e){e.preventDefault();let t=localStorage.getItem(r);if(t=JSON.parse(t),!(t!=null&&t.email)){alert("Поле e-mail має бути заповнене");return}if(!(t!=null&&t.message)){alert("Поле Message має бути заповнене");return}e.target.reset(),console.log(t),localStorage.removeItem(r)}function a(){const e={email:i.value.trim(),message:s.value.trim()};localStorage.setItem(r,JSON.stringify(e))}function o(){let e=localStorage.getItem(r);e=JSON.parse(e),e!=null&&e.email&&(i.value=e.email),e!=null&&e.message&&(s.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
