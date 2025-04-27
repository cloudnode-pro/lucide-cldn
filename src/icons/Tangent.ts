import {Icon} from "../Icon.js";

export class Tangent extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="17" cy="4" r="2"/><path d="M15.6 5.4 5.4 15.6"/><circle cx="4" cy="17" r="2"/><path d="M12 22S8 13 10.5 10.5 22 12 22 12"/></svg>`
        ).node);
    }
}
