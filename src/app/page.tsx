"use client"
import { useState } from "react";

function Square() {
  const [changeValue, setChangeValue] = useState(null)
  function handleClick() {
    setChangeValue('X');
  }
  return <button className="square" onClick={handleClick}>{changeValue}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  )
}