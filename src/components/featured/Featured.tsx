import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="revenue">
        <span>Total Revenue</span>
        <MoreVertOutlinedIcon />
      </div>
      <div className="featuredChart">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
      </div>
      <h3>Total sales made today</h3>
      <h1>$420</h1>
      <p>Previous transactions processing. Last payments may not be included</p>
      <div className="summary">
        <div className="item">
          <div className="item-title">Target</div>
          <div className="item-result negative">
            <KeyboardArrowDownOutlinedIcon className="red" />
            <span>$12.4k</span>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last week</div>

          <div className="item-result positive">
            <KeyboardArrowUpOutlinedIcon />
            <span>$12.4k</span>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last month</div>

          <div className="item-result negative">
            <KeyboardArrowDownOutlinedIcon />
            <span>$12.4k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
