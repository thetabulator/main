import React from 'react'
import {
    Navbar,
    NavbarBrand,
  
  } from 'reactstrap';
  import {IoChevronBackCircle}  from 'react-icons/io5'
const PostNav = (props) => {
    return(
<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><IoChevronBackCircle/></NavbarBrand>
        <NavbarBrand href="/">The Tabulator</NavbarBrand>
        </Navbar>
    </div>
    )
}

export default PostNav