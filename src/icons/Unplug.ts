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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5 22 2M2 22 5 19M6.3 20.3A2.4 2.4 0 0 0 9.7 20.3L12 18 6 12 3.7 14.3A2.4 2.4 0 0 0 3.7 17.7ZM7.5 13.5 10 11M10.5 16.5 13 14M12 6 18 12 20.3 9.7A2.4 2.4 0 0 0 20.3 6.3L17.7 3.7A2.4 2.4 0 0 0 14.3 3.7Z"/></svg>
 */
export class Unplug extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5 22 2M2 22 5 19M6.3 20.3A2.4 2.4 0 0 0 9.7 20.3L12 18 6 12 3.7 14.3A2.4 2.4 0 0 0 3.7 17.7ZM7.5 13.5 10 11M10.5 16.5 13 14M12 6 18 12 20.3 9.7A2.4 2.4 0 0 0 20.3 6.3L17.7 3.7A2.4 2.4 0 0 0 14.3 3.7Z"/></svg>`
        ).node);
    }
}
