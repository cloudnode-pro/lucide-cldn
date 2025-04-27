import {Icon} from "../Icon.js";

export class Image extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15 18 12A2 2 0 0 0 15 12L6 21"/></svg>`
        ).node);
    }
}
