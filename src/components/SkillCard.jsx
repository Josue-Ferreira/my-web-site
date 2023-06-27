import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import styled from 'styled-components';

const Picture = styled.img`
    height: 3rem;
    margin-bottom: 10px;
`;

const SkillCard = ({cardTitle,cardPicture}) => {
    return (
        <Card
            className="text-center"
            style={{
                width: '200px',
                borderRadius: '40px',
                boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)',
                justifyContent: 'center'
            }}
            >
            <CardBody style={{padding: '5px', flex: 'none'}}>
                <Picture src={cardPicture} alt="" />
                <CardTitle tag="h5" style={{margin: '0 15px'}}>
                    {cardTitle}
                </CardTitle>
            </CardBody>
        </Card>
    );
};

export default SkillCard;