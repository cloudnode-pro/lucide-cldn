import {Icon} from "../Icon.js";

export class Send extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 21.7A.5.5 0 0 0 15.5 21.7L22 2.7A.5.5 0 0 0 21.3 2L2.3 8.5A.5.5 0 0 0 2.3 9.5L10.3 12.6A2 2 0 0 1 11.2 13.8zM21.9 2.1 10.9 13.1"/></svg>`
        ).node);
    }
}
