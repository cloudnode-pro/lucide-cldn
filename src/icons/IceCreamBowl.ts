/*
 * Copyright © 2025 Cloudnode OÜ.
 *
 * This file is part of lucide-cldn.
 *
 * lucide-cldn is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * lucide-cldn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with lucide-cldn.
 * If not, see <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */
import {Icon} from "../Icon.js";

/**
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17C17 17 20 14.3 20 11H4C4 14.3 7 17 12 17M8 21H16M12 18V21M5.1 11A3.5 3.5 0 1 1 12 11"/><path d="M12.1 11A3.5 3.5 0 1 1 19 11M15.5 6.5A3.5 3.5 0 1 0 8.5 6.5"/></svg>
 */
export class IceCreamBowl extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17C17 17 20 14.3 20 11H4C4 14.3 7 17 12 17M8 21H16M12 18V21M5.1 11A3.5 3.5 0 1 1 12 11"/><path d="M12.1 11A3.5 3.5 0 1 1 19 11M15.5 6.5A3.5 3.5 0 1 0 8.5 6.5"/></svg>`
        ).node);
    }
}
