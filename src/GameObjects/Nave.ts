import SHIP_C0 from '../assets/images/characters/ship-c0.png';
import GameScene from '../scenes/templates/GameScene';
import SpriteObject from './SpriteObject';

const { UP, DOWN, LEFT, RIGHT, SPACE } = Phaser.Input.Keyboard.KeyCodes;


export default class Nave extends SpriteObject {

	static preload(scene: Phaser.Scene) {
		scene.load.image('nave', SHIP_C0);
	}

	constructor(scene: GameScene, x: number, y: number) {
		super(scene, x, y, 'nave');
		
		scene.physics.add.existing(this);

		this.setScale(0.5);

		let vel = 300;

		this.body.setMaxVelocity(vel, vel);

		this.body.setCollideWorldBounds(true);
		this.body.onWorldBounds = true;

		this.body.world.on(Phaser.Physics.Arcade.Events.WORLD_BOUNDS, (body: Phaser.Physics.Arcade.Body) => {
			console.log('collide')
			if (body.gameObject == this) {
				this.muerto()
			}
		})

		this.key = {
			up: this.scene.input.keyboard!.addKey(UP),
			down: this.scene.input.keyboard!.addKey(DOWN),
			left: this.scene.input.keyboard!.addKey(LEFT),
			right: this.scene.input.keyboard!.addKey(RIGHT),
			space: this.scene.input.keyboard!.addKey(SPACE)
		}
	}
	declare body: Phaser.Physics.Arcade.Body;
	declare scene: GameScene;

	key: {
		up: Phaser.Input.Keyboard.Key,
		down: Phaser.Input.Keyboard.Key,
		left: Phaser.Input.Keyboard.Key,
		right: Phaser.Input.Keyboard.Key,
		space: Phaser.Input.Keyboard.Key,
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
		if (this.key.space.isDown) { /* T*T */ }

		super.preUpdate(time, delta);

	} // end preUpdate

	/* MOVE */
	aceleracion = 10; // Fuerza con la que avanza
	velocidadAngular = 5; // Velocidad con la que gira

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

	vidas = 3;

	muerto() {
		if (this.vidas > 0) {
			this.setVisible(false);
			this.setActive(false);

			this.vidas--;
			// console.log(this.vidas)
			this.setPosition(0, 0);
			this.body.setVelocity(0);

			this.setActive(true);
			this.setVisible(true);
		} else {
			this.scene.perder();
			this.destroy();
		}
	}
}