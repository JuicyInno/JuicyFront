type ArgumentType = string | Record<string, unknown> | null | undefined | boolean

export const classnames = (...classes: ArgumentType[]): string => classes.reduce<Array<string>>((acc, current) => {
  if (!current) {
    return acc;
  }

  if (typeof current === 'string') {
    acc.push(current);
  }

  if (!!current && typeof current === 'object') {
    const classNames = Object.entries(current).reduce<string[]>((acc, [className, isActive]) => {
      if (isActive) {
        acc.push(className);
      }

      return acc;
    }, []).join(' ');

    acc.push(classNames);
  }

  return acc;
}, []).join(' ');
