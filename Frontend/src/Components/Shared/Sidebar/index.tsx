import React, { useState } from "react";
import { faTasks, faCalendar, faCog } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/index";
import './sidebar.scss'

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? <>&#8592;</> : <>&#8594;</>}
      </div>
      <div className="menu">
        <Icon icon={faTasks} label="Дела" />
        <Icon icon={faCalendar} label="Календарь" />
        <Icon icon={faCog} label="Настройки" />
      </div>
    </div>
  );
};

export default Sidebar;
