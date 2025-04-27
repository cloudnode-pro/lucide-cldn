import {Icon} from "../Icon.js";

export class FolderCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10.5 8 13 10 15.5M14 10.5 16 13 14 15.5"/><path d="M20 20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6H12.1A2 2 0 0 1 10.4 5.1L9.6 3.9A2 2 0 0 0 7.9 3H4A2 2 0 0 0 2 5V18A2 2 0 0 0 4 20z"/></svg>`
        ).node);
    }
}
