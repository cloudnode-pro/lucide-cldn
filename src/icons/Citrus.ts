import {Icon} from "../Icon.js";

export class Citrus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.7 17.7A1 1 0 0 1 21.7 19.3 12 12 0 0 1 4.6 2.3 1 1 0 0 1 6.3 2.4z"/><path d="M19.7 15.7A8 8 0 0 1 8.3 4.3M14 10 8.5 15.5"/><path d="M14 17.9V10H6.2"/></svg>`
        ).node);
    }
}
