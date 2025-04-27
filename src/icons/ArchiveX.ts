import {Icon} from "../Icon.js";

export class ArchiveX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8V19A2 2 0 0 0 6 21H18A2 2 0 0 0 20 19V8M9.5 17 14.5 12M9.5 12 14.5 17"/></svg>`
        ).node);
    }
}
