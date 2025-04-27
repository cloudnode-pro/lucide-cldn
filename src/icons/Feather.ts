import {Icon} from "../Icon.js";

export class Feather extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.7 19A2 2 0 0 0 14 18.4L20.2 12.2A6 6 0 0 0 11.8 3.7L5.6 10A2 2 0 0 0 5 11.3V18A1 1 0 0 0 6 19zM16 8 2 22M17.5 15H9"/></svg>`
        ).node);
    }
}
