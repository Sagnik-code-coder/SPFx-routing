import * as React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateOrder from "./CreateOrder";
import Dashboard from "./Dashboard";
//import Contact from "./Contact";

const SPFxRouterWebPart: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/">Dashboard</Link>
            </li>
            <li>
            <Link to="/CreateOrder">Create Order</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/CreateOrder" element={<CreateOrder />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default SPFxRouterWebPart;
