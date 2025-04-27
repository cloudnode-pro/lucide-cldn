import {Icon} from "../Icon.js";

export class Wand extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8 19 13M17.8 6.2 19 5M3 21 12 12M12.2 6.2 11 5"/></svg>`
        ).node);
    }
}
