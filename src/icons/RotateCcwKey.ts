import {Icon} from "../Icon.js";

export class RotateCcwKey extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 9.5 15.5 10.5M15.5 8.5 11.5 12.5M3 12A9 9 0 1 0 12 3 10 10 0 0 0 5.3 5.7L3 8"/><path d="M3 3V8H8"/><circle cx="10" cy="14" r="2"/></svg>`
        ).node);
    }
}
