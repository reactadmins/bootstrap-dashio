import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbars/Navbar";

const Layouts = () => {
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini } = useDashboardDataContext();

    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
    }, [selectSize]);

    return (
        <div className={styles.layout}>
            <Navbar />
            <div
                style={{
                    marginTop: "80px",
                }}
            >
                <Sidebar />
                <div
                    className={`${styles.content} p-4`}
                    style={{
                        width: `${
                            sidebarMini
                                ? "calc(100% - 70px)"
                                : "calc(100% - 280px)"
                        }`,
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layouts;

