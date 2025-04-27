import {Icon} from "../Icon.js";

export class MegaphoneOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.3 9.3 3 11V14L17.1 17.1M21 15.3V6L13.7 8M11.6 16.8A3 3 0 1 1 5.8 15.2"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
