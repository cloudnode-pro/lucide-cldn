import {Icon} from "../Icon.js";

export class Radar extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5A10 10 0 0 0 7 3.2M2.3 9.6A10 10 0 1 0 21.3 8.4"/><path d="M16.2 7.8A6 6 0 1 0 8.2 16.7M18 11.7A6 6 0 0 1 15.8 16.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19.1 4.9"/></svg>`
        ).node);
    }
}
