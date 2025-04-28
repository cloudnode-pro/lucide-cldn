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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8A2.8 2.8 0 0 0 16 12 4 4 0 1 1 12 8M12 2V4M12 20V22M4.9 4.9 6.3 6.3M17.7 17.7 19.1 19.1M2 12H4M20 12H22M6.3 17.7 4.9 19.1M19.1 4.9 17.7 6.3"/></svg>
 */
export class SunMoon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8A2.8 2.8 0 0 0 16 12 4 4 0 1 1 12 8M12 2V4M12 20V22M4.9 4.9 6.3 6.3M17.7 17.7 19.1 19.1M2 12H4M20 12H22M6.3 17.7 4.9 19.1M19.1 4.9 17.7 6.3"/></svg>`
        ).node);
    }
}
