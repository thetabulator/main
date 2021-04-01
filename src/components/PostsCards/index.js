import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,CardImg
  } from 'reactstrap';
  import {Link} from 'react-router-dom'
  import './index.css'
const PostCard = (props) => {
    return(
        
        <Card className="card">
          <CardImg width="100%" height="300px" src={props.image1} alt={props.title} />
          <CardBody>
        <Link to={{
            pathname: `/post/${props.id}`,
            state: props.post
        }}>
          <CardTitle tag="h5">{props.title}</CardTitle>
          </Link>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.pub_date}</CardSubtitle>
            <CardText>Written By: {props.firstname} {props.lastname}</CardText>
            
          </CardBody>
        </Card>
      
    )
}

export default PostCard