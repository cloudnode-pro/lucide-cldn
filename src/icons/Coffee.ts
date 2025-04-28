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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V4M14 2V4M16 8A1 1 0 0 1 17 9V17A4 4 0 0 1 13 21H7A4 4 0 0 1 3 17V9A1 1 0 0 1 4 8H18A4 4 0 1 1 18 16H17M6 2V4"/></svg>
 */
export class Coffee extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V4M14 2V4M16 8A1 1 0 0 1 17 9V17A4 4 0 0 1 13 21H7A4 4 0 0 1 3 17V9A1 1 0 0 1 4 8H18A4 4 0 1 1 18 16H17M6 2V4"/></svg>`
        ).node);
    }
}
