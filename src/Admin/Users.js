import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { url } from '../features/api'
import MyPagination from './AdminComponents/MyPagination'
import UserTable from './AdminComponents/UserTable'
import { AdminHeaders, PrimaryButton } from './CommenStyled'
import {FiUsers} from "react-icons/fi"




const Users = () => {

     const [userData, setUserData] = useState([]);
     const [page,setPage]=useState(1)
     const [pageCount, setPageCount] = useState(0)
     const [deletedId,setDeleteId] = useState("");
     const [reFetch, setRefetch] = useState(false);

   const fetchUsers = async() => {
        try {

            const response = await axios.get(`${url}/user?page=${page}`)
            const res = response.data.users;
            const total = response.data.total;
            

            let limit = 7;
            setPageCount(Math.ceil(total / limit));
            setUserData(res)
            
        } catch (error) {
            console.log(error.message)
        }
   }


   const deleteUser = async() => {
    try {

      const response = await axios.get(`${url}/deleteUser?id=${deletedId}`)
         setRefetch(!reFetch)
        
    } catch (error) {
        console.log(error.message)
    }
}

console.log(deletedId)


  useEffect(()=>{
  if(deletedId){
    deleteUser();
  }
  },[deletedId])
   

   useEffect(() => {
      if(page){
        fetchUsers()
      }
    
     
   }, [page,reFetch]);


  return (
    <>
        <AdminHeaders>
       <div className="flex items-center justify-center text-lg font-semibold">Users</div>
      <PrimaryButton>
      <FiUsers className="text-xl" />
      </PrimaryButton>

      
    </AdminHeaders>
    <div className='flex flex-col items-center gap-6'>
     <UserTable userData={userData} setDeleteId={setDeleteId}/>
     <MyPagination pageCount={pageCount} page={page} setPage={setPage}/>
    </div>
    </>


  )
}

export default Users