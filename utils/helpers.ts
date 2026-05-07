import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { cnFn } from '@/types/helpers';

const cn: cnFn = (...classes) => twMerge(clsx(...classes));

export { cn };
