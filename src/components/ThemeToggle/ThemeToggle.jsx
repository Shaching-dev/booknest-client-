import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MoonStar, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      {/* Sun */}
      {/* <svg
        className="swap-off fill-current w-6 h-6 text-green-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M5.64 17.657A9 9 0 0012 21a9 9 0 006.364-3.343A9 9 0 015.64 17.657z" />
      </svg> */}

      <Sun size={50} className="swap-on fill-current w-6 h-6" />

      {/* Moon */}
      {/* <svg
        className="swap-on fill-current w-6 h-6 text-black"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M21.64 13.64A9 9 0 1110.36 2.36 7 7 0 0021.64 13.64z" />
      </svg> */}

      {/* <Moon className="swap-off fill-current w-6 h-6 " />
       */}
      <MoonStar
        slope={10}
        size={50}
        className="swap-off fill-current w-6 h-6 "
      />
    </label>
  );
};

export default ThemeToggle;
