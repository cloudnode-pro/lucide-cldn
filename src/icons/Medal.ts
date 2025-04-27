import {Icon} from "../Icon.js";

export class Medal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.2 15 2.7 7.1A2 2 0 0 1 2.7 5L4.5 2.8A2 2 0 0 1 6 2H18A2 2 0 0 1 19.6 2.8L21.2 4.9A2 2 0 0 1 21.3 7.1L16.8 15M11 12 5.1 2.2M13 12 18.9 2.2M8 7H16"/><circle cx="12" cy="17" r="5"/><path d="M12 18V16H11.5"/></svg>`
        ).node);
    }
}
