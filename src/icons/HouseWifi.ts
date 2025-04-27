import {Icon} from "../Icon.js";

export class HouseWifi extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.5 13.9A4 4 0 0 1 14.5 13.9M12 17"/><path d="M3 10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19z"/><path d="M7 10.8A8 8 0 0 1 17 10.8"/></svg>`
        ).node);
    }
}
