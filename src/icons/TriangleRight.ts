import {Icon} from "../Icon.js";

export class TriangleRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 18A2 2 0 0 1 20 20H3Q1.3 19.9 2.6 18.7L20.4 4.3Q21.9 3.3 22 5Z"/></svg>`
        ).node);
    }
}
