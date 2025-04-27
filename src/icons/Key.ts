import {Icon} from "../Icon.js";

export class Key extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.5 7.5 17.8 9.8A1 1 0 0 0 19.2 9.8L21.3 7.7A1 1 0 0 0 21.3 6.3L19 4M21 2 11.4 11.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>`
        ).node);
    }
}
