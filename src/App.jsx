import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import IntroStatement from './components/IntroStatement';
import PhotoMosaic from './components/PhotoMosaic';
import EventsList from './components/EventsList';
import CalendarPreview from './components/CalendarPreview';
import LifestyleSection from './components/LifestyleSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import StallsModal from './components/StallsModal';
import EventModal from './components/EventModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useScrollEffects } from './hooks/useScrollEffects';

import Preloader from './components/Preloader';

// Inner Pages
import PhotosPage from './pages/PhotosPage';
import PrivateEventsPage from './pages/PrivateEventsPage';
import AsianNightMarketPage from './pages/AsianNightMarketPage';
import FiestaFridayPage from './pages/FiestaFridayPage';
import ThemedBrunchPage from './pages/ThemedBrunchPage';
import CalendarPage from './pages/CalendarPage';
import MenuPage from './pages/MenuPage';

// Scroll and anchor helper on route navigation
function RouteScrollManager({ lenisRef }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -64, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenisRef]);

  return null;
}

function HomePage({ setStallsModalOpen, setSelectedEvent, scrollY }) {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('udm_has_entered');
    } catch {
      return false;
    }
  });

  const handleComplete = () => {
    try {
      sessionStorage.setItem('udm_has_entered', 'true');
    } catch {
      // ignore storage access errors
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <main>
      {/* B. Hero with Parallax frame, floating bee badge & dynamic scroll cue */}
      <Hero
        onExploreClick={() => setStallsModalOpen(true)}
        scrollY={scrollY}
      />

      {/* C. Horizontal Brand Marquee */}
      <BrandMarquee />

      {/* D. Introductory Brand Statement with Parallax Watermark & Scroll Reveals */}
      <IntroStatement />

      {/* E. Photo Mosaic: Multi-Speed Parallax & Depth Layers */}
      <PhotoMosaic onExploreClick={() => setStallsModalOpen(true)} />

      {/* F. Events and Experiences List with Staggered Row Reveals */}
      <EventsList onSelectEvent={(item) => setSelectedEvent(item)} />

      {/* G. Upcoming Events / Calendar Preview with Staggered Card Entrance */}
      <CalendarPreview onSelectEvent={(item) => setSelectedEvent(item)} />

      {/* H. Split Lifestyle Section with Asymmetrical Counter-Parallax */}
      <LifestyleSection onExploreClick={() => setStallsModalOpen(true)} />

      {/* I. Location and Visit Information with Architectural Map Reveal */}
      <LocationSection />

      {/* J. Footer */}
      <Footer onExploreClick={() => setStallsModalOpen(true)} />
    </main>
    </>
  );
}

export default function App() {
  const [stallsModalOpen, setStallsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const lenisRef = useRef(null);

  // High-performance unified scroll & parallax engine
  const { scrollY, scrollProgress, isScrolled } = useScrollEffects();

  // Root-level Smooth Scrolling (Lenis) with anchor links & reduced-motion support
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.25,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1 && !anchor.hasAttribute('data-no-scroll')) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -64, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <RouteScrollManager lenisRef={lenisRef} />
      <div className="app-root grain">
        {/* Navigation with dynamic scroll progress and frosted glass state */}
        <Header
          onExploreClick={() => setStallsModalOpen(true)}
          isScrolled={isScrolled}
          scrollProgress={scrollProgress}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setStallsModalOpen={setStallsModalOpen}
                setSelectedEvent={setSelectedEvent}
                scrollY={scrollY}
              />
            }
          />
          <Route
            path="/photos"
            element={<PhotosPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
          <Route
            path="/private-events"
            element={<PrivateEventsPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
          <Route
            path="/asian-night-market"
            element={<AsianNightMarketPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
          <Route
            path="/fiesta-friday"
            element={<FiestaFridayPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
          <Route
            path="/themed-brunch"
            element={<ThemedBrunchPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
          <Route
            path="/calendar"
            element={<CalendarPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
          <Route
            path="/menu"
            element={<MenuPage onExploreClick={() => setStallsModalOpen(true)} />}
          />
        </Routes>

        {/* Floating Circular Back-to-Top Button with Scroll Progress Ring */}
        <ScrollToTopButton scrollY={scrollY} scrollProgress={scrollProgress} />

        {/* Interactive Modals */}
        <StallsModal
          isOpen={stallsModalOpen}
          onClose={() => setStallsModalOpen(false)}
        />

        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </BrowserRouter>
  );
}
