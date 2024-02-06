import React from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Movies
            </NavLink>
        </>
    )
}