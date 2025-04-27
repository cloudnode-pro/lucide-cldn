import {Icon} from "../Icon.js";

export class ListMusic extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15V6M18.5 18A2.5 2.5 0 1 0 18.5 13 2.5 2.5 0 0 0 18.5 18M12 12H3M16 6H3M12 18H3"/></svg>`
        ).node);
    }
}
