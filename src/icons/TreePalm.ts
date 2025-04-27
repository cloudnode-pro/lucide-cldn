import {Icon} from "../Icon.js";

export class TreePalm extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 8C13 5.2 10.5 3 7.5 3S2 5.2 2 8H4L5 7 6 8H10M13 7.1A6 6 0 0 1 16.5 6C19.5 6 22 8.2 22 11H19L18 10 17 11H14"/><path d="M5.9 9.7C3.7 12 3.6 15.2 5.5 17.1L9.8 13 10.5 12.2 11.2 11.5 13.3 9.4C11.3 7.4 8 7.6 6 9.7"/><path d="M11 15.5C11.5 18 10.8 20 10 22H14C16 16.5 13.5 10 13 8"/></svg>`
        ).node);
    }
}
