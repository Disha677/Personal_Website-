const p_btn = document.querySelectorAll('.p-btn');
const p_btns = document.querySelector('.p-btns');
const p_img_elem = document.querySelectorAll('.img-overlay');

const mobile_nav = document.querySelector('.mobile-nav-icon');
let headerElem = document.querySelector('.header');

p_btns.addEventListener('click', (e) => {
     const p_btn_clicked = e.target;
     console.log(p_btn_clicked);

     p_btn.forEach((currElem) => currElem.classList.remove("p-btn-active"));

     p_btn_clicked.classList.add("p-btn-active");

     // to find number in data attribute 
     let btn_num = p_btn_clicked.dataset.btnNum;
     console.log(btn_num);

     // let img_a

let img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

     p_img_elem.forEach((currElem) => currElem.classList.add("p-image-not-active"));

     img_active.forEach((currElem) =>
          currElem.classList.remove("p-image-not-active")
     );

})

// scroll to top button 

let heroSection = document.querySelector(".section-hero")
let footerElem = document.querySelector(".section-footer");

let scrollElem = document.createElement("div");
scrollElem.classList.add("scrollTop-style");

scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"><ion-icon>`;

footerElem.after(scrollElem);

let scrollTop = () => {
     heroSection.scrollIntoView({behaviour: "smooth"});
}

scrollElem.addEventListener("click",scrollTop);

