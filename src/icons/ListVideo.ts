import {Icon} from "../Icon.js";

export class ListVideo extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H3M16 6H3M12 18H3M16 12 21 15 16 18z"/></svg>`
        ).node);
    }
}
