import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TripDetailsPage from "./pages/TripDetailsPage";
import TripsPage from "./pages/TripsPage";
import CheckListBuilderPage from "./pages/CheckListBuilderPage";

function App() {
  const drawerId = "travel-buddy-drawer";

  return (
    <div className="drawer">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar drawerId={drawerId} />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<TripsPage />} />{" "}
            {/* Default or home page */}
            <Route path="/trips" element={<TripsPage />} />{" "}
            {/* Dedicated trip list page */}
            <Route path="/trips/:id" element={<TripDetailsPage />} />{" "}
            <Route path="/checklist" element={<CheckListBuilderPage />} />{" "}
            {/* Dynamic route for trip details */}
            {/* <Route path="/add-trip" element={<AddTrip />} />
           
            <Route path="*" element={<NotFoundPage />} />{" "} */}
            {/* Catch-all for 404 errors */}
          </Routes>
        </div>
      </div>
      <Sidebar drawerId={drawerId} />
    </div>
  );
}

export default App;
