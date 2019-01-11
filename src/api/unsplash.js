import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4e7f6b14d0b261af6ab4a727a0059ff747312b10982edf3c409adb2f6f5e9ca1'
  }
})