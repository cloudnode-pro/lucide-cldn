import {Icon} from "../Icon.js";

export class RollerCoaster extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 19V5M10 19V6.8M14 19V11.2M18 5V9M18 19V13M22 19V9M2 19V9A4 4 0 0 1 6 5Q9 5 12 9C15 13 16 13 18 13A4 4 0 1 0 15 6.4"/></svg>`
        ).node);
    }
}
