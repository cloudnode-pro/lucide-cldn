import {Icon} from "../Icon.js";

export class Radio extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 19.1A10 10 0 0 1 4.9 4.9M7.8 16.2A6 6 0 0 1 7.8 7.7"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8A6 6 0 0 1 16.2 16.3M19.1 4.9A10 10 0 0 1 19.1 19"/></svg>`
        ).node);
    }
}
