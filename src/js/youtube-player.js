import defaults from './default-options';
// import Helpers from './helpers';

export default class {
    constructor(options) {
        this.setOptions(options);
    }

    setData() {

    }

    setOptions(options) {
        this.options = {
            ...defaults,
            ...options
        };
    }
};
