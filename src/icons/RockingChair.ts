import {Icon} from "../Icon.js";

export class RockingChair extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="3.5 2 6.5 12.5 18 12.5"/><line x1="9.5" x2="5.5" y1="12.5" y2="20"/><line x1="15" x2="18.5" y1="12.5" y2="20"/><path d="M2.8 18A13 13 0 0 0 21.3 18"/></svg>`
        ).node);
    }
}
