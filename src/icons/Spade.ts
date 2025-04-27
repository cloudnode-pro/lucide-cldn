import {Icon} from "../Icon.js";

export class Spade extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 9C3.5 10.5 2 12.2 2 14.5A5.5 5.5 0 0 0 7.5 20C9.3 20 10.5 19.5 12 18 13.5 19.5 14.7 20 16.5 20A5.5 5.5 0 0 0 22 14.5C22 12.2 20.5 10.5 19 9L12 2zM12 18V22"/></svg>`
        ).node);
    }
}
