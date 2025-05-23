
/**
 * Adds a click event to buttons that redirect to the games Menu page 
 * @param {HTMLElement} button -  The button element from the HTML document
 */
function addGamesMenuClick(button) {
  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "gamesMenu.html";
    });
  }
}

/**
 * Loads the genre page with games of the users chosen genre.
 * Each game is a game item which consists of a game photo and game title.
 * When the game photo is clicked it will redirect users to their selected game and when hovered over
 * will display the game information
 * @param {Array} genre - The array of games of the genre
 */
function loadGenrePage(genre) {
  // The container where the game items are placed
  const gameContainer = document.getElementById('game-grid');
  if (!gameContainer) return;

  //For each game in the genre create a game item
  genre.forEach(game => {
    // Create the game item
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');
    
    // Create the game photo button and set its background image
    const gamePhoto = document.createElement('button');
    gamePhoto.classList.add('game-photo');
    gamePhoto.style.backgroundImage = `url(${game.image})`;
  
    // Create an initially hidden game information overlay and fill it with the information
    const gameInfo = document.createElement('p');
    gameInfo.classList.add('game-info');
    gameInfo.textContent = game.gameinfo; 
    gamePhoto.appendChild(gameInfo); 

    // Create the title text for the game
    const gameTitle = document.createElement('p');
    gameTitle.classList.add('game-title')
    gameTitle.textContent = game.title;

    gameItem.appendChild(gamePhoto);
    gameItem.appendChild(gameTitle);
    
    // Game photos redirect to their game page when clicked
    gamePhoto.addEventListener('click', () => {
      window.location.href = `game.html?game=${game.title}`;
    });
    
    // Show the game information instead of the background image when hovered over
    gamePhoto.addEventListener('mouseenter', () => {
      gamePhoto.style.backgroundImage = 'none';
      // Shows the game info
      gameInfo.classList.add('visible')
    });

    // Reset the game photo to its default state when the mouse leaves
    gamePhoto.addEventListener('mouseleave', () => {
      gamePhoto.style.backgroundImage = `url(${game.image})`;
      gameInfo.classList.remove('visible')
    });

    gameContainer.appendChild(gameItem);
  })
}

/**
 * For each genre button on the Games Menu page 
 * add a click event to redirect it to the corresponding genre page.
 * @param {string} genre - The type of genre
 */
function addGenreButtonClick(genre) {
  const genreButton = document.querySelector(`.${genre}-btn`);
    if (genreButton) {
    genreButton.addEventListener("click", () => {
      window.location.href = `genre.html?genre=${genre}`;
    });
  }
}

/**
 * Loads the users chosen game.
 * Games are displayed by embedding them into a game screen.
 * The game controls are shown below the game screen
 * @param {string} game - The selected game
 */
function loadGame(game) {
  // Get the container where the game will be displayed
  const arcadeScreen = document.getElementById('arcade-screen');
  if (!arcadeScreen) return;

  // Get the container where the controls will be
  const gameControls = document.getElementById('game-controls');
  if (!gameControls) return

  // Iterate through all games to find the users selected game
  const gameslist = Object.values(games).flat();
  const chosengame = gameslist.find(g => g.title === game);

  if (chosengame) {
    // Embed the game with iframe
    const iframe = document.createElement('iframe');
    iframe.classList.add('game')
    iframe.src = chosengame.url;
    iframe.title = chosengame.title;
    arcadeScreen.appendChild(iframe);

    // Add the controls
    const controlInfo = document.createElement('p');
    controlInfo.classList.add('controls');
    controlInfo.innerHTML = chosengame.controls;
    gameControls.appendChild(controlInfo);
  }
}

/**
 * Load the credits for each game on the credits page. Credits are organised by genre
 */
function loadCredits() {
  // Where credits will be placed
  const creditContainer = document.getElementById(`credits-section`);
  if (!creditContainer) return;

  // For each genre key in the games array create a genre heading
  Object.keys(games).forEach(genre => {
    const genreHeadings = document.createElement('h2');
    genreHeadings.classList.add('genre-headings');
    genreHeadings.textContent = genre;
    creditContainer.appendChild(genreHeadings);

    // For each game in the genre add the credits
    games[genre].forEach(game => {
      const credit = document.createElement('p')
      const creditText = `${game.title} @ ${game.credits}`;
      credit.textContent = creditText;
      creditContainer.appendChild(credit);
    });
  });
}


// Wait unit DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
  // Load the navigation bar into each page (REF jackie)
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("nav-container").innerHTML = data;
      
      // Adds click event to navigation bar dropdown button
      const gameDropDownButton = document.getElementById("game-dropdown");
      addGamesMenuClick(gameDropDownButton);
    });


  // Create button variables
  const gameButton = document.getElementById("game-btn");
  const emailButtons = document.querySelectorAll(".email-btn");

  // Add click events to the buttons
  addGamesMenuClick(gameButton);

  if (emailButtons) {
    for (let button of emailButtons) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
       window.location.href = "mailto:jessica_nguyen1@outlook.com";
      });
    } 
  }

  // Check if the current page is a genre page
  if (window.location.pathname.includes("genre.html")) {

    // Get query parameter
    const params = new URLSearchParams(window.location.search);
    const genre = params.get("genre");

    // The container where the title will be 
    const container = document.getElementById("genre-title")
    if (!container) return;

    // Add a title for the genre
    const title = document.createElement('h1')
    title.textContent = `${genre.toUpperCase()} GAMES`
    container.appendChild(title);

    // If the genre is all, flatten the array and load all the games
    if (genre === "all") {
      const allGames = Object.values(games).flat();
      loadGenrePage(allGames);
    }

    // If the genre exists load its games
    const genreGames = games[genre]
    if (genre && genreGames) {
      loadGenrePage(genreGames);
    }
  }

  // Add the button clicks for every genre and the all genre
  Object.keys(games).forEach(genre => {
    addGenreButtonClick(genre);
  });
    addGenreButtonClick("all")

  // Check if the current page is a game page
  if (window.location.pathname.includes("game.html")) {
      const params = new URLSearchParams(window.location.search);

      // Get the "game" parameter and use it to load the selected game
      const title = params.get('game');
      loadGame(title);

      // Prevent the arrow keys from interfering with the gameplay, only on the game page
      window.addEventListener("keydown", function(e) {
        const blockedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "]; 
        if (blockedKeys.includes(e.key)) {
          e.preventDefault();
      }
    });
  }

  // Check if the current page is a credits page and load the credits
  if (window.location.pathname.includes("credits.html")) {    
    loadCredits();
  }
});