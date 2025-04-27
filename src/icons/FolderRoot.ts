import {Icon} from "../Icon.js";

export class FolderRoot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6H12A2 2 0 0 1 10.5 5.1L9.6 3.9A2 2 0 0 0 7.9 3H4A2 2 0 0 0 2 5V18Q2.2 19.8 4 20"/><circle cx="12" cy="13" r="2"/><path d="M12 15V20"/></svg>`
        ).node);
    }
}
