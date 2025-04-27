import {Icon} from "../Icon.js";

export class Pipette extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9 3.6 17.4A2 2 0 0 0 3 18.8V20.2A2 2 0 0 1 2.4 21.6 2 2 0 0 1 3.8 21H5.2A2 2 0 0 0 6.6 20.4L15 12"/><path d="M18 9 18.4 9.4A1 1 0 1 1 15.4 12.4L11.6 8.6A1 1 0 1 1 14.6 5.6L15 6 18.4 2.6A1 1 0 1 1 21.4 5.6zM2 22 2.4 21.6"/></svg>`
        ).node);
    }
}
