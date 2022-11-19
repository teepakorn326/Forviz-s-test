import React from "react";
import { useEffect, useState } from "react";
import Image from "../components/Image";
import Booking from "../components/Booking";

function Test() {
  const [tileImage, setTileImage] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const data = await fetch("https://picsum.photos/v2/list");
    const image = await data.json();

    setTileImage(image);
  };
  return (
    <>
      <h1>#1</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          padding: "4%",
          // width: "92%",
          justifyContent: "space-between",
        }}
      >
        {tileImage.map((item) => {
          return <Image key={item.id} item={item} />;
        })}
      </div>
      <h2>#2</h2>
      <Booking />
    </>
  );
}

export default Test;
