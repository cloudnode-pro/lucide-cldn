import {Icon} from "../Icon.js";

export class Stamp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 22H19M19.3 13.7A3 3 0 0 0 17.5 13H6.5A2.5 2.5 0 0 0 4 15.5V17A1 1 0 0 0 5 18H19A1 1 0 0 0 20 17V15.5Q20 14.5 19.3 13.7M14 13V8.5C14 7 15 7 15 5A3 3 0 0 0 12 2C10.3 2 9 3 9 5S10 7 10 8.5V13"/></svg>`
        ).node);
    }
}
