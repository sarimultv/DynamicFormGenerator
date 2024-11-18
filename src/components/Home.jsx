import { useDispatch, useSelector } from "react-redux";
import JsonEditor from "./JsonEditor";
import FormPreview from "./FormPreview";
import { initialMode } from "../store/themeSlice";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const Home = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  const textColor = useSelector((store) => store.appTheme.textColor);

  const dispatch = useDispatch();
  const handleAppTheme = () => {
    dispatch(initialMode());
  };
  return (
    <div
      style={{ backgroundColor: `${mode}`, color: `${textColor}` }}
      className="md:flex md:justify-between min-sm:flex min-sm:justify-between min-h-screen"
    >
      <JsonEditor />
      <FormPreview />
      <ul className="pb-4 flex justify-center">
        <li
          className="md:mt-5 md:mr-3 w-[4rem] h-[4rem] flex justify-center items-center md:p-5 p-3 bg-gray-200 text-black rounded-full cursor-pointer hover:bg-yellow-500 hover:text-white"
          onClick={handleAppTheme}
        >
          {mode === "white" ? <FaMoon size={30} /> : <GoSun size={30} />}
        </li>
      </ul>
    </div>
  );
};

export default Home;
