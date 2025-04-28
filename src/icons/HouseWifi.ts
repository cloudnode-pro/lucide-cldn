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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.5 13.9A4 4 0 0 1 14.5 13.9M12 17"/><path d="M3 10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19z"/><path d="M7 10.8A8 8 0 0 1 17 10.8"/></svg>
 */
export class HouseWifi extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.5 13.9A4 4 0 0 1 14.5 13.9M12 17"/><path d="M3 10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19z"/><path d="M7 10.8A8 8 0 0 1 17 10.8"/></svg>`
        ).node);
    }
}
