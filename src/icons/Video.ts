import {Icon} from "../Icon.js";

export class Video extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 13 21.2 16.5A.5.5 0 0 0 22 16V7.9A.5.5 0 0 0 21.2 7.4L16 10.5"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>`
        ).node);
    }
}
