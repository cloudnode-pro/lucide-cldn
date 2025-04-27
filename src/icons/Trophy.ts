import {Icon} from "../Icon.js";

export class Trophy extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9H4.5A2.5 2.5 0 0 1 4.5 4H6M18 9H19.5A2.5 2.5 0 0 0 19.5 4H18M4 22H20M10 14.7V17Q9.9 17.9 9 18.2 7.1 19.2 7 22M14 14.7V17Q14.1 17.9 15 18.2 16.8 19.2 17 22"/><path d="M18 2H6V9A6 6 0 0 0 18 9z"/></svg>`
        ).node);
    }
}
