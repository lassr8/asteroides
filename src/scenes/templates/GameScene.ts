import Nave from '../../GameObjects/Nave';
import Scene from './Scene';

export default class GameScene extends Scene {

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

    perder () {
        this.scene.stop().start('LOST');
    }
}