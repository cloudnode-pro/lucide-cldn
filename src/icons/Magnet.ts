import {Icon} from "../Icon.js";

export class Magnet extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 15 2 11 8.8 4.2A7.8 7.8 0 0 1 19.8 15.2L13 22 9 18 15.4 11.6A2.1 2.1 0 0 0 12.4 8.6zM5 8 9 12M12 15 16 19"/></svg>`
        ).node);
    }
}
