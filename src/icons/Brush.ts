import {Icon} from "../Icon.js";

export class Brush extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 10 14 13M6.5 21A3.5 3.5 0 1 0 3 17.5 3 3 0 0 1 2.3 19.3 1 1 0 0 0 3 21z"/><path d="M10 17 21.4 5.6A1 1 0 0 0 18.4 2.6L7 14"/></svg>`
        ).node);
    }
}
