import {Icon} from "../Icon.js";

export class Scale extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 16 19 8 22 16A5 5 0 0 1 16 16M2 16 5 8 8 16A5 5 0 0 1 2 16M7 21H17M12 3V21M3 7H5C7 7 10 6 12 5 14 6 17 7 19 7H21"/></svg>`
        ).node);
    }
}
