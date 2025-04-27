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

export class SquaresSubtract extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22A2 2 0 0 1 8 20M16 22H14M16 4A2 2 0 0 0 14 2H4A2 2 0 0 0 2 4V14A2 2 0 0 0 4 16H7A1 1 0 0 0 8 15V10A2 2 0 0 1 10 8H15A1 1 0 0 0 16 7zM20 8A2 2 0 0 1 22 10M22 14V16M22 20A2 2 0 0 1 20 22"/></svg>`
        ).node);
    }
}
