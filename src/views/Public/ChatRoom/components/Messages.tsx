import { Fragment } from 'react';
import { Avatar, Grid, Box, CardHeader, Typography, Paper } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { ConversationData } from 'contexts/WebSocketContext/WebSocketContext.types';
import { formatDate } from 'helpers/date';


interface Props {
    message: ConversationData;
}

export const MessagesList: React.FC<Props>  = ({ message }) => {

    return (
        <Fragment>
            <Grid item xs={12}>
                {message.user_question && <MessageView message={message.user_question} created_at={message.created_at}/>}
            </Grid>
            <Grid item xs={12} sx={{ alignSelf: 'end'}} my={2}>
                {message.bot_answer && <MessageView user={false} message={message.bot_answer} created_at={message.created_at} />}
            </Grid>
        </Fragment>
    );
}

interface Message {
    user?: boolean;
    message: string;
    created_at?: string;
}

const MessageView: React.FC<Message> = ({ user=true, message, created_at}) => {

    return (
        <Fragment>
            {user && <Avatar sx={{ bgcolor: deepOrange[500], marginRight: 1 }}>P</Avatar>}
            <Paper>
                <CardHeader 
                    subheader={ user ? 'Anonymous User' :'Potato Chatbot'}
                    subheaderTypographyProps={{ variant: 'body2'}}
                />
                <Box>
                    <Typography sx={{ whiteSpace: 'pre-wrap' }}>{message}</Typography>
                    <Typography sx={{ textAlign: 'end' }} variant='body2'>{formatDate(created_at || '')}</Typography>
                </Box>
            </Paper>
            {!user && <Avatar sx={{ bgcolor: deepPurple[500], marginLeft: 1 }}>U</Avatar>}
            
        </Fragment>
    )

}