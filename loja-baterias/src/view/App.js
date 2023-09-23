import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import Register from "./components/pages/Register";
// import { useState } from "react";
import AdminHome from "./components/admin/AdminHome";
import AdminProduct from "./components/admin/pages/products/AdminProduct";
import NotFound from "./components/pages/NotFound";
import AdminUserCreate from "./components/admin/pages/users/AdminUserCreate";
import AdminUser from "./components/admin/pages/users/AdminUser";
import AdminUserUpdate from "./components/admin/pages/users/AdminUserUpdate";
import AdminProductCreate from "./components/admin/pages/products/AdminProductCreate";

function App() {
  // const [user, setUser] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/admin" Component={AdminHome} />
          <Route path="/admin/user" Component={AdminUser} />
          <Route path="/admin/user/create" Component={AdminUserCreate} />
          <Route path="/admin/user/:id" Component={AdminUserUpdate} />
          <Route path="/admin/product" Component={AdminProduct} />
          <Route path="/admin/product/create" Component={AdminProductCreate} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
