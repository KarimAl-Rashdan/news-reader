const fetchData =() => {
  return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yh8qJfGE4FXbPACKk3ryXPHs4hLg5t8y")
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occurred: status ${response.status}`)
      }
    })
}

export default fetchData;