import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component{
  state = {
    images: []
  }
  onSearchSubmit = async (searchTextIncoming) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: searchTextIncoming
      },
    })
    this.setState({images: response.data.results})
  }
  render(){
    return (
      <div className="ui container" style={{ marginTop : '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        App Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    )
  }
  
}
export default App