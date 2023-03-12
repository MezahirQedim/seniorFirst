import React from "react";
import Add from "./Actions/Add";
// import "../assest/General.css"

const Todo = () => {
  const [show, setShow] = React.useState(false);
  const [list, setList] = React.useState([]);

  console.log(list);

  React.useEffect(() => {
    let arr = localStorage.getItem("userList");
    if (arr) {
      let obj = JSON.parse(arr);
      setList(obj);
    }
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center mt-2 add">
        <button className="btn btn-success" onClick={() => setShow(true)}>
          Add
        </button>
      </div>

      <Add show={show} setShow={setShow} list={list} setList={setList} />

      {list.map((item, key) => {
        return <h1 key={key}>{key}{item.name}</h1>;
      })}
    </div>
  );
};

export default Todo;
