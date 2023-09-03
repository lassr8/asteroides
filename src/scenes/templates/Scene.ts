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



    /* GameObjects */
    get(name: string) {
        let gO = this.children.getByName(name);
        if (gO == null) {
            throw new Error('No game object with name: ' + name);
        }
        return gO;
    }


}