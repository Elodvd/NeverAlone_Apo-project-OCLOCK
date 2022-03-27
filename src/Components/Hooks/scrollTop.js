import { useEffect } from "react";
import { useLocation } from "react-router-dom";


/**
 * When the location changes, scroll to the top of the page
 * @returns Nothing is being returned.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  