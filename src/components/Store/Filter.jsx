import {
  faArrowRightLong,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFilter } from "../../features/ui/uiSlice";
import { useDispatch } from "react-redux";

const filterOptions = [
  "Sortierung",
  "Kategorie",
  "Preis",
  "Farbe",
  "Größe",
  "Marke",
  "Sale",
];

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <section className="w-full h-full max-h-[100svh] flex flex-col gap-[5vw] bg-white absolute top-0 left-0 z-20 p-[5vw]">
      <div
        id="navigation-field"
        className="flex items-center gap-[2vw] pl-[2vw]"
        onClick={() => dispatch(toggleFilter())}>
        <button>
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="text-[5vw] font-bold text-customOrange"
          />
        </button>
        <p>Filter</p>
      </div>

      <div className="flex flex-col">
        {filterOptions.map((option) => (
          <div
            key={option}
            className="flex items-center border-b-customBorder border-black">
            <button className="w-full text-start py-[4vw]">{option}</button>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;
