import {Icon} from "../Icon.js";

export class TreePine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14 20 17.3A1 1 0 0 1 19.3 19H4.7A1 1 0 0 1 4 17.3L7 14H6.7A1 1 0 0 1 6 12.3L9 9H8.8A1 1 0 0 1 8 7.3L12 3 16 7.3A1 1 0 0 1 15.2 9H15L18 12.3A1 1 0 0 1 17.3 14zM12 22V19"/></svg>`
        ).node);
    }
}
