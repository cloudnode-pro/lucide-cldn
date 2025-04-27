import {Icon} from "../Icon.js";

export class Joystick extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17A2 2 0 0 0 19 15H5A2 2 0 0 0 3 17V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19zM6 15V13M12 15V9"/><circle cx="12" cy="6" r="3"/></svg>`
        ).node);
    }
}
