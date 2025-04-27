import {Icon} from "../Icon.js";

export class Shapes extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.3 10A.7.7 0 0 1 7.7 9L11.4 3A.7.7 0 0 1 12.6 3L16.3 8.9A.7.7 0 0 1 15.7 10Z"/><rect width="7" height="7" x="3" y="14" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>`
        ).node);
    }
}
