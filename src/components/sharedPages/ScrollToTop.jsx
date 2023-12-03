import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const  navigate  = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
}
