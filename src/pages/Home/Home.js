import React from 'react'
import Header from '../../components/Header';
import classes from './Home.module.css';
import trolley from '../../assests/images/trolley.png'
const Home = () => {
  return (
    <div className={classes.MainHomeContainer}>
        <Header />
        <div className={classes.MainCreateContainer}>
          <div className={classes.CreateContainer}>
          <div className={classes.CreateContentSection}>
              <h4 style={{color:'blue', fontSize:'18px', margin:0}}>Construction</h4>
              <h4 style={{color:'black', fontSize:'48px', margin:0}}>Concrete Trolley</h4>
              <h4 style={{color:'black', fontSize:'10px', margin:0 , fontFamily:'Sarabun, sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
              <button className={classes.action}>Create Order</button>
          </div>
          <div>
            <img src={trolley} alt="trolley"/>
          </div>
          </div>
          
        </div>
        <div className={classes.MainCardsContainer}></div>
    </div>
  )
}

export default Home