import React from 'react';
import {Link} from 'react-router';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';
export default () => {
    return (
    <div className="footer">
        <TopFooter/>
        <BottomFooter/>
    </div>
    );
}
