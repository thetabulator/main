import React from 'react'
import Header from '../components/Header'
import PostsBox from '../components/PostsBox'
import Sidebar from '../components/Sidebar'
import { Container, Row, Col } from 'reactstrap';
const Home = (props) => {
    return(
        <div>
      <Container fluid={true}>
    <Row>
      <Col>
      <Header/>
      </Col>
    </Row>
    
      <Row>
        <Col>
      <PostsBox/>
      </Col>
     </Row>
    
    <Row>
    <Col>
        <Sidebar/>
      </Col>
    </Row>
      </Container>
     
    </div>
    )
}
export default Home 