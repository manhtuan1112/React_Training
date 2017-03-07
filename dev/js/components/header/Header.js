import React from 'react';
import {Link} from 'react-router';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
export default () => {
    return (
       <div className="header">
            <TopHeader/>
            <BottomHeader/>
       </div>
    );
}
