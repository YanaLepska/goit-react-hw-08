import AppBar from "../AppBar/AppBar"
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/global/slice";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Layout = ({ children }) => {
   const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  });

  return (
      <div>
         <AppBar/>
      <main>{children}</main>
      {loading && !error && <Loader />}
      <Toaster/>
    </div>
  )
}

export default Layout