import { checkType } from '../../utils/utils';
import hideNavbar from './hideNavbar';


export default function navbarLogic() {

   /* Call all secondary nav functions */

   hideNavbar();

   /* Declare variables */

   const body = checkType(document.querySelector("body"))

   const hamburger = checkType(document.querySelector(".hamburger"));

   const navLinks = checkType(document.querySelector(".nav--links"));

   /*Add more logic */

   hamburger.addEventListener("click", () => {

      const toggleNavClass = navLinks.classList.toggle("active");

      if (toggleNavClass) {
         body.style.overflowY = "hidden";
      } else {
         body.style.overflowY = "auto"
      }

      // Burger Animation

      hamburger.classList.toggle("toggle");
   });
}