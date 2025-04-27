import {Icon} from "../Icon.js";

export class Power extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V12M18.4 6.6A9 9 0 1 1 5.6 6.6"/></svg>`
        ).node);
    }
}
