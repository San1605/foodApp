import Header from "./Header";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../utils/AuthContext";
function AppLayout() {
  return (

    <div className="App">
      <AuthContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default AppLayout