import {Icon} from "../Icon.js";

export class MessagesSquare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 9A2 2 0 0 1 12 11H6L2 15V4A2 2 0 0 1 4 2H12A2 2 0 0 1 14 4zM18 9H20A2 2 0 0 1 22 11V22L18 18H12A2 2 0 0 1 10 16V15"/></svg>`
        ).node);
    }
}
