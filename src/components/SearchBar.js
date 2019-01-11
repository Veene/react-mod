import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  state={inputText: ''}

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onSearchSubmit(this.state.inputText)
  }
 
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              autoFocus style={{border: '1px solid black'}} 
              value = {this.state.inputText}
              onChange={(e) => this.setState({inputText: e.target.value})}
            />
          </div>
          
        </form>
        SearchBar and state: {this.state.inputText}
      </div>
    )
  }
  
}
SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
}
export default SearchBar