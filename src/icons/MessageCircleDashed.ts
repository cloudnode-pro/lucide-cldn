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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1m8.8 3.7a10.5 10.5 0 0 0-2.1-2.1m3.7 8.8c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5m-3.7 8.8a10.5 10.5 0 0 0 2.1-2.1m-8.8 3.7c.5.1 1 .1 1.5.1s1-.1 1.5-.1m-10-3.4L2 22l4.5-1.5m-3.4-10c0 .5-.1 1-.1 1.5s.1 1 .1 1.5m3.7-8.8a10.5 10.5 0 0 0-2.1 2.1"/></svg>
 */
export class MessageCircleDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1m8.8 3.7a10.5 10.5 0 0 0-2.1-2.1m3.7 8.8c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5m-3.7 8.8a10.5 10.5 0 0 0 2.1-2.1m-8.8 3.7c.5.1 1 .1 1.5.1s1-.1 1.5-.1m-10-3.4L2 22l4.5-1.5m-3.4-10c0 .5-.1 1-.1 1.5s.1 1 .1 1.5m3.7-8.8a10.5 10.5 0 0 0-2.1 2.1"/></svg>`
        ).node);
    }
}
