import {Icon} from "../Icon.js";

export class EyeOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 5A11 11 0 0 1 22 11.8V12.3L20.5 14.8M14 14.2A3 3 0 0 1 9.9 9.9"/><path d="M17.5 17.5A10.8 10.8 0 0 1 2 12.3V11.7A11 11 0 0 1 6.5 6.5M2 2 22 22"/></svg>`
        ).node);
    }
}
