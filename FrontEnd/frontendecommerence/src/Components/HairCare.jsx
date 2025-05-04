import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import '/src/Css/Haircare.css'


const HairCare = () => {

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/serial/')
      .then((response) => {
        console.log(response.data);
        setCart(response.data)
        // console.log(setCart);  

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])



  let newcart1 = cart.filter(n => n.product_caterogy == "Hairoil")
  let newcart2 = cart.filter(n => n.product_caterogy == "Shamphoo")
  let newcart3 = cart.filter(n => n.product_caterogy == "Conditioner")
  let newcart4 = cart.filter(n => n.product_caterogy == "Serum")



  return (
    <div id='haircareback'>

<h1 id='topic'>HAIRCARE PRODUCTS</h1>

            <div className='container mt-5'>
        <span className='product'>oil's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart1.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"100%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price'style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            <div className='container mt-5'>
        <span className='product'>Shamphoo's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart2.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"100%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name' >{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>
             
            </div>

            <div className='container mt-5'>
        <span className='product'>Conditioner's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart3.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"100%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            <div className='container mt-5'>
        <span className='product'>Serum's</span>
            <div className='row card-container justify-content-center'>
            
            {
                newcart4.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center main-card  '>
                        <Card.Img variant="top" src={user.product_image} style={{width:"100%",height:"180px",padding:"8px"}}/>
                        <Card.Body id='ver-card' >
                        <Card.Title id='pro-name'>{user.product_name}</Card.Title>
                        <p id='pro-price' style={{marginTop:"20px"}}>{user.product_price}</p>
                        <Button className='addbtn' variant="primary" style={{marginTop:"10px",marginBottom:"10px"}}>Add Cart</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    ))
                }
             </div>

                
            </div>

            

    </div>
  )
}

export default HairCare
