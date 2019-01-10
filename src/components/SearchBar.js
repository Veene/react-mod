import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" autoFocus style={{border: '1px solid black'}}/>
          </div>
          
        </form>
        SearchBar
      </div>
    )
  }
  
}
export default SearchBar