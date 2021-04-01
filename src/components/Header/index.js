import {React,useState} from 'react'
import './index.css'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from 'react-redux'

import {getAllPosts, getFinancePosts, getWorldPosts, getUSPosts, getAGPosts, getCulturePosts, getHealthPosts, getTradePosts, getPoliticsPosts, getMilitaryPosts} from '../../store/actions/getPosts'
const Header = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
    return (
        <div className="head">
        <h1><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="80" height="80" viewBox="0 0 400 200">
  <g transform="scale(1,-1) translate(0,-200)">
    <rect x="50" y="0" fill="#000000" width="100" height="100">
      <animate attributeName="height" from="0" to="100" dur="1s" fill="freeze" repeatCount="indefinite" />
    </rect>
    <rect x="150" y="0" fill="#000000" width="100" height="200">
      <animate attributeName="height" from="200" to="0" dur="1s" fill="freeze" repeatCount="indefinite" />
    </rect>
    <rect x="250" y="0" fill="#000000" width="100" height="150">
      <animate attributeName="height" from="0" to="150" dur="1s" fill="freeze" repeatCount="indefinite"/>
    </rect>
  </g>
</svg>The Tabulator</h1>
        <h5 className="subtitle">Converting Data into Stories</h5>
        <br></br>
        <div className="tags btn-group d-none d-md-flex ms-3 justify-content-center">
        <Button onClick={(e) => props.onAllPosts()} outline color="secondary">Home</Button>
        <Button onClick={(e) => props.onWorldClick()} outline color="secondary">World</Button>
        <Button onClick={(e) => props.onUSClick()} outline color="secondary">US</Button>
        <Button onClick={(e) => props.onAGClick()} outline color="secondary">Agriculture</Button>
        <Button onClick={(e) => props.onPoliticsClick()} outline color="secondary">Politics</Button>
        <Button onClick={(e) => props.onHealthClick()} outline color="secondary">Health</Button>
        <Button onClick={(e) => props.onCultureClick()} outline color="secondary">Culture</Button>
        <Button onClick={(e) => props.onFinanceClick()}outline color="secondary">Finance</Button>
        <Button onClick={(e) => props.onTradeClick()} outline color="secondary">Trade</Button>
        <Button onClick={(e) => props.onMilitaryClick()} outline color="secondary">Military</Button>

        </div>
      <div className="buttondrop dropdown d-md-none justify-content-center">
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      Topics
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={(e) => props.onWorldClick()}>World</DropdownItem>
        <DropdownItem onClick={(e) => props.onUSClick()} >US</DropdownItem>
        <DropdownItem onClick={(e) => props.onAGClick()}>Agriculture</DropdownItem>
        <DropdownItem onClick={(e) => props.onPoliticsClick()}>Politics</DropdownItem>
        <DropdownItem onClick={(e) => props.onHealthClick()}>Health</DropdownItem>
        <DropdownItem onClick={(e) => props.onCultureClick()}>Culture</DropdownItem>
        <DropdownItem onClick={(e) => props.onFinanceClick()}>Finance</DropdownItem>
        <DropdownItem onClick={(e) => props.onTradeClick()} >Trade</DropdownItem>
        <DropdownItem onClick={(e) => props.onMilitaryClick()} >Military</DropdownItem>
        
    </DropdownMenu>
    </ButtonDropdown>
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
      onAllPosts: () => dispatch(getAllPosts()),
      onFinanceClick: () => dispatch(getFinancePosts()),
      onWorldClick: () => dispatch(getWorldPosts()),
      onUSClick: () => dispatch(getUSPosts()),
      onAGClick: () => dispatch(getAGPosts()),
      onCultureClick: () => dispatch(getCulturePosts()),
      onHealthClick: () => dispatch(getHealthPosts()),
      onTradeClick: () => dispatch(getTradePosts()),
      onPoliticsClick: () => dispatch(getPoliticsPosts()),
      onMilitaryClick: () => dispatch(getMilitaryPosts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header)