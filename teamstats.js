const team = {
    _players: [
    {firstName: 'Pablo',lastName: 'ror',age: 25,},
    {firstName: 'Sawan',lastName: 'ror',age: 24,},
    {firstName: 'Sanam',lastName: 'ror',age: 22,}
    ],
    
    _games: [
      {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27,},
      {opponent: 'Wolves', teamPoints: 40, opponentPoints: 28,},
      {opponent: 'Lions', teamPoints: 38, opponentPoints: 29,}   
    ],
    
    get player() {
      return this._players;
    },
    get games() {
      return this._games
    },
     
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    
      addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
  }
  }
  
      team.addPlayer('Steph', 'Curry', 28);
      team.addPlayer('Lisa', 'Leslie', 44);
      team.addPlayer('Bugs', 'Bunny', 76);
  
      //console.log(team.players);
  
  team.addGame('Sea Lions', 54, 34);
  team.addGame('Lions', 55, 35);
  team.addGame('Tigers', 50, 30);
  
  console.log(team.games);
  
  
  