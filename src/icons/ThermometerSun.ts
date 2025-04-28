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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9A4 4 0 0 0 10 16.5M12 3V5M6.6 18.4 5.2 19.8M20 4V14.5A4 4 0 1 1 16 14.5V4A2 2 0 0 1 20 4M4 13H2M6.3 7.3 5 6"/></svg>
 */
export class ThermometerSun extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9A4 4 0 0 0 10 16.5M12 3V5M6.6 18.4 5.2 19.8M20 4V14.5A4 4 0 1 1 16 14.5V4A2 2 0 0 1 20 4M4 13H2M6.3 7.3 5 6"/></svg>`
        ).node);
    }
}
