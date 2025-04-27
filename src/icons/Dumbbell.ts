import {Icon} from "../Icon.js";

export class Dumbbell extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.4 14.4 9.6 9.6M18.7 21.5A2 2 0 1 1 15.8 18.7L14.1 20.4A2 2 0 1 1 11.2 17.6L17.6 11.2A2 2 0 1 1 20.4 14.1L18.7 15.8A2 2 0 1 1 21.5 18.7zM21.5 21.5 20.1 20.1M3.9 3.9 2.5 2.5M6.4 12.8A2 2 0 1 1 3.6 9.9L5.3 8.2A2 2 0 1 1 2.5 5.3L5.3 2.5A2 2 0 1 1 8.2 5.3L9.9 3.6A2 2 0 1 1 12.8 6.4z"/></svg>`
        ).node);
    }
}
