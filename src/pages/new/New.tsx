import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { userInputs } from "../../formSource";
import { generateId } from "./NewProduct";
import { addProduct, addUser, todoEntity } from "../../store/dashboard.entity";

const New = () => {
  const [file, setFile] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { userItems } = todoEntity.get();
  const images = userItems.map((item) => item.img);
  const random = () => images[Math.floor(Math.random() * images.length)];

  const handleChange = (e: any, index: number) => {
    index === 1
      ? setUsername(e.target.value)
      : index === 2
      ? setEmail(e.target.value)
      : index === 3
      ? setPhone(e.target.value)
      : index === 5
      ? setAddress(e.target.value)
      : index === 6
      ? setCountry(e.target.value)
      : index === 0
      ? setName(e.target.value)
      : setPassword(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: generateId(),
      username,
      img: random(),
      email,
      phone,
      country,
      address,
    };
    addUser(data);
    setUsername("");
    setEmail("");
    setPhone("");
    setCountry("");
    setAddress("");
    setPassword("");
    setName("");
    setMessage("New User Successfully Added");
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
            <h1>Add New User</h1>
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
                {userInputs.map((input: any, index) => (
                  <div key={input.id} className="formInput">
                    <label>{input.label}</label>
                    <input
                      value={
                        index === 1
                          ? username
                          : index === 2
                          ? email
                          : index === 3
                          ? phone
                          : index === 5
                          ? address
                          : index === 6
                          ? country
                          : index === 0
                          ? name
                          : password
                      }
                      required
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
        </main>
      </div>
    </div>
  );
};

export default New;
