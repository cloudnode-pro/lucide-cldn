import {Icon} from "../Icon.js";

export class Folders extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 17A2 2 0 0 0 22 15V9A2 2 0 0 0 20 7H16.1A2 2 0 0 1 14.4 6.1L13.6 4.9A2 2 0 0 0 11.9 4H8A2 2 0 0 0 6 6V15A2 2 0 0 0 8 17Z"/><path d="M2 8V19A2 2 0 0 0 4 21H18"/></svg>`
        ).node);
    }
}
