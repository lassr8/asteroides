import GameScene from "../scenes/templates/GameScene";
import SpriteObject from "./SpriteObject";

export default class DynamicSprite extends SpriteObject {
    constructor(scene: GameScene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number | undefined, add?: boolean) {
        super(scene, x, y, texture, frame, add);
        scene.physics.add.existing(this);
    }
    declare scene: GameScene;
    declare body: Phaser.Physics.Arcade.Body;
}