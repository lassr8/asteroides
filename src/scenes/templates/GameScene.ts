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
        // SETUP
        this.cameras.main.setLerp(0.1);
        Asteroide.animsLoad(this);


        // CREATING
        // - bordes
        this._bordes = this.add.rectangle().setStrokeStyle(2, 0xFFFFFF).setOrigin(0, 0);
        this.bordes = new Phaser.Geom.Rectangle(0, 0, 2000, 2000);

        // - nave
        let {centerX: cX, centerY: cY} = this.bordes;
        this.nave = new Nave(this, cX, cY);
        
        // - asteroides
        this.asters = <GroupOf<Asteroide>>this.add.group();
    }

    get center(): Phaser.Geom.Point {
        return this._bordes.getCenter();
    }

    _bordes!: Phaser.GameObjects.Rectangle;
    set bordes(rect: Phaser.Geom.Rectangle) {
        let {x, y, width, height} = rect;
        
        // world bounds
        this.physics.world.setBounds(x, y, width, height);
        
        // drawing bounds
        this._bordes.setPosition(x, y);
        this._bordes.setSize(width, height);

        // set camera limits
        this.cameras.main.setBounds(x, y, width, height);
    }

    get bordes(): Phaser.Geom.Rectangle {
        return this.physics.world.bounds;
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