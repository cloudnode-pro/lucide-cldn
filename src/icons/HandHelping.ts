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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 12H13A2 2 0 1 0 13 8H10Q9 8 8.6 8.6L3 14"/><path d="M7 18 8.6 16.6Q9.1 16 10 16H14Q15.7 16 16.8 14.8L21.4 10.4A2 2 0 0 0 18.7 7.4L14.3 11.5M2 13 8 19"/></svg>
 */
export class HandHelping extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 12H13A2 2 0 1 0 13 8H10Q9 8 8.6 8.6L3 14"/><path d="M7 18 8.6 16.6Q9.1 16 10 16H14Q15.7 16 16.8 14.8L21.4 10.4A2 2 0 0 0 18.7 7.4L14.3 11.5M2 13 8 19"/></svg>`
        ).node);
    }
}
