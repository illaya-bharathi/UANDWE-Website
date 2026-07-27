import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  // 1. Save scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 2. Restore scroll position instantly on load, or jump to top on new page
  useLayoutEffect(() => {
    // If navigating to a hash, scroll to that element
    if (hash) {
      isFirstRender.current = false;
      const id = hash.replace("#", "");
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      
      scrollToHash();
      // Fallback: wait a tick for the page to render the target component (like Services)
      setTimeout(scrollToHash, 100);
      return;
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      // On refresh, instantly scroll to the saved position before the screen paints
      const savedScroll = sessionStorage.getItem(`scroll-${pathname}`);
      if (savedScroll) {
        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
      }
      return;
    }

    // On actual route changes (without hash), jump to top instantly (overriding CSS scroll-behavior: smooth)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;