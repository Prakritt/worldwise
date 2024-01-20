import Map from "../components /Map";
import SideBar from "../components /SideBar";
import User from "../components /User";
import { useAuth } from "../contexts /AuthContext";
import styles from "./AppLayout.module.css";
function AppLayout() {
  const { user } = useAuth();
  return (
    <div className={styles.app}>
      {user && <User />}
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
