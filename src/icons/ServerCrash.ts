import {Icon} from "../Icon.js";

export class ServerCrash extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 10H4A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H20A2 2 0 0 1 22 4V8A2 2 0 0 1 20 10H18M6 14H4A2 2 0 0 0 2 16V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V16A2 2 0 0 0 20 14H18M6 18"/><path d="M13 6 9 12H15L11 18"/></svg>`
        ).node);
    }
}
