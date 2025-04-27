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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.4 13A5 5 0 0 1 22 15C22 18.9 18 22 13 22 9 22 4.8 21.2 2.6 19.5Q2 19 2 18.2C2.1 12.7 2.6 2 10 2A3 3 0 0 1 13 5 2 2 0 0 1 11 7Q9.5 7 9 6"/><path d="M15 14A5 5 0 0 0 7.4 16"/><path d="M10 6.8C8 8 9.5 13 8 15"/></svg>
 */
export class BicepsFlexed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.4 13A5 5 0 0 1 22 15C22 18.9 18 22 13 22 9 22 4.8 21.2 2.6 19.5Q2 19 2 18.2C2.1 12.7 2.6 2 10 2A3 3 0 0 1 13 5 2 2 0 0 1 11 7Q9.5 7 9 6"/><path d="M15 14A5 5 0 0 0 7.4 16"/><path d="M10 6.8C8 8 9.5 13 8 15"/></svg>`
        ).node);
    }
}
