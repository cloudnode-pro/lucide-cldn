import {Icon} from "../Icon.js";

export class ThumbsUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10V22M15 5.9 14 10H19.8A2 2 0 0 1 21.8 12.6L19.4 20.6A2 2 0 0 1 17.5 22H4A2 2 0 0 1 2 20V12A2 2 0 0 1 4 10H6.8A2 2 0 0 0 8.6 8.9L12 2A3 3 0 0 1 15 5.9"/></svg>`
        ).node);
    }
}
