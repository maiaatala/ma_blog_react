import React from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../resources/routes-constants";

const Forbidden: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Call this function to redirect the user to the homepage.
   */
  const redirectToHomePage = () => {
    navigate(ROUTES.POSTS.BASE);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "4em" }}>Oops 403!</h1>
      <span style={{ cursor: "pointer" }} onClick={() => redirectToHomePage()}>
        Homepage
      </span>
    </div>
  );
};

export default Forbidden;
