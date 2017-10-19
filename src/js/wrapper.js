import Multiple from './multiple-players';
import Single from './single-player';

export default class {
    single(options) {
        new Single(options);
    }
    multiple(options) {
        new Multiple(options);
    }
}
