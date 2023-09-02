import * as Phaser from 'phaser';
import './style.css'
import scenes from './scenes';

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    scale: {
      width: innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: innerHeight ? innerHeight - 1 : undefined || document.documentElement.clientHeight || document.body.clientHeight
    },
    scene: scenes,
    transparent: true,
    dom: {
      createContainer: true,
      behindCanvas: false
    },
    parent: 'app',
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
  };

new Phaser.Game(gameConfig);
