import React from 'react'

// const populateImages = (data) => {
//   return data.map((node) => {
//     return ({node.urls.regular})
//   })
// }
const populateImages = (data) => {
  return data.map((pic, index) => {
    return <img key={index} src={pic.urls.regular}/>
  })
}
const ImageList = (props) => {
  // console.log(props.images)

  return (
    <div>
      ImageList
      <ul>
        {populateImages(props.images)}
      </ul>
    </div>
  )
}
export default ImageList