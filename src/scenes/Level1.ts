import Asteroide from "../GameObjects/Asteroide";
import GameScene from "./templates/GameScene";

export default class Level1 extends GameScene {
	constructor() {
		super({ key: 'LEVEL-1' })
	}

	create(): void {
		let {width, height} = this.scale;
		this.physics.world.setBounds(-width/2, -height/2, width, height);
		super.create();

		let astersChildren: Asteroide[] = [];

		for (let i = 0; i < 12; i++) {
			astersChildren[i] = new Asteroide(this, 0, 0);
		}

		this.asters.addMultiple(astersChildren);

		// console.log(this.asters)

		Phaser.Actions.PlaceOnCircle(
			this.asters.getChildren(),
			new Phaser.Geom.Circle(0, 0, 300),
		)

		this.nave.estrellarseCon(this.asters, function() {
			this.muerto();
		})
		

	}


	update(time: number, delta: number): void {
		super.update(time, delta)

	}
}