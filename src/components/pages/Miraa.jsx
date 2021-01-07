
import React from 'react';
import '../../App.css';
import ItemCard from '../ItemCard'

export default function Miraa() {
    return(

        <div className='food_card'>
		<h2>Miraa Shop</h2>
							<p>Enjoy our good Miraa</p>
							<ul className='cards__items'>
            <ItemCard
              src={'images/miraa1.jpeg'}
              text='Good Miraa'
              label='shop1'
              path='/miraaShop'
            />
            <ItemCard
              src='images/miraa2.jpeg'
              text='Delicious Miraa'
              label='shop2'
              path='/miraaShop'
            />
			<ItemCard
              src='images/khat.jpg'
              text='Catchy Miraa'
              label='shop3'
              path='/miraaShop'
            />
          </ul>
		  <ul className='cards__items'>
            <ItemCard
              src={'images/miraa1.jpeg'}
              text='Good Miraa'
              label='shop1'
              path='/miraaShop'
            />
            <ItemCard
              src='images/miraa2.jpeg'
              text='Delicious Miraa'
              label='shop2'
              path='/miraaShop'
            />
			<ItemCard
              src='images/khat.jpg'
              text='Catchy Miraa'
              label='shop3'
              path='/miraaShop'
            />
          </ul>
		</div>
	  
        
      )
}
