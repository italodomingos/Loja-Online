import React from "react";
import LeftNav from "./nav/LeftNav";
import styles from "./AdminHome.module.css";
import AdminNavBar from "./nav/AdminNavBar";

export default function AdminHome({ children }) {
  return (
    <div>
      <div className={styles.font + " vh-100 d-flex"}>
        <LeftNav />
        <div className="w-100">
          <AdminNavBar />
          {children}
        </div>
      </div>
    </div>
  );
}
