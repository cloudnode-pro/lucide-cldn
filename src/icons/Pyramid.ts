import {Icon} from "../Icon.js";

export class Pyramid extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.5 16.9A1 1 0 0 1 2.2 15.5L11.2 2.4A1 1 0 0 1 12.8 2.4L21.8 15.4A1 1 0 0 1 21.5 16.8L13 21.7A2 2 0 0 1 11 21.7ZM12 2V22"/></svg>`
        ).node);
    }
}
