
import TableOrder from "../Admin/AdminComponents/TableOrder"
import { AdminHeaders, PrimaryButton } from "./CommenStyled"
import {BsFillCartCheckFill} from "react-icons/bs"
import { useState } from "react"





const Orders = () => {

  


  return (
    <>
    <AdminHeaders>
    <div className="flex items-center justify-center text-lg font-semibold"> Orders</div>
   <PrimaryButton>
   <BsFillCartCheckFill className="text-xl" />
   </PrimaryButton>

   
 </AdminHeaders>
 
    <TableOrder/>
    </>

  )
}

export default Orders