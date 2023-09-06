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

		let asters = this.add.group(astersChildren);

		Phaser.Actions.PlaceOnCircle(
			asters.getChildren(),
			new Phaser.Geom.Circle(0, 0, 300),
		)
		

	}

	aster!: Asteroide;


	update(time: number, delta: number): void {
		super.update(time, delta)

	}
}