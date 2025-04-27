import {Icon} from "../Icon.js";

export class PencilOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10 3.8 16.2 3.3 17 2 21.4A.5.5 0 0 0 2.6 22L7 20.7 7.8 20.2 14 14M12.8 7.2 17.2 2.8A1 1 0 1 1 21.2 6.8L16.8 11.2M15 5 19 9M2 2 22 22"/></svg>`
        ).node);
    }
}
