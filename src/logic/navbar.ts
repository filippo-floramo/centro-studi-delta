import { checkType } from '../utils/utils';
import hideNavbar from './hideNavbar';


export default function navLogic() {
   
   hideNavbar();

   const body = checkType(document.querySelector("body"))

   const hamburger = checkType(document.querySelector(".hamburger"));

   const navLinks = checkType(document.querySelector(".nav--links"));

   hamburger.addEventListener("click", () => {

     const toggleNavClass = navLinks.classList.toggle("active");

      if(toggleNavClass) {
         body.style.overflowY = "hidden";
      } else {
         body.style.overflowY = "auto"
      }
   });

}