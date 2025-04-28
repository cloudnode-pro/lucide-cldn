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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 15H13M12 12V15M12 19V22M15.3 19A1 1 0 0 0 16.3 18.3L18.5 11.3A7 7 0 1 0 5.4 11.3L7.8 18.3A1 1 0 0 0 8.8 19z"/><path d="M9 9A3 3 0 1 1 15 9"/></svg>
 */
export class ParkingMeter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 15H13M12 12V15M12 19V22M15.3 19A1 1 0 0 0 16.3 18.3L18.5 11.3A7 7 0 1 0 5.4 11.3L7.8 18.3A1 1 0 0 0 8.8 19z"/><path d="M9 9A3 3 0 1 1 15 9"/></svg>`
        ).node);
    }
}
