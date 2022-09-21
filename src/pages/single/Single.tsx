import { useParams } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import { IUser, todoEntity } from "../../store/dashboard.entity";
import "./single.scss";

const Single = () => {
  const id = useParams().userId;
  const productId = useParams().productId;
  console.log(useParams());
  const { userItems, productItems } = todoEntity.get();
  const user = userItems.find((u) => u.id === id);
  const product = productItems.find((u) => u.id === productId);
  // console.log(user);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <main>
          <div className="top">
            <div className="left">
              <div className="edit">Edit</div>
              <h3 className="title">Information</h3>
              {user && (
                <div className="content">
                  <img src={user?.img} alt="user image" />
                  <div className="contentBody">
                    <h1>{user?.username}</h1>
                    <p>
                      {" "}
                      <span>Email:</span> {user?.email}
                    </p>
                    <p>
                      {" "}
                      <span>Phone:</span> {user?.phone}
                    </p>
                    <p>
                      {" "}
                      <span>Address:</span> {user?.address}
                    </p>
                    <p>
                      {" "}
                      <span>Country:</span> {user?.country}
                    </p>
                  </div>
                </div>
              )}{" "}
              {product && (
                <div className="content">
                  <img src={product?.img} alt={product?.title} />
                  <div className="contentBody">
                    <h1>{product?.title}</h1>
                    <p>
                      {" "}
                      <span>Category:</span> {product?.category}
                    </p>
                    <p>
                      {" "}
                      <span>Price:</span> {product?.price}
                    </p>
                    <p>
                      {" "}
                      <span>Description:</span> {product?.description}
                    </p>
                    <p>
                      {" "}
                      <span>Color:</span> {product?.color}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="right">
              <Chart aspect={2} title="User Spending (Last 6 Months)" />
            </div>
          </div>
          <div className="bottom">
            <div className="title">Last Transactions</div>
            <List />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Single;
