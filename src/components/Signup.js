import React from "react";
import { stripBasename } from "react-router/lib/router";
import { post } from "../authService/service";

export const Signup = () => {
  const [name, setName] = React.useState("");

  const go = async (e) => {
    e.preventDefault();
    let info = await post("/signup", name);

    console.log("Success?", info);

    localStorage.setItem("token", info);
  };

  return (
    <div>
      <form onSubmit={go}>
        <label></label>
        <input
          name="name"
          value={name}
          onChange={(e) => stripBasename(e.target.value)}
        />
        <button type="submit"> Start!</button>
      </form>
    </div>
  );
};
