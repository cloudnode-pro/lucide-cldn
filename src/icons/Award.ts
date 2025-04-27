import {Icon} from "../Icon.js";

export class Award extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.5 12.9 17 21.4A.5.5 0 0 1 16.2 22L12.6 19.2A1 1 0 0 0 11.4 19.2L7.8 21.9A.5.5 0 0 1 7 21.4L8.5 13"/><circle cx="12" cy="8" r="6"/></svg>`
        ).node);
    }
}
