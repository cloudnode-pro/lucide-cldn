import {Icon} from "../Icon.js";

export class Combine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18H5A3 3 0 0 1 2 15V14M14 2A2 2 0 0 1 16 4V8A2 2 0 0 1 14 10M20 2A2 2 0 0 1 22 4V8A2 2 0 0 1 20 10"/><path d="M7 21 10 18 7 15"/><rect width="8" height="8" x="14" y="14" rx="2"/><rect width="8" height="8" x="2" y="2" rx="2"/></svg>`
        ).node);
    }
}
