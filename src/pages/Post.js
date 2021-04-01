import React from 'react'
import {useLocation, Link} from 'react-router-dom'
import {Container, Button, Row,Col} from 'reactstrap'
import PostNav from '../components/PostNavigation'
import '../App.css'
const Post = (props) => {
    const {state} = useLocation()
    return (
        <div>
            <PostNav/>
            <Container className="postcontain">
        <h1>{state.title}</h1>
        <Row>
        <Col>
        <h6>{state.pub_date} </h6>
        </Col>
        <a href={state.externalcontent}>
        <Button className="primary">
            Interactive Content
            </Button>
            </a>
        </Row>
        <hr></hr>
        <img className="img" width="100%" src={state.image1}></img>
        <p className="content">{state.content}</p>
        <img className="img" width="100%" src={state.image2}></img>
        <hr></hr>
        <img className="img" width="100%" src={state.image3}></img>
        </Container>
        </div>
    )
}
export default Post