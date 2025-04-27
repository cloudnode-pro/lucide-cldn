import {Icon} from "../Icon.js";

export class Milk extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2H16M9 2V4.8A4 4 0 0 1 8.3 7L7.7 8A4 4 0 0 0 7 10.2V20A2 2 0 0 0 9 22H15A2 2 0 0 0 17 20V10.2A4 4 0 0 0 16.3 8L15.7 7A4 4 0 0 1 15 4.8V2"/><path d="M7 15A7 7 0 0 1 12 15 7 7 0 0 0 17 15"/></svg>`
        ).node);
    }
}
