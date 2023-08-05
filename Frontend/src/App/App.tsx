import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Providers/Theme-provider";
import "./App.css";
import { Settings } from "../Pages/UI/Settings";
import Main from "../Pages/UI/Main";
import Sidebar from '../Components/Shared/Sidebar/index';

function App() {
  return (
    <ThemeProvider>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
