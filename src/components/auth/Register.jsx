import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("auth", auth);


  useEffect(() => {
      if(auth.token){
        navigate("/cart")
      }
  }, [auth.token, navigate]);



  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
<RegisterMain>
<RegisterSec>
     <RegisterDiv className="item1">
      <StyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
          {auth.registerStatus === "pending" ? "submitting" : "Register"}
        </button>
        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </StyledForm>
    </RegisterDiv>
    <RightDiv className="item2">
     <h1>Welcome To Sigh Up</h1>
     <p>Already have an account?</p>
     <button onClick={()=>navigate("/login")}>Sign in</button>
    </RightDiv>
   </RegisterSec>
</RegisterMain>
  );
};

export default Register;


const RegisterMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:600px) {
   height: 120vh;
  }
`
const RegisterSec = styled.div`
width: 75%;
box-shadow: 3px 10px 44px 10px rgba(15,15,15,0.33);
-webkit-box-shadow: 3px 10px 44px 10px rgba(15,15,15,0.33);
-moz-box-shadow: 3px 10px 44px 10px rgba(15,15,15,0.33);
height: 65vh;

margin: auto;
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: 1fr;

 @media (max-width:600px) {
  grid-template-columns: 1fr;
  height: 90vh;
  
  

 }
`

const RegisterDiv = styled.div`
 

 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0px 20px;
  height: 65vh;
  animation-timing-function: ease;
    position: relative;
    animation: RegisterDiv 2s;
    @keyframes RegisterDiv {
    from {
        left: 100%;
    }

    to {
        left: 0;
    }
}

  @media (max-width:600px) {
    height: 30vh;
    .item1{
      grid-row-start: 2;
      grid-column-start: 1;
    }
   
    
  }

`

const StyledForm = styled.form`

display: flex;
flex-direction: column;
 width: 100%;
 gap: 1.5rem;

 h2 {
  
  font-size: 22px;
  font-weight: 600;
  color: #48AFFF;
}
 @media (max-width:600px) {
 h2{
  font-size: 18px;
 } 
 }
button,
  input {
  
    width: 100%;
    border-radius: 10px;
    outline: none;

    border: 1px solid rgba(220, 220, 220);
 
    padding: 12px 10px;

    &:focus {
      border: 1px solid #48AFFF;
    }
  }
  button {
    cursor: pointer;
    background-image: linear-gradient(to right, #48AFFF ,#304584 );
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

const RightDiv = styled.div`

background-image: linear-gradient(to bottom right, #48AFFF, #304584);


display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
gap: 1rem;
animation-timing-function: linear;
    position: relative;
    animation: RightDiv 2s;


height: 65vh;

@keyframes RightDiv {
    from {
        right: 100%;
    }

    to {
        right: 0;
    }
}
@media (max-width:600px) {
  height: 30vh;
  .item2{
    grid-row-start: 1;
    grid-column-start: 1;
  }
}

h1{
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1.5px;

}
@media (max-width:600px) {
 h1{
  font-size: 18px;
 } 
}
p{
  font-size: 12px;
  font-weight: 400;
}
button{
  border: 1px solid white;
  border-radius: 8px;
  padding: 8px 12px;
}

`