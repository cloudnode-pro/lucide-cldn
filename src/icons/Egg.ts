import {Icon} from "../Icon.js";

export class Egg extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22C18.2 22 19.9 16.4 19.5 12 19.1 7.7 15.5 2 12 2S4.9 7.7 4.5 12C4.1 16.4 5.8 22 12 22"/></svg>`
        ).node);
    }
}
