import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'config';
import { ChatRoom } from './Public/ChatRoom/ChatRoom';

export const Root = () => {

    return (
        <Fragment>
            <Routes>
                <Route path={routes.chat} element={<ChatRoom/>}/>
                <Route path="*" element={<Navigate to={routes.chat}/>} />
            </Routes>
        </Fragment>
    )
}