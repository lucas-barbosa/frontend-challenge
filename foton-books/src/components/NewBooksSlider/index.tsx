import { useState } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import NewBookCard, { NewBookCardProps } from 'components/NewBookCard';
import * as S from './styles';

type SliderProps = {
  items: NewBookCardProps[];
};

const Slider = ({ items }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    afterChange: setCurrentSlide,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true
  };

  return (
    <S.Wrapper>
      <SlickSlider {...settings}>
        {items.map((item, index) => (
          <NewBookCard
            key={`new-book_${index}`}
            active={currentSlide == index}
            {...item}
          />
        ))}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default Slider;
