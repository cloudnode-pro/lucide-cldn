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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M12 2V6M16 2V6M16 4H18A2 2 0 0 1 20 6V8M20 12V14M20 18V20A2 2 0 0 1 18 22H17M13 22H11M7 22H6A2 2 0 0 1 4 20V18M4 14V12M4 8V6A2 2 0 0 1 6 4H8M8 10H14M8 14H16M8 18H13"/></svg>
 */
export class NotepadTextDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M12 2V6M16 2V6M16 4H18A2 2 0 0 1 20 6V8M20 12V14M20 18V20A2 2 0 0 1 18 22H17M13 22H11M7 22H6A2 2 0 0 1 4 20V18M4 14V12M4 8V6A2 2 0 0 1 6 4H8M8 10H14M8 14H16M8 18H13"/></svg>`
        ).node);
    }
}
