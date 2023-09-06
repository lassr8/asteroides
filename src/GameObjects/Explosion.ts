import SpriteObject from "./SpriteObject";
import EXP_NAVE from '../assets/images/explosions/nave.png';

export class ExplosionNave extends SpriteObject {
	
	static preload (scene: Phaser.Scene) {
		scene.load.spritesheet({
			key: 'explosion-nave',
			url: EXP_NAVE,
			frameConfig: {
				frameWidth: 47,
				frameHeight: 47
			}
		})
	}

	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y, 'explosion-nave');

		this.setScale(3);

		this.anims.create({
			key: 'explotar',
			frames: this.anims.generateFrameNumbers(
				'explosion-nave', {
					frames: [16,17,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,16]
				}
			),
			repeat:0,
			
		})

		this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
			this.destroy();
		})
		this.anims.play('explotar')

	}
}