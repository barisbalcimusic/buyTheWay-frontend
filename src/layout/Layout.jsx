import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Warning from "../components/Warning";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  setInnerWidth,
  setWarningScreen,
  toggleMobileMenu,
  toggleSearch,
} from "../features/ui/uiSlice";
import ScrollTopButton from "../components/ScrollTopButton";
import Search from "./Search";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  // LOCAL STATES
  const [showScrollButton, setShowScrollButton] = useState(false);

  // GLOBAL STATES
  const { warningScreen, isSearchOpen, isMobileMenuOpen } = useSelector(
    (state) => state.ui
  );

  // SHOW WARNING SCREEN IF INNER WIDTH IS LESS THAN DEFINED
  useEffect(() => {
    const sizeCheck = () => {
      const innerWidth = window.innerWidth;

      dispatch(setWarningScreen(innerWidth > 520 ? true : false));
      dispatch(setInnerWidth(innerWidth));
    };
    window.addEventListener("resize", sizeCheck);
    sizeCheck();
    return () => window.removeEventListener("resize", sizeCheck);
  }, []);

  useEffect(() => {
    let timeout;
    const findScrollY = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowScrollButton(window.scrollY > 100);
      }, 70);
    };
    window.addEventListener("scroll", findScrollY);
    return () => {
      window.removeEventListener("scroll", findScrollY);
    };
  }, []);

  // CLOSE MOBILE MENU ON ROUTE CHANGE
  useEffect(() => {
    if (isMobileMenuOpen) dispatch(toggleMobileMenu());
    if (isSearchOpen) dispatch(toggleSearch());
  }, [location]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {warningScreen && <Warning />}
      <Header />
      {isSearchOpen && <Search />}
      {showScrollButton && (
        <ScrollTopButton handleScrollToTop={handleScrollToTop} />
      )}
      {isMobileMenuOpen && <MobileMenu />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
