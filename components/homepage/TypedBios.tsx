import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in <b className="font-medium">Di An, Viet Nam</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Binh Dinh</b> city.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I love AWS.</li>
        <li>
          I'm focusing on building <b className="font-medium">AWS Cloud</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I'm a sporty-guy. I love
          <span className="ml-1">
            &#x1F3D3;, <Twemoji emoji="soccer-ball" />
          </span>
          .
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" /> and rap music.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, AoV is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
