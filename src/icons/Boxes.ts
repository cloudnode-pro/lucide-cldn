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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 13A2 2 0 0 0 2 14.5V18A2 2 0 0 0 3 19.6L6 21.4A2 2 0 0 0 8 21.4L12 19V13.5L7 10.5zM7 16.5 2.3 13.7M7 16.5 12 13.5M7 16.5V21.7M12 13.5V19L16 21.4A2 2 0 0 0 18 21.4L21 19.6A2 2 0 0 0 22 17.9V14.6A2 2 0 0 0 21 13L17 10.5zM17 16.5 12 13.5M17 16.5 21.7 13.7M17 16.5V21.7"/><path d="M8 4.4A2 2 0 0 0 7 6.1V10.5L12 13.5 17 10.5V6.1A2 2 0 0 0 16 4.4L13 2.6A2 2 0 0 0 11 2.6zM12 8 7.3 5.2M12 8 16.7 5.2M12 13.5V8"/></svg>
 */
export class Boxes extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 13A2 2 0 0 0 2 14.5V18A2 2 0 0 0 3 19.6L6 21.4A2 2 0 0 0 8 21.4L12 19V13.5L7 10.5zM7 16.5 2.3 13.7M7 16.5 12 13.5M7 16.5V21.7M12 13.5V19L16 21.4A2 2 0 0 0 18 21.4L21 19.6A2 2 0 0 0 22 17.9V14.6A2 2 0 0 0 21 13L17 10.5zM17 16.5 12 13.5M17 16.5 21.7 13.7M17 16.5V21.7"/><path d="M8 4.4A2 2 0 0 0 7 6.1V10.5L12 13.5 17 10.5V6.1A2 2 0 0 0 16 4.4L13 2.6A2 2 0 0 0 11 2.6zM12 8 7.3 5.2M12 8 16.7 5.2M12 13.5V8"/></svg>`
        ).node);
    }
}
