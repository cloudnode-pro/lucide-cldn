import {Icon} from "../Icon.js";

export class Files extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 7H17A2 2 0 0 1 15 5V2"/><path d="M9 18A2 2 0 0 1 7 16V4A2 2 0 0 1 9 2H16L20 6V16A2 2 0 0 1 18 18Z"/><path d="M3 7.6V20.4A1.6 1.6 0 0 0 4.6 22H14.4"/></svg>`
        ).node);
    }
}
