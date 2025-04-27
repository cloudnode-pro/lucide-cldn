import {Icon} from "../Icon.js";

export class Gift extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="4" x="3" y="8" rx="1"/><path d="M12 8V21M19 12V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V12M7.5 8A2.5 2.5 0 0 1 7.5 3 4.8 8 0 0 1 12 8 4.8 8 0 0 1 16.5 3 2.5 2.5 0 0 1 16.5 8"/></svg>`
        ).node);
    }
}
