const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));window.addEventListener("scroll",(function(){pageYOffset>50?document.querySelector(".header").classList.add("active"):document.querySelector(".header").classList.remove("active")}));const t=document.querySelector(".contact-form");document.querySelector(".form-btn"),document.querySelector(".form-input").value;t.addEventListener("submit",(function(e){e.preventDefault(),console.dir(e.currentTarget.elements)}));
//# sourceMappingURL=index.78c5c75e.js.map
