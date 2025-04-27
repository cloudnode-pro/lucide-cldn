import {Icon} from "../Icon.js";

export class PenTool extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.7 21.3A1 1 0 0 1 14.3 21.3L12.7 19.7A1 1 0 0 1 12.7 18.3L18.3 12.7A1 1 0 0 1 19.7 12.7L21.3 14.3A1 1 0 0 1 21.3 15.7z"/><path d="M18 13 16.6 6.1A1 1 0 0 0 16 5.4L3.2 2A1 1 0 0 0 2 3.2L5.4 16 6 16.6 13 18M2.3 2.3 9.6 9.6"/><circle cx="11" cy="11" r="2"/></svg>`
        ).node);
    }
}
