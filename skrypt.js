const input = document.querySelector(".motyw input")

input.addEventListener("change", (e)=>{
    if(e.target.checked){
        document.body.setAttribute("data-theme", "ciemny");
    }else{document.body.setAttribute("data-theme", "jasny");}
});

// stale z wielkiej
const OBIEKTYGALERIX = document.querySelectorAll(".obiektygaleri img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left")
const ARROW_RIGHT = document.querySelector(".popup__arrow--right")

//zmienne z malej
let currentImgIndex;

// dzialania

const showNextImage = () => {
    if(currentImgIndex === OBIEKTYGALERIX.length - 1){
        currentImgIndex = 0;
    }else{
        currentImgIndex++;
    }
    
    POPUP_IMG.src = OBIEKTYGALERIX[currentImgIndex].src;
};

const showPreviousImage = () =>{
    if(currentImgIndex === 0){
        currentImgIndex = OBIEKTYGALERIX.length - 1;
    }else{
        currentImgIndex--;
    }
    
    POPUP_IMG.src = OBIEKTYGALERIX[currentImgIndex].src;
};

const closePopupImage = () =>{
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
        obiektygaleri.forEach(element => {
            element.setAttribute("tabindex", 1);
        });
    }, 300)
    
};


OBIEKTYGALERIX.forEach((obiektygaleri, index) => {
    const showPopup = (e) => {
        POPUP.classList.remove("hidden");
        console.log(e.target.src);
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
        obiektygaleri.forEach(element => {
            element.setAttribute("tabindex", -2);
        });
    };
        
    

    obiektygaleri.addEventListener("click", showPopup);

    obiektygaleri.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.keyCode === 13){
            showPopup(e);
        }
    });
});

// akcje klikniec
POPUP_CLOSE.addEventListener("click", closePopupImage);
ARROW_RIGHT.addEventListener("click", showNextImage);
ARROW_LEFT.addEventListener("click", showPreviousImage);


document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")){

    if (e.code === "ArrowRight" || e.keyCode === 39){
        showNextImage();
    }
    if (e.code === "ArrowLeft" || e.keyCode === 37){
        showPreviousImage();
    }
    if (e.code === "Escape" || e.keyCode === 27){
        closePopupImage();
    }
}
});

POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) {
        closePopupImage();
    }
});