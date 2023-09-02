import GameScene from "./templates/GameScene";

export default class Level1 extends GameScene {
    preload(): void {
        super.preload()        

    }
    create(): void {
        super.create()

    }
    update(time: number, delta: number): void {
        super.update(time, delta)

        this.cameras.main.centerOn(0, 0);

    }
}