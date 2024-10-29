import { React, useState } from "react";
import { useCustom } from "./Contex.js";

const Home = () => {
  const { status, setStatus } = useCustom();
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>First Page</h1>
      <input
        style={{ width: "18px", height: "18px" }}
        type="checkbox"
        name="checkbox"
        id="checkBox"
        checked={status}
      />
      <label
        style={{ marginLeft: "10px", fontSize: "18px" }}
        htmlFor="checkBox"
        status={status}
        onClick={() => setStatus(!status)}
      >
        Click Here
      </label>
    </div>
  );
};

export default Home;
