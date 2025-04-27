import {Icon} from "../Icon.js";

export class Coffee extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V4M14 2V4M16 8A1 1 0 0 1 17 9V17A4 4 0 0 1 13 21H7A4 4 0 0 1 3 17V9A1 1 0 0 1 4 8H18A4 4 0 1 1 18 16H17M6 2V4"/></svg>`
        ).node);
    }
}
