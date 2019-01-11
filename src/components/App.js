import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component{
  state = {
    images: ''
  }
  onSearchSubmit = (inputTextaroo) => {
    // fetch(`http://www.blabla/${inputTextaroo}`).then((data) => {
    //   return 'fuck you'
    // })
  }
  render(){
    return (
      <div className="ui container" style={{ marginTop : '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        App
      </div>
    )
  }
  
}
export default App