import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <main>
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Chart aspect={2.2} title="Last 6 Months (Revenue)" />
            <Featured />
          </div>
          <div className="list">
            <div className="listTitle">Latest Transactions</div>
            <List />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
