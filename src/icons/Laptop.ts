import {Icon} from "../Icon.js";

export class Laptop extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 16V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V16M20 16H4M20 16 21.3 18.6A1 1 0 0 1 20.3 20H3.7A1 1 0 0 1 2.7 18.6L4 16"/></svg>`
        ).node);
    }
}
