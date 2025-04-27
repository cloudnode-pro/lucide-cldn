import {Icon} from "../Icon.js";

export class Fuel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4A2 2 0 0 0 12 2H6A2 2 0 0 0 4 4V22M14 13H16A2 2 0 0 1 18 15V17A2 2 0 0 0 20 19 2 2 0 0 0 22 17V9.8A2 2 0 0 0 21.4 8.4L18 5"/></svg>`
        ).node);
    }
}
