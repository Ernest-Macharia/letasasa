import React from 'react';
import './Cards.css';
import ItemCard from './ItemCard';
function Cards(props) {
  return (
    <div className='cards'>
      <h1>Order these EPIC Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ItemCard
              src={'img/concept/food1.jpg'}
              text='Awesome Food'
              label='Food'
              path='/foodShop'
            />
            <ItemCard
              src='img/concept/khat.jpg'
              text='Khat'
              label='Miraa'
              path='/miraaShop'
            />
          </ul>
          <ul className='cards__items'>
            <ItemCard
              src='img/concept/bav.jpg'
              text='Awesome Drink'
              label='Beverage'
              path='/beverageShop'
            />
            <ItemCard
              src='img/concept/groc.jpg'
              text='Cool Grocery'
              label='Grocery'
              path='/groceryShop'
            />
            <ItemCard
              src='img/concept/khat.jpg'
              text='Miraa'
              label='Khat'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;