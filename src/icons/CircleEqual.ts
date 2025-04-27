import {Icon} from "../Icon.js";

export class CircleEqual extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10H17M7 14H17"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
