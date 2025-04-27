import {Icon} from "../Icon.js";

export class PaintbrushVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V4M14 2V6M17 2A1 1 0 0 1 18 3V12H6V3A1 1 0 0 1 7 2zM6 12A1 1 0 0 0 5 13V14A2 2 0 0 0 7 16H9A1 1 0 0 1 10 17V19.9A2 2 0 1 0 14 19.9V17A1 1 0 0 1 15 16H17A2 2 0 0 0 19 14V13A1 1 0 0 0 18 12"/></svg>`
        ).node);
    }
}
