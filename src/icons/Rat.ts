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

export class Rat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 22H4A2 2 0 0 1 4 18H16M13.2 18A3 3 0 0 0 11 13M16 9"/><path d="M16.8 4A3 3 0 1 1 20.1 8.7L21.9 11.4A1.5 1.5 0 0 1 20.4 13.4L17.5 13A3 3 0 0 0 14 16"/><path d="M17 5A3 3 0 1 0 11.8 7 7 7 0 0 0 4 14 4 4 0 0 0 8 18"/></svg>`
        ).node);
    }
}
