import {Icon} from "../Icon.js";

export class Podcast extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.9 18.6A9 9 0 1 0 7.2 18.6"/><path d="M8 14A5 5 0 1 1 16 14"/><circle cx="12" cy="11" r="1"/><path d="M13 17A1 1 0 1 0 11 17L11.5 21.5A.5.5 0 1 0 12.5 21.5Z"/></svg>`
        ).node);
    }
}
