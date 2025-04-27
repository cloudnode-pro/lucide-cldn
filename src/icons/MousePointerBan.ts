import {Icon} from "../Icon.js";

export class MousePointerBan extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2.7A.5.5 0 0 1 2.7 2L11.7 5.5A.5.5 0 0 1 11.7 6.5L8.1 7.5A1 1 0 0 0 7.5 8.2L6.5 11.6A.5.5 0 0 1 5.5 11.6z"/><circle cx="16" cy="16" r="6"/><path d="M11.8 11.8 20.2 20.2"/></svg>`
        ).node);
    }
}
