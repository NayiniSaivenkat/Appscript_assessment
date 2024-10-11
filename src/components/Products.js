import { useState, useEffect } from "react";
import { Vortex } from 'react-loader-spinner';
import './Products.css';
import ProductItems from '../components/ProductItems';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [isLoadingScreen, setIsLoadingScreen] = useState(false);

    useEffect(() => {
        fetchGetProducts();
    }, []); // Empty dependency array means it runs only once when the component mounts

    const fetchGetProducts = async () => {
        setIsLoadingScreen(true);
    
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
    
        const updateProductsData = productsData.map(eachProduct => ({
            category: eachProduct.category,
            description: eachProduct.description,
            id: eachProduct.id,
            image: eachProduct.image,
            price: eachProduct.price,
            rating: eachProduct.rating,
            title: eachProduct.title,
            isLike: false,
        }));
    
        setProductList([...updateProductsData]);
        setIsLoadingScreen(false);
    };
    

    const onClickLike = (id) => {
        setProductList(prevList => 
            prevList.map(eachProduct => 
                eachProduct.id === id
                ? { ...eachProduct, isLike: !eachProduct.isLike }
                : eachProduct
            )
        );
    };

    return (
        <>
            {isLoadingScreen ? (
                <div className="Loading-screen-container">
                    <Vortex color="rgb(139, 31, 153)" height="70" width="70" />
                </div>
            ) : (
                <div className="product-section-container">
                    <ul className="product-main-container">
                        {productList.map(eachProduct => (
                            <ProductItems key={eachProduct.id} productItems={eachProduct} onClickLike={onClickLike} />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Products;
