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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 6.6A5 5 0 0 1 9 9 5 5 0 0 1 6.6 10.2 6 6 0 0 0 8 22 14 14 0 0 0 22 8 6 6 0 0 0 10.2 6.6"/><path d="M5.3 10.6A4 4 0 1 0 10.6 5.3"/></svg>
 */
export class Bean extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 6.6A5 5 0 0 1 9 9 5 5 0 0 1 6.6 10.2 6 6 0 0 0 8 22 14 14 0 0 0 22 8 6 6 0 0 0 10.2 6.6"/><path d="M5.3 10.6A4 4 0 1 0 10.6 5.3"/></svg>`
        ).node);
    }
}
