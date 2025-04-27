import {Icon} from "../Icon.js";

export class Radical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12H6.3A1 1 0 0 1 7.3 12.7L9.4 20.7A.5.5 0 0 0 10.5 20.5L13.8 4.8A1 1 0 0 1 14.8 4H21"/></svg>`
        ).node);
    }
}
