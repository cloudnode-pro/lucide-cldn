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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V10.2A3 3 0 0 1 8.9 16H5A3 3 0 0 1 4 10.2V10A3 3 0 0 1 10 10M7 16V22M13 19V22"/><path d="M12 19H20.3A1 1 0 0 0 21 17.3L18 14H18.3A1 1 0 0 0 19 12.3L16 9H16.2A1 1 0 0 0 17 7.3L13 3 11.6 4.5"/></svg>
 */
export class Trees extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V10.2A3 3 0 0 1 8.9 16H5A3 3 0 0 1 4 10.2V10A3 3 0 0 1 10 10M7 16V22M13 19V22"/><path d="M12 19H20.3A1 1 0 0 0 21 17.3L18 14H18.3A1 1 0 0 0 19 12.3L16 9H16.2A1 1 0 0 0 17 7.3L13 3 11.6 4.5"/></svg>`
        ).node);
    }
}
