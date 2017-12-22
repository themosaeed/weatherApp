import React, {Component} from 'react'
import './searchbar.css'

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

export default SearchBar