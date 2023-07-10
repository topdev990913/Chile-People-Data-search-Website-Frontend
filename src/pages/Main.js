import React from "react";
import "./pages.css";
import "../App.css";
import Header from "../navbar/navbar";
import Home from "../pages/Home";
import ScrollButton from "./scrollButton";


const Main = ({listData, setListData}) => {
    return (
        <div className="background">
            <Header />
            <Home listData={listData} setListData = {setListData} />
            <ScrollButton />
        </div>
    );
};
export default Main;
