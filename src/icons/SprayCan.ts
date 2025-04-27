import {Icon} from "../Icon.js";

export class SprayCan extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="4" height="4" x="15" y="5"/><path d="M19 9 21 11V21Q21 22 20 22H14Q13 22 13 21V11L15 9M13 14 21 12M13 19 21 17"/></svg>`
        ).node);
    }
}
