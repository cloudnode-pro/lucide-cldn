import {Icon} from "../Icon.js";

export class Forward extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 17 20 12 15 7"/><path d="M4 18V16A4 4 0 0 1 8 12H20"/></svg>`
        ).node);
    }
}
