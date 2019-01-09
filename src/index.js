import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      longitude: null,
      latitude: null
    }
  }
  

  
  // async getPosition() {
  //   return await window.navigator.geolocation.getCurrentPosition(
  //     position => {
  //       console.log(position)
  //     }, 
  //     err => console.log(err)
  //   )
  // }
  
  render() {
    // const position = this.getPosition().then((data) => this.state.position = data)
    // console.log('test: ',position)
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }, 
      err => console.log(err)
    )
    return (
      <div>
        <div>Your position is: {this.state.latitude}, {this.state.longitude}</div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))