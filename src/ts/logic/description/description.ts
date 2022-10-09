import { checkType } from "../../utils/utils";


export default function descriptionLogic() {

   /**declare variables */

   const slides = Array.from(document.querySelectorAll<HTMLElement>(".slide"));
   const slideContainer = checkType(document.querySelector(".description"));


   const next = checkType(document.querySelector(".next"));
   const previous = checkType(document.querySelector(".previous"))

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
      });
   }

   const nextslide = () => {
      if (slideCounter === maxSlides) {
         slideCounter = 0;
      } else {
         ++slideCounter;
      }
      animateSlide();
   }


   const previousSlide = () => {
      if (slideCounter === 0) {
         slideCounter = maxSlides;
      } else {
         --slideCounter;
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

   next.addEventListener("click", () => nextslide());
   previous.addEventListener("click", () => previousSlide());

   slideContainer.addEventListener('mouseover', () => { stopCarousel(); });
   slideContainer.addEventListener('mouseout', () => { startCarousel(); });

}