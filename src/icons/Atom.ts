import {Icon} from "../Icon.js";

export class Atom extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2C22.2 18.2 20.2 12.8 15.7 8.3S5.8 1.8 3.8 3.8 3.8 11.2 8.3 15.7 18.2 22.2 20.2 20.2"/><path d="M15.7 15.7C20.2 11.2 22.2 5.8 20.2 3.8S12.8 3.8 8.3 8.3 1.8 18.2 3.8 20.2 11.2 20.2 15.7 15.7"/></svg>`
        ).node);
    }
}
