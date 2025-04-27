import {Icon} from "../Icon.js";

export class Heading5 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12H12M4 18V6M12 18V6M17 13V10H21M17 17.7Q17.6 18 18.3 18C19.8 18 21 16.9 21 15.5S19.8 13 18.3 13H17"/></svg>`
        ).node);
    }
}
