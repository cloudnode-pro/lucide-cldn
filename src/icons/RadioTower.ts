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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 16.1A10 10 0 0 1 4.9 1.9M7.8 4.7A6 6 0 0 0 7 12.2"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8A6 6 0 0 1 17 12.3M19.1 1.9A10 10 0 0 1 19.1 16M9.5 18H14.5M8 22 12 11 16 22"/></svg>
 */
export class RadioTower extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 16.1A10 10 0 0 1 4.9 1.9M7.8 4.7A6 6 0 0 0 7 12.2"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8A6 6 0 0 1 17 12.3M19.1 1.9A10 10 0 0 1 19.1 16M9.5 18H14.5M8 22 12 11 16 22"/></svg>`
        ).node);
    }
}
