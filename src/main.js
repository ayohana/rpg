import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import $ from 'jquery';
import { thingFunction } from './rpg.js'
import { officeWorker } from './rpg'

console.log(thingFunction);

var testCharacter = new officeWorker();
console.log(testCharacter);
console.log(testCharacter.name);