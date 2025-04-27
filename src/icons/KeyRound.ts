import {Icon} from "../Icon.js";

export class KeyRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.6 17.4A2 2 0 0 0 2 18.8V21A1 1 0 0 0 3 22H6A1 1 0 0 0 7 21V20A1 1 0 0 1 8 19H9A1 1 0 0 0 10 18V17A1 1 0 0 1 11 16H11.2A2 2 0 0 0 12.6 15.4L13.4 14.6A6.5 6.5 0 1 0 9.4 10.6z"/><circle cx="16.5" cy="7.5" r="0.5" fill="currentColor"/></svg>`
        ).node);
    }
}
