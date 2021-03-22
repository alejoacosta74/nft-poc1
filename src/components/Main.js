import React from 'react';

import { Card, CardText, CardBody, CardTitle, Col ,Row, Button } from 'reactstrap';

const Main = (props) =>{
    return (
        <div className="container">                    
            <Row>{
                props.tokens.map((token, key) => (
                    <Col sm="4" key={key}>
                        <Card body key={key}>
                        <CardTitle tag="h5">NFT #{key}.</CardTitle>
                        <div className="token" style={{ backgroundColor: token.color }}></div>                        
                        <CardText>                    
                        - NFT ID: {key} <br/>- Color code: {token.color} <br/> - Owner: {token.owner} <br/> - Id: {token.id}</CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    )
                )            
            }
            </Row>                
        </div>
    )
}

export default Main;