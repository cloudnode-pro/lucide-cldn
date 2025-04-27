import {Icon} from "../Icon.js";

export class Twitch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 2H3V18H8V22L12 18H17L21 14zM11 11V7M16 11V7"/></svg>`
        ).node);
    }
}
