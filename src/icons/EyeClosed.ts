import {Icon} from "../Icon.js";

export class EyeClosed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18 14.3 14.8M2 8A10.6 10.6 0 0 0 22 8M20 15 18.3 13M4 15 5.7 13M9 18 9.7 14.8"/></svg>`
        ).node);
    }
}
