import * as Phaser from 'phaser';
import './style.css'
import scenes from './scenes';

let gameConfig: Phaser.Types.Core.GameConfig = {
    scene: scenes
}

new Phaser.Game(gameConfig);
