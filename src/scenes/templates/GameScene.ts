import Nave from '../../GameObjects/Nave';
import Scene from './Scene';

export default class GameScene extends Scene {
    constructor(config: {}) {
        super(config);
    }

    preload(): void {

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