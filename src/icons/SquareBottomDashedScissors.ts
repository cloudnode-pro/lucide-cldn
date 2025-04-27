import {Icon} from "../Icon.js";

export class SquareBottomDashedScissors extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22A2 2 0 0 1 2 20V4A2 2 0 0 1 4 2H20A2 2 0 0 1 22 4V20A2 2 0 0 1 20 22M10 22H8M16 22H14"/><circle cx="8" cy="8" r="2"/><path d="M9.4 9.4 12 12M14.8 14.8 18 18"/><circle cx="8" cy="16" r="2"/><path d="M18 6 9.4 14.6"/></svg>`
        ).node);
    }
}
