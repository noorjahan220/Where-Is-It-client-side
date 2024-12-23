import React from 'react';
import LatesItems from './LatesItems';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <section><Banner/></section>
           <section><LatesItems/></section>
           <section></section>
           <section></section>
        </div>
    );
};

export default Home;