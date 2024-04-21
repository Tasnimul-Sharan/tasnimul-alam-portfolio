import React, { useState, useEffect } from "react";
import "../App.css";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Arrow = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div>
      {visible ? (
        <button
          className="fixed right-0 bottom-0 p-3 z-10 cursor-pointer bg-[#149ddd] text-white rounded-full hover:scale-110 transition-all duration-500"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp className="text-3xl" />
        </button>
      ) : (
        <button
          className="fixed right-0 bottom-0 p-3 z-10 cursor-pointer bg-[#149ddd] text-white rounded-full hover:scale-110 transition-all duration-500"
          onClick={scrollToBottom}
        >
          <FaArrowCircleDown className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default Arrow;
