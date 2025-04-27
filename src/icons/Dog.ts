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

export class Dog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.3 16.3H12.7L12 17zM16 14V14.5"/><path d="M4.4 11.2A13 13 0 0 0 4 14.6C4 18.7 7.6 21 12 21S20 18.7 20 14.6A12 12 0 0 0 19.5 11.2M8 14V14.5"/><path d="M8.5 8.5Q8 10.1 6.2 11C4.2 11.7 2.6 10.7 2.5 10 2.4 9 3.7 3.5 6.5 3 8.5 2.7 10.2 3.8 10.2 5.2A8 8 0 0 1 14 5.2C14 4 15.8 2.8 17.8 3 20.6 3.5 21.8 9 21.8 10 21.7 10.7 20 11.7 18 11Q16.3 10.2 16 8.5"/></svg>`
        ).node);
    }
}
