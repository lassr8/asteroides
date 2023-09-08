import SHIP_C0 from '../assets/images/characters/ship-c0.png';
import delay from '../functions/delay';
import GameScene from '../scenes/templates/GameScene';
import DynamicSprite from './DynamicSprite';
import { ExplosionNave } from './Explosion';

const { UP, DOWN, LEFT, RIGHT, SPACE } = Phaser.Input.Keyboard.KeyCodes;


export default class Nave extends DynamicSprite {

	static preload(scene: Phaser.Scene) {
		scene.load.image('nave', SHIP_C0);
	}

	constructor(scene: GameScene, x: number, y: number, cameraFollow = true) {
		super(scene, x, y, 'nave');

		this.inicio = new Phaser.Geom.Point(x, y);

		this.setScale(0.5);

		let vel = 300;

		this.body.setMaxVelocity(vel, vel);

		this.body.setCollideWorldBounds(true);
		this.body.onWorldBounds = true;

		this.body.world.on(Phaser.Physics.Arcade.Events.WORLD_BOUNDS, async (body: Phaser.Physics.Arcade.Body) => {
			if (body.gameObject == this) {
				await this.muerto()
			}
		})

		this.key = {
			up: this.scene.input.keyboard!.addKey(UP),
			down: this.scene.input.keyboard!.addKey(DOWN),
			left: this.scene.input.keyboard!.addKey(LEFT),
			right: this.scene.input.keyboard!.addKey(RIGHT),
			space: this.scene.input.keyboard!.addKey(SPACE)
		};

		let { displayHeight: w, displayHeight: h } = this;
		this.body.setCircle(h).setOffset(w / 4, 0);
		this.body.onOverlap = true;

		if (cameraFollow) {
			this._cameraFollow = this.scene.cameras.main;
			this.cameraFollow = this._cameraFollow;
		} else {
			this._cameraFollow = null;
		}
		
	}

	inicio: Phaser.Geom.Point;

	key: {
		up: Phaser.Input.Keyboard.Key,
		down: Phaser.Input.Keyboard.Key,
		left: Phaser.Input.Keyboard.Key,
		right: Phaser.Input.Keyboard.Key,
		space: Phaser.Input.Keyboard.Key,
	}

	userControl = false;

	protected preUpdate(time: number, delta: number): void {
		if (this.userControl) {

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
			if (this.key.space.isDown) {
				this.disparar();
			}
		}

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
		console.log('piu piu')
	}

	vidas = 3;

	async muerto() {
		if (this.vidas > 0) {
			this.setVisible(false);
			this._cameraFollow?.stopFollow();
			this.scene.physics.pause();
			this.setActive(false);
			new ExplosionNave(this.scene, this.x, this.y);

			this.vidas--;

			this.setPosition(this.inicio.x, this.inicio.y);
			this.body.setVelocity(0);
			this.setAngle(0);

			await delay(this.deathDelay);

			this.setActive(true);
			this.scene.physics.resume();
			this.setVisible(true);
			this._cameraFollow?.startFollow(this);
		} else {
			this.scene.perder();
			this.destroy();
		}
	}

	deathDelay = 3000;

	/**
	 * Si deberia morir cuando toque un asteroide
	 */
	seEstrella = true;

	estrellarseCon<T extends Phaser.GameObjects.GameObject>(gameObject: T | (Phaser.GameObjects.Group & { children: Phaser.Structs.Set<T> })) {
		this.addOverlap<T>(gameObject, function () {
			this.muerto();
		})
	}

	addOverlap<T extends Phaser.GameObjects.GameObject>(gameObject: T | (Phaser.GameObjects.Group & { children: Phaser.Structs.Set<T> }), callback: (this: this, elt: T) => void) {
		this.scene.physics.add.overlap(this, gameObject);
		this.scene.physics.world.on('overlap', (gO1: this, gO2: T) => {
			if (this.seEstrella) {
				if (gO1 == this) {
					if (gO2 == gameObject) {
						if (gO2 instanceof Phaser.GameObjects.Group) {
							callback.call(this, gO2 as T);
						}
					}
				}
			}
		});
	}

	private _cameraFollow: Phaser.Cameras.Scene2D.Camera | null;
	get cameraFollow(): Phaser.Cameras.Scene2D.Camera | null {
		return this._cameraFollow;
	}
	set cameraFollow(cam: Phaser.Cameras.Scene2D.Camera | null) {
		this._cameraFollow?.stopFollow();
		cam?.startFollow(this);
		this._cameraFollow = cam;
	}
}