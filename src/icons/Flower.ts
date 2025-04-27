import {Icon} from "../Icon.js";

export class Flower extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5 4.5 4.5 0 1 1 16.5 12 4.5 4.5 0 1 1 12 16.5M12 7.5V9M7.5 12H9M16.5 12H15M12 16.5V15M8 8 9.9 9.9M14.1 9.9 16 8M8 16 9.9 14.1M14.1 14.1 16 16"/></svg>`
        ).node);
    }
}
