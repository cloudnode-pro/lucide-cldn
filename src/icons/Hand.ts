import {Icon} from "../Icon.js";

export class Hand extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11V6A2 2 0 0 0 16 4 2 2 0 0 0 14 6M14 10V4A2 2 0 0 0 12 2 2 2 0 0 0 10 4V6M10 10.5V6A2 2 0 0 0 8 4 2 2 0 0 0 6 6V14"/><path d="M18 8A2 2 0 1 1 22 8V14A8 8 0 0 1 14 22H12A8 8 0 0 1 6 19.7L2.4 16A2 2 0 0 1 5.2 13.2L7 15"/></svg>`
        ).node);
    }
}
