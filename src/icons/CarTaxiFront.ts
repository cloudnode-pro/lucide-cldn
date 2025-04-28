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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2H14M21 8 19 10 17.5 6.3A2 2 0 0 0 15.6 5H8.4A2 2 0 0 0 6.5 6.3L5 10 3 8M17 14"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18V20M19 18V20"/></svg>
 */
export class CarTaxiFront extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2H14M21 8 19 10 17.5 6.3A2 2 0 0 0 15.6 5H8.4A2 2 0 0 0 6.5 6.3L5 10 3 8M17 14"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18V20M19 18V20"/></svg>`
        ).node);
    }
}
