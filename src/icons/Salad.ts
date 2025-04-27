import {Icon} from "../Icon.js";

export class Salad extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21H17M12 21A9 9 0 0 0 21 12H3A9 9 0 0 0 12 21"/><path d="M11.4 12A2.4 2.4 0 0 1 11 7.2 2.4 2.4 0 0 1 14.2 4.5 2.4 2.4 0 0 1 17.7 3.8 2.4 2.4 0 0 1 21 7.2 2.4 2.4 0 0 1 20 10.9V12M13 12 17 8"/><path d="M10.9 7.3A4 4 0 0 0 4 10Q4 11 4.5 12"/></svg>`
        ).node);
    }
}
