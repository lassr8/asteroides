import Asteroide from '../../GameObjects/Asteroide';
import Nave from '../../GameObjects/Nave';
import Scene from './Scene';

export default class GameScene extends Scene {

    preload() {
        Nave.preload(this);
        Asteroide.preload(this);
    }

    
    create(): void {
        /* SETUP */
        this.cameras.main.centerOn(0, 0);

        Asteroide.animsLoad(this);

        /* CREATING */
        this.nave = new Nave(this, 0, 0);
        
    }

    nave!: Nave;

    update(time: number, delta: number): void {
        
    }

    perder () {
        this.scene.stop().start('LOST');
    }
}