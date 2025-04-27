import {Icon} from "../Icon.js";

export class ListStart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12H3M16 18H3M10 6H3M21 18V8A2 2 0 0 0 19 6H14"/><path d="M16 8 14 6 16 4"/></svg>`
        ).node);
    }
}
