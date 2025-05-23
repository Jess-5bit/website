// The arrays of games feautured on the website.
// The genre are the keys and games are objects
const games = {
  classic: [
    {
      title: "Armor Alley",
      url: "https://jess-5bit.github.io/armoralley/ArmorAlley-master/index.html",
      image:"images/armoralley.webp",
      credits: "Scott Schiller",
      gameinfo: "An remastered version of the classic computer wargame Armor Alley!",
      controls: "🖱️ Select"
    },
    {
      title: "Duck Hunt",
      url: "https://duckhuntjs.com/",
      image:"images/duckhunt.webp",
      credits: "Matt Surabian",
      gameinfo: "A remake of the classic duck hunt!",
      controls: "🖱️ Shoot <br> P: Pause <br> M: Mute"
    },
    {
      title: "Mario",
      url: "https://jess-5bit.github.io/mario/mariohtml5-master/main.html",
      image:"images/mario.webp",
      credits: "Robert Kleffner",
      gameinfo: "A historical tribute to the classic game Infinite Mario! Endless levels and familiar enemies",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> S: Select/Jump"
    },
    {
      title: "Open Sonic",
      url: "https://clarkeadg.github.io/opensonic-js/",
      image:"images/opensonic.webp",
      credits: "Brian Clarke",
      gameinfo: "The iconic Sonic game!",
      controls: "⬅️/➡️ Move Left/Right <br> SPACE: Jump <br> ENTER: Select/Pause<br> CTRL: Change Character"
    },
    {
      title: "Pacman",
      url: "https://jess-5bit.github.io/pacman/pacman-master/index.html",
      image:"images/pacman.webp",
      credits: "Shaune Williams",
      gameinfo: "An accurate remake of the original Pac-Man arcade game!",
      controls: "🖱️ Select <br> ⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> ESC: Menu"
    },
    {
      title: "Pong",
      url: "https://jess-5bit.github.io/pong/pong/pong.html", 
      image:"images/pong.webp",
      credits: "Steven Lambert",
      gameinfo: "A simple pong game to play with a friend!",
      controls: "W/S Player 1: Move Up/Down <br> ⬆️/⬇️ Player 2: Move Up/Down"
    },
    {
      title: "Snake",
      url: "https://jess-5bit.github.io/snake/ff00b4b49669ad3dec890306d348adc4-315d16d17bca6920cd1ae9192dca647ccb3e0d5d/snake.html",
      image:"images/snake.webp",
      credits: "Steven Lambert",
      gameinfo: "A simple Snake game!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down"
    },
    {
      title: "Ski Free",
      url: "https://jess-5bit.github.io/skifree/skifree.js-master/index.html",
      image: "images/skifree.webp",
      credits: "Daniel Hough",
      gameinfo: "A remake of the popular 1991 PC game SkiFree by Chris Pirih!",
      controls: "🖱️/⬅️/➡️/⬆️/⬇️ Steer"
    },
    {
      title: "Tetris",
      url: "https://jess-5bit.github.io/tetris/tetris-puzzle/Export/index.html",
      image:"images/tetris.webp",
      credits: "Lordloss90",
      gameinfo: "A modern implementation of the classic Tetris game!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️ Rotate <br> ⬇️ Soft Drop | SPACE: Hard Drop"
    }
  ],
  action: [
    {
      title: "A Palace for Fools",
      url: "https://jess-5bit.github.io/palaceforfools/a-palace-for-fools-master/index.html", 
      image: "images/apalaceforfools.webp",
      credits: "Jani Nykänen",
      gameinfo: "A short metroidvania game with gameplay inspired by NES Mega Man games!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> Z: Jump | X: Shoot <br> ENTER: Select/Pause | SHIFT: Map"
    },
    {
      title: "Dyna Dungeons",
      url: "https://jess-5bit.github.io/dynadragons/dynadragons/index.html",
      image: "images/dynadragons.webp",
      credits: "Rémi Verschelde",
      gameinfo: "4 player mutiplayer remake of NES game Bomber man!",
      controls: "ESC: Setting to view/change controls <br> and change number of players "
    },
    {
      title: "Last Minute Slime Sesh",
      url: "https://jess-5bit.github.io/lastminuteslimesession/slime/LastMinSlimeSesh.html",
      image: "images/lastminuteslimesession.webp",
      credits: "Barney",
      gameinfo: "You're the evil dungeon master. But this time, you're aiming to help the party!",
      controls: "🖱️ Select"
    },
    {
      title: "NeverEnding Road",
      url: "https://jess-5bit.github.io/neverendingroad/neverendingroad2/index.html",
      image: "images/neverendingroad.webp",
      credits: "GGBotNet",
      gameinfo: "A top-down 2D endless driving game!",
      controls: "A/⬅️ Move Left <br> D/➡️ Move right <br> ENTER: confirm <br> M: Mute"
    },
    {
      title: "Racer",
      url: "https://jess-5bit.github.io/racer/racer-master/racer.html", 
      image: "images/racer.webp",
      credits: "Selim Arsever",
      gameinfo: "A tribute to the Lotus series developed by Magnetic Fields!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️ Accelerate <br> ⬇️ Brake"
    },
    {
      title: "Spelunky",
      url: "https://jess-5bit.github.io/spelunky/SpelunkyClassicHDhtml5-master/src/index.html", 
      image: "images/spelunky.webp",
      credits: "Derek Yu and Mossmouth",
      gameinfo: "A remake of the game Spelunky!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬇️ Crouch <br> Z: Jump <br> X: Whip/Use"
    }
  ],
  adventure: [
    {
      title: "A Keys Path",
      url: "https://jess-5bit.github.io/akeyspath/akeyspath/index.html",
      image: "images/akeyspath.webp",
      credits: "Geegaz",
      gameinfo: "An interactive game where you build your way with your own keys!",
      controls: "🖱️/ENTER: Select <br> A/⬅️ Move Left <br> D/➡️ Move Right <br> SPACE/W/⬆️ Jump"
    },
    {
      title: "Amaya: Maiden of the Storm",
      url: "https://jess-5bit.github.io/amayamaidenofthestorm/amayamidenofthestorm/index.html", 
      image: "images/amayamaidenofthestorm.webp",
      credits: "John Gabriel",
      gameinfo: "Guide the legendary dragon home!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> X: Jump <br> C: Redirect Rain | R: Restart"
    },
    {
      title: "Heroine Dusk",
      url: "https://jess-5bit.github.io/heroinedusk/heroine-dusk-master/release/index.html",
      image: "images/heroinedusk.webp",
      credits: "Clint Bellanger",
      gameinfo: "A basic dungeon crawl made using an old aesthetic!",
      controls: "🖱️: Select/Enter <br> 🖱️/SPACE/ENTER: Interaction"
    },
    {
      title: "Margot Beatrice Adventures",
      url: "https://jess-5bit.github.io/margobeatriceadventure/margobeatriceadventure/index.html",
      image: "images/margobeatriceadventure.webp",
      credits: "Levraut",
      gameinfo: "A game inspired by a mix of Celeste and Super Mario!",
      controls: "🖱️: Select <br> View and customize controls in-game"
    },
    {
      title: "Maximilien Adventure",
      url: "https://jess-5bit.github.io/maximilienadventure/maximilienadventure/index.html", 
      image: "images/maximilienadventure.webp",
      credits: "Levraut",
      gameinfo: "A Super Mario-like game!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> SPACE: Jump | SHIFT: Run <br> F: Interaction"
    },
    {
      title: "Tech Maniac",
      url: "https://jess-5bit.github.io/techmaniac/techmaniac/index.html", 
      image: "images/techmaniac.webp",
      credits: "John Gabriel",
      gameinfo: "A black and white retro platformer game!",
      controls: "A/⬅️ Move Left <br> D/➡️ Move Right <br> SPACE/X/⬆️: Jump"
    }
  ],
  strategy: [
    {
      title: "Envisionater",
      url: "https://jess-5bit.github.io/envisionater/envisionator-master/index.html",
      image:"images/envisionater.webp",
      credits: "Dennis Bengs",
      gameinfo: "A short puzzle game about escaping a building lockdown with the aid of your trusty robot friend!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> Z: Select | X: Erase  <br> M: Mute"
    },
    {
      title: "Fire and Fondness 2",
      url: "https://jess-5bit.github.io/fireandfondness2/fireandfondness2/index.html",
      image:"images/fireandfondness2.webp",
      credits: "John Gabriel",
      gameinfo: "A puzzle game featuring romance, explosions, and daytime television!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> SPACE: Select | BACKSPACE: Undo <br> R: Restart"
    },
    {
      title: "Pigeon Ascent",
      url: "https://jess-5bit.github.io/pigeon/pigeonAscent-master/PigeonAscent.html", 
      image:"images/pigeonascent.webp",
      credits: "Escada Games",
      gameinfo: "Take care of your own pigeon as they fight stronger foes, and then face the legendary Pigeon God at the end!",
      controls: "🖱️ Select"
    },
    {
      title: "Pocket Tactics",
      url: "https://jess-5bit.github.io/pockettactics/pockettactics/index.html", 
      image:"images/pockettactics.webp",
      credits: "Team Potato",
      gameinfo: "A gameboy themed Strategy turn-based combat!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> X/ENTER: Select <br> C/SPACE: Go To Character"
    },
    {
      title: "Tiny Crate",
      url: "https://jess-5bit.github.io/tinycrate/crate/index.html", 
      image:"images/tinycrate.webp",
      credits: "Harmony Monroe",
      gameinfo: "A cute little precision platformer with puzzle elements!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> X: Jump/Select <br> C: Lift & Toss / Back"
    },
    {
      title: "Tiny Tactics",
      url: "https://jess-5bit.github.io/tinytactics/tinytactics/index.html",
      image:"images/tinytactics.webp",
      credits: "Team Potato",
      gameinfo: "Strategy turn-based combat in 64 pixels!",
      controls: "⬅️/➡️ Move Left/Right <br> ⬆️/⬇️ Move Up/Down <br> X/ENTER: Select <br> C/SPACE: Go To Character"
    }
  ],
};
