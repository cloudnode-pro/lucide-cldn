import {Icon} from "../Icon.js";

export class Guitar extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.9 12.1 16.4 7.6M20.1 2.3A1 1 0 0 0 18.7 2.3L17.6 3.4A2 2 0 0 0 17 4.8V6.2A2 2 0 0 1 16.4 7.6 2 2 0 0 1 17.8 7H19.2A2 2 0 0 0 20.6 6.4L21.7 5.3A1 1 0 0 0 21.7 3.9zM6 16 8 18M8.2 9.9A3 3 0 0 1 11 8 5 5 0 0 1 16 13Q15.9 15 14.1 15.8L13.2 16.2A2 2 0 0 0 12 18 4 4 0 0 1 8 22 6 6 0 0 1 2 16 4 4 0 0 1 6 12 2 2 0 0 0 7.8 10.8z"/><circle cx="11.5" cy="12.5" r="0.5" fill="currentColor"/></svg>`
        ).node);
    }
}
