import {Icon} from "../Icon.js";

export class AudioWaveform extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 13A2 2 0 0 0 4 11V7A2 2 0 0 1 8 7V20A2 2 0 0 0 12 20V4A2 2 0 0 1 16 4V17A2 2 0 0 0 20 17V13A2 2 0 0 1 22 11"/></svg>`
        ).node);
    }
}
