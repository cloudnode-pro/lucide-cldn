import {Icon} from "../Icon.js";

export class Eye extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12.3V11.7A10.8 10.8 0 0 1 22 11.7V12.3A10.8 10.8 0 0 1 2 12.3"/><circle cx="12" cy="12" r="3"/></svg>`
        ).node);
    }
}
