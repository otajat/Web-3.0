import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import Area from "../components/charts/Area";

// import Sidemenu from '../components/dashcomponents/Sidemenu';
// import Navbar from '../components/dashcomponents/Navbar';

const Dashboard = () => {
  return (
    <div>
       <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-white" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-[#212836] text-white dark:bg-gray-800">
                <a href="/" className="flex items-center pl-2.5 mb-5">
                    <FaEthereum className="text-white text-xl"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cryptonite</span>
                </a>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/dashboard/balance" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#394050] dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="ml-3 text-white">Balance</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/dashboard/trans" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#394050] dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-white">Transactions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/prediction" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#394050] dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-white">Prediction</span>
                        </Link>
                    </li>
                   
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#394050] dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-white">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
          </aside>
         
          
          <Outlet />
    </div>
  )
}

export default Dashboard
