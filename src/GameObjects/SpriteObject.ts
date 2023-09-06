import GameScene from "../scenes/templates/GameScene";


export default class SpriteObject extends Phaser.GameObjects.Sprite {
    /**
     * Should only be called once in the scene
     * @param scene the scene where this should be preloaded
     */
    static preload: (scene: Phaser.Scene) => void;
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number | undefined, add = true) {
        super(scene, x, y, texture, frame)
        if (add) {
            scene.add.existing(this);
        }
    }
    declare scene: GameScene;
}