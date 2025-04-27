import {Icon} from "../Icon.js";

export class Rotate3d extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.5 7.5C15.6 4.2 14 2 12 2 9.2 2 7 6.5 7 12S9.2 22 12 22L13 21.8M15.2 13.7 19 15.6 17.1 19.4"/><path d="M19 15.6Q16.2 17 12 17C6.5 17 2 14.8 2 12S6.5 7 12 7C16.8 7 20.9 8.7 21.8 11"/></svg>`
        ).node);
    }
}
