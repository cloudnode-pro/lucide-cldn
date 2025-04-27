import {Icon} from "../Icon.js";

export class BotMessageSquare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V2H8M8 18 4 22V8A2 2 0 0 1 6 6H18A2 2 0 0 1 20 8V16A2 2 0 0 1 18 18ZM2 12H4M9 11V13M15 11V13M20 12H22"/></svg>`
        ).node);
    }
}
