import "./sidebar.scss";
import {
  Dashboard,
  PersonOutlineOutlined,
  CreditCard,
  LocalShipping,
  InsertChart,
  NotificationsNone,
  SettingsSystemDaydreamOutlined,
  Store,
  PsychologyOutlined,
  SettingsApplications,
  AccountCircleOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch }: any = useContext(DarkModeContext);
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", color: "#6439ff" }}>
          <p>Muzzammil</p>
          <span>M</span>
        </Link>
      </div>
      <hr />
      <div className="bottomm">
        <ul>
          <p>MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
              <span className="tooltip">Dashboard</span>
            </li>
          </Link>
          <p>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlined className="icon" />
              <span>Users</span>
              <span className="tooltip">Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Store className="icon" />
              <span>Products</span>
              <span className="tooltip">Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
            <span className="tooltip">Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
            <span className="tooltip">Delivery</span>
          </li>
          <p>USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
            <span className="tooltip">Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
            <span className="tooltip">Notifications</span>
          </li>
          <p>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
            <span className="tooltip">System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
            <span className="tooltip">Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
            <span className="tooltip">Settings</span>
          </li>
          <p>USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
            <span className="tooltip">Profile</span>
          </li>
          <li>
            <ExitToAppOutlined className="icon" />
            <span>Logout</span>
            <span className="tooltip">Logout</span>
          </li>
          <div>
            <p>THEME</p>
            <div className="color">
              <div
                className="colorOption"
                onClick={() => dispatch({ type: "LIGHT" })}
              ></div>
              <div
                className="colorOption"
                onClick={() => dispatch({ type: "DARK" })}
              ></div>
            </div>
          </div>
        </ul>
        {/* <div className="hidden">
          <FaBars onClick={() => setSideBar(true)} />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
