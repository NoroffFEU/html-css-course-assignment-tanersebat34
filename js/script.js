
  async function fetchData() {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/gamehub');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it in the calling function if needed
    }
}

// Call the fetchData function to initiate the API request
fetchData()
    .then(data => {
        console.log('Data fetched successfully:', data);
        // You can process the fetched data here or pass it to another function
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error if needed
    });