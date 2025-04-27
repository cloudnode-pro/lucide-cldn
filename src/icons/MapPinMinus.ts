import {Icon} from "../Icon.js";

export class MapPinMinus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 14Q20 12 20 10A8 8 0 0 0 4 10C4 15 9.5 20.2 11.4 21.8A1 1 0 0 0 12.6 21.8L13.4 21.1"/><circle cx="12" cy="10" r="3"/><path d="M16 18H22"/></svg>`
        ).node);
    }
}
