// const submitBtn = document.getElementById('submit-btn');
// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   const auth = '579a4afb0ce620b90cf0e4ae4940b4cd';
//   const username = document.getElementById('username').value;
//   const platform = document.getElementById('platform').value;
//   const apiURL = `https://api.mozambiquehe.re/bridge?auth=${auth}&player=${username}&platform=${platform}`;
//   const desiredMatches = 10;//{desired};
// // Function to check the number of games played
// function checkGamesPlayed() {
// fetch(apiURL)
//   .then(response => response.json())
//   .then(data => {
//     // Retrieve the number of games played from the API response
//     const numGamesPlayed = 10;//data.global.total_matches;
//     const targetGames = 0;

//     // Check if the number of games played equals the desired number of matches
//     if (numGamesPlayed === desiredMatches) {
//       // Display a notification
//       console.log(`Player has played ${desiredMatches} matches!`);
//     }
//   })
//   .catch(error => {
//     console.error(`Error retrieving data from API: ${error}`);
//   });
// }
// checkGamesPlayed();
// // Call the checkGamesPlayed function every minute
// setInterval(checkGamesPlayed, 60000); // 60000 milliseconds = 1 minute
// });