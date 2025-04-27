import {Icon} from "../Icon.js";

export class TvMinimalPlay extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7.8A1 1 0 0 1 11.1 7L14.8 9.4A1 1 0 0 1 14.8 10.6L11.1 13A1 1 0 0 1 10 12.2zM7 21H17"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>`
        ).node);
    }
}
