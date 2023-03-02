import React, { useState } from 'react'
import Header from '../../components/Header';
import classes from './Home.module.css';
import trolley from '../../assests/images/trolley.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
const Home = () => {
  const [isModal , setIsModal] = useState(false);
  const [inputs, setInputs] = useState({});
  const handleCreate=()=>{
    setIsModal(true);
  }
  const handleClose=()=>{
    setIsModal(false);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleCreateOrder = ()=>{
    console.log('Runing');
  }
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
          
          <div>
            <img src={trolley} alt="trolley"/>
          </div>
          </div>
          
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
          <TextField name="id" label="Order Number" variant="outlined" sx={{ width:'100%',marginTop:'10px', marginBottom:'10px'}} value={inputs.id || ""} onChange={handleChange}/>
          <TextField name="name" label="Customer Name" variant="outlined" sx={{ width:'100%', marginBottom:'10px'}} value={inputs.name || ""} onChange={handleChange}/>
          <TextField name="amount" label="Amount" variant="outlined" sx={{ width:'100%', marginBottom:'10px'}} value={inputs.amount || ""} onChange={handleChange}/>
          <TextField name="discription" label="Discription" variant="outlined" sx={{ width:'100%', marginBottom:'10px'}} multiline value={inputs.discription || ""} onChange={handleChange}/>
          <Button variant="contained" onClick={handleCreateOrder}>Create</Button>
        </Box>
      </Modal>
        <div className={classes.MainCardsContainer}></div>
    </div>
  )
}

export default Home