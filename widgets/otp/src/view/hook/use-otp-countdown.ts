import React from 'react';

export const useOtpCountdown = (nextAttempt: string, fallbackSeconds: number): number => {
  const resolveRemaining = React.useCallback((): number => {
    const nextAttemptTime = Date.parse(nextAttempt);

    if (Number.isNaN(nextAttemptTime)) {
      return Math.max(0, fallbackSeconds);
    }

    return Math.max(0, Math.ceil((nextAttemptTime - Date.now()) / 1000));
  }, [fallbackSeconds, nextAttempt]);
  const [remaining, setRemaining] = React.useState(resolveRemaining);

  React.useEffect(() => {
    setRemaining(resolveRemaining());
    const interval = setInterval(() => {
      const value = resolveRemaining();
      setRemaining(value);

      if (value === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [resolveRemaining]);

  return remaining;
};
