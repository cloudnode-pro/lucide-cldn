import {Icon} from "../Icon.js";

export class FlaskConicalOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V4.3M14 2V8.3M2 2 22 22M20 20A2 2 0 0 1 18 22H6A2 2 0 0 1 4.2 19L9.5 9.5M6.5 15H15M8.5 2H15.5"/></svg>`
        ).node);
    }
}
