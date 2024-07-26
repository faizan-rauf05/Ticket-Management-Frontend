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
import CompanyRegister from "./pages/CompanyRegisterForm";
import Profile from "./components/Profile";
import AllUsers from "./pages/Admin/AllUsers";
import Analytics from "./pages/Company/Analytics";
import Blog from "./pages/User/Blog";
import Singleticketpage from "./components/Singleticketpage";
import Singleblog from "./pages/User/Singleblog";
import Parcel from "./pages/User/Parcel";
import GoogleRedirectHandler from "./components/GoogleRedirectHandler";

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
          <Route path="profile" element={<Profile />} />
          <Route path="all-users" element={<AllUsers />} />
        </Route>

        {/* User Routes  */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<AvailableTickets />} />
          <Route path="purchased-tickets" element={<PurchasedTickets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="ticket-details/:id" element={<Singleticketpage />} />
          <Route path="ticket-details/:id/blog-details/:id" element={<Singleblog />} />
          <Route path="parcel" element={<Parcel />} />
        </Route>

        {/* Company Routes */}
        <Route path="/company" element={<CompanyLayout />}>
          <Route index element={<AddTicket />} />
          <Route path="all-tickets" element={<CompanyAllTickets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        {/* Public Routes  */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Register />} />
          <Route path="/company-register" element={<CompanyRegister />} />
        </Route>
          <Route path="/login" element={<Login />} />
        <Route path="/api/auth/google" component={<GoogleRedirectHandler/>} />
      </Routes>
    </>
  );
}

export default App;
