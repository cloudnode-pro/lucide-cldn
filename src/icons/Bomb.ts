import {Icon} from "../Icon.js";

export class Bomb extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="13" r="9"/><path d="M14.4 4.7 16.3 2.7A2.4 2.4 0 0 1 19.7 2.7L21.3 4.3A2.4 2.4 0 0 1 21.3 7.7L19.3 9.7M22 2 20.5 3.5"/></svg>`
        ).node);
    }
}
