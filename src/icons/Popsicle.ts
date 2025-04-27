import {Icon} from "../Icon.js";

export class Popsicle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.6 14.4Q19.8 13 18.6 11.6L10.5 3.5A5 5 0 1 0 3.4 10.6L11.5 18.7Q13 19.7 14.4 18.6ZM22 22 16.5 16.5"/></svg>`
        ).node);
    }
}
