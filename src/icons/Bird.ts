import {Icon} from "../Icon.js";

export class Bird extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.4 18H12A8 8 0 0 0 20 10V7A4 4 0 0 0 12.7 4.7L2 20"/><path d="M20 7 22 7.5 20 8M10 18V21M14 17.8V21M7 18A6 6 0 0 0 10.8 7.4"/></svg>`
        ).node);
    }
}
