import {Icon} from "../Icon.js";

export class Glasses extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15A2 2 0 0 0 12 13 2 2 0 0 0 10 15M2.5 13 5 7C5.7 5.7 6.4 5 8 5M21.5 13 19 7Q18.1 5 16 5"/></svg>`
        ).node);
    }
}
