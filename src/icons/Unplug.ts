import {Icon} from "../Icon.js";

export class Unplug extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5 22 2M2 22 5 19M6.3 20.3A2.4 2.4 0 0 0 9.7 20.3L12 18 6 12 3.7 14.3A2.4 2.4 0 0 0 3.7 17.7ZM7.5 13.5 10 11M10.5 16.5 13 14M12 6 18 12 20.3 9.7A2.4 2.4 0 0 0 20.3 6.3L17.7 3.7A2.4 2.4 0 0 0 14.3 3.7Z"/></svg>`
        ).node);
    }
}
