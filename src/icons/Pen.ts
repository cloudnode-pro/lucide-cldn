import {Icon} from "../Icon.js";

export class Pen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.2 6.8A1 1 0 0 0 17.2 2.8L3.8 16.2 3.3 17 2 21.4A.5.5 0 0 0 2.6 22L7 20.7 7.8 20.2z"/></svg>`
        ).node);
    }
}
