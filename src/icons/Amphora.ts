import {Icon} from "../Icon.js";

export class Amphora extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V7.6Q10 8.3 9.3 8.6A6 6 0 0 0 6 14C6 18 9 21 11 22"/><path d="M10 5H8A2 2 0 0 0 8 9H8.7M14 2V7.6Q14 8.3 14.7 8.6A6 6 0 0 1 18 14C18 18 15 21 13 22"/><path d="M14 5H16A2 2 0 0 1 16 9H15.3M18 22H6M9 2H15"/></svg>`
        ).node);
    }
}
