import { ReactElement } from "react";
import AppBar from "./root/app-bar.tsx";
import { Outlet } from "react-router-dom";

export default function Root(): ReactElement {
    return (
        <div className={"h-screen w-screen"}>
            <AppBar />
            <div id={"children"} className={"h-full w-full"}>
                <Outlet />
            </div>
        </div>
    );
}
