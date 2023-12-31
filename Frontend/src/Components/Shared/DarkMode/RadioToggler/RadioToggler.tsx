import { useState, useEffect } from "react";
import "./RadioToggler.scss";

const RadioToggler = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);

    setTheme(() => localStorage.getItem("selectedTheme") || "");
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // @Обработчик изменения темы ОС
    const handleDarkModeChange = (event) => {
      const newTheme = event.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("selectedTheme", newTheme);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  return (
    <div className="dark_mode">
      {/* <h2 className="dark_mode__title">Выбор темы</h2> */}
      <div className="radio-btn" onChange={toggleTheme}>
        <label>
          <input
            className="dark_mode_input"
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
          />
          Светлая
        </label>
      </div>
      <div className="radio-btn" onChange={toggleTheme}>
        <label>
          <input
            className="dark_mode_input"
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
          />
          Тёмная
        </label>
      </div>
    </div>
  );
};

export default RadioToggler;
