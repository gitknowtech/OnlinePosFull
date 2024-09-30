import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanySetup from './FirstPage/CompanySetup';
import CheckPages from './FirstPage/checkPages';
import AdminAccount from './FirstPage/AdminAccount'; // Make sure to import your AdminAccount component
import UserLogin from './FirstPage/Loginuser';
import Dashboard from './Dashboard/Dashboard'; // Make sure to import your Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        {/* CheckPages route as the default path */}
        <Route path="/" element={<CheckPages />} />

        {/* CompanySetup and AdminAccount routes */}
        <Route path="/company-setup" element={<CompanySetup />} />

        <Route path="/admin-account" element={<AdminAccount />} />

        <Route path="/login-user" element={<UserLogin />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
