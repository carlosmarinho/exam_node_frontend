import React from 'react';
import ReactChartkick, { ColumnChart, LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'


class Graphic extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: []};
        
    }

    componentDidMount() {
        fetch('http://localhost:3001/sales/' + this.props.api) 
            .then(result=> {
                return result.json();
            })
            .then( data => {
                this.setState({data: data});
                //return dataProduto1 = data;
            })
    }

    render() {
        this.setState()
        return (
            <div className={this.props.cssClass} >
                <h2>{this.props.header}</h2>
                <ColumnChart data={this.state.data} />
            </div>
        )
    }
}

export default Graphic