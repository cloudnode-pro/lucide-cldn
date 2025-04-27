import {Icon} from "../Icon.js";

export class Captions extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15H11M15 15H17M7 11H9M13 11H17"/></svg>`
        ).node);
    }
}
