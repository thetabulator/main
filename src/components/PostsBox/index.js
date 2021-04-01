import {React, useEffect} from 'react'
import PostCard from '../PostsCards'

import {connect} from 'react-redux'
import {getAllPosts} from '../../store/actions/getPosts'

import './index.css'
const PostsBox = (props) => {
    useEffect(() => props.onAllPosts(), [])
    console.log(props.post)
    return(
         <div className="postbox mt-3">
             <h5>Posts</h5>
             <hr></hr> 
             
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {props.posts.map(p => {
                  return(
                    <div className="col mb-4">
                  <PostCard key={p.id}title={p.title} pub_date={p.pub_date} image1={p.image1} firstname={p.author[0].first_name} lastname={p.author[0].last_name} id={p.id} post={p} />
                  </div>
                  )
              })}
              </div>
            </div>
    )
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onAllPosts: () => dispatch(getAllPosts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PostsBox)