import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Player } from '../src/rpg';

$(document).ready(function(){
  $("#startGame").click(function(event){
    event.preventDefault();
    let userSelect = $("input:radio[name=charSelect]:checked").val();
    let player = new Player();
    console.log(player.assignCharacter(userSelect));

  });
})