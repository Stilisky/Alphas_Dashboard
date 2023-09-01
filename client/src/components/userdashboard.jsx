import { useEffect } from "react";
import Userbar from "./userNavbar";
import SidebarUser from "./userSideBar";
import { useNavigate } from "react-router-dom";

export function UserDashboard() {
   const navigate = useNavigate()
   useEffect(() => {
      if (!localStorage.getItem('token')) {
         navigate("/login")
      }
   })
   return (
      <div>
         <Userbar/>
         <SidebarUser/>
      </div>
   )
}