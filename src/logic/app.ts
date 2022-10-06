
export default function navLogic() {

   const hamburger = document.querySelector(".hamburger");
   const navbar = document.querySelector(".nav--links")

   if (hamburger && navbar) {
      hamburger.addEventListener("click", () => {

         navbar.classList.toggle("active");

      });
   }
}