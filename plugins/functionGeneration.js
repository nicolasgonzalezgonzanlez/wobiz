import axios from 'axios'

export async function Query(url, config) {
  return new Promise((resolve, reject) => {
    axios(url, config)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
