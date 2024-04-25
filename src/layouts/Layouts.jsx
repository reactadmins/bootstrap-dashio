import { Outlet } from "react-router-dom";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbars/Navbar";
import {
    Menu,
    MenuItem,
    NavTitle,
    Sidebar,
    SidebarBg,
    SidebarToggle,
    SubMenu,
} from "../components/Sidebar/Sidebar";

const Layouts = () => {
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini, setSidebarMini, sidebarBgImg, sidebarBgColor } =
        useDashboardDataContext();

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
                <Sidebar>
                    <SidebarBg bgImg={sidebarBgImg} bgColor={sidebarBgColor}>
                        <SidebarToggle>
                            <button
                                type="button"
                                onClick={() => setSidebarMini(!sidebarMini)}
                            >
                                <i
                                    className={`${
                                        sidebarMini
                                            ? "fa-solid fa-chevron-left"
                                            : "fa-solid fa-chevron-right"
                                    }`}
                                />
                            </button>
                        </SidebarToggle>
                        <Menu>
                            <MenuItem routeLink="/dashboard">
                                <i className="fa fa-dashboard" />
                                <span>Dashboard</span>
                            </MenuItem>
                            <NavTitle>
                                <span>UI elements</span>
                            </NavTitle>
                            <SubMenu
                                label="Components"
                                icon={<i className="fa fa-puzzle-piece" />}
                            >
                                <MenuItem routeLink="/components/buttons">
                                    <i className="fa fa-puzzle-piece" />
                                    <span>Buttons</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/badges">
                                    <i className="fa fa-id-badge" />
                                    <span>Badges</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/socials">
                                    <i className="fa fa-share-square" />
                                    <span>Social Buttons</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/cards">
                                    <i className="fa fa-id-card" />
                                    <span>Cards</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/alerts">
                                    <i className="fa fa-exclamation-triangle" />
                                    <span>Alerts</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/progressbars">
                                    <i className="fa fa-share-square" />
                                    <span>Progress Bars</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/modals">
                                    <i className="fa fa-fire" />
                                    <span>Modals</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/grids">
                                    <i className="fa fa-th" />
                                    <span>Grids</span>
                                </MenuItem>
                                <MenuItem routeLink="/components/typography">
                                    <i className="fa fa-file-word" />
                                    <span>Typography</span>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem routeLink="/tables">
                                <i className="fa fa-table" />
                                <span>Tables</span>
                            </MenuItem>
                            <MenuItem routeLink="/forms">
                                <i className="fa fa-pencil-square" />
                                <span>Forms</span>
                            </MenuItem>
                            <MenuItem routeLink="/widgets">
                                <i className="fa fa-calculator" />
                                <span>Widgets</span>
                            </MenuItem>
                            <MenuItem routeLink="/charts">
                                <i className="fa fa-pie-chart" />
                                <span>Charts</span>
                            </MenuItem>
                            <MenuItem routeLink="/maps">
                                <i className="fa-solid fa-location-dot" />
                                <span>Maps</span>
                            </MenuItem>
                            <NavTitle>
                                <span>Extras</span>
                            </NavTitle>
                            <SubMenu
                                label="Pages"
                                icon={<i className="fa fa-paperclip" />}
                            >
                                <MenuItem routeLink="/login">
                                    <i className="fa fa-sign-in" />
                                    <span>Login</span>
                                </MenuItem>
                                <MenuItem routeLink="/register">
                                    <i className="fa fa-sign-in" />
                                    <span>Register</span>
                                </MenuItem>
                                <MenuItem routeLink="/page404">
                                    <i className="fa fa-paper-plane" />
                                    <span>Page 404</span>
                                </MenuItem>
                                <MenuItem routeLink="/page500">
                                    <i className="fa fa-paper-plane" />
                                    <span>Page 500</span>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem hrefUrl="https://demo.reactadmin.com/bootstrap/adminx/docs/">
                                <i className="fa-solid fa-file-lines" />
                                <span>Docs</span>
                            </MenuItem>
                            <MenuItem hrefUrl="https://www.reactadmin.com/adminx">
                                <i className="fa fa-shopping-cart" />
                                <span>Purchase</span>
                            </MenuItem>
                        </Menu>
                    </SidebarBg>
                </Sidebar>
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

