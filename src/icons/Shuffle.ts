import {Icon} from "../Icon.js";

export class Shuffle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 14 22 18 18 22M18 2 22 6 18 10"/><path d="M2 18H4A4 4 0 0 0 7.3 16.3L12.7 7.7A4 4 0 0 1 16 6H22M2 6H4A4 4 0 0 1 7.6 8.2M22 18H16A4 4 0 0 1 12.7 16.2L12.3 15.8"/></svg>`
        ).node);
    }
}
