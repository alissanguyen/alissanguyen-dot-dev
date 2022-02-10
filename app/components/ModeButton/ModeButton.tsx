import * as React from "react";
import styles from "./ModeButton.css";

interface Props {}

const ModeButton: React.FC<Props> = ({}) => {
  return (
    <div className="switch">
      <input type="checkbox" name="toggle" />
      <label htmlFor="toggle">
        <i></i>
      </label>
      <span></span>
    </div>
  );
};

export default ModeButton;
