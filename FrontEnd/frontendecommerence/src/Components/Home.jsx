import React, { useEffect, useState } from 'react'
import '/src/Css/Home.css'
import image from "/src/assets/main_image.jpg"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const baseURL = "http://127.0.0.1:8000";

  useEffect(() => {
    axios.get(`${baseURL}/api/serial/`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const allProducts = products.filter(product =>
    (product.product_price >= 300)
  );



  return (

    <div className="whole maincontent">
      <div className="container-fluid pb-5">
        <div className="container profile-cart">
          <div className="row align-items-center pt-5">
            <div className="col-md-6 p-2">
              <h1 className="welcome-text1">
                Welcome to <b className="name_cart">DA'S CARES</b>
              </h1>
              <h1 className='welcome-text p-2'> Glow Naturally, Shine Confidently! ✨</h1>
              <h3 className='welcome-text p-2'> where beauty meets nature. Explore our premium range of skincare, makeup, and haircare products</h3>
            </div>
            <div className="col-md-6 p-2 ">
              <img id='common-image'
                src={image}
                className="img-fluid"
                alt="DA'S CARES"
              />
            </div>
          </div>
        </div>  
        
        
        <h1 id='topic'>BEST OF ALL'S</h1>
      <div className='container mb-5'>

        <div className='row row-cols-1 row-cols-md-4 row-cols-lg-6 justify-content-center'>

          {
            allProducts.map((user, index) => (
              <div key={index} className='col p-4 mt-4 '>
                <Card className='align-items-center text-center  '>
                  <Card.Img variant="top" src={user.product_image} style={{ width: "100%", height: "180px", padding: "8px" }} />
                  <Card.Body id='ver-card' >
                    <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                    <p id='pro-price' style={{ marginTop: "20px" }}>{user.product_price}</p>
                    <Button className='addbtn' variant="primary" style={{ marginTop: "10px", marginBottom: "10px" }} onClick={() => addToCart(user)}>Add Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>


      </div>


</div>


    </div>
  )
}

export default Home
