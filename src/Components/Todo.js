import React from "react";
import Add from "./Actions/Add";
import Info from "./Actions/Info";
import user_smile from "../img/user_smile.png";
import user from "../img/user.png";
// import "../assest/General.css"

const Todo = () => {
  const [show, setShow] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [image, setImage] = React.useState(user);
  const [imageKey, setImageKey] = React.useState();
  const [info, setInfo] = React.useState(false);
  const [listKey, setListKey] = React.useState();
  const [edit, setEdit] = React.useState({});

  React.useEffect(() => {
    let arr = localStorage.getItem("userList");
    if (arr) {
      let obj = JSON.parse(arr);
      setList(obj);
    }
  }, []);

  const Delete = (key) => {
    let deleteList = list;
    deleteList.splice(key, 1);
    setList([...deleteList]);
    localStorage.setItem("userList ", JSON.stringify(deleteList));
  };

  // console.log(list[listKey])

  return (
    <div>
      <div className="d-flex justify-content-center mt-2 add">
        <button className="btn btn-success" onClick={() => setShow(true)}>
          Add
        </button>
      </div>

      <Add show={show} setShow={setShow} list={list} setList={setList} />
      <Info
        info={info}
        setInfo={setInfo}
        listKey={listKey}
        edit={edit}
        list={list}
        setList={setList}
      />

      <div className="row m-5 rounded py-2" style={{ backgroundColor: "grey" }}>
        {list.map((item, key) => (
          <div
            className="col-3"
            key={key}
            onMouseEnter={() => {
              setImage(user_smile);
              setImageKey(key);
            }}
            onMouseLeave={() => setImage(user)}
          >
            <img className="w-100" src={key === imageKey ? image : user} />
            <div className="card p-2 rounded">
              <div className="d-flex justify-content-between">
                <p className="">Name:</p>
                <p>{item.name}</p>
              </div>
              <div className="d-flex  justify-content-between">
                <p className="">Surname:</p>
                <p>{item.surname}</p>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    setInfo(true);
                    setListKey(key);
                    setEdit(item);
                  }}
                >
                  <i class="bi bi-info-circle"></i>
                </button>
                <button className="btn btn-danger" onClick={() => Delete(key)}>
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
