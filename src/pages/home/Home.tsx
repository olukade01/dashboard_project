import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import FreshChat from "react-freshchat";
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
        <div className="">
          <FreshChat
            token={"c9047c67-d145-4875-a9b1-26d5d54ab186"}
            host={"https://wchat.freshchat.com"}
            email="user@email.com"
            config={{
              headerProperty: {
                backgroundColor: "#16434d",
                foregroundColor: "#ffffff",
              },
            }}
            externalId={"john.doe1987"} // user’s id unique to your system
            first_name="..."
            onInit={(widget: {
              open: () => any;
              user: { get: () => any };
              on: (
                arg0: string,
                arg1: (resp: { status: any; data: any }) => void
              ) => any;
            }) => {
              console.log(888, widget.open());
              console.log(111, widget.user.get());
              console.log(
                333,
                widget.on(
                  "user:created",
                  function (resp: { status: any; data: any }) {
                    console.log(11, resp);
                    var status = resp && resp.status,
                      data = resp && resp.data;
                  }
                )
              );
            }}
            onHide={(widget: any) => {
              console.log(11, widget);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
