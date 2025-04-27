import {Icon} from "../Icon.js";

export class TreeDeciduous extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 19A4 4 0 0 1 5.8 11.7 3.5 3.5 0 0 1 9 6V6A3 3 0 1 1 15 6V6A3.5 3.5 0 0 1 18.2 11.7 4 4 0 0 1 16 19ZM12 19V22"/></svg>`
        ).node);
    }
}
