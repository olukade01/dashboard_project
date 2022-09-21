import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";
import { useContext, useState } from "react";
// import "./pages/list/list.scss";
import { DarkModeContext } from "./context/darkModeContext";
import {
  userColumns,
  // userRows,
  // productRows,
  productColumns,
} from "./datatablesource";
import NewProducts from "./pages/new/NewProduct";
import {
  todoEntity,
  removeProduct,
  removeUser,
} from "./store/dashboard.entity";
import { GridValueGetterParams } from "@mui/x-data-grid";

function App() {
  const { darkMode }: any = useContext(DarkModeContext);
  const { productItems, userItems } = todoEntity.use();
  // const [product, setProduct] = useState(productRows);
  const usersColumnAction = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams) => (
        <div className="cellAction">
          <Link
            to={`/users/${params.row.id}`}
            style={{ textDecoration: "none", border: "none" }}
          >
            <div className="view"> View</div>
          </Link>
          <div className="delete" onClick={() => removeUser(params.row.id)}>
            Delete
          </div>
        </div>
      ),
    },
  ];
  const productColumnAction = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams) => (
        <div className="cellAction">
          <Link
            to={`/products/${params.row.id}`}
            style={{ textDecoration: "none", border: "none" }}
          >
            <div className="view"> View</div>
          </Link>
          <div className="delete" onClick={() => removeProduct(params.row.id)}>
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <List
                    columnAction={usersColumnAction}
                    datas={userItems}
                    columns={userColumns}
                    title="Add New User"
                    linkto="/users/new"
                  />
                }
              />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <List
                    columnAction={productColumnAction}
                    datas={productItems}
                    columns={productColumns}
                    title="Add New Product"
                    linkto="/products/new"
                  />
                }
              />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
