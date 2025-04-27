import {Icon} from "../Icon.js";

export class CreativeCommons extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 9.3A3 3 0 0 0 6.5 10.3 3 3 0 0 0 6.5 13.7 3 3 0 0 0 10 14.7M17 9.3A3 3 0 0 0 13.5 10.3 3 3 0 0 0 13.5 13.7 3 3 0 0 0 17 14.7"/></svg>`
        ).node);
    }
}
