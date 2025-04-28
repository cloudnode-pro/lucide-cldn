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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21"/><path d="M7 11.2 7.1 11 9.1 8.9A.5.5 0 0 1 10 8.9L13 12A.5.5 0 0 0 14 12.1L18 8A.5.5 0 0 1 19 8.2V16A1 1 0 0 1 18 17H8A1 1 0 0 1 7 16z"/></svg>
 */
export class ChartArea extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21"/><path d="M7 11.2 7.1 11 9.1 8.9A.5.5 0 0 1 10 8.9L13 12A.5.5 0 0 0 14 12.1L18 8A.5.5 0 0 1 19 8.2V16A1 1 0 0 1 18 17H8A1 1 0 0 1 7 16z"/></svg>`
        ).node);
    }
}
