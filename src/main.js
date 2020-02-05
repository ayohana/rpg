import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Player, Game } from '../src/rpg';

$(document).ready(function(){
  
  let game = new Game();

  $("#startGame").click(function(event){
    event.preventDefault();
    let userSelect = $("input:radio[name=charSelect]:checked").val();
    let player = new Player();
    console.log(player.assignCharacter(userSelect));
    $("#charSelection").hide();
    $("#gameStoryline").show();
    $("#charName").text(player.char.name);
  });

  $("button#move").click(function(event){
    event.preventDefault();
    let moveSelect = $("input:radio[name=moveSelect]:checked").val();
    game.assignMove(moveSelect);
    console.log(game.currentSpace);
  });

})