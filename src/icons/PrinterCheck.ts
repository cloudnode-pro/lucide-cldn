import {Icon} from "../Icon.js";

export class PrinterCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 22H7A1 1 0 0 1 6 21V15A1 1 0 0 1 7 14H17A1 1 0 0 1 18 15V15.5M16 19 18 21 22 17"/><path d="M6 18H4A2 2 0 0 1 2 16V11A2 2 0 0 1 4 9H20A2 2 0 0 1 22 11V13M6 9V3A1 1 0 0 1 7 2H17A1 1 0 0 1 18 3V9"/></svg>`
        ).node);
    }
}
