import { Fragment, useEffect, useState } from "react";
import SidebarBgWrapper from "@/components/Sidebar/SidebarBgWrapper";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import { navItems } from "@/nav";
import SidebarMenu from "@/components/Sidebar/SidebarMenu";
import style from "@/assets/scss/Sidebar.module.scss";

const Sidebar = () => {
    const [navIsOpen, setNavIsOpen] = useState(null);
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini, setSidebarMini, sidebarBgColor, isDark } =
        useDashboardDataContext();

    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
        if (selectSize === 1024 || selectSize > 0) {
            setSidebarMini(true);
        } else {
            setSidebarMini(false);
        }
    }, [selectSize, setSidebarMini]);

    return (
        <SidebarBgWrapper>
            <div
                data-color={sidebarBgColor}
                className={`${style.sidebar} ${
                    sidebarMini ? style.sidebar_mini : ""
                }`}
            >
                <button
                    type="button"
                    onClick={() => setSidebarMini(!sidebarMini)}
                    className={style.toggle_arrow_btn}
                >
                    <i
                        className={`${
                            sidebarMini
                                ? "fa-solid fa-chevron-left"
                                : "fa-solid fa-chevron-right"
                        }`}
                    ></i>
                </button>
                <nav className={style.nav}>
                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        item?.title ? style.nav_title : ""
                                    }
                                >
                                    {item?.path && (
                                        <SidebarMenu
                                            item={item}
                                            index={index}
                                            navIsOpen={navIsOpen}
                                            setNavIsOpen={setNavIsOpen}
                                        />
                                    )}
                                    {item?.title && !sidebarMini ? (
                                        <span>{item.name}</span>
                                    ) : null}
                                    {item?.url ? (
                                        <a
                                            href={item?.url}
                                            target="_blank"
                                            className="d-flex align-items-center"
                                        >
                                            <i
                                                className={`${item?.icon} ${style.menu_iocn}`}
                                            ></i>
                                            <span>{item?.name}</span>
                                        </a>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </SidebarBgWrapper>
    );
};

export default Sidebar;

