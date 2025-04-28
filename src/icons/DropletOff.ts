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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.7 13.2A8 8 0 0 0 16 9.5Q12.9 6.9 12 3L11.1 5.6M2 2 22 22M8.8 8.8 8 9.5Q5 11.9 5 15A7 7 0 0 0 18.2 18.2"/></svg>
 */
export class DropletOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.7 13.2A8 8 0 0 0 16 9.5Q12.9 6.9 12 3L11.1 5.6M2 2 22 22M8.8 8.8 8 9.5Q5 11.9 5 15A7 7 0 0 0 18.2 18.2"/></svg>`
        ).node);
    }
}
