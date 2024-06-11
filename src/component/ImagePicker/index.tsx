"use client";
import React, { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }: any) {
  const [image, setImage] = useState<any>();
  const inputRef: any = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!image && <p>No Image Select</p>}
          {image && <Image src={image} alt="Loaded Image" fill />}
        </div>
        <input
          type="file"
          className={classes.input}
          name={name}
          id={name}
          ref={inputRef}
          onChange={(e: any) => handleImageChange(e)}
          accept="image/png , image/jpeg"
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick the Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
