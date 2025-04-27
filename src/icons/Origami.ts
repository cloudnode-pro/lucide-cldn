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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V4A1 1 0 0 1 13 3H19.3A1 1 0 0 1 19.9 4.8L15.3 8.8"/><path d="M12 21 4.6 13.6A2 2 0 0 1 4 12.2V6.4A1 1 0 0 1 5.7 5.7L20 20"/><path d="M12.2 3.4 20.6 18.4A1 1 0 0 1 20.5 19.4L19.3 20.7 18.6 21H6.4L5.7 20.8 3.3 18.8A1 1 0 0 1 3.9 17H8"/></svg>
 */
export class Origami extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V4A1 1 0 0 1 13 3H19.3A1 1 0 0 1 19.9 4.8L15.3 8.8"/><path d="M12 21 4.6 13.6A2 2 0 0 1 4 12.2V6.4A1 1 0 0 1 5.7 5.7L20 20"/><path d="M12.2 3.4 20.6 18.4A1 1 0 0 1 20.5 19.4L19.3 20.7 18.6 21H6.4L5.7 20.8 3.3 18.8A1 1 0 0 1 3.9 17H8"/></svg>`
        ).node);
    }
}
