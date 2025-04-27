import {Icon} from "../Icon.js";

export class HandPlatter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3V2M15.4 17.4 18.6 14.6A2 2 0 1 1 21.4 17.5L17.8 20.8Q16.7 22 15 22H11Q9.3 22 8.2 20.8L6.9 19.3 6.2 19H5"/><path d="M2 14H14A2 2 0 0 1 14 18H12M4 10H20M5 10A7 7 0 0 1 19 10"/><path d="M5 14V20A1 1 0 0 1 4 21H2"/></svg>`
        ).node);
    }
}
