import Nave from '../../GameObjects/Nave';
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

        Nave.preload(this);
        
    }

    
    create(): void {
        /* SETUP */
        this.cameras.main.centerOn(0, 0);

        /* CREATING */
        this.nave = new Nave(this, 0, 0)
        
    }

    nave!: Nave;

    update(time: number, delta: number): void {
        
    }
}