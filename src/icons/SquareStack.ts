import {Icon} from "../Icon.js";

export class SquareStack extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10A2 2 0 0 1 2 8V4Q2.2 2.2 4 2H8A2 2 0 0 1 10 4M10 16A2 2 0 0 1 8 14V10Q8.2 8.2 10 8H14A2 2 0 0 1 16 10"/><rect width="8" height="8" x="14" y="14" rx="2"/></svg>`
        ).node);
    }
}
