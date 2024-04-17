import React, {useState} from "react";
import Switch from "react-switch";
import "./Change.scss"


export default function Change({children}){
    const [mode, setMode] = useState(true);

    const handleChange = () => {
      setMode(!mode);
    };

return (
  <div className={mode ? "Change" : "Change Dark"}>
    <div className="header-top animate__animated animate__bounceInLeft ">
      <Switch
        onChange={() => handleChange()}
        checked={mode}
        onColor="#4c9aff"
        uncheckedIcon={<span></span>}
        checkedIcon={<span></span>}
      />
      <p className="modoNormal">MODE: NORMAL</p>
      <p className="modoDark">MODE: DARK</p>
    </div>
    {children}
  </div>
);
}