import {Icon} from "../Icon.js";

export class ListTree extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12H13M21 6H8M21 18H13M3 6V10Q3.2 11.8 5 12H8"/><path d="M3 10V16Q3.2 17.8 5 18H8"/></svg>`
        ).node);
    }
}
