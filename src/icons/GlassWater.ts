import {Icon} from "../Icon.js";

export class GlassWater extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.1 4.1A1 1 0 0 1 6.1 3H18A1 1 0 0 1 18.9 4.1L17.2 20.2A2 2 0 0 1 15.2 22H8.8A2 2 0 0 1 6.8 20.2z"/><path d="M6 12A5 5 0 0 1 12 12 5 5 0 0 0 18 12"/></svg>`
        ).node);
    }
}
