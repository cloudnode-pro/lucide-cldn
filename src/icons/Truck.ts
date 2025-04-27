import {Icon} from "../Icon.js";

export class Truck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 18V6A2 2 0 0 0 12 4H4A2 2 0 0 0 2 6V17A1 1 0 0 0 3 18H5M15 18H9M19 18H21A1 1 0 0 0 22 17V13.4L21.8 12.7 18.3 8.4A1 1 0 0 0 17.5 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`
        ).node);
    }
}
