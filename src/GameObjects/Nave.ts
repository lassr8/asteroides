import SHIP_C0 from '../img/characters/ship-c0.png';
import SpriteObject from './SpriteObject';

const { UP, DOWN, LEFT, RIGHT, SPACE } = Phaser.Input.Keyboard.KeyCodes;


export default class Nave extends SpriteObject {

	static preload(scene: Phaser.Scene) {
		scene.load.image('nave', SHIP_C0);
	}

	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y, 'nave');
		
		scene.physics.add.existing(this);

		this.setScale(70 / 100);

		this.body.setMaxVelocity(400, 400);

	}

	declare body: Phaser.Physics.Arcade.Body;

	key = {
		up: this.scene.input.keyboard!.addKey(UP),
		down: this.scene.input.keyboard!.addKey(DOWN),
		left: this.scene.input.keyboard!.addKey(LEFT),
		right: this.scene.input.keyboard!.addKey(RIGHT),
		space: this.scene.input.keyboard!.addKey(SPACE)
	}

	protected preUpdate(time: number, delta: number): void {
		if (this.key.up.isDown) {
			this.adelantar();
		}
		if (this.key.down.isDown) {
			this.atrasar();
		}
		if (this.key.left.isDown) {
			this.angle -= this.velocidadAngular;
		}
		if (this.key.right.isDown) {
			this.angle += this.velocidadAngular;
		}
		if (this.key.space.isDown) { }

		console.log(this.body.velocity)

		super.preUpdate(time, delta);

	} // end preUpdate

	/* MOVE */
	aceleracion = 10; // Fuerza con la que avanza
	velocidadAngular = 10; // Velocidad con la que gira

	adelantar() {
		this.body.velocity.x += this.aceleracion * Math.sin(this.rotation);
		this.body.velocity.y -= this.aceleracion * Math.cos(this.rotation);
	}
	atrasar() {
		this.body.velocity.x -= this.aceleracion * Math.sin(this.rotation);
		this.body.velocity.y += this.aceleracion * Math.cos(this.rotation);
	}


	/* ACCIONES */
	disparar() {
		/* T*T piu, piupiu */
	}
}