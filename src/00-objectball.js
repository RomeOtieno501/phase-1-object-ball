function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());

  function awayTeamName() {
    let object = gameObject();
    return object["away"]["teamName"];
  }
  
  console.log(awayTeamName());
  // logs "Charlotte Hornets"

  function homeTeamColors() {
    let object = gameObject();
    return object["home"]["colors"];
  }
  
  console.log(homeTeamColors());
  // logs ["Black", "White"]

  
  function playerStats(playerName) {
    let object = gameObject();
    let homePlayers = object["home"]["players"];
    let awayPlayers = object["away"]["players"];
    
    return homePlayers[playerName] || awayPlayers[playerName];
  }
  
  console.log(playerStats("Alan Anderson"));
  // logs { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }
  

  function playerPoints(playerName) {
    let stats = playerStats(playerName);
    return stats ? stats.points : null;
  }
  
  console.log(playerPoints("Ben Gordon"));
  // logs 33
  

  function mostPointsScored() {
    let object = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
  
    for (let team in object) {
      let players = object[team].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  
  console.log(mostPointsScored());
  // logs "Ben Gordon"
  
  function winningTeam() {
    let object = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in object.home.players) {
      homePoints += object.home.players[player].points;
    }
  
    for (let player in object.away.players) {
      awayPoints += object.away.players[player].points;
    }
  
    return homePoints > awayPoints ? object.home.teamName : object.away.teamName;
  }
  
  console.log(winningTeam());
  // logs "Charlotte Hornets"
  
  function playerWithLongestName() {
    let object = gameObject();
    let longestName = "";
  
    for (let team in object) {
      let players = object[team].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  console.log(playerWithLongestName());
  // logs "Brendan Haywood"
  
  function doesLongNameStealATon() {
    let object = gameObject();
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMaxSteals = "";
  
    for (let team in object) {
      let players = object[team].players;
      for (let player in players) {
        if (players[player].steals > maxSteals) {
          maxSteals = players[player].steals;
          playerWithMaxSteals = player;
        }
      }
    }
  
    return longestName === playerWithMaxSteals;
  }
  
  console.log(doesLongNameStealATon());
  // logs true or false based on the data
  