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

const Skills = styled.div`
    /* background: radial-gradient(ellipse at right bottom, #8F3949, #C33764, #240b36, #121212); */
    /* background-color: #121212; */
    background: radial-gradient(ellipse at left bottom, #322652,#492740 10%, #121212 28%); 
    padding: 50px 0;
`;

// const SkillContainer = styled.div`
//     margin: 5vh auto;
//     width: 95%;
//     display: flex;
//     align-items: center;

//     @media screen and (max-width: 768px){
//         flex-direction: column;
//     }
//     @media screen and (min-width: 1480px){
//         width: 60%;
//     }
// `;

// const Title = styled.h3`
//     width: 20vw;
//     text-align: center;
//     margin: 5vh 5vw;

//     @media screen and (max-width: 600px){
//         width: auto;
//     }
// `;

const Container = styled.div`
    width: 60%;
    height: 70%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;

const SkillsSection = ({language}) => {
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
        <Skills id='skills'>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                >
                <CarouselIndicators
                    items={[0,1,2]}
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
        </Skills>
    );
};

export default SkillsSection;

{/* <SkillContainer>
                <Title className='text-light'>{textLang[language].pages.home.skillsTitle[0]}</Title>
                <Container>
                        {dataSkills.filter(skill => skill.category === 'programming').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title className='text-light'>{textLang[language].pages.home.skillsTitle[1]}</Title>
                <Container>
                        {dataSkills.filter(skill => skill.category === 'softwares').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title className='text-light'>{textLang[language].pages.home.skillsTitle[2]}</Title>
                <Container style={{gridTemplateRows: '1fr'}}>
                        {dataSkills.filter(skill => skill.category === 'api').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer>
            <SkillContainer>
                <Title className='text-light'>{textLang[language].pages.home.skillsTitle[3]}</Title>
                <Container style={{gridTemplateRows: '1fr'}}>
                        {dataSkills.filter(skill => skill.category === 'design').map((skill) => (
                            <SkillCard key={skill.name} cardTitle={skill.name} cardPicture={skill.picture}/>
                        ))}
                </Container>
            </SkillContainer> */}