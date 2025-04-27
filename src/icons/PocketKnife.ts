import {Icon} from "../Icon.js";

export class PocketKnife extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2V3C3 4 5 4 5 5S3 6 3 7 5 8 5 9 3 10 3 11 5 12 5 13M20.8 8.8A4 4 0 0 0 15.2 3.2L3.2 15.2A4 4 0 1 0 8.8 20.8Z"/><path d="M18 11.7V22A4 4 0 0 0 22 18V6"/></svg>`
        ).node);
    }
}
