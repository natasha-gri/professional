let navbarScroll = document.getElementById('navbarScroll').classList;
let acrive_class = "bottom-menu-scroll--scrolled";

let logo = document.getElementById('logo').classList;
let logo_nohide = "logo--nohide";

function getSize() {
    let w = window.innerWidth;
    return w > 768
};

function getClassScroll() {
    window.addEventListener('scroll', e => {
        if(pageYOffset > 250) {
            navbarScroll.add(acrive_class);
            logo.add(logo_nohide);
        }
        
        else {
          navbarScroll.remove(acrive_class);
          logo.remove(logo_nohide);
        }
        
    })
};

if (getSize()) {
    getClassScroll();
}

