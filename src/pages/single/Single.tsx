import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h3 className="title">Information</h3>
            <div className="content">
              <img
                src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
                alt=""
              />
              <div className="contentBody">
                <h1>Jane Doe</h1>
                <p>
                  {" "}
                  <span>Email:</span> janedoe@gmail.com
                </p>
                <p>
                  {" "}
                  <span>Phone:</span> +1729181229
                </p>
                <p>
                  {" "}
                  <span>Address:</span> Elton St. 234 Garden Yd. NewYork
                </p>
                <p>
                  {" "}
                  <span>Country:</span> USA
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
