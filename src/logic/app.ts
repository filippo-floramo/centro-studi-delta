import { checkType } from '../utils/utils'


export default function navLogic() {

   const hamburger = checkType(document.querySelector(".hamburger"));
   const navbar = checkType(document.querySelector(".nav--links"));
   const links = Array.from(document.querySelectorAll(".link"));

   links.forEach((link) => {
      link.addEventListener("click", () => {
         console.log("Test succes")
      })
   })

   hamburger.addEventListener("click", () => {

      navbar.classList.toggle("active");
   });

}