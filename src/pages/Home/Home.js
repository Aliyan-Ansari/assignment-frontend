import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import classes from './Home.module.css';
import trolley from '../../assests/images/trolley.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Card from '../../components/Card';
import { createOrder, deleteOrder, getOrders, updateOrder } from '../../actions/Order';
const Home = () => {
  const [isModal , setIsModal] = useState(false);
  const [inputs, setInputs] = useState({});
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteloading, setDeleteLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleCreate=()=>{
    const id = new Date().getTime();
    setInputs(values => ({...values, id: id.toString()}));
    setIsModal(true);
  }

  const handleUpdate = (data) => {
    setOrderId(data._id);
    setInputs({
      name: data.customerName,
      amount: data.amount.toString(),
      description: data.description,
      id: data._id
    });
    setIsModal(true);
  }

  const handleClose=()=>{
    setInputs({});
    setIsModal(false);
    setOrderId(null);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleCreateOrder = ()=>{
    console.log('Runing', inputs);
    if (inputs?.name?.length > 0 && inputs?.amount.length > 0 && inputs.description.length > 0 && inputs.id) {
      setLoading(true);
      const data = {
        customerName: inputs.name,
        amount: inputs.amount,
        description: inputs.description,
        orderNumber: inputs.id.toString(),
      }
      createOrder(data).then(res => {
        console.log('Creaete Response: ', res);
        setAllOrders([...allOrders, res?.data?.data?.data]);
        alert('Order Created');
        setIsModal(false);
        setInputs({});
        setLoading(false);
      }).catch(err => {
        console.log('Error: ', err);
        setLoading(false);
      })
    } else {
      alert('Please Fill all Data');
    }
  }

  const handleUpdateOrder = ()=>{
    console.log('Runing', inputs);
    if (inputs?.name?.length > 0 && inputs?.amount.length > 0 && inputs.description.length > 0 && inputs.id) {
      setEditLoading(true);
      const data = {
        customerName: inputs.name,
        amount: inputs.amount,
        description: inputs.description,
        orderNumber: inputs.id.toString(),
      }
      updateOrder(data, inputs.id).then(res => {
        console.log('Edit Response: ', res);
        if (res.data.status === 'success') {
          const allData = allOrders.map((value) => {
            if (value._id === inputs.id) {
              return { 
                customerName: inputs.name,
                amount: inputs.amount,
                description: inputs.description,
                id: inputs.id.toString(), 
                orderNumber: inputs.id.toString(),
                _id: inputs.id.toString(),
              }
            } else {
              return value;
            }
          });
          setAllOrders(allData);
        }
        // setAllOrders([...allOrders, res?.data?.data?.data]);
        setIsModal(false);
        setInputs({});
        setOrderId(null);
        setEditLoading(false);
      }).catch(err => {
        console.log('Error: ', err);
        setEditLoading(false);
      })
    } else {
      alert('Please Fill all Data');
    }
  }

  const handleDeleteOrder = (id)=>{
    console.log('Handle Delete Order Called: ', id);
      setDeleteLoading(true);
      deleteOrder(id).then(res => {
        console.log('Delete Response: ', res);
        if (res?.data?.status === 'success') {
          const orders = []
          allOrders.forEach((value) => {
            if (value._id !== id) {
              orders.push(value);
            }
          });
          setAllOrders(orders);
          alert('Order Deleted');
        }
        // setAllOrders([...allOrders, res?.data?.data?.data]);
        setDeleteLoading(false);
      }).catch(err => {
        console.log('Error: ', err);
        setDeleteLoading(false);
      })
  }

  useEffect(() => {
    const getOrderDetails = () => {
      getOrders().then(res => {
        console.log('Response: ', res);
        setAllOrders(res?.data?.data?.data);
      }).catch(err => {
        console.log('Error: ', err);
      })
    }
    getOrderDetails();
  }, [])
  
  console.log('All Orderss: ', allOrders);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:6,
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className={classes.MainHomeContainer}>
        <Header />
        <div className={classes.MainCreateContainer}>
          <div className={classes.CreateContainer}>
          <div className={classes.CreateContentSection}>
              <h4 style={{color:'blue', fontSize:'18px', margin:'0px 0px 10px 4px'}}>Construction</h4>
              <h4 style={{color:'black', fontSize:'48px',margin:'0px 0px 10px 0px'}}>Concrete Trolley</h4>
              <h4 style={{color:'black', fontSize:'12px',margin:'0px 0px 30px 0px' , fontFamily:'Sarabun, sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
              <button  onClick={handleCreate} className={classes.action}>Create Order</button>
          </div>
          
          <div style={{ width: '300px' , height: '250px', paddingRight: '20px'}}>
            <img style={{ height: '100%', width: '100%' }} src={trolley} alt="trolley"/>
          </div>
          </div>
        </div>
          <hr />
        <div className={classes.MainCreateContainer}>
          <Box style={{ width: '80%', display: 'flex', flexWrap: 'wrap' }}>
            {allOrders.length > 0 && allOrders.map((value) =>
            <Card data={value} handleDeleteOrder={handleDeleteOrder} deleteloading={deleteloading} handleUpdate={handleUpdate} />
          )}
          </Box>
          </div>
        <Modal
        open={isModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{width:"100%",display:'flex',justifyContent:'center',fontWeight:'bold' }}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Order Details
          </Typography>
          </div>
          <TextField name="id" label="Order Number" variant="outlined" sx={{ width:'100%',marginTop:'10px', marginBottom:'10px'}} value={inputs.id || ""} disabled onChange={handleChange}/>
          <TextField name="name" label="Customer Name" variant="outlined" sx={{ width:'100%', marginBottom:'10px'}} value={inputs.name || ""} onChange={handleChange}/>
          <TextField name="amount" label="Amount" variant="outlined" sx={{ width:'100%', marginBottom:'10px'}} value={inputs.amount || ""} onChange={handleChange}/>
          <TextField name="description" label="Description" variant="outlined" sx={{ width:'100%', marginBottom:'10px'}} multiline value={inputs.description || ""} onChange={handleChange}/>
          <Button variant="contained" onClick={() => {
            if (orderId) {
              handleUpdateOrder();
            } else {
              handleCreateOrder();
            }
            }} disabled={loading || editLoading}>{loading ? 'loading...' : orderId ? 'Update' : 'Create'}</Button>
        </Box>
      </Modal>
        <div className={classes.MainCardsContainer}></div>
    </div>
  )
}

export default Home