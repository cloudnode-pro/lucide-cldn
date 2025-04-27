import {Icon} from "../Icon.js";

export class Dribbble extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M19.1 5C15.2 9.2 10 10.5 2.3 11M21.8 12.8Q11.8 11 5.4 19.2"/><path d="M8.6 2.8C12.9 8.8 14.6 12.2 16.6 20.5"/></svg>`
        ).node);
    }
}
