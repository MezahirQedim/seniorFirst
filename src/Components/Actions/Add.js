import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

const Add = ({ show, setShow, list, setList }) => {

  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [work, setWork] = React.useState("");





  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        Add
        <CloseButton onClick={() => setShow(false)} />
      </Modal.Header>
      <Modal.Body>
        <label>Name</label>
        <input
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Surname</label>
        <input
          className="form-control"
          onChange={(e) => setSurname(e.target.value)}
        />
        <label>Work</label>
        <input
          className="form-control"
          onChange={(e) => setWork(e.target.value)}
        />
        <button className="btn btn-primary mt-2 w-100" 
        
        onClick={()=> 

        {
          let newList = list
          newList.push({
            name: name,
            surname: surname,
            work: work,
          })
          setList(newList)
          localStorage.setItem("userList", JSON.stringify(newList))
          setShow(false)
        }
        
        }>
          Submit</button>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
