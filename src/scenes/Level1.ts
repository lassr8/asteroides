import GameScene from "./templates/GameScene";

export default class Level1 extends GameScene {
	constructor() {
		super({ key: 'LEVEL-1' })
	}

	preload(): void {
		super.preload();

	}
	create(): void {
		let {width, height} = this.scale;
		this.physics.world.setBounds(-width/2, -height/2, width, height);
		super.create();

	}
	update(time: number, delta: number): void {
		super.update(time, delta)

	}
}