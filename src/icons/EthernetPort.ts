import {Icon} from "../Icon.js";

export class EthernetPort extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 20 18 17H20A2 2 0 0 0 22 15V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V15A2 2 0 0 0 4 17H6L9 20zM6 8V9M10 8V9M14 8V9M18 8V9"/></svg>`
        ).node);
    }
}
