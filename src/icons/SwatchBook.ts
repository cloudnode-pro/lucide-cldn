import {Icon} from "../Icon.js";

export class SwatchBook extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17A4 4 0 0 1 3 17V5A2 2 0 0 1 5 3H9A2 2 0 0 1 11 5Z"/><path d="M16.7 13H19A2 2 0 0 1 21 15V19A2 2 0 0 1 19 21H7M7 17"/><path d="M11 8 13.3 5.7A2.4 2.4 0 0 1 16.7 5.7L18.6 7.6A2.4 2.4 0 0 1 18.6 11L10 19.8"/></svg>`
        ).node);
    }
}
