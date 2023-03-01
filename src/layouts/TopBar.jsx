import { Link, useLocation } from "react-router-dom";

const TopNav = () => { 
    return (
        <>
            <div className="nav-container">
                <div className="logo-container">
                    <div className="logo">
                    <img src="storage/app/public/company/2022-08-28-630b519ccbd27.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="search">
                <input className="search-input" type="text" placeholder="Search..." />
                <button className="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

const TopBar = () => {
    
    return (
        <TopNav />
    )
}

export default TopBar;