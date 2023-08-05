import { Link } from "react-router-dom";
import RadioToggler from "@/Components/Shared/DarkMode/RadioToggler/RadioToggler";
import "./Settings.scss";

const Settings = () => {
  return (
    <>
      <div className="settings container">
        <div className="settings__wrapper">
          <div className="settings__title">
            <h1>Настройки</h1>
          </div>
          <div className="settings__menu">
            <div className="settings__menu--item">
              <h2 className="menu--item__title">Выбор темы</h2>
              <RadioToggler />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Settings };
