import {Icon} from "../Icon.js";

export class SquareCheckBig extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10.5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H17.5"/><path d="M9 11 12 14 22 4"/></svg>`
        ).node);
    }
}
