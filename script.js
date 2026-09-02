const cursor=document.querySelector(".cursor");
window.addEventListener("mousemove",e=>{if(cursor){cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"}});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".product-art").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(700px) rotateX(${y*-7}deg) rotateY(${x*7}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});

const form=document.getElementById("signup");
form.addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("form-message").textContent="WELCOME TO THE MOVEMENT. ⚡";
  form.reset();
});

const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  nav.style.position="absolute";nav.style.top="78px";nav.style.right="6vw";
  nav.style.flexDirection="column";nav.style.background="#111";nav.style.padding="22px";nav.style.gap="18px";
});
