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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19 12 11M12 19 4 11M20 12H16C16 10.5 16.4 10 17.5 9.5S20 8.3 20 7Q20 6.2 19.5 5.7A2 2 0 0 0 17 5.3 2 2 0 0 0 16 6.3"/></svg>
 */
export class Superscript extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19 12 11M12 19 4 11M20 12H16C16 10.5 16.4 10 17.5 9.5S20 8.3 20 7Q20 6.2 19.5 5.7A2 2 0 0 0 17 5.3 2 2 0 0 0 16 6.3"/></svg>`
        ).node);
    }
}
