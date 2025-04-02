
import { FocusCards } from "@/components/ui/focus-cards";
import img1 from "../img/css.png";
export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: img1,
    },
    {
      title: "Valley of life",
      src: img1,
    },
    {
      title: "Sala behta hi jayega",
      src: img1,
    },
 
  ];

  return <FocusCards cards={cards} />;
}
