import {Icon} from "../Icon.js";

export class BadgeJapaneseYen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.9 8.6A4 4 0 0 1 8.6 4 4 4 0 0 1 15.4 3.9 4 4 0 0 1 20.2 8.6 4 4 0 0 1 20.2 15.4 4 4 0 0 1 15.4 20 4 4 0 0 1 8.6 20.2 4 4 0 0 1 4 15.5 4 4 0 0 1 3.9 8.6"/><path d="M9 8 12 11V18M12 11 15 8M9 12H15M9 16H15"/></svg>`
        ).node);
    }
}
