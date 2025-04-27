import {Icon} from "../Icon.js";

export class LampDesk extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 2.3A1 1 0 0 1 11.7 2.3L14.2 4.8 20.2 6A1 1 0 0 1 20.7 7.7L13.7 14.7A1 1 0 0 1 12 14.2L10.8 8.2 8.3 5.7A1 1 0 0 1 8.3 4.3zM14.2 4.8 10.8 8.2M3 20A2 2 0 0 1 5 18H9A2 2 0 0 1 11 20V21A1 1 0 0 1 10 22H4A1 1 0 0 1 3 21z"/><path d="M9 6.5 4.4 11.3A1 1 0 0 0 4 12.5L7 18"/></svg>`
        ).node);
    }
}
