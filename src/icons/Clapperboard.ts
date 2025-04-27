import {Icon} from "../Icon.js";

export class Clapperboard extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.2 6 3 11 2.1 8.6A2 2 0 0 1 3.4 6.1L16.9 2.1A2 2 0 0 1 19.4 3.4ZM6.2 5.3 9.3 9.2M12.4 3.4 15.5 7.4M3 11H21V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19Z"/></svg>`
        ).node);
    }
}
