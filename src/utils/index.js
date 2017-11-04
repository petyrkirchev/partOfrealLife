const capitalizeSentence = string => string.charAt(0).toUpperCase() + string.slice(1);

const capitalizeWords = (string) => {
  const splitted = string.split(' ');
  let final = '';

  splitted.map((part, index) => (final += capitalizeSentence(part) + (index !== splitted.length - 1 ? ' ' : ''))); //eslint-disable-line

  return final;
};

const createArrayMap = (size) => {
  const array = [];

  for (let i = 0; i < size; i += 1) {
    array.push({
      id: i,
    });
  }

  return array;
};

const debounce = (func, wait, immediate) => {
  let timeout;

  const callback = (...args) => {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };

  return callback;
};

const scrollToSection = (destination, duration = 500, easing = 'linear', callback) => {
  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + ((4 - (2 * t)) * t);
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return ((t - 1) * t * t) + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - ((t - 1) * t * t * t);
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - (8 * (t - 1) * t * t * t);
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + ((t - 1) * t * t * t * t);
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + (16 * (t - 1) * t * t * t * t);
    },
  };
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  );
  const windowHeight = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName('body')[0].clientHeight;

  let destinationOffset;

  if (typeof destination === 'string' && destination.indexOf('#') !== -1) {
    destinationOffset = document.getElementById(destination.slice(1)).offsetTop;
  } else if (typeof destination === 'number') {
    destinationOffset = destination < 0 ? 0 : destination;
  } else {
    destinationOffset = destination.offsetTop;
  }

  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight
    ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};

export {
  capitalizeSentence,
  capitalizeWords,
  createArrayMap,
  debounce,
  scrollToSection,
};
