import {Icon} from "../Icon.js";

export class CakeSlice extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="7" r="2"/><path d="M7.2 7.9 3 11V20Q3 21 4 21H20Q21 21 21 20V11C21 9 18 5 14 3L10.4 5.6M16 13H3M16 17H3"/></svg>`
        ).node);
    }
}
