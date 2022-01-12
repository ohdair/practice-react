import { useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteList = (index) => {
    toDos.splice(index, 1);
    let newArray = [...toDos];
    setToDos(newArray);
  };
  return (
    <div>
      <h1>Hello, world!({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={toDo}
          placeholder="Write your to do..."
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <button onClick={deleteList}>delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
