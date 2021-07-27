import React, { useState } from "react";

const ChangeMenu = ({ stock }) => {
  const [value, setValue] = useState(stock);
  const changeValue = (e) => setValue(e.target.value);
  return (
    <fieldset>
      <legend>Masukkan jumlah dorayaki</legend>
      <input
        type="number"
        value={value}
        onChange={changeValue}
        className="w-16 px-1 rounded-lg"
      />
      <input
        type="submit"
        value="Submit"
        className="block cursor-pointer py-1 px-2 rounded-sm bg-white my-2 transition hover:bg-gray-50"
      />
    </fieldset>
  );
};

export default ChangeMenu;
