import React from 'react'
import {Row, Col} from 'reactstrap'
import Chartone from '../ChartOne'
import ChartTwo from '../ChartTwo'
import './index.css'
const Sidebar = (props) => {
    return(
         <div className="sidebar mt-3">
             <h5>Today's Data</h5>
             <hr></hr>
             <Row>
                 <Col>
                 <h6>Current Total Vaccinations for the US</h6>
                 <Chartone/>
                 <p class='chartsubtitle'>Data Collected From <a href="https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json">Our World Data</a>, Daily Updates</p>
                 </Col>
                 <Col>
                 <h6>2021 Country Happiness Scores</h6>
                 <ChartTwo/>
                 <p class='chartsubtitle'>Data Collected From <a href="https://www.kaggle.com/ajaypalsinghlo/world-happiness-report-2021">Source</a></p>
                 </Col>
             </Row>
         </div>
    )
}

export default Sidebar