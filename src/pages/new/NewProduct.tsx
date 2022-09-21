import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { productInputs } from "../../formSource";
import { productRows } from "../../datatablesource";
import { addProduct } from "../../store/dashboard.entity";

export const generateId = () => Math.random().toString(36).substr(2, 9);
const NewProducts = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");

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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: generateId(),
      title,
      img: "",
      color,
      description,
      price,
      category,
    };
    addProduct(data);
    setCategory("");
    setTitle("");
    setDescription("");
    setPrice("");
    setColor("");
    setMessage("New Product Successfully Added");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <main>
          <h1
            className="message"
            style={{ color: "green", textAlign: "center", marginTop: 10 }}
          >
            {message}
          </h1>
          <div className="top">
            <h1>Add New Product</h1>
          </div>
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
                      required
                      type={input.type}
                      onChange={(e) => handleChange(e, index)}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewProducts;
