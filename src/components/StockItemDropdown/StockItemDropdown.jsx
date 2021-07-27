import React, { useState } from "react";
import Desc from "./Desc";
import ChangeMenu from "./ChangeMenu";
import TransferMenu from "./TransferMenu";
import _ from "lodash";

const StockItemDropdown = ({ imgUrl, desc, _id, stock }) => {
  const [showMenu, setShowMenu] = useState(0);
  const toggleDesc = () => {
    setShowMenu(0);
  };
  const toggleChangeMenu = () => {
    setShowMenu(1);
  };
  const toggleTransferMenu = () => {
    setShowMenu(2);
  };

  const switchMenu = (menuCode) => {
    switch (menuCode) {
      case 0:
        return <Desc imgUrl={imgUrl} desc={desc} />;
      case 1:
        return <ChangeMenu _id={_id} stock={stock} />;
      case 2:
        return <TransferMenu _id={_id} stock={stock} />;
      default:
        break;
    }
  };

  return (
    <div className="h-full px-4 py-2">
      <div className="flex">
        <button
          className={`bg-white p-2 border border-r-0 border-black font-normal text-sm 
        rounded-l-lg transition hover:bg-gray-100 ${
          showMenu === 0 && "bg-gray-100"
        }`}
          onClick={toggleDesc}
        >
          Deskripsi
        </button>
        <button
          className={`bg-white p-2 border border-black font-normal text-sm 
        transition hover:bg-gray-100 ${showMenu === 1 && "bg-gray-100"}`}
          onClick={toggleChangeMenu}
        >
          Ubah Stok
        </button>
        <button
          className={`bg-white p-2 border border-l-0 border-black font-normal text-sm 
        rounded-r-lg transition hover:bg-gray-100 ${
          showMenu === 2 && "bg-gray-100"
        }`}
          onClick={toggleTransferMenu}
        >
          Transfer Stok
        </button>
      </div>
      <div className="py-4">{switchMenu(showMenu)}</div>
    </div>
  );
};

export default StockItemDropdown;
