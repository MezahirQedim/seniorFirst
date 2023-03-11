import React from "react";
import Add from "./Actions/Add";
// import "../assest/General.css"


const Todo = () => {

    const [show, setShow] = React.useState(false);
    const [list, setList] = React.useState([])





  return (
    <div>
      <div className="d-flex justify-content-center mt-2 add">
        <button className="btn btn-success" onClick={() => setShow(true)} >Add</button>
      </div>

        <Add  show={show}  setShow={setShow} list={list}/>



    </div>
  );
};

export default Todo;
