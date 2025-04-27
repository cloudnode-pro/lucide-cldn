import {Icon} from "../Icon.js";

export class Puzzle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.4 4.4A1 1 0 0 0 17 3.9 2.5 2.5 0 1 1 20 7 1 1 0 0 0 19.6 8.6L21.3 10.3A2.4 2.4 0 0 1 21.3 13.7L19.6 15.4A1 1 0 0 1 18 14.9 2.5 2.5 0 1 0 15 18 1 1 0 0 1 15.4 19.6L13.7 21.3A2.4 2.4 0 0 1 10.3 21.3L8.6 19.6A1 1 0 0 0 7 20.1 2.5 2.5 0 1 1 4 17 1 1 0 0 0 4.4 15.4L2.7 13.7A2.4 2.4 0 0 1 2.7 10.3L4.4 8.6A1 1 0 0 1 6 9.1 2.5 2.5 0 1 0 9 6 1 1 0 0 1 8.6 4.4L10.3 2.7A2.4 2.4 0 0 1 13.7 2.7z"/></svg>`
        ).node);
    }
}
