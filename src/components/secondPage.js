import React, { useState } from "react";
import { useCustom } from "./Contex.js";

function SecondPage() {
  const { status } = useCustom();
  const [value, setValue] = useState(0);

  const onChangeValue = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
  };

  return (
    <div>
      <input
        type="number"
        name="number"
        value={value}
        onChange={onChangeValue}
        placeholder="0"
        disabled={status}
      />
      <p>Current Value: {value}</p>
    </div>
  );
}

export default SecondPage;
