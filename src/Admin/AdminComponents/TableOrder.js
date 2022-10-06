import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import { url } from "../../features/api";
import Loader from "../../components/Loader";
import { MdModeEditOutline } from "react-icons/md";
import MyPagination from './MyPagination';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function TableOrder(props) {
  const { order, date, loaderShow, reFetch, setReFetch } = props;
  const [UPDATE, setUPDATE] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [editId, setEditId] = React.useState("");
  const [itemUpdate,setItemUpdate] = React.useState("")

  const updateDeliveryStatus = async () => {
   
    try {
      const response = await axios.post(
        `${url}/orderStatusUpdate?id=${editId}&item=${itemUpdate}`
      );
      setReFetch(!reFetch);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEditStatus = (id,item) => {
    
    setItemUpdate(item)
    setEditId(id);
    console.log(editId);
    setUPDATE(true);
  };

  React.useEffect(() => {
    if (UPDATE) {
      updateDeliveryStatus();
    }
  }, [UPDATE,itemUpdate]);

  return (
    <>
      {loaderShow ? (
        <Loader />
      ) : (
        <React.Fragment>
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {order.shipping.name}
            </TableCell>
            <TableCell>{order.shipping.phone}</TableCell>
            <TableCell>{order.shipping.address.city}</TableCell>
            <TableCell sx={{textTransform:"capitalize"}}>
              {order.orderStatus_status}
            </TableCell>
            <TableCell>{order.payment_status}</TableCell>
            <TableCell
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 4,
                border: "none",
                gap: 1,
              }}
            >
              <button className="bg-green-600 text-sm text-white p-1 rounded-md cursor-pointer"  onClick={() => handleEditStatus(order._id,"Approved")}>Approved</button>
              <button className="bg-BgPrimary text-sm text-white p-1 rounded-md cursor-pointer"  onClick={() => handleEditStatus(order._id,"unapproved")}>Unapproved</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    History
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Products</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Total price (RS)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell component="th" scope="row">
                            {date}
                          </TableCell>
                          <TableCell>{product.description}</TableCell>
                          <TableCell>
                            Rs.{product.amount_subtotal / 100}
                          </TableCell>
                          <TableCell>Rs.{product.amount_total / 100}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      )}
    </>
  );
}

TableOrder.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [orders, setOrders] = React.useState([]);
  const [loaderShow, setLoaderShow] = React.useState(true);
  const [reFetch, setReFetch] = React.useState(false);
  const [page,setPage]=React.useState(1)
  const [pageCount, setPageCount] = React.useState(0)

  const feathOrders = async () => {
    try {
      const response = await axios.get(`${url}/order?page=${page}`);

      const res = response.data.orders;
      const total = response.data.total;
      

      let limit = 4;
      setPageCount(Math.ceil(total / limit));
      setOrders(res);
      setLoaderShow(false);
    } catch (error) {
      console.log(error.message);
    }
  };



  React.useEffect(() => {
    if(page){
      feathOrders();
    }
 
  }, [page,reFetch]);

  return (
   
  <div className="flex flex-col items-center gap-6">
 <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell> Name Of Customer</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Payement Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableOrder
              reFetch={reFetch}
              setReFetch={setReFetch}
              date={order.createdAt}
              loaderShow={loaderShow}
              order={order}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <MyPagination   pageCount={pageCount} page={page} setPage={setPage}/>
  </div>

  );
}
