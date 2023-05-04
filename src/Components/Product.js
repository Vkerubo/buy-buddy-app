import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
     // function product
     function Product() {
        const [product, setProduct] = useState({});
        const { id } = useParams();
      
        useEffect(() => {
          const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
          };


}
export default Product;