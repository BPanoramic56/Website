// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });


// fetch('https://www.flightaware.com/live/airport/KSLC', {
//     method: 'GET',
//     headers: {
//         'Access-Control-Allow-Origin': '*'
//     },
//     origin: "http://localhost:8888",
//     mode: 'cors'
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


// const myHeaders = new Headers();
// myHeaders.append('Access-Control-Allow-Origin: *');

fetch('https://cors-anywhere.herokuapp.com/https://www.flightaware.com/live/airport/KSLC', {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    origin: "http://localhost:8888",
    mode: 'cors'
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });