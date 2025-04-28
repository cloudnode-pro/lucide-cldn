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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21A2 2 0 0 0 13.7 21M22 8Q21.9 4.6 20 2M3.3 15.3A1 1 0 0 0 4 17H20A1 1 0 0 0 20.7 15.3C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8C6 12.5 4.6 14 3.3 15.3M4 2Q2.1 4.6 2 8"/></svg>
 */
export class BellRing extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21A2 2 0 0 0 13.7 21M22 8Q21.9 4.6 20 2M3.3 15.3A1 1 0 0 0 4 17H20A1 1 0 0 0 20.7 15.3C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8C6 12.5 4.6 14 3.3 15.3M4 2Q2.1 4.6 2 8"/></svg>`
        ).node);
    }
}
