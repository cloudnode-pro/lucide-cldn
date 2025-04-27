import {Icon} from "../Icon.js";

export class Dock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8H22"/><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 16H18"/></svg>`
        ).node);
    }
}
