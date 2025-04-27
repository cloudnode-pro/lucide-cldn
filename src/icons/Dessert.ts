import {Icon} from "../Icon.js";

export class Dessert extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M10.2 3.2A10 10 0 0 0 2 13 2 2 0 0 0 6 13V12A2 2 0 0 1 10 12V16A2 2 0 0 0 14 16V12A2 2 0 0 1 18 12V13A2 2 0 0 0 22 13C22 8.1 18.5 4 13.8 3.2"/><path d="M3.2 14.8A9 9 0 0 0 20.8 14.8"/></svg>`
        ).node);
    }
}
