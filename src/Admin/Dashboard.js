import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import UserImg from "../assets/user.png";
import { toast } from "react-toastify";
import { logoutUser } from "../features/authSlice";
import Bar from "../assets/bar.svg";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { MdOutlineSummarize } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import DashBoardConten from "./AdminComponents/DashBoardConten";
import {BsFillCartCheckFill} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"


const Dashboard = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileSide, setMobileSide] = useState(false);
  const [dashboared, setDashboared] = useState(true);
  const location = useLocation();

  

  useEffect(() => {
    console.log("user", user);
    if (!user.token) {
      navigate("/login");
    } else {
      
      navigate("/admin");
      
    }
  }, [user.token]);

  useEffect(()=>{
    if(location.pathname === "/admin"){
      setDashboared(true)
    }else{
      setDashboared(false)
    }
  },[location])

  if (!user.isAdmin) return <p>Access Denied</p>;

  return (
    <>
      <div className="md:hidden md:w-0 w-full h-16 bg-BgPrimary flex items-center justify-center">
        <div className="w-[85%] flex items-center justify-between">
          <div
            className="w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileSide(!mobileSide)}
          >
            {" "}
            <img width="100%" src={Bar} alt="" />
          </div>
          <div className="w-12 h-12 items-center justify-center">
            {" "}
            <img width="100%" src={UserImg} alt="" />
          </div>
        </div>
      </div>
      <StyledDashboard>
        <SideNav>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-xl uppercase  text-white rounded-md px-2 py-6  ">
              {user.name}
            </div>
            <img width="20%" src={UserImg} alt="" />
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " flex items-center justify-between bg-white tracking-wide  text-BgPrimary  text-xl font-semibold  rounded-md p-2"
                : " flex items-center justify-between tracking-wide  text-xl font-semibold  rounded-md p-2 text-white"
            }
            to="/admin/summary"
            onClick={()=>setDashboared(false)}
          >
            <div>Summary</div>
            <MdOutlineSummarize className=" text-xl" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between bg-white tracking-wide text-BgPrimary  text-xl font-semibold  rounded-md p-2"
                : " flex items-center justify-between tracking-wide  text-xl font-semibold  rounded-md p-2 text-white"
            }
            to="/admin/products"
            onClick={()=>setDashboared(false)}
          >
            <div>Products</div>
            <RiProductHuntLine className="text-xl" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between bg-white tracking-wide text-BgPrimary  text-xl font-semibold  rounded-md p-2"
                : " flex items-center justify-between tracking-wide  text-xl font-semibold  rounded-md p-2 text-white"
            }
            to="/admin/orders"
            onClick={()=>setDashboared(false)}
          >
            <div>Orders</div>
            <BsFillCartCheckFill className="text-xl" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center justify-between bg-white tracking-wide text-BgPrimary  text-xl font-semibold  rounded-md p-2"
                : " flex items-center justify-between tracking-wide  text-xl font-semibold  rounded-md p-2 text-white"
            }
            to="/admin/users"
            onClick={()=>setDashboared(false)}
          >
            <div>Users</div>
            <FiUsers className="text-xl" />
          </NavLink>

          <div
            className="register text-center"
            onClick={() => {
              dispatch(logoutUser(null));
              navigate("/");
            }}
          >
            Logout
          </div>
        </SideNav>

        {mobileSide ? (
          <div className="md:hidden absolute top-0 left-0 z-30 bg-BgPrimary w-[150px] h-full">
            <div className=" w-[75%] m-auto flex items-center justify-between">
              <div className="md:font-semibold text-sm md:text-xl uppercase  text-white rounded-md px-2 py-6  ">
                {user.name}
              </div>
              <FaAngleDoubleLeft
                className="text-white"
                onClick={() => setMobileSide(!mobileSide)}
              />
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-4">
              <div className="w-full flex flex-col gap-2 items-center justify-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "w-[80%] flex items-center justify-between bg-white tracking-wide  text-BgPrimary text-sm md:text-xl font-semibold  rounded-md p-2"
                      : "w-[80%] flex items-center justify-between  tracking-wide  text-sm md:text-xl font-semibold  rounded-md p-2 text-white"
                  }
                  to="/admin/summary"
                  onClick={() => setMobileSide(!mobileSide)}
                >
                  <div>Summary</div>
                  <MdOutlineSummarize className=" text-md" />
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "w-[80%] flex  items-center justify-between bg-white tracking-wide text-BgPrimary  text-sm md:text-xl font-semibold  rounded-md p-2"
                      : "w-[80%] flex items-center justify-between tracking-wide  text-sm md:text-xl font-semibold  rounded-md p-2 text-white"
                  }
                  to="/admin/products"
                  onClick={() => setMobileSide(!mobileSide)}
                >
                  <div>Products</div>
                  <RiProductHuntLine className=" text-md" />
                </NavLink>

                <NavLink
            className={({ isActive }) =>
              isActive
              ? "w-[80%] flex  items-center justify-between bg-white tracking-wide text-BgPrimary  text-sm md:text-xl font-semibold  rounded-md p-2"
                      : "w-[80%] flex items-center justify-between tracking-wide  text-sm md:text-xl font-semibold  rounded-md p-2 text-white"
            }
            to="/admin/orders"
            onClick={() => setMobileSide(!mobileSide)}
          >
            <div>Orders</div>
            <BsFillCartCheckFill className="text-md" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
              ? "w-[80%] flex  items-center justify-between bg-white tracking-wide text-BgPrimary  text-sm md:text-xl font-semibold  rounded-md p-2"
                      : "w-[80%] flex items-center justify-between tracking-wide  text-sm md:text-xl font-semibold  rounded-md p-2 text-white"
            }
            to="/admin/users"
            onClick={() => setMobileSide(!mobileSide)}
          >
            <div>Users</div>
            <FiUsers className="text-md" />
          </NavLink>
              </div>

              <div
                className="md:register w-[70%] m-auto text-center text-sm p-1 border border-white rounded-md text-white items-center justify-center "
                onClick={() => {
                  dispatch(logoutUser(null));
                  navigate("/");
                }}
              >
                Logout
              </div>
            </div>
          </div>
        ) : null}

        {dashboared ? (
          <>
            {" "}
            <DashBoardConten/>
          </>
        ) : (
          <>
            {" "}
            <Content>
              <Outlet />
            </Content>
          </>
        )}
      </StyledDashboard>
    </>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  height: 100vh;
  background-color: #51abf0;
  color: white;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 600px) {
    display: none;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;

const Content = styled.div`
  padding: 2rem;
  width: 80%;

   @media (max-width:600px) {
    width:100%;
  }
`;
