import GameScene from "./templates/GameScene";

export default class Level1 extends GameScene {
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