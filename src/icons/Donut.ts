import {Icon} from "../Icon.js";

export class Donut extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.5 10A2.5 2.5 0 0 1 18.1 7H18A3 3 0 0 1 15.4 2.6 10 10 0 1 0 21.7 9.7Q21.2 10 20.5 10"/><circle cx="12" cy="12" r="3"/></svg>`
        ).node);
    }
}
