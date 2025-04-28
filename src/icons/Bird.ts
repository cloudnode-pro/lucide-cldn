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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.4 18H12A8 8 0 0 0 20 10V7A4 4 0 0 0 12.7 4.7L2 20"/><path d="M20 7 22 7.5 20 8M10 18V21M14 17.8V21M7 18A6 6 0 0 0 10.8 7.4"/></svg>
 */
export class Bird extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.4 18H12A8 8 0 0 0 20 10V7A4 4 0 0 0 12.7 4.7L2 20"/><path d="M20 7 22 7.5 20 8M10 18V21M14 17.8V21M7 18A6 6 0 0 0 10.8 7.4"/></svg>`
        ).node);
    }
}
