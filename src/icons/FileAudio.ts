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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V7"/><path d="M14 2V6A2 2 0 0 0 16 8H20M2 19A2 2 0 1 1 6 19V20A2 2 0 1 1 2 20V16A6 6 0 0 1 14 16V20A2 2 0 1 1 10 20V19A2 2 0 1 1 14 19"/></svg>
 */
export class FileAudio extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V7"/><path d="M14 2V6A2 2 0 0 0 16 8H20M2 19A2 2 0 1 1 6 19V20A2 2 0 1 1 2 20V16A6 6 0 0 1 14 16V20A2 2 0 1 1 10 20V19A2 2 0 1 1 14 19"/></svg>`
        ).node);
    }
}
