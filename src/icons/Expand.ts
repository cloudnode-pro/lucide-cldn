import {Icon} from "../Icon.js";

export class Expand extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 15 21 21M15 9 21 3M21 16.2V21H16.2M21 7.8V3H16.2M3 16.2V21H7.8M3 21 9 15M3 7.8V3H7.8M9 9 3 3"/></svg>`
        ).node);
    }
}
