import {Icon} from "../Icon.js";

export class Map extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.1 5.6A2 2 0 0 0 16 5.6L19.6 3.7A1 1 0 0 1 21 4.7V17.3A1 1 0 0 1 20.4 18.3L16 20.6A2 2 0 0 1 14 20.6L10 18.4A2 2 0 0 0 8 18.4L4.4 20.3A1 1 0 0 1 3 19.3V6.7A1 1 0 0 1 3.6 5.7L8 3.4A2 2 0 0 1 10 3.4zM15 5.8V20.8M9 3.2V18.2"/></svg>`
        ).node);
    }
}
