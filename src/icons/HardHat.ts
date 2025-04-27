import {Icon} from "../Icon.js";

export class HardHat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V5A1 1 0 0 1 11 4H13A1 1 0 0 1 14 5V10M14 6A6 6 0 0 1 20 12V15M4 15V12A6 6 0 0 1 10 6"/><rect width="20" height="4" x="2" y="15" rx="1"/></svg>`
        ).node);
    }
}
