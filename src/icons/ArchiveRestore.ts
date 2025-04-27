import {Icon} from "../Icon.js";

export class ArchiveRestore extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8V19A2 2 0 0 0 6 21H8M20 8V19A2 2 0 0 1 18 21H16M9 15 12 12 15 15M12 12V21"/></svg>`
        ).node);
    }
}
