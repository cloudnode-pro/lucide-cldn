import {Icon} from "../Icon.js";

export class Bell extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21A2 2 0 0 0 13.7 21M3.3 15.3A1 1 0 0 0 4 17H20A1 1 0 0 0 20.7 15.3C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8C6 12.5 4.6 14 3.3 15.3"/></svg>`
        ).node);
    }
}
