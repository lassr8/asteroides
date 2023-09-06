import Asteroide from '../../GameObjects/Asteroide';
import { ExplosionNave } from '../../GameObjects/Explosion';
import Nave from '../../GameObjects/Nave';
import Scene from './Scene';

export default class GameScene extends Scene {

    preload() {
        Nave.preload(this);
        Asteroide.preload(this);
        ExplosionNave.preload(this);
    }

    
    create(): void {
        /* SETUP */
        this.cameras.main.centerOn(0, 0);

        Asteroide.animsLoad(this);

        /* CREATING */
        this.nave = new Nave(this, 0, 0);
        this.asters = <GroupOf<Asteroide>>this.add.group();
        
    }

    /**
     * La nave del juego
     */
    nave!: Nave;

    /**
     * Todos los asteroides deberian guardarse aquí;
     */
    asters!: GroupOf<Asteroide>;

    update(time: number, delta: number): void {
        
    }

    perder () {
        this.scene.stop().start('LOST');
    }
}