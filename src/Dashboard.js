// in src/Dashboard.js
import React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Graphic from './graphic';

import ReactChartkick, { ColumnChart, LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

import './column.css';



export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>
            <div className="row">
                
                    <Graphic header="Venda por Produto" api="vendaproduto" cssClass="column"></Graphic>
                    <Graphic header="Venda por Estado" api="vendaestado" cssClass="column"></Graphic>
                
            </div>
            <div className="row">
                <Graphic header="Venda por Cidade" api="vendacidade" cssClass=""></Graphic>
            </div>
        </CardContent>
        
    </Card>

);
          
    

