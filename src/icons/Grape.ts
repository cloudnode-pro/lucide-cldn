import {Icon} from "../Icon.js";

export class Grape extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 5V2L16.1 7.9"/><circle cx="16.6" cy="15.9" r="3"/><circle cx="8.1" cy="7.4" r="3"/><circle cx="12.3" cy="11.7" r="3"/><circle cx="13.9" cy="5.8" r="3"/><circle cx="18.1" cy="10.1" r="3"/><circle cx="6.6" cy="13.2" r="3"/><circle cx="10.8" cy="17.4" r="3"/><circle cx="5" cy="19" r="3"/></svg>`
        ).node);
    }
}
