import Scene from './Scene';

export default class GameScene extends Scene {
    constructor(config: {}) {
        super(config);
    }

    bordes = {
        width: 0,
        height: 0
    }

    preload(): void {
        this.bordes = {
            width: this.game.canvas.width,
            height: this.game.canvas.height
        }
        
    }

    create(): void {
        
    }

    update(time: number, delta: number): void {
        
    }
}