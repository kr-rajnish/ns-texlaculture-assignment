import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import CompaniesPage from "./pages/CompaniesPage";
import SupportTicketPage from "./pages/SupportTicketPage";
import UserAdminPage from "./pages/UserAdminPage";
import { Route, Routes } from "react-router-dom";
import ClientPage from "./pages/ClientPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/" Component={Home}>
          <Route path="" Component={DashboardPage} />
          <Route path="companies" Component={CompaniesPage} />
          <Route path="support-ticket" Component={SupportTicketPage} />
          <Route path="user-admin" Component={UserAdminPage} />
          <Route path="client" Component={ClientPage} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
