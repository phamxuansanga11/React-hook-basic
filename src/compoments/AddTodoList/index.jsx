import React from "react";
import { useState } from "react";
// import PropTypes from "prop-types";
import "./AddTodoList.scss";

// AddTodoList.propTypes = {};

function AddTodoList() {
  const [text, setText] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleClickSubmit = () => {
    setJobs((prev) => [...prev, text]);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClickSubmit}>submit</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodoList;
