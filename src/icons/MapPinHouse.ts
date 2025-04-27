import {Icon} from "../Icon.js";

export class MapPinHouse extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22A1 1 0 0 1 14 21V17A1 1 0 0 1 14.4 16.2L17.4 14.2A1 1 0 0 1 18.6 14.2L21.6 16.2A1 1 0 0 1 22 17V21A1 1 0 0 1 21 22zM18 10A8 8 0 0 0 2 10C2 15 7.5 20.2 9.4 21.8L10 22M18 22V19"/><circle cx="10" cy="10" r="3"/></svg>`
        ).node);
    }
}
