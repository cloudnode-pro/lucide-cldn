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

export class Cross extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9A2 2 0 0 0 2 11V13A2 2 0 0 0 4 15H8A1 1 0 0 1 9 16V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V16A1 1 0 0 1 16 15H20A2 2 0 0 0 22 13V11A2 2 0 0 0 20 9H16A1 1 0 0 1 15 8V4A2 2 0 0 0 13 2H11A2 2 0 0 0 9 4V8A1 1 0 0 1 8 9z"/></svg>`
        ).node);
    }
}
