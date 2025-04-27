import {Icon} from "../Icon.js";

export class Torus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="11" rx="3" ry="2"/><ellipse cx="12" cy="12.5" rx="10" ry="8.5"/></svg>`
        ).node);
    }
}
