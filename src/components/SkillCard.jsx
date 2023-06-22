import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import styled from 'styled-components';

const Picture = styled.img`
    height: 5rem;
    margin-bottom: 10px;
`;

const SkillCard = ({cardTitle,cardPicture}) => {
    return (
        <Card
            className="text-center"
            style={{
                maxWidth: '250px',
                borderRadius: '40px',
                boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)'
            }}
            >
            <CardBody>
                <Picture src={cardPicture} alt="" />
                <CardTitle tag="h5">
                    {cardTitle}
                </CardTitle>
            </CardBody>
        </Card>
    );
};

export default SkillCard;