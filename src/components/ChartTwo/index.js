import React from 'react'
import { Bar,BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const ChartTwo = (props) => {
    const data = [
        {
          "country": "Finland",
          "score": 7.842
         
        },
        {
            "country": "Denmark",
            "score": 7.62
           
        },
        {
            "country": "Switzerland",
            "score": 7.571
           
        },
        {
            "country": "Iceland",
            "score": 7.554
           
        },
        {
            "country": "Netherlands",
            "score": 7.464
           
        },
        {
            "country": "Norway",
            "score": 7.392
           
        },
        {
            "country": "Sweden",
            "score": 7.363
           
        },
        {
            "country": "Luxembourg",
            "score": 7.324
           
        },
        {
            "country": "New Zealand",
            "score": 7.277
           
        },
        
      ]
      
    return(
        <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="country" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="score" fill="#344ad9" />
  
</BarChart>
    )
}

export default ChartTwo