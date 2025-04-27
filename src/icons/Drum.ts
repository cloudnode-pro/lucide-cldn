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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 10 10M22 2 14 10"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4V21.3M12 14V22M17 13.4V21.3M2 9V17A10 5 0 0 0 22 17V9"/></svg>
 */
export class Drum extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 10 10M22 2 14 10"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4V21.3M12 14V22M17 13.4V21.3M2 9V17A10 5 0 0 0 22 17V9"/></svg>`
        ).node);
    }
}
