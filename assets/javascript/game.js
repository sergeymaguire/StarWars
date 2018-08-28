// ----- Global Variables ----- //
var characterSelected = false;
var defenderSelected = false;
var attackCharacter = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;
// ----- Characters----- //
var obiWanKenobi = {
  name: "Obi-Wan Kenobi",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var lukeSkywalker = {
  name: "Luke Skywalker",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var darthSidious = {
  name: "Darth Sidious",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var darthMaul = {
  name: "Darth Maul",
  health: 180,
  baseAttack: 25,
  attack: 25
};
$("#obiwan").on("click", function(){
    console.log("Obi-Wan Kenobi Selected");
});
$("#lukeskywalker").on("click", function(){
    console.log("Luke Skywalker Selected");
});
$("#darthsidious").on("click", function(){
    console.log("Darth Sidious Selected");
});
$("#darthmaul").on("click", function(){
    console.log("Darth Maul Selected");
});
$("#attack").on("click", function(){
    console.log("Attack Button Selected");
});
$("#restart").on("click", function(){
    console.log("Restart Button Selected");
});

