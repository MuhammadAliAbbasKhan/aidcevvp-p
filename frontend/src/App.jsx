import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastProvider, useToast } from './context/ToastContext';
import { ToastNotification } from './components/ToastNotification';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DemoModal } from './components/DemoModal';
import { CheckoutModal } from './components/CheckoutModal';

import HomePage from './pages/HomePage';
import AidcPage from './pages/AidcPage';
import ThermalPage from './pages/ThermalPage';
import OurMissionPage from './pages/OurMissionPage';
import EvVppPage from './pages/EvVppPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [pendingPlan, setPendingPlan] = useState(null);
  const [user, setUser] = useState(null);
  const [activeSubscription, setActiveSubscription] = useState(null);

  const { addToast } = useToast();

  // 1. Restore User and Subscription on Mount
  useEffect(() => {
    const savedUser = localStorage.getItem('aidcevvpp_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        fetchUserSubscription(parsed.email);
      } catch (e) {}
    }
  }, []);

  // 2. Fetch Active Subscription from API / Local Storage
  const fetchUserSubscription = async (userEmail) => {
    if (!userEmail) {
      setActiveSubscription(null);
      return;
    }
    // Check local storage fallback first
    const savedSub = localStorage.getItem(`aidcevvpp_sub_${userEmail}`);
    if (savedSub) {
      try {
        setActiveSubscription(JSON.parse(savedSub));
      } catch (e) {}
    }

    try {
      const res = await axios.get(`/api/v1/subscriptions/status/?email=${encodeURIComponent(userEmail)}`);
      if (res.data && res.data.is_active) {
        setActiveSubscription(res.data);
        localStorage.setItem(`aidcevvpp_sub_${userEmail}`, JSON.stringify(res.data));
      } else {
        setActiveSubscription(null);
        localStorage.removeItem(`aidcevvpp_sub_${userEmail}`);
      }
    } catch (e) {}
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('aidcevvpp_user', JSON.stringify(userData));
    fetchUserSubscription(userData.email);

    // If user clicked a pricing plan prior to auth, trigger checkout modal immediately
    if (pendingPlan) {
      setSelectedPlan(pendingPlan);
      setPendingPlan(null);
      setCheckoutModalOpen(true);
      addToast(`Welcome ${userData.full_name}! Proceeding to secure checkout for ${pendingPlan.name}.`, 'info');
    }
  };

  const handleLogout = () => {
    if (user?.email) {
      localStorage.removeItem(`aidcevvpp_sub_${user.email}`);
    }
    setUser(null);
    setActiveSubscription(null);
    localStorage.removeItem('aidcevvpp_user');
    addToast('Signed out successfully.', 'info');
  };

  // 3. Strict Auth & Active Subscription Protection for Checkout
  const handleOpenCheckout = (plan) => {
    // A. Enforce Authentication Requirement
    if (!user) {
      setPendingPlan(plan);
      setAuthModalOpen(true);
      addToast('Authentication Required: Please Sign In or Create an Account before subscribing to a plan.', 'warning');
      return;
    }

    // B. Prevent Duplicate Payment for Active Monthly Subscription
    if (activeSubscription && activeSubscription.is_active && activeSubscription.plan_tier === plan.name) {
      addToast(`Active Subscription Lock: You already have an active subscription for ${plan.name} (${activeSubscription.monthly_price || plan.monthlyPrice}/mo). You do not need to pay again!`, 'info');
      return;
    }

    setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const handleSubscriptionSuccess = (subData) => {
    if (user?.email) {
      const updatedSub = {
        is_active: true,
        plan_tier: subData.plan,
        monthly_price: subData.price,
        paid_date: new Date().toLocaleDateString(),
        email: user.email
      };
      setActiveSubscription(updatedSub);
      localStorage.setItem(`aidcevvpp_sub_${user.email}`, JSON.stringify(updatedSub));
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'aidc':
        return <AidcPage openDemoModal={() => setDemoModalOpen(true)} setCurrentPage={setCurrentPage} />;
      case 'thermal':
        return <ThermalPage openDemoModal={() => setDemoModalOpen(true)} />;
      case 'mission':
        return <OurMissionPage openDemoModal={() => setDemoModalOpen(true)} />;
      case 'evvpp':
        return <EvVppPage openDemoModal={() => setDemoModalOpen(true)} />;
      case 'pricing':
        return (
          <PricingPage
            user={user}
            activeSubscription={activeSubscription}
            openCheckoutModal={handleOpenCheckout}
            openAuthModal={() => setAuthModalOpen(true)}
          />
        );
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage openDemoModal={() => setDemoModalOpen(true)} />;
      case 'admin':
        return <AdminPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'home':
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            openDemoModal={() => setDemoModalOpen(true)}
            openCheckoutModal={handleOpenCheckout}
          />
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000000' }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openAuthModal={() => setAuthModalOpen(true)}
        openDemoModal={() => setDemoModalOpen(true)}
        user={user}
        onLogout={handleLogout}
      />

      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      <Footer
        setCurrentPage={setCurrentPage}
        openDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Bounded Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        selectedPlan={selectedPlan}
        user={user}
        onSubscriptionSuccess={handleSubscriptionSuccess}
      />

      <ToastNotification />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
