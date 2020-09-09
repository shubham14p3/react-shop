import React,{useState,useEffect} from 'react';
// import data from "../data";
import { Link} from 'react-router-dom';
import axios from 'axios';

function ProductScreen(props){

  const product = products.find(x=> x._id === props.match.params.id);

  const [products,setProducts]=useState([]);

useEffect(() => {
  const fetchData = async()=>{
    const {data}= await axios.get("/api/products");
    setProducts(data);
  }
  return () => {
    //
  }
}, [])

    return <div >
      <div className="back-to-result">
      <Link to="/">Back to result</Link>
      </div> 
      <div className="details">
        <div className="details-image">
        <img
            src={product.image}
            alt="product"
          />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
            Price : <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>
                {product.description}
              </div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              Price : {product.price}
            </li>
            <li>
              Status : {product.status}
            </li>
            <li>
              Qty : <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button className="button primary secondary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
      
  </div>
}
export default ProductScreen;
