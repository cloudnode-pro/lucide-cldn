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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20 8.8 17.5 6 18M10 4 8.8 6.5 6 6M10.6 15H10M2 12H8.5L10 9M20 14.5A4 4 0 1 1 16 14.5V4A2 2 0 0 1 20 4z"/><path d="M4 10 5.5 12 4 14M7 21 10 15 8.5 12M7 3 10 9H12"/></svg>
 */
export class ThermometerSnowflake extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20 8.8 17.5 6 18M10 4 8.8 6.5 6 6M10.6 15H10M2 12H8.5L10 9M20 14.5A4 4 0 1 1 16 14.5V4A2 2 0 0 1 20 4z"/><path d="M4 10 5.5 12 4 14M7 21 10 15 8.5 12M7 3 10 9H12"/></svg>`
        ).node);
    }
}
