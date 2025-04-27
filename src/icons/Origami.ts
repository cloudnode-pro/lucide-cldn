import {Icon} from "../Icon.js";

export class Origami extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V4A1 1 0 0 1 13 3H19.3A1 1 0 0 1 19.9 4.8L15.3 8.8"/><path d="M12 21 4.6 13.6A2 2 0 0 1 4 12.2V6.4A1 1 0 0 1 5.7 5.7L20 20"/><path d="M12.2 3.4 20.6 18.4A1 1 0 0 1 20.5 19.4L19.3 20.7 18.6 21H6.4L5.7 20.8 3.3 18.8A1 1 0 0 1 3.9 17H8"/></svg>`
        ).node);
    }
}
