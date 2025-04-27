import {Icon} from "../Icon.js";

export class Pentagon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.8 2.4A2 2 0 0 1 13.2 2.4L21.2 8A2 2 0 0 1 21.9 10.4L18.9 19.6A2 2 0 0 1 16.9 21H7A2 2 0 0 1 5.1 19.6L2.1 10.4A2 2 0 0 1 2.8 8z"/></svg>`
        ).node);
    }
}
