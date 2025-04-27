import {Icon} from "../Icon.js";

export class Droplet extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22A7 7 0 0 0 19 15Q19 12 16 9.5C13 7 12.5 5.5 12 3Q11.1 7 8 9.5 5 11.9 5 15A7 7 0 0 0 12 22"/></svg>`
        ).node);
    }
}
