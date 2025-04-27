import {Icon} from "../Icon.js";

export class Scissors extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><path d="M8.1 8.1 12 12M20 4 8.1 15.9"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>`
        ).node);
    }
}
