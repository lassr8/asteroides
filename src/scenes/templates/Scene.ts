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
        this.scale.on(Phaser.Scale.Events.RESIZE, this.resize)

    }

    /* @eslint ignore */
    update(time: number, delta: number): void {
        throw new Error("You should override the update method");
    }


    
    resize(gameSize: Phaser.Structs.Size, baseSize:Phaser.Structs.Size, displaySize:Phaser.Structs.Size, previousWidth: number, previousHeight: number)
    {
        const width = gameSize.width;
        const height = gameSize.height;

        this.cameras.resize(width, height);

        console.log(gameSize, baseSize, displaySize, previousWidth,previousHeight);
    }


}