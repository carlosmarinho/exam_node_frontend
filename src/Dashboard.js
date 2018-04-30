// in src/Dashboard.js
import React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

import ReactChartkick, { ColumnChart, LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

import './column.css';

var dataProduto = [
    ["A", "60.000" ],
    ["B", "40.000" ],
    ["C", "22.000" ],
    ["D", "35.000" ],
    ["E", "50.000" ]
];

const data = [
    {"name":"Workout", 
     "data": {"2017-01-01": 3, "2017-01-02": 4}
    },
    {"name":"Call parents", "data": {"2017-01-01": 5, "2017-01-02": 3}}
  ];

const dataCidade = [
    { "name": "Manaus", "data":{ "A": "15.000" }},
    { "name": "Manaus", "data":{ "B": "7.000" }},
    { "name": "Manaus", "data":{ "C": "7.000" }},
    { "name": "Manaus 1", "data":{ "D": "5.000" }},
    { "name": "Manaus 1", "data":{ "E": "7.000" }},
    { "name": "Belo Horizonte", "data":{ "A": "8.000" }},
    { "name": "Belo Horizonte", "data":{ "B": "5.000" }},
    { "name": "Belo Horizonte", "data":{ "C": "8.000" }},
    { "name": "Ouro Preto", "data":{ "D": "7.000" }},
    { "name": "Ouro Preto", "data":{ "E": "8.000" }},
    { "name": "Rio de Janeiro", "data":{ "A": "10.000" }},
    { "name": "Rio de Janeiro", "data":{ "B": "8.000" }},
    { "name": "Rio de Janeiro", "data":{ "C": "5.000" }},
    { "name": "Niterói", "data":{ "D": "5.000" }},
    { "name": "Niterói", "data":{ "E": "7.000" }},
    { "name": "Santa Catarina", "data":{ "A": "5.000" }},
    { "name": "Santa Catarina", "data":{ "B": "5.000" }},
    { "name": "Santa Catarina", "data":{ "C": "7.000" }},
    { "name": "Santa Catarina", "data":{ "D": "5.000" }},
    { "name": "Santa Catarina", "data":{ "E": "10.000" }},
    { "name": "São Paulo", "data":{ "A": "8.000" }},
    { "name": "São Paulo", "data":{ "B": "15.000" }},
    { "name": "São Paulo", "data":{ "C": "5.000" }},
    { "name": "Ubatuba", "data":{ "D": "7.000" }},
    { "name": "Ubatuba", "data":{ "E": "7.000" }}
]

const dataEstado = [
    { "name": "AM", "data":{ "A":  "15.000" }},
    { "name": "AM", "data":{ "B":  "7.000" }},
    { "name": "AM", "data":{ "C":  "7.000" }},
    { "name": "AM", "data":{ "D":  "5.000" }},
    { "name": "AM", "data":{ "E":  "7.000" }},
    { "name": "MG", "data":{ "A":  "8.000" }},
    { "name": "MG", "data":{ "B":  "5.000" }},
    { "name": "MG", "data":{ "C":  "8.000" }},
    { "name": "MG", "data":{ "D":  "7.000" }},
    { "name": "MG", "data":{ "E":  "8.000" }},
    { "name": "RJ", "data":{ "A":  "10.000" }},
    { "name": "RJ", "data":{ "B":  "8.000" }},
    { "name": "RJ", "data":{ "C": "5.000" }},
    { "name": "RJ", "data":{ "D":  "5.000" }},
    { "name": "RJ", "data":{ "E":  "7.000" }},
    { "name": "RS", "data":{ "A":  "5.000" }},
    { "name": "RS", "data":{ "B":  "5.000" }},
    { "name": "RS", "data":{ "C":  "7.000" }},
    { "name": "RS", "data":{ "D":  "5.000" }},
    { "name": "RS", "data":{ "E":  "10.000" }},
    { "name": "SP", "data":{ "A":  "8.000" }},
    { "name": "SP", "data":{ "B":  "15.000" }},
    { "name": "SP", "data":{ "C":  "5.000" }},
    { "name": "SP", "data":{ "D":  "7.000" }},
    { "name": "SP", "data":{ "E":  "7.000" }}
]

fetch('http://localhost:3001/sales/vendaproduto') 
            .then(result=> {
                return result.json();
            })
            .then( data => {
                dataProduto = data;
            })

export default () => (
    
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>
            <div className="row">
                <div className="column" >
                    <h2>Venda por Produto</h2>
                    <ColumnChart data={dataProduto} />
                    
                </div>
                <div className="column" >
                    <h2>Venda por Estado</h2>
                    <ColumnChart data={dataEstado} />
                    
                </div>
            </div>
            <div className="row">
                <div >
                    <h2>Venda por Cidade</h2>
                    <ColumnChart data={dataCidade} />
                    
                </div>
            </div>
        </CardContent>
        
    </Card>

);