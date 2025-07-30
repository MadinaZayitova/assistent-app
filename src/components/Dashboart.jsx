import React from "react"
import Sidebar from "./dashboart/Sidebar"
import { Outlet } from "react-router-dom"
import Navbar from "./dashboart/Navbar"

function Dashboart() {
    const promptHistory = [
        {
            id: 1,
            date: "Today",
            urls:[
                {
                    id:1,
                    url: "url 1",
                    title: "Lorem ipsum"
                },
                {
                    id:2,
                    url: "url 2",
                    title: "Lorem ipsum"
                },
                {
                    id:3,
                    url: "url 3",
                    title: "Lorem ipsum"
                },
            ]
        },
        {
            id: 2,
            date: "Yesterday",
            urls:[
                {
                    id:4,
                    url: "url 4",
                    title: "Lorem ipsum"
                },
                {
                    id:5,
                    url: "url 5",
                    title: "Lorem ipsum"
                },
                {
                    id:6,
                    url: "url 6",
                    title: "Lorem ipsum"
                },
            ]
        }
    ]
    return (
        <div className="dashboart-wrapper">
            <Sidebar promptHistory={promptHistory }/>
            <div className="dashboart-main">
                <Navbar />
                <Outlet />
            </div>
            {/* <div>Dashboart</div> */}
        </div>

    )
}

export default Dashboart