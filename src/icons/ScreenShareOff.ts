import {Icon} from "../Icon.js";

export class ScreenShareOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 3H4A2 2 0 0 0 2 5V15A2 2 0 0 0 4 17H20A2 2 0 0 0 22 15V12M8 21H16M12 17V21M22 3 17 8M17 3 22 8"/></svg>`
        ).node);
    }
}
