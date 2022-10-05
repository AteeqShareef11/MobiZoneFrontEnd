import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authSlice";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const [userPresent,setUserPresent]=useState(false)

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    console.log("autht", auth);
  
  };

  useEffect(()=>{
   
      if(auth.token){
        if(auth.isAdmin === true){
             navigate("/admin")
        }
        else{
          navigate("/")
        }
       }


  },[auth.token])



  return (
    <LoginMain>
      <LoginSec>
        <LeftDiv>
          <h1>Welcome To Login</h1>
          <p>Don't have an account?</p>
          <button onClick={() => navigate("/register")}>Sign Up</button>
        </LeftDiv>
        <LoginDiv>
          <StyledForm onSubmit={handleSubmit}>
            <h2>login</h2>

            <input
              type="email"
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button>
              {auth.loginStatus === "pending" ? "submitting" : "login"}
            </button>
            {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
          </StyledForm>
        </LoginDiv>
      </LoginSec>
    </LoginMain>
  );
};

export default Login;

const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
  }
`;

const LoginSec = styled.div`
  width: 75%;
  box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  -webkit-box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  -moz-box-shadow: 3px 10px 44px 10px rgba(15, 15, 15, 0.33);
  height: 65vh;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 80vh;
    align-items: flex-start;
  }
`;

const LeftDiv = styled.div`
  background-image: linear-gradient(to bottom right, #48afff, #304584);
  z-index: 22;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 1rem;
  height: 65vh;

  animation-timing-function: ease;
  position: relative;
  animation: LeftDiv 5s;

  @keyframes LeftDiv {
    from {
      left: 100%;
    }

    to {
      left: 0;
    }
  }

  @media (max-width: 600px) {
    height: 30vh;
  }

  h1 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 1.5px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  button {
    border: 1px solid white;
    border-radius: 8px;
    padding: 8px 12px;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  height: 65vh;

  animation-timing-function: linear;
  position: relative;
  animation: LoginDiv 5s;

  @keyframes LoginDiv {
    from {
      right: 100%;
    }

    to {
      right: 0;
    }
  }

  @media (max-width: 600px) {
    height: 30vh;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #48afff;
  }
  button,
  input {
    width: 100%;
    border-radius: 10px;
    outline: none;

    border: 1px solid rgba(220, 220, 220);

    padding: 12px 10px;

    &:focus {
      border: 1px solid #48afff;
    }
  }
  button {
    cursor: pointer;
    background-image: linear-gradient(to right, #48afff, #304584);
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;

    &:focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;
  }
`;
