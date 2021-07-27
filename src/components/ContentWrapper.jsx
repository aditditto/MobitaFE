import React from "react";

const ContentWrapper = ({ BGcolor, children }) => {
  return (
    <div className={`px-8 lg:px-52 min-h-screen w-full pt-20 bg-${BGcolor}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
