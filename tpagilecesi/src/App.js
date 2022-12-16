import "./App.css";
import CustomNavbar from "./CustomNavbar";
import Page from "./Page";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <Button key={inputList.length} variant="primary">
          Test
        </Button>
      )
    );
  };

  return (
    <div>
      <header className="App-header">
        <div style={{ width: "50px" }}>
          <CustomNavbar onAddBtnClick={onAddBtnClick} />
        </div>
        {inputList.length != 0 && (
          <div style={{ padding: 1 }}>
            <Page inputList={inputList} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
