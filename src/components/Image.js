import React from "react";

function Image({ item }) {
  return (
    <div>
      <img
        src={item.download_url}
        alt=""
        style={{ display: "block", height: "150px", width: "auto" }}
      />
    </div>
  );
}

export default Image;
