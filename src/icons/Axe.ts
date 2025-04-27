import {Icon} from "../Icon.js";

export class Axe extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 12 5.5 20.5A2.1 2.1 0 1 1 2.5 17.5L11 9"/><path d="M15 13 9 7 13 3 19 9H22A8 8 0 0 1 15 16z"/></svg>`
        ).node);
    }
}
