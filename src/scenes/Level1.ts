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


		this.aster = new Asteroide(this, 100, 100, {x:1, y:1});
		
		
	}

	aster!: Asteroide;


	update(time: number, delta: number): void {
		super.update(time, delta)

	}
}