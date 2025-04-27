import {Icon} from "../Icon.js";

export class MapPinOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.8 7A3 3 0 0 1 14.9 9.4M17 17A32 32 0 0 1 12.7 21.9 1 1 0 0 1 11.4 21.8C9.5 20.2 4 15 4 10A8 8 0 0 1 5.4 5.4M2 2 22 22"/><path d="M8.5 2.8A8 8 0 0 1 20 10 9 9 0 0 1 19.2 13.5M9.1 9.1A3 3 0 0 0 13 13"/></svg>`
        ).node);
    }
}
