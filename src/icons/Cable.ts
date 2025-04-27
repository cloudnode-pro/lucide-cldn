import {Icon} from "../Icon.js";

export class Cable extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21V19A1 1 0 0 1 16 18V17A2 2 0 0 1 18 15H20A2 2 0 0 1 22 17V18A1 1 0 0 1 21 19"/><path d="M19 15V6.5A1 1 0 0 0 12 6.5V17.5A1 1 0 0 1 5 17.5V9M21 21V19H17M3 5H7V3"/><path d="M7 5A1 1 0 0 1 8 6V7A2 2 0 0 1 6 9H4A2 2 0 0 1 2 7V6A1 1 0 0 1 3 5V3"/></svg>`
        ).node);
    }
}
