import {Icon} from "../Icon.js";

export class Hourglass extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 22H19M5 2H19M17 22V17.8A2 2 0 0 0 16.4 16.4L12 12 7.6 16.4A2 2 0 0 0 7 17.8V22M7 2V6.2A2 2 0 0 0 7.6 7.6L12 12 16.4 7.6A2 2 0 0 0 17 6.2V2"/></svg>`
        ).node);
    }
}
