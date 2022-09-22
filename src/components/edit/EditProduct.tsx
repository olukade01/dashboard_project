import React, { useState } from "react";
import { productInputs, userInputs } from "../../formSource";
import { editProduct, editUser } from "../../store/dashboard.entity";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./edit.scss";

const EditProduct = ({
  product,
  setEdit,
  setMessage,
  id,
}: {
  product: any;
  setEdit: Function;
  setMessage: Function;
  id: string | undefined;
}) => {
  const [title, setTitle] = useState(product?.title);
  const [description, setDescription] = useState(product?.description);
  const [category, setCategory] = useState(product?.category);
  const [price, setPrice] = useState(product?.price);
  const [color, setColor] = useState(product?.color);
  const [file, setFile] = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id,
      title,
      img: product?.img,
      description,
      category,
      color,
      price,
    };
    editProduct(id, data);
    setEdit(false);
    setMessage("Product Updated Successfully");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  const handleChange = (e: any, index: number) => {
    index === 0
      ? setTitle(e.target.value)
      : index === 1
      ? setDescription(e.target.value)
      : index === 2
      ? setCategory(e.target.value)
      : index === 3
      ? setPrice(e.target.value)
      : setColor(e.target.value);
  };
  return (
    <div className="bottom">
      <div className="left">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf14RWxf6GFrK2A8CyOoXn4SEpZSBxuWOCs_T-A5peKF-fIpF&s"
          }
          alt="image"
        />
      </div>
      <div className="right">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="formInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="upload" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e: any) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          {productInputs.map((input: any, index) => (
            <div key={input.id} className="formInput">
              <label>{input.label}</label>
              <input
                value={
                  index === 0
                    ? title
                    : index === 1
                    ? description
                    : index === 2
                    ? category
                    : index === 3
                    ? price
                    : color
                }
                type={input.type}
                placeholder={input.placeholder}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
