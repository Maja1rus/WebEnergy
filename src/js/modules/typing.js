import Typed from 'typed.js';

export function typing(elementBlock) {
    const options = {
        strings: ['DIGITAL', 'performance marketing', 'ТАРГЕТИРОВАННУЮ РЕКЛАМУ', 'КОНТЕКСТНУЮ рекламу', 'SMM'],
        typeSpeed: 100,
        loop: true
    };

    const typed = new Typed(elementBlock, options);
}
