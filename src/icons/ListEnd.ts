import {Icon} from "../Icon.js";

export class ListEnd extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12H3M16 6H3M10 18H3M21 6V16A2 2 0 0 1 19 18H14"/><path d="M16 16 14 18 16 20"/></svg>`
        ).node);
    }
}
