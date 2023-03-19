import React, { useState } from "react";
// import Chart from "react-apexcharts";

const Tasks = () => {
  const [button1, setButton1] = React.useState(true);
  const [button2, setButton2] = React.useState(false);

  return (
    <div className="m-5">
      <button
        // className="btn btn-dark"
        className={`btn ${button1 ? "btn-dark" : "btn-danger"}`}
        // style={{backgroundColor: button1 ? "#ed1d1d" : "#000", color: "white"}}
        onClick={() => setButton1(!button1)}
      >
        Add
      </button>

      <div className="d-flex mt-5">
        <button
          // className="btn mx-5 btn-success"
          className={`btn mx-5 ${button2 ? "btn-success" : "btn-primary"}`}
          onClick={() => setButton2(!button2)}
        >
          Change 1
        </button>
        <button
          // className="btn  mx-5 btn-primary"
          className={`btn mx-5 ${button2 ? "btn-primary" : "btn-success"}`}
          onClick={() => setButton2(!button2)}
        >
          Change 2
        </button>
      </div>
    </div>
  );
};

export default Tasks;
