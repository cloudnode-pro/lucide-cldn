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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 9A5 5 0 0 1 6.6 10.2 6 6 0 0 0 8 22 14 14 0 0 0 17.9 17.9M10.8 5A6 6 0 0 1 22 8 14 14 0 0 1 20.3 14.7"/><path d="M5.3 10.6A4 4 0 0 0 11.8 11.8M10.6 5.3A4 4 0 0 1 12.6 7.3"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
 */
export class BeanOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 9A5 5 0 0 1 6.6 10.2 6 6 0 0 0 8 22 14 14 0 0 0 17.9 17.9M10.8 5A6 6 0 0 1 22 8 14 14 0 0 1 20.3 14.7"/><path d="M5.3 10.6A4 4 0 0 0 11.8 11.8M10.6 5.3A4 4 0 0 1 12.6 7.3"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
