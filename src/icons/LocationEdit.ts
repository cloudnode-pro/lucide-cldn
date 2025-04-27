import {Icon} from "../Icon.js";

export class LocationEdit extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 9.3A8 8 0 0 0 2 10C2 14.7 6.9 19.6 9 21.5M21.4 16.6A1 1 0 0 0 18.4 13.6L14.4 17.6 13.9 18.5 13 21.4A.5.5 0 0 0 13.6 22L16.6 21 17.3 20.6z"/><circle cx="10" cy="10" r="3"/></svg>`
        ).node);
    }
}
