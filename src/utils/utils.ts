

export function checkType(element: Element | null): Element {

   if (element === null) {
      throw new Error("Element not found, did you spell it right?");
   }
   return element
}