import {Icon} from "../Icon.js";

export class Zap extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14A1 1 0 0 1 3.2 12.4L13.2 2.2A.5.5 0 0 1 14 2.6L12 8.6A1 1 0 0 0 13 10H20A1 1 0 0 1 20.8 11.6L10.8 21.8A.5.5 0 0 1 10 21.4L12 15.4A1 1 0 0 0 11 14z"/></svg>`
        ).node);
    }
}
