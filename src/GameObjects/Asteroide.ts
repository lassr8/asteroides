import GameScene from "../scenes/templates/GameScene";
import ASTEROIDS_A_09 from "../assets/images/asteroid/";
import DynamicSprite from "./DynamicSprite";


export default class Asteroide extends DynamicSprite {

	static async preload(scene: Phaser.Scene) {

		let proms = <Promise<{ default: string }>[]>Object.values(ASTEROIDS_A_09).map(f => f());

		let asters = (await Promise.all(proms)).map(a => a.default);

		scene.load.image('ASTER-0', asters)

		/* SOlo cargo el primer frame. Toca adjuntar los demas */

	};

	constructor(scene: GameScene, x: number, y: number, vel: { x: number, y: number } | Phaser.Math.Vector2) {
		super(scene, x, y, 'ASTER-0');

		this.setScale(0.5);

		this.body.setVelocity(vel.x, vel.y);

		console.log(scene.textures)

	}
}