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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 15 2 11 8.8 4.2A7.8 7.8 0 0 1 19.8 15.2L13 22 9 18 15.4 11.6A2.1 2.1 0 0 0 12.4 8.6zM5 8 9 12M12 15 16 19"/></svg>
 */
export class Magnet extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 15 2 11 8.8 4.2A7.8 7.8 0 0 1 19.8 15.2L13 22 9 18 15.4 11.6A2.1 2.1 0 0 0 12.4 8.6zM5 8 9 12M12 15 16 19"/></svg>`
        ).node);
    }
}
