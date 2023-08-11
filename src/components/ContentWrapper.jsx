import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="w-[100%] max-w-[1300px] mx-auto pl-4 pr-4 grid scrollbar-hide md:grid-cols-3">
      {children}
    </div>
  );
};

export default ContentWrapper;
