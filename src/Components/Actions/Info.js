import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

const Info = ({ info, setInfo, listKey, list, setList, edit }) => {

  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState("");
  const [work, setWork] = React.useState("");


  const Edit = () => {

    let editList = list

    editList[listKey] = {
      name: name,
      surname: surname,
      work: work
    }

    setList([...editList])

    localStorage.setItem("userList", JSON.stringify(editList))

    setInfo(false)

  }



  // React.useEffect(() => {

  //   setName(list[listKey]?.name)
  //   setSurname(list[listKey]?.surname)
  //   setWork(list[listKey]?.work)

  // }, [info])


  React.useEffect(() => {

    setName(edit?.name)
    setSurname(edit?.surname)
    setWork(edit?.work)

  }, [info])

  return (
    <Modal show={info} onHide={() => setInfo(false)}>
      <Modal.Header>
        Info
        <CloseButton />
      </Modal.Header>
      <Modal.Body>
        <label>Name</label>
        <input
            value={name}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Surname</label>
        <input
            value={surname}
          className="form-control"
          onChange={(e) => setSurname(e.target.value)}
        />
        <label>Work</label>
        <input
        value={work}
          className="form-control"
          onChange={(e) => setWork(e.target.value)}
        />
        <button className="btn btn-primary mt-1 w-100" onClick={Edit}>Submit</button>
      </Modal.Body>
    </Modal>
  );
};

export default Info;
