import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis,YAxis } from 'react-vis';


class ChartList extends Component {
   
   
    render(){
        return(

        )
    }
}

function mapStateToProps({weather}){
    return weather
}
export default connect(mapStateToProps)(ChartList)