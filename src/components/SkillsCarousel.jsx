import React, {useState} from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import dataSkills from '../assets/dataSkills.json';
import textLang from '../assets/text-lang.json';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const Container = styled.div`
    width: 60%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const SkillsCarousel = ({language}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === dataSkills.category.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? dataSkills.category.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = dataSkills.category.map((category, i) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={category.name}
          >
            <Container>
                    {category[category.name].map((skill) => (
                        <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                    ))}
            </Container>
            <CarouselCaption
                captionText={''}
                captionHeader={textLang[language].pages.home.skillsTitle[i]}
            />
          </CarouselItem>
        );
      });

    return (
        <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className='skills-carousel'
                >
                <CarouselIndicators
                    items={[0,1,2,3]}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
        </Carousel>
    );
};

export default SkillsCarousel;