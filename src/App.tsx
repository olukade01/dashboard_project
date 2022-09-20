import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {
  userColumns,
  userRows,
  productRows,
  productColumns,
} from "./datatablesource";
import NewProducts from "./pages/new/NewProduct";

function App() {
  const { darkMode }: any = useContext(DarkModeContext);
  const [product, setProduct] = useState(productRows);

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
                    datas={userRows}
                    userColumns={userColumns}
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
                    datas={product}
                    userColumns={productColumns}
                    title="Add New Product"
                    linkto="/products/new"
                  />
                }
              />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<NewProducts setProduct={setProduct} />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
