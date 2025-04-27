import {Icon} from "../Icon.js";

export class Notebook extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6H6M2 10H6M2 14H6M2 18H6"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2V22"/></svg>`
        ).node);
    }
}
