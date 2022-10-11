import { checkType } from "../../utils/utils";


interface DataCard {
   iconClass: string;
   cardH3: string;
   cardP: string;
};


const CardData: DataCard[] = [
   {
      iconClass: " card--icon fa-solid fa-pen fa-3x",
      cardH3: "Non riesci a risolvere un esercizio?",
      cardP: "Lo facciamo noi per te!"
   },

   {
      iconClass: " card--icon fa-solid fa-book-open fa-3x",
      cardH3: "Devi recuperare un esame o un voto?",
      cardP: "Scrivici per prenotare una consulenza gratuita o una lezione!"
   },
   {
      iconClass: "card--icon fa-solid fa-graduation-cap fa-3x",
      cardH3: "Hai bisogno di esercizi svolti?",
      cardP: "Consulta gratis il nostro materiale didattico per scuole superiori e università!"
   }
];


export default function cardsLogic() {

   const cardContainer = checkType(document.querySelector(".cards"));

   CardData.forEach((data: DataCard) => {

      const card: HTMLElement = document.createElement("div");
      card.className = "card";

      const cardContent = `
      <i class="${data.iconClass}"></i>
      <div class="card--text">
          <h3>${data.cardH3}</h3>
          <p> ${data.cardP}</p>
      </div>
      <a href="#" class="arrow--redirect"> <i class="fa-solid fa-arrow-right" data-fa-transform="grow-20"></i></a>
      `
      card.innerHTML = cardContent;

      cardContainer.appendChild(card);
   })
}