import {Icon} from "../Icon.js";

export class FolderCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6H12.1A2 2 0 0 1 10.4 5.1L9.6 3.9A2 2 0 0 0 7.9 3H4A2 2 0 0 0 2 5V18A2 2 0 0 0 4 20Z"/><path d="M9 13 11 15 15 11"/></svg>`
        ).node);
    }
}
