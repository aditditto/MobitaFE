import React from "react";

const ContentWrapper = ({ classes, children }) => {
  return (
    <div className={`px-8 lg:px-52 min-h-screen w-full pt-20 ${classes}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
