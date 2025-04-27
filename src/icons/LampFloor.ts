import {Icon} from "../Icon.js";

export class LampFloor extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10V22M18 7.6A1 1 0 0 1 17 9H7A1 1 0 0 1 6 7.6L8 2.6A1 1 0 0 1 9 2H15A1 1 0 0 1 16 2.6zM9 22H15"/></svg>`
        ).node);
    }
}
