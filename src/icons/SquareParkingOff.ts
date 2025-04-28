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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.6 3.6A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 20.4 20.4M3 8.7V19A2 2 0 0 0 5 21H15.3M2 2 22 22"/><path d="M13 13A3 3 0 1 0 13 7H9V9M9 17V14.7"/></svg>
 */
export class SquareParkingOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.6 3.6A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 20.4 20.4M3 8.7V19A2 2 0 0 0 5 21H15.3M2 2 22 22"/><path d="M13 13A3 3 0 1 0 13 7H9V9M9 17V14.7"/></svg>`
        ).node);
    }
}
