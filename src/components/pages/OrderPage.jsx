import React from 'react'
import { Link } from 'react-router-dom';
import ItemCard from '../ItemCard';
import './OrdePage.css';
import Footer from '../Footer';
function OrderPage(props) {
    return (
        <>
           <div className='cards'>
      <h1>Order these EPIC Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ItemCard
              src={'images/concept/food1.jpg'}
              text='Awesome Food'
              label='Food'
              path='/foodShop'
            />
            <ItemCard
              src='images/concept/khat.jpg'
              text='Catchy Khat'
              label='Miraa'
              path='/miraaShop'
            />
          </ul>
          <ul className='cards__items'>
            <ItemCard
              src='images/concept/bav.jpg'
              text='Awesome Drink'
              label='Beverage'
              path='/beverageShop'
            />
            <ItemCard
              src='images/concept/groc.jpg'
              text='Cool Grocery'
              label='Grocery'
              path='/groceryShop'
            />
            
            
          </ul>
        </div>
      </div>
    </div> 
    <Footer /> 
        </>
    )
}

export default OrderPage;

