import {Icon} from "../Icon.js";

export class Trees extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V10.2A3 3 0 0 1 8.9 16H5A3 3 0 0 1 4 10.2V10A3 3 0 0 1 10 10M7 16V22M13 19V22"/><path d="M12 19H20.3A1 1 0 0 0 21 17.3L18 14H18.3A1 1 0 0 0 19 12.3L16 9H16.2A1 1 0 0 0 17 7.3L13 3 11.6 4.5"/></svg>`
        ).node);
    }
}
