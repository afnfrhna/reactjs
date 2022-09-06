import React, { useState, useCallback } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";
// import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("APP RUNNING");

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  // return (
  //   <div className="app">
  //     <h1>Hi there!</h1>
  //     <DemoOutput show={false} />
  //     <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
  //     <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
  //   </div>
  // );

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
