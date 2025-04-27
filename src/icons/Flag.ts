import {Icon} from "../Icon.js";

export class Flag extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 15S5 14 8 14 13 16 16 16 20 15 20 15V3S19 4 16 4 11 2 8 2 4 3 4 3z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`
        ).node);
    }
}
