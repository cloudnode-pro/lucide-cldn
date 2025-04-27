import {Icon} from "../Icon.js";

export class ScreenShare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 3H4A2 2 0 0 0 2 5V15A2 2 0 0 0 4 17H20A2 2 0 0 0 22 15V12M8 21H16M12 17V21M17 8 22 3M17 3H22V8"/></svg>`
        ).node);
    }
}
