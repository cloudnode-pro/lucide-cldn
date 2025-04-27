import {Icon} from "../Icon.js";

export class Hospital extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V10M14 14H10M14 18H10M14 8H10M18 12H20A2 2 0 0 1 22 14V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V11A2 2 0 0 1 4 9H6"/><path d="M18 22V4A2 2 0 0 0 16 2H8A2 2 0 0 0 6 4V22"/></svg>`
        ).node);
    }
}
