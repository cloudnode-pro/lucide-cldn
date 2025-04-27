import {Icon} from "../Icon.js";

export class PlaneTakeoff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22H22M6.4 17.4 4 17 2 13 3.1 12.5A2 2 0 0 1 4.9 12.5H5.1A2 2 0 0 0 6.9 12.5L8 12 5 6 5.9 5.6A2 2 0 0 1 7.9 5.8L12 8.8A2 2 0 0 0 14.1 8.9L18.3 7A2 2 0 0 1 20 6.7L21 7A1.4 1.4 0 0 1 21.9 9L21.5 9.8Q21 10.5 20.5 10.8L7.4 17.2z"/></svg>`
        ).node);
    }
}
