import {Icon} from "../Icon.js";

export class ServerOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 2H20A2 2 0 0 1 22 4V8A2 2 0 0 1 20 10H15M10 10 2.5 2.5C2 2 2 2.5 2 5V8A2 2 0 0 0 4 10zM22 17V16A2 2 0 0 0 20 14H19M4 14A2 2 0 0 0 2 16V20A2 2 0 0 0 4 22H20.5L21.5 21.5 22 22 14 14zM2 2 22 22"/></svg>`
        ).node);
    }
}
