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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.5 10A2.5 2.5 0 0 1 18.1 7H18A3 3 0 0 1 15.4 2.6 10 10 0 1 0 21.7 9.7Q21.2 10 20.5 10"/><circle cx="12" cy="12" r="3"/></svg>
 */
export class Donut extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.5 10A2.5 2.5 0 0 1 18.1 7H18A3 3 0 0 1 15.4 2.6 10 10 0 1 0 21.7 9.7Q21.2 10 20.5 10"/><circle cx="12" cy="12" r="3"/></svg>`
        ).node);
    }
}
