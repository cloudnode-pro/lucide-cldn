import {Icon} from "../Icon.js";

export class VideoOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 6H14A2 2 0 0 1 16 8V10.5L21.2 7.5A.5.5 0 0 1 22 7.8V16M16 16A2 2 0 0 1 14 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6H6M2 2 22 22"/></svg>`
        ).node);
    }
}
