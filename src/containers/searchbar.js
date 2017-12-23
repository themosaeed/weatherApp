import React, {Component} from 'react'
import './searchbar.css'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {FetchData} from '../actions/index'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state ={
            term: ''
        }
    }
    oninputChange = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.FetchData(this.state.term)
        this.setState({term: ''})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        className='form-control mx-auto col-md-5 search'
                        placeholder='Search your city'
                        value={this.state.term}
                        onChange={this.oninputChange}
                    />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({FetchData}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)