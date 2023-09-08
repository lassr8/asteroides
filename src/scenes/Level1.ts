import Asteroide from "../GameObjects/Asteroide";
import GameScene from "./templates/GameScene";

export default class Level1 extends GameScene {
	constructor() {
		super({ key: 'LEVEL-1' })
	}

	

	create(): void {
		super.create();

		this.nave.userControl = true;

		

		this.nave.estrellarseCon(this.asters);
		

	}


	update(time: number, delta: number): void {
		super.update(time, delta)

	}
}