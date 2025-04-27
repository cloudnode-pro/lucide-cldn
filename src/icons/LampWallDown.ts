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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 18.6A1 1 0 0 1 19 20H9A1 1 0 0 1 8 18.6L10 13.6A1 1 0 0 1 11 13H17A1 1 0 0 1 18 13.6zM6 3A2 2 0 0 1 8 5V7A2 2 0 0 1 6 9H5A1 1 0 0 1 4 8V4A1 1 0 0 1 5 3z"/><path d="M8 6H12A2 2 0 0 1 14 8V13"/></svg>
 */
export class LampWallDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 18.6A1 1 0 0 1 19 20H9A1 1 0 0 1 8 18.6L10 13.6A1 1 0 0 1 11 13H17A1 1 0 0 1 18 13.6zM6 3A2 2 0 0 1 8 5V7A2 2 0 0 1 6 9H5A1 1 0 0 1 4 8V4A1 1 0 0 1 5 3z"/><path d="M8 6H12A2 2 0 0 1 14 8V13"/></svg>`
        ).node);
    }
}
