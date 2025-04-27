import {Icon} from "../Icon.js";

export class Eraser extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21 2.7 16.7C1.7 15.7 1.7 14.2 2.7 13.3L12.3 3.7C13.3 2.7 14.8 2.7 15.7 3.7L21.3 9.3C22.3 10.3 22.3 11.8 21.3 12.7L13 21M22 21H7M5 11 14 20"/></svg>`
        ).node);
    }
}
