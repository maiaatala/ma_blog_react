import React from "react";
import DateDisplay from "../components/DateDisplay";

const HomePage: React.FC = () => {
  const testV = import.meta.env.VITE_TEST_ENV;
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
      <h1 style={{ fontSize: "4em" }}>Hello world!</h1>
      {testV ?? "not found"}
      <DateDisplay />
    </div>
  );
};

export default HomePage;
