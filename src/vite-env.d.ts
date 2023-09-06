/// <reference types="vite/client" />

type GroupOf<T> = Phaser.GameObjects.Group & {
    children: Phaser.Structs.Set<T>;
}