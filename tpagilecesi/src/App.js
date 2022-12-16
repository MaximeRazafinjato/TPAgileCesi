import "./App.css";
import CustomNavbar from "./CustomNavbar";
import CustomButtom from "./Components/CustomButton";
import Page from "./Page";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<CustomButtom>Test</CustomButtom>));
  };
  const onAddTextClick = (event) => {
    setInputList(inputList.concat(<input />));
  };

  return (
    <div>
      <header className="App-header" style={{ position: "absolute" }}>
        <div style={{ width: "50px" }}>
          <CustomNavbar
            onAddBtnClick={onAddBtnClick}
            onAddTextClick={onAddTextClick}
          />
        </div>
      </header>
      <div style={{ paddingTop: "20px" }}>
        {inputList.length != 0 && (
          <div style={{ padding: 1 }}>
            <Page inputList={inputList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
