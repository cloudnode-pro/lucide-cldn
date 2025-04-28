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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"/></svg>
 */
export class TimerOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"/></svg>`
        ).node);
    }
}
