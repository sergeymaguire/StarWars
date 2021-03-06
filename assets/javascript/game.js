"use strict"
var characterSelected = false;
var defenderSelected = false;
var attackCharacter = {};
var defender = {};
var enemiesDefeated = 0;

// ----- Characters----- //
var obiWanKenobi = {
    name: "Obi-Wan Kenobi",
    health: 220,
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
let players = [obiWanKenobi, lukeSkywalker, darthSidious, darthMaul];
var currentPlayerIndex = 0;

$("#lukeskywalker").on("click", function () {
    console.log("Luke Skywalker Selected");
    showCharacter(2);
    playerSelection(2);

});
$("#obiwan").on("click", function () {
    console.log("Obi-Wan Kenobi Selected");
    showCharacter(1);
    playerSelection(1);

});
$("#darthmaul").on("click", function () {
    console.log("Darth Maul Selected");
    showCharacter(4);
    playerSelection(4);
});
$("#darthsidious").on("click", function () {
    console.log("Darth Sidious Selected");
    showCharacter(3);
    playerSelection(3);
});
$("#attack").on("click", function () {
    console.log("Attack Button Selected");

});
$("#restart").on("click", function () {
    console.log("Restart Button Selected");
    gameRestart();
});
$("#lukeskywalker3").on("click", function () {
    console.log("luke skywalker enemy clicked");
    hideEnemiesExcept(2);
});
$("#obiwan3").on("click", function () {
    console.log("obiwan enemy clicked");
    hideEnemiesExcept(1);
});
$("#darthmaul3").on("click", function () {
    console.log("darth maul enemy clicked");
    hideEnemiesExcept(4);
});
$("#darthsidious3").on("click", function () {
    console.log("darthsidious enemy clicked");
    hideEnemiesExcept(3);
});

function playerSelection(hidePlayers) {
    if (hidePlayers !== 1)
        $("#obiwan").hide().parent().hide();

    if (hidePlayers !== 2)
        $("#lukeskywalker").hide().parent().hide();

    if (hidePlayers !== 3)
        $("#darthsidious").hide().parent().hide();

    if (hidePlayers !== 4)
        $("#darthmaul").hide().parent().hide();

};

function showCharacter(characterToShow) {
    currentPlayerIndex = characterToShow - 1;
    if (characterToShow === 1)
        $("#obiwan3").hide().parent().hide();
    else
        $("#obiwan2").hide().parent().hide()

    if (characterToShow === 2)
        $("#lukeskywalker3").hide().parent().hide();
    else
        $("#lukeskywalker2").hide().parent().hide();

    if (characterToShow === 3)
        $("#darthsidious3").hide().parent().hide();
    else
        $("#darthsidious2").hide().parent().hide()

    if (characterToShow === 4)
        $("#darthmaul3").hide().parent().hide();
    else
        $("#darthmaul2").hide().parent().hide()
};

function hideYourEnemiesToAttack() {
    $("#lukeskywalker3").hide().parent().hide();
    $("#obiwan3").hide().parent().hide();
    $("#darthmaul3").hide().parent().hide();
    $("#darthsidious3").hide().parent().hide();
};

function hideEnemiesExcept(enemyToShow) {
    if (enemyToShow === 1) {
        $("#obiwan3").hide().parent().hide();
        $("#obiwan4").show().parent().show();

        $("#lukeskywalker4").hide().parent().hide();
        $("#darthmaul4").hide().parent().hide();
        $("#darthsidious4").hide().parent().hide();
        return;
    };

    if (enemyToShow === 2) {
        $("#lukeskywalker3").hide().parent().hide();
        $("#lukeskywalker4").show().parent().show();

        $("#obiwan4").hide().parent().hide();
        $("#darthmaul4").hide().parent().hide();
        $("#darthsidious4").hide().parent().hide();
        return;

    };
    if (enemyToShow === 3) {
        $("#darthsidious3").hide().parent().hide();
        $("#darthsidious4").show().parent().show();
       

        $("#lukeskywalker4").hide().parent().hide();
        $("#obiwan4").hide().parent().hide();
        $("#darthmaul4").hide().parent().hide();
        return;
    };
    if (enemyToShow === 4) {
        $("#darthmaul3").hide().parent().hide();
        $("#darthmaul4").show().parent().show();

        $("#lukeskywalker4").hide().parent().hide();
        $("#obiwan4").hide().parent().hide();
        $("#darthsidious4").hide().parent().hide();
        return;
    };
};

function gameRestart() {
    location.reload();
};

function winner() {
    gameRestart();
    alert("Winner winner chicken dinner")
};

function loser() {
    gameRestart();
    alert("Loser loser double loser")
};