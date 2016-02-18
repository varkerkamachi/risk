var RiskGame = {

  // var title = 'RISK: The World is at War';
  // var continentCount = 6;
 'title': 'RISK: The World is at War!',

  getTitle: function(){
    return this.title;
  },
  //return this;
};

/*
// player selection - 2-6
  // roll dice to see order of unit placement (or divide deck equally - all except 2 wild cards)
  // take turns placing units
  // roll again to see who starts game
  // get new armies at the beginning of your turn & deploy
  // attack?
  // - roll dice based on num of armies you have to attack with (must leave one behind)
  // - 1 army = 1 die
  // - 2 armies = 2 dice
  // - 3 armies = 3 dice
  // - defender rolls a max of 2 dice, based on number of defending armies
  // - match highest red die against highest white. remove pieces of loser
  // - continue until finished
  // - if you win you get a risk card  


// Board has 6 continents — North America, South America, Europe, Africa, Asia, and the Australian Archipelago — and 42 countries.
// Armies: Infantry (which represents 1 “army”), Cavalry (5 armies), and Artillery (10 armies).
// Cards: A pack of 56:
// - 42 cards are marked with countries as well as an infantry, cavalry, or artillery symbol. 
// - 2 "Wild" cards
// - 12 "Mission" cards that come with the Secret Mission Risk variant. 
// Dice: There should be five dice (three red and two white).



Number of armies is decided by:
The number of territories you own. For every three countries, the player gets one army. For example, if you had 11 countries, you would receive 3 armies; if you had 22 countries, you would receive 7 armies.
Turning in cards. Cards can be turned in when you have a three of a kind (e.g. all three cards have artillery pictures) or all three types of armies (soldier, cavalry, artillery). For the first set of cards you turn in, you receive 4 armies; 6 for the second; 8 for the third; 10 for the fourth; 12 for the fifth; 15 for the sixth; and for every additional set thereafter, 5 more armies than the previous set turned in. If you have 5 or more Risk cards at the beginning of a turn, you must turn at least one set of them in.
Owning all the territories of a continent. For each continent that you completely dominate (no other enemy armies are present), you receive reinforcements. You receive 3 armies for Africa, 7 armies for Asia, 2 armies for Australia, 5 armies for Europe, 5 armies for North America and 2 armies for South America.
Note: if the amount of armies you would receive at the beginning of your turn is less than three, round up to three.
*/