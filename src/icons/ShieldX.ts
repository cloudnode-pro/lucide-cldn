import {Icon} from "../Icon.js";

export class ShieldX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13C20 18 16.5 20.5 12.3 22H11.7C7.5 20.4 4 18 4 13V6A1 1 0 0 1 5 5C7 5 9.5 3.8 11.2 2.3A1 1 0 0 1 12.8 2.3C14.5 3.8 17 5 19 5A1 1 0 0 1 20 6zM14.5 9.5 9.5 14.5M9.5 9.5 14.5 14.5"/></svg>`
        ).node);
    }
}
