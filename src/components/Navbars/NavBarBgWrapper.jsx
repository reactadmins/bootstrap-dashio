import styles from "@/assets/scss/NavBarBgWrapper.module.scss";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
const NavBarBgWrapper = ({ type = "", children }) => {
    const { topNavbarBgColor } = useDashboardDataContext();
    return (
        <div
            nav-type={type ? type : ""}
            data-bg-color={topNavbarBgColor}
            className={styles.navbar_bg}
        >
            {children}
        </div>
    );
};

export default NavBarBgWrapper;

