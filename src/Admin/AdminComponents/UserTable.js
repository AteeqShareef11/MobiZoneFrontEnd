import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {AiFillDelete} from "react-icons/ai"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function UserTable({userData,setDeleteId}) {

    const handleDelete = (id) => {
        setDeleteId(id)
    } 


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell className='bg-BgPrimary'>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            {/* <StyledTableCell>Make Admin</StyledTableCell> */}
            <StyledTableCell>Delete User</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row" className='uppercase'>
                {item.name}
              </StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.isAdmin ? "Admin" : "User"}</StyledTableCell>
              {/* <StyledTableCell></StyledTableCell> */}
              <StyledTableCell sx={{display:"flex",justifyContent:"center",cursor:"pointer"}} onClick={()=>handleDelete(item._id)}><AiFillDelete className="text-xl"/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
