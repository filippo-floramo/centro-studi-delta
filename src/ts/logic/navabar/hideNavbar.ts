import { checkType } from "../../utils/utils"

export default function hideNavbar() {

   const navbar = checkType(document.querySelector(".nav"));

   let prevScrollPosition: number = window.scrollY;

   window.onscroll = () => {
      let currentScrollPosition: number = window.scrollY;

      if(prevScrollPosition > currentScrollPosition) {
         navbar.style.top = '0'
      } else {
         navbar.style.top = "-80px"
      }

      prevScrollPosition = currentScrollPosition;
   }
}