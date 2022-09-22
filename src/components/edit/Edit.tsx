import React, { useState } from "react";
import { userInputs } from "../../formSource";
import { editUser } from "../../store/dashboard.entity";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./edit.scss";

const Edit = ({
  user,
  setEdit,
  setMessage,
  id,
}: {
  user: any;
  setEdit: Function;
  setMessage: Function;
  id: string | undefined;
}) => {
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [country, setCountry] = useState(user?.country);
  const [address, setAddress] = useState(user?.address);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id,
      username,
      img: user?.img,
      email,
      phone,
      country,
      address,
    };
    editUser(id, data);
    setEdit(false);
    setMessage("User Updated Successfully");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
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

export default Edit;
