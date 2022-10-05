import React from 'react'

import Pagination from '@mui/material/Pagination';



const MyPagination = ({pageCount,page,setPage}) => {

  return (

    
  
    <Pagination count={pageCount} page={page}  variant="outlined" shape="rounded"   onChange={(_, page) => {
        
        if (page !== null) {
          setPage(page);
        }
      }}/>

  )
}

export default MyPagination