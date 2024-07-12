import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./Layouts/AdminLayout";
import UserLayout from "./Layouts/UserLayout";
import PublicLayout from "./Layouts/PublicLayout";
import CompanyLayout from "./Layouts/CompanyLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AllTickets from "./pages/Admin/AllTickets";
import AddCategory from "./pages/Admin/AddCategory";
import AvailableTickets from "./pages/User/AvailableTickets";
import PurchasedTickets from "./pages/User/PurchasedTickets";
import AddTicket from "./pages/Company/AddTicket";
import CompanyAllTickets from "./pages/Company/AllTickets";
import AllCompanies from "./pages/Admin/AllCompanies";
import CompanyRegisterForm from "./pages/Company/CompanyRegisterForm";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/*  Admin Routes  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="all-companies" element={<AllCompanies />} />
          <Route path="all-tickets" element={<AllTickets />} />
          <Route path="add-category" element={<AddCategory />} />
        </Route>

        {/* User Routes  */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<AvailableTickets />} />
          <Route path="purchased-tickets" element={<PurchasedTickets />} />
        </Route>

        {/* Public Routes  */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company-register" element={<CompanyRegisterForm />} />
        </Route>

        {/* Company Routes */}
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<AddTicket />} />
          <Route path="all-tickets" element={<CompanyAllTickets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
