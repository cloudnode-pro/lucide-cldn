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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V8"/><path d="M14 2V6A2 2 0 0 0 16 8H20M4 12A1 1 0 0 0 3 13V14A1 1 0 0 1 2 15 1 1 0 0 1 3 16V17A1 1 0 0 0 4 18M8 18A1 1 0 0 0 9 17V16A1 1 0 0 1 10 15 1 1 0 0 1 9 14V13A1 1 0 0 0 8 12"/></svg>
 */
export class FileJson2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V8"/><path d="M14 2V6A2 2 0 0 0 16 8H20M4 12A1 1 0 0 0 3 13V14A1 1 0 0 1 2 15 1 1 0 0 1 3 16V17A1 1 0 0 0 4 18M8 18A1 1 0 0 0 9 17V16A1 1 0 0 1 10 15 1 1 0 0 1 9 14V13A1 1 0 0 0 8 12"/></svg>`
        ).node);
    }
}
