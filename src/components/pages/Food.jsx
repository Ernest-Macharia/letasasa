
import React from 'react';
import './Food.css';
import ItemCard from '../ItemCard';

export default function Food() {
    return(
		<div className='food_card'>
		<h2>Food Shop</h2>
							<p>Enjoy our good food</p>
							<ul className='cards__items'>
            <ItemCard
              src={'img/food1.jpg'}
              text='shop1'
              
              path='/shopname'
            />
            <ItemCard
              src='img/Food.jpg'
              text='shop2'
              
              path='/foodShop'
            />
			<ItemCard
              src='img/foody.png'
              text='shop3'
              
              path='/foodShop'
            />
          </ul>
		  <ul className='cards__items'>
            <ItemCard
              src='img/food1.jpg'
              text='shop4'
              
              path='/foodShop'
            />
            <ItemCard
              src='img/Food.jpg'
              text='shop5'
              
              path='/foodShop'
            />
			<ItemCard
              src='img/foody.png'
              text='shop6'
              
              path='/foodShop'
            />
          </ul>
		</div>
	  
        
          
		
        
      );
}
