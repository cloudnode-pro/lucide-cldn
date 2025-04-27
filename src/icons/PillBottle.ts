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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11H14A1 1 0 0 0 13 12V17A1 1 0 0 0 14 18H18"/><path d="M6 7V20A2 2 0 0 0 8 22H16A2 2 0 0 0 18 20V7"/><rect width="16" height="5" x="4" y="2" rx="1"/></svg>
 */
export class PillBottle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11H14A1 1 0 0 0 13 12V17A1 1 0 0 0 14 18H18"/><path d="M6 7V20A2 2 0 0 0 8 22H16A2 2 0 0 0 18 20V7"/><rect width="16" height="5" x="4" y="2" rx="1"/></svg>`
        ).node);
    }
}
