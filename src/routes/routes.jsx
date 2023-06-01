import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import PageNotFound from "../pages/pagenotfound/pagenotfound";
import Dashboard from "../pages/dashboard/dashboard";

export function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="*" element={<PageNotFound />} exact />
      </Routes>
    </BrowserRouter>
  );
}
