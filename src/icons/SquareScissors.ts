import {Icon} from "../Icon.js";

export class SquareScissors extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><circle cx="8" cy="8" r="2"/><path d="M9.4 9.4 12 12M14.8 14.8 18 18"/><circle cx="8" cy="16" r="2"/><path d="M18 6 9.4 14.6"/></svg>`
        ).node);
    }
}
