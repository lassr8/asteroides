/// <reference types="vite/client" />

type GroupOf<T> = Phaser.GameObjects.Group & {
    children: Phaser.Structs.Set<T>;
}

type Optional<T> = {
    [K in keyof T]?: T[K];
}