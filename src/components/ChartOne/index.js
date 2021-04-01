import {React, useState, useEffect} from 'react'
import { Line,LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import API from '../../utils/API'
const Chartone = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    API.getVaccineData()
    .then(res => {
      console.log(res.data.data)
      setData(res.data.data)
    })
  })
   
    return(

      <LineChart width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="total_vaccinations" stroke="#344ad9" />
      
    </LineChart>
      
    )
}

export default Chartone