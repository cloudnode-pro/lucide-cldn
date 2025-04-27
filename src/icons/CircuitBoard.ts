import {Icon} from "../Icon.js";

export class CircuitBoard extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9H15A2 2 0 0 0 17 7V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21V17A2 2 0 0 1 9 15H13"/><circle cx="15" cy="15" r="2"/></svg>`
        ).node);
    }
}
