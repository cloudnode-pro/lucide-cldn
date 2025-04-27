import {Icon} from "../Icon.js";

export class Boxes extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 13A2 2 0 0 0 2 14.5V18A2 2 0 0 0 3 19.6L6 21.4A2 2 0 0 0 8 21.4L12 19V13.5L7 10.5zM7 16.5 2.3 13.7M7 16.5 12 13.5M7 16.5V21.7M12 13.5V19L16 21.4A2 2 0 0 0 18 21.4L21 19.6A2 2 0 0 0 22 17.9V14.6A2 2 0 0 0 21 13L17 10.5zM17 16.5 12 13.5M17 16.5 21.7 13.7M17 16.5V21.7"/><path d="M8 4.4A2 2 0 0 0 7 6.1V10.5L12 13.5 17 10.5V6.1A2 2 0 0 0 16 4.4L13 2.6A2 2 0 0 0 11 2.6zM12 8 7.3 5.2M12 8 16.7 5.2M12 13.5V8"/></svg>`
        ).node);
    }
}
