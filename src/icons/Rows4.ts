import {Icon} from "../Icon.js";

export class Rows4 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 7.5H3M21 12H3M21 16.5H3"/></svg>`
        ).node);
    }
}
