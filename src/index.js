import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    longitude: null,
    latitude: null,
    error: ''
  }
  componentDidMount() {
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }, 
      err => {
        console.log(err)
        this.setState({
          error: err.message
        })
      }
    )
  }
  renderContent() {
    if(!this.state.latitude && this.state.error){
      return( <div>Error: {this.state.error}</div> )
    }
    if(this.state.latitude && !this.state.error) {
      return ( <SeasonDisplay latitude={this.state.latitude}/> )
    }
    return <Loader text="Please accept location request"/>
  }


  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
    
  }
}


ReactDOM.render(<App />, document.getElementById('root'))