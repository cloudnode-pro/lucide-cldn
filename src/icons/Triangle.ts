import {Icon} from "../Icon.js";

export class Triangle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.7 4A2 2 0 0 0 10.3 4L2.3 18A2 2 0 0 0 4 21H20A2 2 0 0 0 21.7 18Z"/></svg>`
        ).node);
    }
}
