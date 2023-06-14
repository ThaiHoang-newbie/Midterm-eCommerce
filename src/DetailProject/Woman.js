import React, { useEffect, useState } from 'react';

function Woman() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/clothes');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const filteredProducts = products.filter(product => product.type === "woman");

    return (
        <div className="row">
            {filteredProducts.map((product, index) => (
                <div key={index} id={product.id} className="col-lg-4 col-sm-4 ">
                    <div className="box_main w-100 h-100">
                        <h4 className="shirt_text">{product.title}</h4>
                        <p className="price_text">
                            Price <span style={{ color: '#262626' }}>${product.price}</span>
                        </p>
                        <div className="tshirt_img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="btn_main">
                            <div className="buy_bt">
                                <a href="#">Buy Now</a>
                            </div>

                            <div className="seemore_bt">
                                <a href={`clothes/${product.id}`}>See More</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Woman;
