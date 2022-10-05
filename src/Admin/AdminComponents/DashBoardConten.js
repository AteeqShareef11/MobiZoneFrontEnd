import React from 'react'
import Cart from "../../assets/adminCart.png"
import Revenu from "../../assets/revenue.png"
import View from "../../assets/view.png"
import Comment from "../../assets/comments.png"


const dashboaredData = [
    {
        id:1,
        img:Cart,
        title:"New Orders",
        quantity:"6267",
        desc:"Updated Every 30 Minutes"
    },
    {
        id:2,
        img:Revenu,
        title:"Revenue",
        quantity:"Rs. 180,9000",
        desc:"In this current Month"
    },
    {
        id:3,
        img:View,
        title:"Page Views",
        quantity:"28,210",
        desc:"In the last 24 Hour"
    },
    {
        id:4,
        img:Comment,
        title:"Suppor Request",
        quantity:"75",
        desc:"Active in the last 7 days"
    },
]


const DashBoardConten = () => {
  return (
    <div className=" pt-9 w-full md:w-[80%] bg-slate-200">
       <div className=' w-[95%] m-auto gap-4 grid grid-cols-1 md:grid-cols-2'>
       {
        dashboaredData.map((item)=>(
            <div className='flex rounded-lg bg-white flex-col items-center justify-center' key={item.id}>
            <div className='w-[100%] border-b-2 border-gray-200 m-auto p-8  flex items-center justify-between ' >
            <img className='w-28' src={item.img} alt=''/>
            <div className='flex flex-col items-center gap-6'>
                <div className='text-xl font-semibold text-center'>{item.title}</div>
                <div className='text-md font-medium text-center'>{item.quantity}</div>
            </div>
          
         </div>
         <div className='w-full p-6  bg-white'>{item.desc}</div>
            </div>

        ))
       }

         
       </div>
    </div> 
  )
}

export default DashBoardConten