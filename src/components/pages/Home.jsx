import '../../App.css';
import React from 'react';
import Footer from '../Footer';

import Order from '../Order';
import Unlimited from '../Unlimited';
import How from '../How';
import Deliver from '../Deliver';
import Subscription from '../Subscription';
import Team from '../Team';
function Home() {
    return (
        <>
        
        <Order />
        <Unlimited />
        <How />
        <Deliver />
        <Subscription />
        <Team />
        
        <Footer />
        </>
    );
}
export default Home;