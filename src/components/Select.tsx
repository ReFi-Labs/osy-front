import React, { useCallback, useRef } from 'react';

export type Props = React.ComponentPropsWithoutRef<'select'>;

export default React.forwardRef(function Select(
  { disabled, onChange, ...props }: Props,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  // ref
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // callback
  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLSelectElement>) => {
      try {
        (event.target as HTMLElement).blur();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    },
    []
  );
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      disabled ? undefined : onChange?.(event),
    [disabled, onChange]
  );

  return (
    <select
      {...props}
      className="h-[32px] px-2 text-[#000] rounded-[24px] bg-[#fff]"
      disabled={disabled}
      ref={ref ?? selectRef}
      onWheel={handleWheel}
      onChange={handleChange}
    />
  );
});
