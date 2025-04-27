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

export class Pickaxe extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 12.5 6.6 20.4A1 1 0 1 1 3.6 17.4L11.6 9.4M15.7 4.3A13 13 0 0 0 5.5 3 1 1 0 0 0 5.5 4.7 22 22 0 0 1 12 8.1"/><path d="M17.7 3.7A1 1 0 0 0 16.3 3.7L11.7 8.3A1 1 0 0 0 11.7 9.7L14.3 12.3A1 1 0 0 0 15.7 12.3L20.3 7.7A1 1 0 0 0 20.3 6.3z"/><path d="M19.7 8.3A13 13 0 0 1 21 18.5 1 1 0 0 1 19.3 18.5 22 22 0 0 0 15.9 12"/></svg>`
        ).node);
    }
}
