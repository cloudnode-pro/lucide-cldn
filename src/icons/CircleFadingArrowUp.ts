import {Icon} from "../Icon.js";

export class CircleFadingArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 1 19.4 18.8M16 12 12 8 8 12M12 16V8M2.5 8.9A10 10 0 0 0 2 11.9M2.8 16A10 10 0 0 0 5.3 19.4M4.6 5.2 5.6 4.4M8.6 21.4A10 10 0 0 0 16.3 21"/></svg>`
        ).node);
    }
}
