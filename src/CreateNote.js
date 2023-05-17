import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export const CreateNote = (props) => {
  const [minimize, setminimize] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const expantIt = () => {
    setminimize(true);
  };
  const btoNormal = () => {
    setminimize(false);
  };
  return (
    <React.Fragment>
      <div className="main_note" onDoubleClick={btoNormal}>
        <form>
          {minimize ? (
            <input
              type="text"
              value={props.note.title}
              name="title"
              onChange={handleChange}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            row=""
            column=""
            value={props.note.content}
            name="content"
            onChange={handleChange}
            placeholder="Write a note..."
            onClick={expantIt}
          ></textarea>
          {minimize ? (
            <Button onClick={() => props.handleAdd(props.note)}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </React.Fragment>
  );
};
