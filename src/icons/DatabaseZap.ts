import {Icon} from "../Icon.js";

export class DatabaseZap extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.8M21 5V8M21 12 18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.6 14.9"/></svg>`
        ).node);
    }
}
