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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14 20 17.3A1 1 0 0 1 19.3 19H4.7A1 1 0 0 1 4 17.3L7 14H6.7A1 1 0 0 1 6 12.3L9 9H8.8A1 1 0 0 1 8 7.3L12 3 16 7.3A1 1 0 0 1 15.2 9H15L18 12.3A1 1 0 0 1 17.3 14zM12 22V19"/></svg>
 */
export class TreePine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14 20 17.3A1 1 0 0 1 19.3 19H4.7A1 1 0 0 1 4 17.3L7 14H6.7A1 1 0 0 1 6 12.3L9 9H8.8A1 1 0 0 1 8 7.3L12 3 16 7.3A1 1 0 0 1 15.2 9H15L18 12.3A1 1 0 0 1 17.3 14zM12 22V19"/></svg>`
        ).node);
    }
}
