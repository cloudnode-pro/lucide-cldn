import {Icon} from "../Icon.js";

export class TicketPercent extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9A3 3 0 1 1 2 15V17A2 2 0 0 0 4 19H20A2 2 0 0 0 22 17V15A3 3 0 1 1 22 9V7A2 2 0 0 0 20 5H4A2 2 0 0 0 2 7ZM15 9 9 15M15 15"/></svg>`
        ).node);
    }
}
