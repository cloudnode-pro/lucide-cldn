import {Icon} from "../Icon.js";

export class BaggageClaim extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 18H6A2 2 0 0 1 4 16V7A2 2 0 0 0 2 5"/><path d="M17 14V4A2 2 0 0 0 15 2H14A2 2 0 0 0 12 4V14"/><rect width="13" height="8" x="8" y="6" rx="1"/><circle cx="18" cy="20" r="2"/><circle cx="9" cy="20" r="2"/></svg>`
        ).node);
    }
}
