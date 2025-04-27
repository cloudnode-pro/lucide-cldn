import {Icon} from "../Icon.js";

export class Coins extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="8" r="6"/><path d="M18 10.4A6 6 0 1 1 10.4 18M7 6H8V10"/><path d="M16.7 13.9 17.4 14.6 14.6 17.4"/></svg>`
        ).node);
    }
}
