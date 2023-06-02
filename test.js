
document.addEventListener('DOMContentLoaded', () => {
  
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const auth = '579a4afb0ce620b90cf0e4ae4940b4cd';
    const username = document.getElementById('username').value;
    const platform = document.getElementById('platform').value;
    const gamesInput = document.getElementById('games-input').value;
    const apiURL = `https://api.mozambiquehe.re/bridge?auth=${auth}&player=${username}&platform=${platform}`;    

    window.addEventListener('keydown', function(event) {
      if (event.key === '.') {
        let gam = gamesInput == 1 ? 'game' : 'games';
          alert(`You have played ${gamesInput} ${gam}! Now go do something productive ;)`);
          // const responseContainer = document.getElementById('response-container');
          // responseContainer.innerHTML = `
          //   <p>You have ${legendKills} kills as ${legendName}</p>
          //   <p>Total Games Played: ${totalGamesPlayed}</p>
          // `;
          // responseContainer.classList.add('slide-up');
          // responseContainer.style.display = "block";
      }
    });


  checkGamesPlayed();
  let GP = [];   
  setInterval(checkGamesPlayed, 60000);

  function checkGamesPlayed() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {    
      console.dir(data); 
      const legendName = data.legends.selected.LegendName;
      const totalGamesPlayed = data.total.games_played.value;
      const legendKills = data.legends.selected.data[0].value;
      console.log(`You have ${legendKills} kills as ${legendName}`);
      console.log(`Total Games Played: ${totalGamesPlayed}`);
      GP.push(totalGamesPlayed)
      const delta = GP[GP.length - 1] - GP[0];
      if (delta >= gamesInput) {
          let gam = gamesInput == 1 ? 'game' : 'games';        
          console.log(`You have played ${delta} ${gam}`);
          alert(`You have played ${gamesInput} ${gam}! Now go do something productive ;)`);
      }
      console.log(`delta: ${delta}`);
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = `
        <p>You have ${legendKills} kills as ${legendName}</p>
        <p>Total Games Played: ${totalGamesPlayed}</p>
      `;
      responseContainer.classList.add('slide-up');
      responseContainer.style.display = "block";
    })
    .catch(error => console.error(error))
  }
});       
});



