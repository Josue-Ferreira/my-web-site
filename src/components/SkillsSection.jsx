import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import { Container, Row, Col } from 'reactstrap';

const SkillContainer = styled.div`
    margin: 5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const SkillsSection = () => {
    return (
        <div>
            <SkillContainer>
                <h3>Programming skills</h3>
                <Container>
                    <Row xs="3">
                        <Col>
                            <SkillCard />
                        </Col>
                        <Col>
                            <SkillCard />
                        </Col>
                        <Col>
                            <SkillCard />
                        </Col>
                        <Col>
                            <SkillCard />
                        </Col>
                        <Col>
                            <SkillCard />
                        </Col>
                        <Col>
                            <SkillCard />
                        </Col>
                    </Row>
                </Container>
            </SkillContainer>
        </div>
    );
};

export default SkillsSection;