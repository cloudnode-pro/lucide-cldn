import {Icon} from "../Icon.js";

export class FlaskRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V8.3A7 7 0 1 0 14 8.3V2M5 15H19M8.5 2H15.5"/></svg>`
        ).node);
    }
}
