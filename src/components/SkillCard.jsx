import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const SkillCard = () => {
    return (
        <Card
            style={{
                width: '18rem'
            }}
            >
            <img
                alt="Sample"
                src="https://picsum.photos/300/200"
            />
            <CardBody>
                <CardTitle tag="h5">
                    Card title
                </CardTitle>
            </CardBody>
        </Card>
    );
};

export default SkillCard;