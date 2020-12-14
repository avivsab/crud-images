import React from "react";
import { useSelector } from "react-redux";

import Image from "./Image/Image";
export default function Images() {
  const images = useSelector(state => state.images);
  console.log(images);
  return (
    <div>
      <Image images={images} />
    </div>
  );
}
