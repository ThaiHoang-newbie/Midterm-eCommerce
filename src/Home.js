import React, { Component } from 'react';
import Header from './Part/Header';
import ShowProduct from './DetailProject/ShowProduct';
import Footer from './Part/Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ShowProduct></ShowProduct>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;