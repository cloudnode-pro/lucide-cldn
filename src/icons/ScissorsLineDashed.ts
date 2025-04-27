import {Icon} from "../Icon.js";

export class ScissorsLineDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.4 9.4 8 12"/><circle cx="4" cy="8" r="2"/><path d="M14 6 5.4 14.6"/><circle cx="4" cy="16" r="2"/><path d="M10.8 14.8 14 18M16 12H14M22 12H20"/></svg>`
        ).node);
    }
}
