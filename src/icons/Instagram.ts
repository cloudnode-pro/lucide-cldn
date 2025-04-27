import {Icon} from "../Icon.js";

export class Instagram extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>`
        ).node);
    }
}
