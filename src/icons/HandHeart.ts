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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14H13A2 2 0 1 0 13 10H10Q9 10 8.6 10.6L3 16"/><path d="M7 20 8.6 18.6Q9.1 18 10 18H14Q15.7 18 16.8 16.8L21.4 12.4A2 2 0 0 0 18.7 9.4L14.3 13.5M2 15 8 21"/><path d="M19.5 8.5C20.2 7.8 21 6.9 21 5.8A2.7 2.7 0 0 0 16 4 2.8 2.8 0 0 0 11 5.8C11 7 11.8 7.8 12.5 8.6L16 12Z"/></svg>
 */
export class HandHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14H13A2 2 0 1 0 13 10H10Q9 10 8.6 10.6L3 16"/><path d="M7 20 8.6 18.6Q9.1 18 10 18H14Q15.7 18 16.8 16.8L21.4 12.4A2 2 0 0 0 18.7 9.4L14.3 13.5M2 15 8 21"/><path d="M19.5 8.5C20.2 7.8 21 6.9 21 5.8A2.7 2.7 0 0 0 16 4 2.8 2.8 0 0 0 11 5.8C11 7 11.8 7.8 12.5 8.6L16 12Z"/></svg>`
        ).node);
    }
}
