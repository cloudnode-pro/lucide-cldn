import {Icon} from "../Icon.js";

export class Shirt extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.4 3.5 16 2A4 4 0 0 1 8 2L3.6 3.5A2 2 0 0 0 2.3 5.7L2.9 9.2A1 1 0 0 0 3.9 10H6V20Q6.2 21.8 8 22H16A2 2 0 0 0 18 20V10H20.2A1 1 0 0 0 21.2 9.2L21.6 5.7A2 2 0 0 0 20.4 3.5"/></svg>`
        ).node);
    }
}
