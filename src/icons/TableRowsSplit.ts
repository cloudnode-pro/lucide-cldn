import {Icon} from "../Icon.js";

export class TableRowsSplit extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 10H16M15 22V14M15 2V6M2 10H4M20 10H22M3 19H21M3 22V16A2 2 135 0 1 5 14H19A2 2 45 0 1 21 16V22M3 2V4A2 2 45 0 0 5 6H19A2 2 135 0 0 21 4V2M8 10H10M9 22V14M9 2V6"/></svg>`
        ).node);
    }
}
