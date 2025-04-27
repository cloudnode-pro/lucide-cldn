import {Icon} from "../Icon.js";

export class Footprints extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16V13.6C4 11.5 3 10.5 3 8 3 5.3 4.5 2 7.5 2 9.4 2 10 3.8 10 5.5 10 8.6 8 11.2 8 14.2V16A2 2 0 1 1 4 16M20 20V17.6C20 15.5 21 14.5 21 12 21 9.3 19.5 6 16.5 6 14.6 6 14 7.8 14 9.5 14 12.6 16 15.2 16 18.2V20A2 2 0 1 0 20 20M16 17H20M4 13H8"/></svg>`
        ).node);
    }
}
