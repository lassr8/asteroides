export default class Scene extends Phaser.Scene {
    constructor(config: {}) {
        super(config);
    }

    /**
     * Where you load all your assets
     */
    preload() {

    }


    /**
     * Where you set up your scene
     */
    create(){

    }

    /* @eslint ignore */
    update(time: number, delta: number): void {
        throw new Error("You should override the update method");
    }

}