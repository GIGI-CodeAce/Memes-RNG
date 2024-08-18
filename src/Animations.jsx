
  export function LegendaryAnimation(backColor) {
    backColor('hsl(171, 37%, 35%)');
    const timer = setTimeout(() => {
      backColor('hsl(0, 0%, 11%)');
    }, 300);

    return () => clearTimeout(timer);
  }

  export function UniqueAnimation(backColor, rareRollColor) {
    rareRollColor('hsla(215, 100%, 30%, 0.7)');

    const timer1 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 0%, 0.7)'); // Black
    }, 200);

    const timer2 = setTimeout(() => {
      rareRollColor('hsla(215, 100%, 50%, 0.7)'); // Blue
      backColor('hsla(0, 100%, 60%)'); // Red
    }, 400);

    const timer3 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 0%, 0.7)'); // Black
    }, 600);

    const timer4 = setTimeout(() => {
      rareRollColor('hsla(0, 100%, 60%, 0.7)'); // Red
      backColor('hsla(215, 100%, 50%)'); // Blue
    }, 800);

    const timer5 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 0%, 0.7)'); // Black
    }, 1000);

    const timer6 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 60%, 0.7)'); // White
      backColor('hsla(215, 100%, 80%)'); // Whiter
    }, 1200);

    const timer7 = setTimeout(() => {
      rareRollColor('hsl(0, 0%, 0%, 0.8)'); // Final background color
      backColor('hsl(0, 0%, 11%)'); // Black
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }

  export function SupremeAnimation(rareRollColor, backColor) {
    rareRollColor('hsla(0, 0%, 60%, 0.7)'); // White

    const timer1 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 0%, 0.7)'); // Black
      backColor('hsla(0, 0%, 60%)'); // white
    }, 200);

    const timer2 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 60%, 0.7)'); // White
      backColor('hsla(0, 0%, 0%)'); // black
    }, 400);

    const timer3 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 0%, 0.7)'); // Black
      backColor('hsla(0, 0%, 60%)'); // white
    }, 600);

    const timer4 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 60%, 0.7)'); // White
      backColor('hsla(0, 0%, 0%)'); // black
    }, 800);

    const timer5 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 0%, 0.7)'); // Black
      backColor('hsla(0, 0%, 60%)'); // white
    }, 1000);

    const timer6 = setTimeout(() => {
      rareRollColor('hsla(0, 0%, 60%, 0.7)'); // White
      backColor('hsla(0, 0%, 0%)'); // black
    }, 1200);

    const timer7 = setTimeout(() => {
      rareRollColor('hsl(0, 0%, 0%, 0.8)'); // Final background color
      backColor('hsl(0, 0%, 11%)'); // final
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }
