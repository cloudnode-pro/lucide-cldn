import {Icon} from "../Icon.js";

export class Cat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5 14 5.3C15.8 3.3 19 2.4 20.4 3S20 10 20 10Q21 11.5 21 13.4C21 18 17 21 12 21S3 18 3 13.4A8 8 0 0 1 4 10S2.1 3.6 3.5 3 8.2 3.2 10 5.2zM8 14V14.5M16 14V14.5"/><path d="M11.3 16.3H12.7L12 17z"/></svg>`
        ).node);
    }
}
