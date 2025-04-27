import {Icon} from "../Icon.js";

export class PiggyBank extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17H14V19A1 1 0 0 0 15 20H17A1 1 0 0 0 18 19V16A3 3 0 0 0 20 14H21A1 1 0 0 0 22 13V11A1 1 0 0 0 21 10H20A5 5 0 0 0 18 6V3A4 4 0 0 0 14.8 4.6L14.5 5H11A6 6 0 0 0 5 11V12A5 5 0 0 0 7 16V19A1 1 0 0 0 8 20H10A1 1 0 0 0 11 19zM2 8V9A2 2 0 0 0 4 11H5"/></svg>`
        ).node);
    }
}
