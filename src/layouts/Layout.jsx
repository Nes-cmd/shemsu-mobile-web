import { Outlet } from "react-router-dom";
import Bottom from "./BottomBar";
import Top from "./Top";

const Layout = () => {
    return (
        <>
            <Bottom />
            <Outlet />
        </>
    )
}

export default Layout;