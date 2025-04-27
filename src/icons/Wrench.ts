import {Icon} from "../Icon.js";

export class Wrench extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.7 6.3A1 1 0 0 0 14.7 7.7L16.3 9.3A1 1 0 0 0 17.7 9.3L21.5 5.5A6 6 0 0 1 13.5 13.5L6.6 20.4A2.1 2.1 0 0 1 3.6 17.4L10.6 10.4A6 6 0 0 1 18.4 2.6z"/></svg>`
        ).node);
    }
}
