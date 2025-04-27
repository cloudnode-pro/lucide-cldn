import {Icon} from "../Icon.js";

export class Shrimp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 22Q13.6 21.1 15.5 21 13.5 20.9 13 20M14 2A3 3 0 0 1 10.8 3.8L4.6 3.2A2.4 2.4 0 1 0 4.4 8H15.5A1 1 0 0 1 15.5 21 1 1 0 0 0 15.5 16H12A7 7 0 0 1 5 9V8"/><path d="M14 8A9 9 0 0 1 14 16M16 16C18 16 20.5 12 20 10"/></svg>`
        ).node);
    }
}
