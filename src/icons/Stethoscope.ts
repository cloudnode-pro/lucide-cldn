import {Icon} from "../Icon.js";

export class Stethoscope extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 2V4M5 2V4M5 3H4A2 2 0 0 0 2 5V9A6 6 0 0 0 14 9V5A2 2 0 0 0 12 3H11"/><path d="M8 15A6 6 0 0 0 20 15V12"/><circle cx="20" cy="10" r="2"/></svg>`
        ).node);
    }
}
