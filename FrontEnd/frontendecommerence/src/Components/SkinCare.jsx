import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import '/src/Css/Skincare.css'



const SkinCare = () => {

   const[cart,setCart]=useState([])

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
      },[])
      
    let newcart1= cart.filter(n=> n.product_caterogy == "cleanser" )
    let newcart2= cart.filter(n=> n.product_caterogy == "Toner")
    let newcart3= cart.filter(n=> n.product_caterogy == "Moisturizer" )
    let newcart4= cart.filter(n=> n.product_caterogy == "Lotion" )
    let newcart5= cart.filter(n=> n.product_caterogy == "Sunscreen" )


    
    


  return (
    <div id='skincare back'> 

<h1 id='topic'>SKINCARE PRODUCTS</h1>
<div className='container mt-5'>
        <span className='product'>Cleanser's</span>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-center'>
            
            {
                newcart1.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center  '>
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
        <span className='product'>Toner's</span>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-center'>
            
            {
                newcart2.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center  '>
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
        <span className='product'>Moisturizer's</span>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-center'>
            
            {
                newcart3.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center  '>
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
        <span className='product'>Lotion's</span>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-center'>
            
            {
                newcart4.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center  '>
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
        <span className='product'>Sunscreen's</span>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-center'>
            
            {
                newcart5.map((user,index) => (
                  <div key={index} className='col p-4 mt-4 '>
                    <Card  className='align-items-center text-center  '>
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

export default SkinCare

