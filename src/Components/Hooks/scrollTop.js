import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// hook personalisé pour revenir en haut de page
// à chaque changement de path
export default function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  