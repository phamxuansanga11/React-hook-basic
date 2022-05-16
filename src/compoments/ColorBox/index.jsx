import { useState } from "react";
import "./ColorBox.scss";

function getColorRandom() {
  const arr = ["red", "blue", "black", "yellow"];
  let numberRandom = Math.floor(Math.random() * 4);
  return arr[numberRandom];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("new_Color") || "violet";
    console.log(initialColor);
    return initialColor;
  });
  const handleClick = () => {
    let newColor = getColorRandom();
    setColor(newColor);
    localStorage.setItem("new_Color", newColor);
  };
  return (
    <div
      className="box"
      onClick={handleClick}
      style={{
        background: color,
        width: "200px",
        height: "200px",
        display: "flex",
      }}
    >
      <p>BOX</p>
    </div>
  );
}

export default ColorBox;
