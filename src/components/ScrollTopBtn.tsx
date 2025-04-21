import React, { useCallback, useEffect, useState } from "react";
const radius = 16.5;
const stroke = 2;
const normalizedRadius = radius - stroke * 0.5;
const circumference = 2 * Math.PI * normalizedRadius;

export const ScrollToTopButton = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = document.body.scrollTop;
    const docHeight = document.body.scrollHeight - document.body.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    const _offset = circumference - (scrolled / 100) * circumference;
    setOffset(_offset);
  }, []);

  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.body.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <button
      onClick={scrollToTop}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "transparent",
        padding: 0,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17"
          cy="17"
          r={normalizedRadius}
          fill="#3B4252"
          strokeWidth={offset > 97 ? 0 : stroke}
          stroke="#D8DEE9"
          stroke-miterlimit="16"
          style={{
            strokeDasharray: `${circumference}, ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
        <path
          d="M10.9379 18.0475L10.2261 17.3539C9.92464 17.0601 9.92464 16.5852 10.2261 16.2946L16.4565 10.2203C16.7579 9.92657 17.2453 9.92657 17.5435 10.2203L23.7739 16.2915C24.0754 16.5852 24.0754 17.0602 23.7739 17.3507L23.0621 18.0444C22.7574 18.3413 22.2604 18.335 21.9622 18.0319L18.2842 14.2698V23.2501C18.2842 23.6657 17.9411 24 17.5147 24H16.4885C16.0621 24 15.719 23.6657 15.719 23.2501V14.2698L12.0378 18.035C11.7396 18.3413 11.2426 18.3475 10.9379 18.0475Z"
          fill="#D8DEE9"
        />
      </svg>
    </button>
  );
};
