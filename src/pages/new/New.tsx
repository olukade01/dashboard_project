import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = ({inputs, title}: {inputs:any, title:string}) => {
  const [file, setFile] = useState()

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
              <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf14RWxf6GFrK2A8CyOoXn4SEpZSBxuWOCs_T-A5peKF-fIpF&s"} alt="image" />
          </div>
          <div className="right">
            <form>
              <div className='formInput'>
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='upload'/></label>
              <input type="file" id='file' onChange={(e:any) => setFile(e.target.files[0])} style={{display: 'none'}} />
              </div>
              {inputs.map((input:any) =>
                <div key={input.id} className='formInput'>
                <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder}/>
              </div>
              )}
              <button onClick={(e) => e.preventDefault()}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;