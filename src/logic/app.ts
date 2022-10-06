import { checkType } from '../utils/utils'


export default function navLogic() {

   const hamburger = checkType(document.querySelector(".hamburger"));
   const navbar = checkType(document.querySelector(".nav--links"));

      hamburger.addEventListener("click", () => {

         navbar.classList.toggle("active");
      });
   
}