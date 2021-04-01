import React from 'react'
import {Row, Col} from 'reactstrap'
import Chartone from '../ChartOne'
const Sidebar = (props) => {
    return(
         <div className="sidebar mt-3">
             <h5>Today's Data</h5>
             <hr></hr>
             <Row>
                 <Col>
                 <Chartone/>
                 </Col>
                 <Col>
                 <Chartone/>
                 </Col>
             </Row>
         </div>
    )
}

export default Sidebar