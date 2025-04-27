import {Icon} from "../Icon.js";

export class Beef extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.4 13.7A6.5 6.5 0 1 0 6.3 6.6C5.2 9.7 5.5 10.5 3 12.6A3 3 0 0 0 5 18C9 18 13.4 16.2 16.4 13.7"/><path d="M18.5 6 20.7 10.5A6.5 6.5 0 0 1 18.4 17.7C15.4 20.2 11 22 7 22A3 3 0 0 1 4.3 20.3L2.4 16.5"/><circle cx="12.5" cy="8.5" r="2.5"/></svg>`
        ).node);
    }
}
