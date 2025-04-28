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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 7 6.4 2.6A2 2 0 0 1 7.8 2H16.2A2 2 0 0 1 17.6 2.6L22 7M4 12V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V12"/><path d="M15 22V18A2 2 0 0 0 13 16H11A2 2 0 0 0 9 18V22M2 7H22M22 7V10A2 2 0 0 1 20 12 3 3 0 0 1 18.4 11.4H17.6A3 3 0 0 1 16 12 3 3 0 0 1 14.4 11.4H13.6A3 3 0 0 1 12 12 3 3 0 0 1 10.4 11.4H9.6A3 3 0 0 1 8 12 3 3 0 0 1 6.4 11.4H5.6A3 3 0 0 1 4 12 2 2 0 0 1 2 10V7"/></svg>
 */
export class Store extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 7 6.4 2.6A2 2 0 0 1 7.8 2H16.2A2 2 0 0 1 17.6 2.6L22 7M4 12V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V12"/><path d="M15 22V18A2 2 0 0 0 13 16H11A2 2 0 0 0 9 18V22M2 7H22M22 7V10A2 2 0 0 1 20 12 3 3 0 0 1 18.4 11.4H17.6A3 3 0 0 1 16 12 3 3 0 0 1 14.4 11.4H13.6A3 3 0 0 1 12 12 3 3 0 0 1 10.4 11.4H9.6A3 3 0 0 1 8 12 3 3 0 0 1 6.4 11.4H5.6A3 3 0 0 1 4 12 2 2 0 0 1 2 10V7"/></svg>`
        ).node);
    }
}
