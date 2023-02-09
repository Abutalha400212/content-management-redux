import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { roleAction } from "../redux/actions/filterActions";

const Navbar = () => {
  const role = useSelector((state) => state.filter.role);
  const dispatch = useDispatch();
  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1>Panacea</h1>

        <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
          <input
            className="h-8 rounded-full w-full text-sm "
            type="text"
            name="search"
            id="search"
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {role && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        <li>
          <button
            onClick={() => dispatch(roleAction(!role))}
            className={`btn-sm border-2 border-green-500 text-[10px] md:text-sm ${
              role ? "btn btn-success" : null
            }`}>
            {role ? "Admin" : "Make Admin"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
