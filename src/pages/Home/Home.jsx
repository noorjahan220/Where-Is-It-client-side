import React from 'react';
import LatesItems from './LatesItems';
import Banner from './Banner';
import AskQu from './Askqu';
import Newsletter from './Newsletter';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
           <section><Banner/></section>
           <section><LatesItems/></section>
           <section><AskQu/></section>
           <section><Newsletter/></section>
        </div>
    );
};

export default Home;