import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../admin/Sidebar";
import MyProfile from "../admin/MyProfile";
import MyBlog from "../admin/MyBlog";
import CreateBlog from "../admin/CreateBlog";
import UpdateBlog from "../admin/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  console.log(profile);
  console.log(isAuthenticated);

  // if (!isAuthenticated) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <div>
      <div>
        <Sidebar component={component} setComponent={setComponent} />
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlog />
        )}
      </div>
    </div>
  );
}

export default Dashboard;