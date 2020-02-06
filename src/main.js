import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Game, Battle } from '../src/rpg';

// To-Do List for tomorrow:
// Books
// Stories for the rest of the spaces
// Place enemies
// Battle enemies
// LevelUp + IQ points
// Take books/other items
// Further exploration: Easter Egg, soundtrack, sound effects

function showCorrectStory(game) {
  $("#introStory").hide();
  if (game.currentSpace.xCoordinate === 1 && game.currentSpace.yCoordinate === 2) {
    $("#space1-2").show();
    $("#space2-1").hide();
    $("#space2-3").hide();
    $("#space3-2").hide();
  } else if (game.currentSpace.xCoordinate === 2 && game.currentSpace.yCoordinate === 1) {
    $("#space1-2").hide();
    $("#space2-1").show();
    $("#space2-3").hide();
    $("#space3-2").hide();
  } else if (game.currentSpace.xCoordinate === 2 && game.currentSpace.yCoordinate === 3) {
    $("#space1-2").hide();
    $("#space2-1").hide();
    $("#space2-3").show();
    $("#space3-2").hide();
  } else if (game.currentSpace.xCoordinate === 3 && game.currentSpace.yCoordinate === 2) {
    $("#space3-2").show();
    $("#space2-1").hide();
    $("#space2-3").hide();
    $("#space1-2").hide();
  } else {
    $("#space1-2").hide();
    $("#space2-1").hide();
    $("#space2-3").hide();
    $("#space3-2").hide();
  }
}

function checkBattleEnemy(game) {
  if (game.checkEnemy()) {
    $("#gameStoryline").hide();
    $("#battleMode").show();
    showStats(game);
    $("#enemyAttack").text(`A wild Crackhead appears! It's an ambush!`);
    return true; // time for battle
  } else {
    $("#battleMode").hide();
    $("#gameStoryline").show();
    return false;
  }
}

function showStats(game) {
  $("#enemyHP").text(game.enemy.HP);
  $("#playerHP").text(game.player.char.HP);
  $("#playerMana").text(game.player.char.mana);
}

function checkTurnEnterBattle(game, battle, skillSelect) {
  battle.enterBattle(skillSelect);
  $("#enemyAttack").text(`Crackhead just attacked you back! What do you do?`);
  showStats(game);
  if (game.enemy.HP === 0) {
    $("#enemyAttack").text(`You defeated Crackhead! Time to move on!`);
    $("form#skillSelect").hide();
    $("#crackheadImage").hide();
    $("#gameStoryline").show();
    showCorrectStory(game);
  }
}

$(document).ready(function(){
  
  let game = new Game();
  let battle;

  $("button#startGame").click(function(event){
    event.preventDefault();
    let userSelect = $("input:radio[name=charSelect]:checked").val();
    let user = game.player;
    console.log(user.assignCharacter(userSelect));
    $("#charSelection").hide();
    $("#introStory").show();
    $("#chooseMove").show();
    $("#charName").text(user.char.name);
  });

  $("button#move").click(function(event){
    event.preventDefault();
    let moveSelect = $("input:radio[name=moveSelect]:checked").val();
    game.assignMove(moveSelect);
    console.log(game.currentSpace);
    showCorrectStory(game);
    if (checkBattleEnemy(game)) {
      battle = new Battle(game.player, game.enemy);
    }
  });

  $("button#attackButton").click(function(event){
    event.preventDefault();
    let skillSelect = $("input:radio[name=skillSelect]:checked").val();
    checkTurnEnterBattle(game, battle, skillSelect);
  });

})