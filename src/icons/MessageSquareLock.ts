import {Icon} from "../Icon.js";

export class MessageSquareLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 15V13A2 2 0 1 0 15 13V15"/><path d="M9 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V8.5"/><rect width="8" height="5" x="13" y="15" rx="1"/></svg>`
        ).node);
    }
}
