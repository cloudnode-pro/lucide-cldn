import {Icon} from "../Icon.js";

export class Newspaper extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18H10M18 14H10M4 22H20A2 2 0 0 0 22 20V4A2 2 0 0 0 20 2H8A2 2 0 0 0 6 4V20A2 2 0 0 1 2 20V11A2 2 0 0 1 4 9H6"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>`
        ).node);
    }
}
