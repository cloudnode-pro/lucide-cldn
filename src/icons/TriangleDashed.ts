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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 4.2A2 2 0 0 1 13.8 4.2M14 21H16M15.9 7.7 16.9 9.5M18.8 13 19.8 14.7M21.8 18.2A2 2 0 0 1 20 21M4 21A2 2 0 0 1 2.2 18.2M5.1 13 4.1 14.7M8 21H10M8.1 7.7 7.1 9.5"/></svg>
 */
export class TriangleDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 4.2A2 2 0 0 1 13.8 4.2M14 21H16M15.9 7.7 16.9 9.5M18.8 13 19.8 14.7M21.8 18.2A2 2 0 0 1 20 21M4 21A2 2 0 0 1 2.2 18.2M5.1 13 4.1 14.7M8 21H10M8.1 7.7 7.1 9.5"/></svg>`
        ).node);
    }
}
