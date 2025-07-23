import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/custom.scss';

import { AuthProvider } from './context/AuthContext';
import { SidebarProvider } from './context/SidebarContext';
import PrivateRoute from './components/common/PrivateRoute';

// ✅ IMPORT: ScrollToTop
import ScrollToTop from './components/navigation/ScrollToTop';

// Layout
import DashboardLayout from './components/layouts/DashboardLayout';

// Public Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import VerifyIdentityPage from './pages/auth/VerifyIdentityPage';
import ForgotPassPage from './pages/auth/ForgotPassPage';
import BookingPage from './pages/Booking/Booking';
import ReviewsPage from './pages/Reviews/Reviews';
import MyBookingPage from './pages/Booking/MyBookingPage';
import BookingConfirmationPage from './pages/Booking/BookingConfirmationPage';
import SupportPage from './pages/Support/support';
import ViewAllCar from './pages/View All Car/ViewAllCar';
import FareDetails from "./pages/payment/FareDetails";
import PaymentMethodPage from './pages/payment/PaymentMethodPage';

// Private Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import ProfilePage from './pages/profile/ProfilePage';
import PreferencesPage from './pages/profile/PreferencesPage';
import VehicleSearchPage from './pages/vehicles/VehicleSearchPage';
import VehicleDetailPage from './pages/vehicles/VehicleDetailPage';
import Experience from './pages/experience/Experience';

// ✅ Static Pages
import AboutUs from './pages/FooterPages/AboutUs';
import ContactUs from './pages/FooterPages/ContactUs';
import PrivacyPolicy from './pages/FooterPages/PrivacyPolicy';
import Terms from './pages/FooterPages/Terms';

const App: React.FC = () => (
  <AuthProvider>
    <SidebarProvider>
      <Router>
        {/* ✅ USE ScrollToTop once inside Router but outside Routes */}
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-identity" element={<VerifyIdentityPage />} />
          <Route path="/forgot-password" element={<ForgotPassPage />} />
          <Route path="/Booking/:id" element={<BookingPage />} />
          <Route path="/payment/faredetails" element={<FareDetails />} />
          <Route path="/my-profile" element={<ProfilePage />} />
          <Route path="/view-all-car" element={<ViewAllCar />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/Reviews" element={<ReviewsPage />} />
          <Route path="/my-booking" element={<MyBookingPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />

          {/* ✅ Static Info Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

          {/* ✅ Protected Route without Sidebar */}
          <Route element={<PrivateRoute />}>
            <Route path="/payment-methods" element={<PaymentMethodPage />} />
          </Route>

          {/* ✅ Protected Routes with Sidebar */}
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/vehicles" element={<VehicleSearchPage />} />
              <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/preferences" element={<PreferencesPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </SidebarProvider>
  </AuthProvider>
);

export default App;
