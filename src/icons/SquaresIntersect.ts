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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22A2 2 0 0 1 8 20M14 2A2 2 0 0 1 16 4M16 22H14M2 10V8M2 4A2 2 0 0 1 4 2M20 8A2 2 0 0 1 22 10M22 14V16M22 20A2 2 0 0 1 20 22M4 16A2 2 0 0 1 2 14M8 10A2 2 0 0 1 10 8H15A1 1 0 0 1 16 9V14A2 2 0 0 1 14 16H9A1 1 0 0 1 8 15zM8 2H10"/></svg>
 */
export class SquaresIntersect extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22A2 2 0 0 1 8 20M14 2A2 2 0 0 1 16 4M16 22H14M2 10V8M2 4A2 2 0 0 1 4 2M20 8A2 2 0 0 1 22 10M22 14V16M22 20A2 2 0 0 1 20 22M4 16A2 2 0 0 1 2 14M8 10A2 2 0 0 1 10 8H15A1 1 0 0 1 16 9V14A2 2 0 0 1 14 16H9A1 1 0 0 1 8 15zM8 2H10"/></svg>`
        ).node);
    }
}
