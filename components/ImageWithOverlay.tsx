import Image, { ImageProps } from 'next/image';
import { cn } from 'tailwind-merge';

export function ImageWithOverlay(props: ImageProps & { overlayClassName?: string }) {
  const { className, overlayClassName, ...rest } = props;
  return (
    <div className={cn('overlay-image overlay-noise', className)}>
      <Image {...rest} fill style={{ objectFit: 'cover' }} />
      <div className={cn('absolute inset-0 bg-gradient-to-t from-black/40 via-charcoal/35 to-transparent mix-blend-multiply', overlayClassName)} />
    </div>
  );
}
