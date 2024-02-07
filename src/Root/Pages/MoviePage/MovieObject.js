// MovieObject.js

export const fetchData = async (movie, loading) => {
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => {
        movie(data);
        loading(false); // Set loading to false once the data is loaded
      })
      .catch(error => {
        console.error("There was an error!", error);
        loading(false); // Also set loading to false in case of an error
      });
  };