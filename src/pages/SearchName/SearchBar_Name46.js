import React, { useState } from "react";
import "../pages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SearchBarName46 = ({ setListData }) => {
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const navigate = useNavigate()
    return (
        <div className="searchbar_out" onKeyUp={(e) => {
            if (e.key === "Enter") {
                console.log("-------------------")
                axios.post('http://52.91.190.150:4000/students/temp46', { "name": value, "Salud": value1, "DV": value2 })
                        .then((response) => {
                            setListData(response.data)
                            console.log("response.data", response.data);
                            navigate("/SearchResult");
                        })
                        .catch((e) => { console.log(e) })
                        .finally(() => setValue(''))
            }
        }}>
            <div className="row">
                <div className="col-4 position-relative" style={{ paddingRight: "2px" }}>
                    <input type="text" alt="search" placeholder="NOMBRE" className="input_name" value={value} onChange={(e) => { setValue(e.target.value) }} />
                </div>
                <div className="col-4 position-relative" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                    <input type="text" alt="search" placeholder="SALUD" className="input_name" value={value1} onChange={(e) => { setValue1(e.target.value) }} />
                </div>
                <div className="col-4 position-relative" style={{ paddingLeft: "2px" }}>
                    <input type="text" alt="search" placeholder="DV" className="input_name" value={value2} onChange={(e) => { setValue2(e.target.value) }} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1" onClick={() => {
                    axios.post('http://52.91.190.150:4000/students/temp46', { "name": value, "Salud": value1, "DV": value2 })
                        .then((response) => {
                            setListData(response.data)
                            console.log("response.data", response.data);
                            navigate("/SearchResult");
                        })
                        .catch((e) => { console.log(e) })
                        .finally(() => setValue(''))
                }}> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarName46;

