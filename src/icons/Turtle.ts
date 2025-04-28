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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10 14 14V17A1 1 0 0 0 15 18H17A1 1 0 0 0 18 17V14A8 8 0 1 0 2 14V17A1 1 0 0 0 3 18H5A1 1 0 0 0 6 17V14L8 10zM4.8 7.9 8 10M15.2 7.9 12 10"/><path d="M17 10H20A2 2 0 0 1 20 14H2"/></svg>
 */
export class Turtle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10 14 14V17A1 1 0 0 0 15 18H17A1 1 0 0 0 18 17V14A8 8 0 1 0 2 14V17A1 1 0 0 0 3 18H5A1 1 0 0 0 6 17V14L8 10zM4.8 7.9 8 10M15.2 7.9 12 10"/><path d="M17 10H20A2 2 0 0 1 20 14H2"/></svg>`
        ).node);
    }
}
