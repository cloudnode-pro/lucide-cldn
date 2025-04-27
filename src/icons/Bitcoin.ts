import {Icon} from "../Icon.js";

export class Bitcoin extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.8 19C16.7 20 17.9 13 13 12.3M11.8 19 5.8 18M11.9 19 11.4 21M13 12C18 13.2 19 6.2 14.2 5.4M13 12.2 9 11.5M14.2 5.3 8.2 4.3M14.3 5.3 14.5 3.3M7.5 20.3 10.6 2.7"/></svg>`
        ).node);
    }
}
