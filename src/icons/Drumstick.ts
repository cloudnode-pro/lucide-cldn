import {Icon} from "../Icon.js";

export class Drumstick extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.4 15.6A7.9 6 135 1 1 21.6 9.4 4.5 3.4 135 0 0 15.4 15.6"/><path d="M8.3 12.7 5.7 15.3A2.5 2.5 0 1 0 4 20 2.5 2.5 0 1 0 8.7 18.3L11.3 15.7"/></svg>`
        ).node);
    }
}
