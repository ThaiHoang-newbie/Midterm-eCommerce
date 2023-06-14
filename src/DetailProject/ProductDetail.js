import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    const fetchProduct = async (productId) => {
        try {
            const response = await fetch(`https://thaihoang-midterm-api.onrender.com/clothes/${productId}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='row'>
            <div className="product-container">
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} />
                <p>Price: {product.price}</p>
                <p>Category: {product.type}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
