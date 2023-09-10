import cookies from './cookies';
/* T*T */

interface InputC {
    type: string;
    value: string;
}
export class Input {
    constructor(manager: ConfigManager, config: InputC) {
        this._manager = manager;
        let elt = document.createElement('input');
        elt.type = config.type;
        elt.value = config.value;
        this._elt = elt;

    }
    private _manager; public get manager() {return this._manager};
    protected _elt: HTMLElement; public get elt() {return this._elt};
    
}


interface OptionInputC extends InputC {

}
export class OptionInput extends Input {
    constructor(manager: ConfigManager, config: OptionInputC) {
        super(manager, config);
        this._elt = document.createElement('div');
    }
    protected _elt: HTMLDivElement;
}


/* Manages all configurations. allows to create one configurastion and save it in an array, then show it */
export class ConfigManager {
    constructor(parent: HTMLElement) {
        this._parent = parent;
        this._inputs = [];
    }

    protected cookie = cookies;

    private _parent;
    get parent() {
        return this._parent;
    }

    private _inputs: Input[];
    add(input: InputC) {
        this._inputs.push(
            new Input(this, input)
        );
    }

}