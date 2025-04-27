import {Icon} from "../Icon.js";

export class CopySlash extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="12" x2="18" y1="18" y2="12"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16A2 2 0 0 1 2 14V4Q2.2 2.2 4 2H14A2 2 0 0 1 16 4"/></svg>`
        ).node);
    }
}
