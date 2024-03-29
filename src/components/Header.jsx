import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <header className=" bg-slate-200 shadow-md ">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3 box-border">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
                        <span className="text-slate-500">Sahand</span>
                        <span className="text-slate-700">Estate</span>
                    </h1>
                </Link>
                <form className="bg-slate-100 flex items-center box-border p-3 rounded-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-24 sm:w-64"
                    />
                    <FaSearch className="text-slate-600" />
                </form>
                <ul className="flex gap-4">
                    <Link to="/">
                        <li className="hidden sm:inline text-slate-700 hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline text-slate-700 hover:underline">
                            About
                        </li>
                    </Link>
                    <Link to="signin">
                        <li className=" text-slate-700 hover:underline">
                            Sign in
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
