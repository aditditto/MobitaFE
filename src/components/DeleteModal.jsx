import React from "react";

const DeleteModal = ({ objectName, onConfirm, onCancel }) => {
  return (
    <div className="bg-black fixed z-50 inset-0 bg-opacity-50">
      <div
        className="fixed bg-white z-50 top-1/2 left-1/2 w-1/2
transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg"
      >
        <p>Yakin ingin menghapus {objectName}?</p>
        <button
          className="p-2 text-base font-normal border rounded-md mr-2
    bg-red-200 hover:bg-red-500"
          onClick={onConfirm}
        >
          Ya
        </button>
        <button
          className="p-2 text-base font-normal border rounded-md hover:bg-gray-50"
          onClick={onCancel}
        >
          Tidak
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
