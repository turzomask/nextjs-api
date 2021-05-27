import React, { useEffect, useState } from "react";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop}>
          <div className="scroll-to-top">
            {" "}
            <i class="fas fa-angle-up"></i>{" "}
            
          </div>
        </div>
      )}
    </div>
  );
}
