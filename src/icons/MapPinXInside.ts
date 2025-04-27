import {Icon} from "../Icon.js";

export class MapPinXInside extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10C20 15 14.5 20.2 12.6 21.8A1 1 0 0 1 11.4 21.8C9.5 20.2 4 15 4 10A8 8 0 0 1 20 10M14.5 7.5 9.5 12.5M9.5 7.5 14.5 12.5"/></svg>`
        ).node);
    }
}
