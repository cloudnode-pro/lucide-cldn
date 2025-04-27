import {Icon} from "../Icon.js";

export class CandyCane extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.7 21A2 2 0 0 1 2.2 19L10.8 5A6 6 0 0 1 21.2 11 2 2 0 1 1 17.7 9 2 2 0 1 0 14.3 7ZM17.8 7 15 2.1M10.9 4.8 13 9M7.9 9.7 9.9 14.1M4.9 14.7 7 18.9"/></svg>`
        ).node);
    }
}
