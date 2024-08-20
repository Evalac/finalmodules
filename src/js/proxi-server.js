// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Проксі маршрут
// app.get('/proxy', async (req, res) => {
//   try {
//     const targetUrl = 'https://optovik22.net/ua/';

//     // Виконання запиту до цільового URL
//     const response = await axios.get(targetUrl);

//     // Передача отриманих даних клієнту
//     res.send(response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     res.status(500).send('Something went wrong while fetching the data.');
//   }
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Proxy server is running on http://localhost:${PORT}`);
// });
