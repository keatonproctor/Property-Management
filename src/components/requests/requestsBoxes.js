import React, { Component } from 'react';

import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
                pending
                complete
                <RequestsBox title={'Pending'} count={9}/>
                <RequestsBox title={'In-Progress'} count={3}/>
                <RequestsBox title={'Complete'} count={5}/>
            </div>
        )
    }
}

export default RequestsBoxes;