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

$("#lukeskywalker").on("click", function () {
    console.log("Luke Skywalker Selected");
    showCharacter(1);
});
$("#obiwan").on("click", function () {
    console.log("Obi-Wan Kenobi Selected");
    showCharacter(2);
});
$("#darthmaul").on("click", function () {
    console.log("Darth Maul Selected");
    showCharacter(3);
});
$("#darthsidious").on("click", function () {
    console.log("Darth Sidious Selected");
    showCharacter(4);
});
$("#attack").on("click", function () {
    console.log("Attack Button Selected");
});
$("#restart").on("click", function () {
    console.log("Restart Button Selected");
    gameRestart();
});
// gameStart();
function gameStart() {
    showCharacter(-1);
    hideYourEnemiesToAttack();
    hideEnemyDefender();
};

function showCharacter(showYourPlayer) {
    if (showYourPlayer !== 1)
        $("#lukeskywalker2").hide().parent().hide();

    if (showYourPlayer !== 2)
        $("#obiwan2").hide().parent().hide();

    if (showYourPlayer !== 3)
        $("#darthmaul2").hide().parent().hide();

    if (showYourPlayer !== 4)
        $("#darthsidious2").hide().parent().hide();
};

function hideYourEnemiesToAttack() {
    
    $("#lukeskywalker3").hide().parent().hide();
    $("#obiwan3").hide().parent().hide();
    $("#darthmaul3").hide().parent().hide();
    $("#darthsidious3").hide().parent().hide();
};

function hideEnemyDefender() {
    $("#lukeskywalker4").hide().parent().hide();
    $("#obiwan4").hide().parent().hide();
    $("#darthmaul4").hide().parent().hide();
    $("#darthsidious4").hide().parent().hide();
};

function gameRestart() {
    gameStart();
};