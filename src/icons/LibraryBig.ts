import {Icon} from "../Icon.js";

export class LibraryBig extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3V21M20.4 18.9Q20.6 19.8 19.8 20.2L17.9 20.9Q17 21.1 16.6 20.3L11.1 5.1Q10.9 4.2 11.7 3.8L13.6 3.1Q14.5 2.9 14.9 3.7Z"/></svg>`
        ).node);
    }
}
