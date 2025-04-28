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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16A3 3 0 0 1 15.2 21M18 12"/><path d="M18 21H10A4 4 0 0 1 6 17 7 7 0 0 1 13 10H13.2L9.6 6.4A1 1 0 1 1 12.4 3.6L15.8 7H16A6 6 0 0 1 22 13V14A2 2 0 0 1 20 16H19A3 3 0 0 0 16 19"/><path d="M20 8.5V4A2 2 0 1 0 16 4V7M7.6 12.5A3 3 0 1 0 6 16.8"/></svg>
 */
export class Rabbit extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16A3 3 0 0 1 15.2 21M18 12"/><path d="M18 21H10A4 4 0 0 1 6 17 7 7 0 0 1 13 10H13.2L9.6 6.4A1 1 0 1 1 12.4 3.6L15.8 7H16A6 6 0 0 1 22 13V14A2 2 0 0 1 20 16H19A3 3 0 0 0 16 19"/><path d="M20 8.5V4A2 2 0 1 0 16 4V7M7.6 12.5A3 3 0 1 0 6 16.8"/></svg>`
        ).node);
    }
}
