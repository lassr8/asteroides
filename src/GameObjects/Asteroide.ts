import GameScene from "../scenes/templates/GameScene";
import ASTEROIDS_A_09 from "../assets/images/asteroids/Asteroid-A-09.png";
import DynamicSprite from "./DynamicSprite";


export default class Asteroide extends DynamicSprite {

	static preload(scene: Phaser.Scene) {
		scene.load.spritesheet({
			key: 'ASTER-0',
			url: ASTEROIDS_A_09,
			frameConfig: {
				frameWidth: 138,
				frameHeight: 138
			}
		})
		
	};

	static animsLoad(scene: Phaser.Scene) {
		scene.anims.create({
            key: 'aster-0',
            frames: scene.anims.generateFrameNumbers('ASTER-0', {
				frames: [
					0,	1,	2,	3,	4,	5,	6,	7,	8,	9,
					11,	12,	13,	14,	15,	16,	17,	18,	19,	20,
					22,	23,	24,	25,	26,	27,	28,	29,	30, 31,
					33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	
					44,	45,	46,	47,	48,	49,	50,	51,	52,	53,	
					55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	
					66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	
					77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	
					88,	89,	90,	91,	92,	93,	94,	95,	96,	97,	
					99,	100,101,102,103,104,105,106,107,108,
					10,	21,	32,	43,	54,	65,	76,	87,	98, 109,
					110,111,112,113,114,115,116,117,118,119					
				]
			}),
            repeat: -1,
        });
	}

	constructor(scene: GameScene, x: number, y: number, vel: { x: number, y: number } | Phaser.Math.Vector2 = {x:0,y:0}) {
		super(scene, x, y, 'ASTER-0');

		this.setScale(0.5);
		let {displayWidth: w, displayHeight: h} = this;
		this.body.setCircle(w*0.7).setOffset(w/4, h/3);

		let r = Phaser.Math.Between; // generates a random number

		if (r(0,2) == 1) {
			this.play('aster-0');
		} else {
			this.playReverse('aster-0');
		}


		this.body.angularVelocity = r(-50, 50);

		// console.log(this.body.angularVelocity)




		this.body.setVelocity(vel.x, vel.y);

	}
}