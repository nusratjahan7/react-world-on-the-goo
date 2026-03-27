import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =  [
    {
      "id": 1,
      "name": "Rahim",
      "physics": 35,
      "chemistry": 78,
      "math": 60
    },
    {
      "id": 2,
      "name": "Karim",
      "physics": 72,
      "chemistry": 75,
      "math": 80
    },
    {
      "id": 3,
      "name": "Ayesha",
      "physics": 90,
      "chemistry": 81,
      "math": 92
    },
    {
      "id": 4,
      "name": "Fatima",
      "physics": 50,
      "chemistry": 85,
      "math": 87
    },
    {
      "id": 5,
      "name": "Hasan",
      "physics": 65,
      "chemistry": 70,
      "math": 68
    },
    {
      "id": 6,
      "name": "Nusrat",
      "physics": 97,
      "chemistry": 92,
      "math": 99
    },
    {
      "id": 7,
      "name": "Zahid",
      "physics": 98,
      "chemistry": 97,
      "math": 100
    },
    {
      "id": 8,
      "name": "Mim",
      "physics": 64,
      "chemistry": 46,
      "math": 67
    },
    {
      "id": 9,
      "name": "Tanvir",
      "physics": 75,
      "chemistry": 73,
      "math": 78
    },
    {
      "id": 10,
      "name": "Jannat",
      "physics": 80,
      "chemistry": 70,
      "math": 91
    }
  ]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width='100%' height={500}  data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
             <Line dataKey="math"></Line>
             <Line dataKey={'chemistry'} stroke='red'></Line>
             <Line dataKey={'physics'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;