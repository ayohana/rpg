import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import $ from 'jquery';
import { thingFunction } from './rpg.js'
import { OfficeWorker, Coworker, Daughter } from './rpg'

console.log(thingFunction);

var testCharacter = new OfficeWorker();
console.log(testCharacter);
console.log(testCharacter.name);