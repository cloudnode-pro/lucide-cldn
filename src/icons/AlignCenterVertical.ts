import {Icon} from "../Icon.js";

export class AlignCenterVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V22M8 10H4A2 2 0 0 1 2 8V6Q2.2 4.2 4 4H8M16 10H20A2 2 0 0 0 22 8V6A2 2 0 0 0 20 4H16M8 20H7A2 2 0 0 1 5 18V16Q5.2 14.2 7 14H8M16 14H17A2 2 0 0 1 19 16V18A2 2 0 0 1 17 20H16"/></svg>`
        ).node);
    }
}
