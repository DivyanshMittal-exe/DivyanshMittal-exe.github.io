const hamburger = document.getElementById("collapsedButton");

const navbar = document.querySelector(".mainnavbar");
      window.onscroll = () => {
        if (window.scrollY > 0) {
          navbar.classList.add("scrollingActive");
          hamburger.style.color = "black";
        } else {
          navbar.classList.remove("scrollingActive");
          hamburger.style.color = "white";
        }
      };




let nvbr = document.querySelector(".NavList");
let nvbrnames = document.getElementsByClassName("navname");
nvbr.addEventListener("mouseover", MouseOn);
nvbr.addEventListener("mouseout", MouseOff);


function MouseOn(){
    for (let i = 0; i < nvbrnames.length; i++) {
       nvbrnames[i].style.display = 'block';
       
    }
    for (let i = 0; i < nvbrnames.length; i++) {
        nvbrnames[i].classList.remove('animate__animated', 'animate__fadeOutRight');
     }
    for (let i = 0; i < nvbrnames.length; i++) {
        nvbrnames[i].classList.add('animate__animated', 'animate__fadeInRight');  
     }

    
    // nvbrnames.sty
    // nvbr.classList.add("scrollingActive");
}


function MouseOff() {
    for (let i = 0; i < nvbrnames.length; i++) {
        nvbrnames[i].classList.remove('animate__animated', 'animate__fadeInRight');
     }
    for (let i = 0; i < nvbrnames.length; i++) {
        nvbrnames[i].classList.add('animate__animated', 'animate__fadeOutRight'); 
     }
  }


  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    //print(rect)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const abtmeheading = document.querySelector('#abtmehead');

document.addEventListener('scroll', function () {
     if(isInViewport(abtmeheading)){
        abtmeheading.style.display = 'block';
        abtmeheading.classList.add('animate__animated', 'animate__fadeInUp');

     }
        

});




const NavLinks = document.getElementById("NavBarLinks");

hamburger.addEventListener ('click',()=>{
    console.log("clickes");
    NavLinks.classList.toggle("showNav");
    navbar.classList.toggle("scrollingActive2");
    
    // if (NavLinks.style.display != "none") {
    //     console.log("Hi");
    //     navbar.classList.add("scrollingActive");
    //   }else{
    //     navbar.classList.remove("scrollingActive");
    //   }
    
});

// data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"