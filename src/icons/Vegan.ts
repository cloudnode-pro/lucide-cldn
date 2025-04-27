import {Icon} from "../Icon.js";

export class Vegan extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8Q22 8 22 2 16 2 16 8"/><path d="M17.4 3.6A10 10 0 1 0 20.4 6.6"/><path d="M2 2A27 27 0 0 1 12 22C12.9 15.2 13.5 12.5 16 8"/></svg>`
        ).node);
    }
}
