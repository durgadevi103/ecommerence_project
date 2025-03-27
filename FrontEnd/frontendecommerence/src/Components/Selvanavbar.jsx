// import React from 'react'

// const Selvanavbar = () => {
//     const [carts, setCarts] =useState([])
// const dd = "http://127.0.0.1:8000"
// const [signProfile, setSignProfile] = useState("./src/assets/home_img/logo7.jpg")
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => {setShow(true)
// setCarts(props.cart)
// };
// const [search, setSearch] = useState("")
// const handleChange = (event) => {
// setSearch(event.target.value)
// }
//   return (
//     <div>

// <div className='headfoot navbarcontent'>
// <Navbar expand="lg" className="bgcol">
// <Container>
// <Navbar.Brand href="#home" className='logo-img' >
// <div className='border border-primary border-3 logodiv'>
// <Link to='/' className='text-decoration-none' id='nav-detail-home'>
// <img id='image1' src='./src/assets/home_img/imglogo1.png' alt="" srcset="" />
// <img id='image2' src="./src/assets/home_img/imglogo2.png" alt="" srcset="" />
// </Link>
// </div>
// </Navbar.Brand>
// <Navbar.Toggle
// aria-controls="basic-navbar-nav" style={{color:"lightgray",backgroundColor: "white" }} />
// <Navbar.Collapse id="basic-navbar-nav" className='ms-3 justify-content-end'>
// <Nav className="nav-detail">
// <Nav.Link href="#category" id='nav-detail-home'>
//     <Link to='/grocery' className='text-decoration-none' id='nav-detail-home'>Grocery</Link>
// </Nav.Link>
// <Nav.Link
// href="#category"
// id='nav-detail-home'><Link
// to='/fasion'
// className='text-decoration-none' id='nav-detail-home'>Fashion</Link></Nav.Link>
// <Nav.Link
// href="#category"
// id='nav-detail-home'><Link
// to='/appliances'
// className='text-decoration-none' id='nav-detail-home'>Appliances</Link></Nav.Link>
// <NavDropdown title="More Catergory" id='nav-detail-home'>
// <NavDropdown.Item
// href="#action/3.1"
// className='
// '
// style={{ backgroundColor: "lightgray" }}>
// <NavDropdown.Item
// href="#action/3.3"
// className='fs-5
// bgtransparent'>
// <Link
// to='/cosmetics'
// className='text-decoration-none

// textblack'>Cosmetics</Link>
// </NavDropdown.Item>
// <NavDropdown.Divider />
// <NavDropdown.Item
// href="#action/3.4"
// className='fs-5
// bgtransparent'>
// <Link
// to='/electronics'
// className='text-decoration-none
// textblack'>Electronics Items</Link>
// </NavDropdown.Item>
// </NavDropdown.Item>
// </NavDropdown>
// <Nav.Link
// href="#menu"
// id='nav-detail-home'><Link
// to='/offer'
// className='text-decoration-none' id='nav-detail-home'>Offers</Link></Nav.Link>
// </Nav>
// </Navbar.Collapse>
// <Navbar.Collapse id="basic-navbar-nav" className='nav-size ms-3 justify-content
// -end'>
// <Nav className="menugap">
// {/* <Nav.Link href="#card" id='nav-detail-home' className='searchicon' >
// <input
// type="text"
// value={search}
// onChange={handleChange}
// className='search-bar' placeholder='Search'/>
// </Nav.Link> */}
// <Nav.Link href="#card" id='nav-detail-home' className='cardicon' >
// <svg
// xmlns="http://www.w3.org/2000/svg"
// width="30"
// height="30"
// fill="currentColor"
// class="bi
// bi-cart3
// cart-add
// text-grey"
// viewBox="0
// 0
// 16
// 16"
// onClick={handleShow}>
// <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5
// 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1
// -.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5
// 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-
// 2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
// </svg></Nav.Link>
// <Nav.Link href="#signin" id='nav-detail-home' className='profileicon'>
// {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
// fill="currentColor" class="bi bi-person-circle text-grey" viewBox="0 0 16 16">
// <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
// <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0
// 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
// </svg> */}
// <Link to='/signup' className='text-decoration-none text-black'>
// <img src={signProfile} style={{ width: "35px", height: "35px", border: "1px"borderColor: "yellow", borderRadius: "20px" }} alt="img" />
// </Link>
// </Nav.Link>
// </Nav>
// </Navbar.Collapse>
// </Container>
// <Offcanvas show={show} onHide={handleClose} placement='end'>
// <Offcanvas.Header closeButton>
// <Offcanvas.Title></Offcanvas.Title>
// </Offcanvas.Header>
// <Offcanvas.Body style={{backgroundColor:"lightgray"}}>
// <div >
// <h5>AddtoCards</h5>
// {
// carts.map((user, index) => (
// <div className='col-8'>
// <Card className='align-items-center' key={index}>
// <Card.Img
// variant="left"
// src={dd
// +
// user.product_image}
// className='addtocard_image' />
// <Card.Title
// className='addtocard_name'>{user.product_name}</Card.Title>
// <Card.Title
// className='addtocard_price'>Price:{user.product_price}</Card.Title>
// <Button
// variant="success"
// className='addtocard_btn'>Add
// Cart</Button>
// <Card.Body>
// </Card.Body>
// </Card >
// </div>
// ))
// }
// </div>
// </Offcanvas.Body>
// </Offcanvas>
// </Navbar>
      
//     </div>
//   )
// }

// export default Selvanavbar
