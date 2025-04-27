import {Icon} from "../Icon.js";

export class Bug extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2 9.9 3.9M14.1 3.9 16 2M9 7.1V6.1A3 3 0 1 1 15 6.1V7.1"/><path d="M12 20A6 6 0 0 1 6 14V11A4 4 0 0 1 10 7H14A4 4 0 0 1 18 11V14A6 6 0 0 1 12 20M12 20V11"/><path d="M6.5 9A4 4 0 0 1 3 5M6 13H2M3 21A4 4 0 0 1 6.8 17M21 5A4 4 0 0 1 17.5 9M22 13H18M17.2 17A4 4 0 0 1 21 21"/></svg>`
        ).node);
    }
}
