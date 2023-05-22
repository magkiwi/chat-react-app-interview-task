import { useContext, useCallback, useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Send } from '@mui/icons-material';
import {
    Card, 
    Grid,
    TextField,
    Container, 
    CardHeader, 
    CardContent,
    IconButton
} from '@mui/material';
import { WebSocketContext } from 'contexts';
import { ConversationData } from 'contexts/WebSocketContext/WebSocketContext.types';
import { MessagesList } from './components/Messages';

type FormFields = {
    message: string;
};

const DEFAULT_VALUES: Partial<FormFields> = {
    message: '',
  };

export const ChatRoom: React.FC = () => {

    const { connectionStatus, sendJsonMessage, messages } = useContext(WebSocketContext);
    const { handleSubmit, control, reset } = useForm<FormFields>({
        defaultValues: {
            ...DEFAULT_VALUES,
          },    
        });
    const CardRef = useRef<HTMLDivElement>(null);
    
    const onSubmit = useCallback(async (data: any ) => {
        if (data.message) {
            reset(DEFAULT_VALUES);
            return sendJsonMessage(data);
        }
        return
      }, [sendJsonMessage, reset]);

    useEffect(() => {
        CardRef.current?.scrollIntoView({ block: 'end', inline: "nearest"})
    })

    return (
        <Container maxWidth={false} sx={{ overflow: 'hidden' }}>
            <Card>
                <CardHeader
                    sx={ theme =>({ position: 'sticky', top: 0, backgroundColor:  theme.palette.secondary.main, zIndex: 10 })}
                    title="Potato Chat"
                    subheader={`Status: ${connectionStatus}`}
                    titleTypographyProps={{ variant: 'h1' }}
                />
                <CardContent >
                    <Grid container sx={{
                        minHeight: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}>
                        {messages && messages.length > 0 && 
                            messages.map(( message: ConversationData) => <MessagesList key={message.id} message={message} />)}
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)} 
                        style={{ position: 'sticky', bottom: 0, background: '#FFF' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={11}>
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({ field }) => (
                                    <TextField
                                        {...field}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton 
                                    type="submit" 
                                    color="primary">
                                    <Send />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid ref={CardRef}/>
                </CardContent>
            </Card>
        </Container>
    )
}