

export function checkType(element: HTMLElement | null): HTMLElement {

   if (element === null) {
      throw new Error("Element not found, did you spell it right?");
   }
   return element
}