import "./navbar.scss";
import {
  Search,
  Language,
  DarkModeOutlined,
  ListOutlined,
  ChatBubbleOutlineOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch }: any = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="search">
        <input placeholder="Search..." />
        <Search />
      </div>
      <div className="items">
        <div className="item language">
          <Language />
          <span>English</span>
        </div>
        <div className="item">
          <DarkModeOutlined onClick={() => dispatch({ type: "TOGGLE" })} />
        </div>
        <div className="item">
          <FullscreenExitOutlined />
        </div>
        <div className="item">
          <NotificationsNoneOutlined />
          <div className="red">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlined />
          <div className="red">2</div>
        </div>
        <div className="item">
          <ListOutlined />
        </div>
        <div className="item">
          <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
        </div>
        <div className="item">
          <SettingsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
