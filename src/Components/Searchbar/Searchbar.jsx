import React, { useState, useRef } from "react";
import ShouldRender from "../Utils/HOCs/ShouldRender";
import "./Searchbar.css";
const Searchbar = props => {
  let input = useRef(null);
  const [focus, setFocus] = useState(false);
  const [searching, setSearching] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <span className="fa fa-search"></span>
      <input
        type="text"
        name="search"
        placeholder={props.placeholder || "Search"}
        autoFocus={props.autoFocus}
        ref={input}
      ></input>
    </form>
  );
};

export default Searchbar;
