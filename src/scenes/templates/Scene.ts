export default class Scene extends Phaser.Scene {
    constructor(config: Phaser.Types.Scenes.SettingsConfig) {
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
        if (this.resize) {
            this.scale.on(Phaser.Scale.Events.RESIZE, this.resize);
        }

    }

    /* @eslint ignore */
    update(_time: number, _delta: number): void {
        throw new Error("You should override the update method");
    }


    /**
     * The resize event
     */
    resize!: (gameSize: Phaser.Structs.Size, baseSize:Phaser.Structs.Size, displaySize:Phaser.Structs.Size, previousWidth: number, previousHeight: number) => void;


}