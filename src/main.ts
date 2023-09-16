import * as Phaser from 'phaser';
import './style.css'
import scenes from './scenes';
import root from './functions/config';


export const gameConfig: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.RESIZE,
		parent: 'app',
		width: '100%',
		height: '100%'
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
	pixelArt: true,
};


new Phaser.Game(gameConfig);

root;
