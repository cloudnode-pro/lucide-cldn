import {Icon} from "../Icon.js";

export class ZapOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 4.9 13.1 2.2A.5.5 0 0 1 14 2.6L12.6 7M15.7 10H20A1 1 0 0 1 20.8 11.6L19 13.4M16.3 16.3 10.9 21.8A.5.5 0 0 1 10 21.4L12 15.4A1 1 0 0 0 11 14H4A1 1 0 0 1 3.2 12.4L7.7 7.7M2 2 22 22"/></svg>`
        ).node);
    }
}
