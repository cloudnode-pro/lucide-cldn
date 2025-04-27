import {Icon} from "../Icon.js";

export class Reply extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 17 4 12 9 7"/><path d="M20 18V16A4 4 0 0 0 16 12H4"/></svg>`
        ).node);
    }
}
