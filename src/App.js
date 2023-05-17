import React, { useState } from "react";
import "./App.css";
import { Footer } from "./Footer";
import Header from "./Header";
import { CreateNote } from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItems, setAddItems] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleAdd = (item) => {
    if (!note.content && !note.title) {
      alert("fill the data");
    } else {
      setAddItems((oldData) => {
        return [...oldData, item];
      });
    }
    setNote({
      title: "",
      content: "",
    });
  };
  const onDelete = (id) => {
    setAddItems((prevData) =>
      prevData.filter((currVal, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote note={note} setNote={setNote} handleAdd={handleAdd} />
      {addItems.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
