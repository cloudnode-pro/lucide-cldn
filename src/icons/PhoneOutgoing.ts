import {Icon} from "../Icon.js";

export class PhoneOutgoing extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 8 22 2 16 2"/><line x1="16" x2="22" y1="8" y2="2"/><path d="M22 17V20A2 2 0 0 1 19.8 22 20 20 0 0 1 11.2 18.8 20 20 0 0 1 5.2 12.9 20 20 0 0 1 2.2 4.2 2 2 0 0 1 4.1 2H7.1A2 2 0 0 1 9.1 3.7L9.7 6.5A2 2 0 0 1 9.4 8.6L8 10A16 16 0 0 0 14 16L15.4 14.6A2 2 0 0 1 17.4 14.2L20.4 14.9A2 2 0 0 1 22 16.9"/></svg>`
        ).node);
    }
}
