import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Player, Game } from '../src/rpg';

function showCorrectStory(game) {
  if (game.currentSpace.xCoordinate === 3 && game.currentSpace.yCoordinate === 2) {
    $("#space3-2").show();
    $("#space1-2").hide();
  } else if (game.currentSpace.xCoordinate === 1 && game.currentSpace.yCoordinate === 2) {
    $("#space1-2").show();
    $("#space3-2").hide();
  } else {
    $("#space3-2").hide();
    $("#space1-2").hide();
  }
}

$(document).ready(function(){
  
  let game = new Game();

  $("button#startGame").click(function(event){
    event.preventDefault();
    let userSelect = $("input:radio[name=charSelect]:checked").val();
    let player = new Player();
    console.log(player.assignCharacter(userSelect));
    $("#charSelection").hide();
    $("#introStory").show();
    $("#chooseMove").show();
    $("#charName").text(player.char.name);
  });

  $("button#move").click(function(event){
    event.preventDefault();
    let moveSelect = $("input:radio[name=moveSelect]:checked").val();
    game.assignMove(moveSelect);
    console.log(game.currentSpace);
    showCorrectStory(game);
  });

})