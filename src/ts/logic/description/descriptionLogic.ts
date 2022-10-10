import { checkType } from "../../utils/utils";


export default function descriptionLogic() {

   /**declare variables */

   const slides = Array.from(document.querySelectorAll<HTMLElement>(".slide"));
   const slideContainer = checkType(document.querySelector(".description"));

   let slideCounter = 0;
   let maxSlides = slides.length - 1;


   /* Set position of each silde */

   slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
   });

   /* Set carousel logic */

   const animateSlide = () => {
      slides.forEach((slide, indx) => {
         slide.style.transform = `translateX(${100 * (indx - slideCounter)}%)`;
         slide.style.transition = "0.5s ease-in"

         slide.addEventListener("transitionend",() => {
            if(slideCounter === maxSlides ) {
               slide.style.transition = "none";
               slide.style.transform = `translateX(${indx * 100}%)`;
            }
          })
      });
   }

   const nextslide = () => {
      if (slideCounter === maxSlides) {
         slideCounter = slides.length - maxSlides;
      } else {
         ++slideCounter;
      }
      animateSlide();
   }


   /*automate carousel on interval */

   let interval: NodeJS.Timer;

   const stopCarousel = () => {
      clearInterval(interval)
   }

   const startCarousel = () => {
      interval = setInterval(() => {
         nextslide();
      }, 5000)
   }



   /*Set event listeners */

   window.onload = () => startCarousel();



   slideContainer.addEventListener('mouseover', () => { stopCarousel(); });
   slideContainer.addEventListener('mouseout', () => { startCarousel(); });

}