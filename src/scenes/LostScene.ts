import UIScene from "./templates/UIScene";

export default class LostScene extends UIScene {
    constructor () {
        super({ key: 'LOST' });
    }

    space!: Phaser.Input.Keyboard.Key;

    create(): void {
        let text = this.add.text(10, 10, 'PERDISTE', { fontSize: '30pt' })

        this.space = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(time: number, delta: number): void {
        if (this.space.isDown) {
            this.scene.stop().start('LEVEL-1');
        }
    }


}