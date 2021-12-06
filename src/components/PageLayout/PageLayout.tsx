import { Grid } from '@mui/material';
import { Loader } from 'components/SpinnerProgress';
import PageHeader from 'components/PageHeader';

interface IProps {
    isLoading: boolean
    useHeader: boolean
    title: React.ReactNode | string
    subtitle?: React.ReactNode | string
    // addNewUrl?: string
    children: React.ReactNode
}
let Page = ({ isLoading, useHeader, children, ...rest }: IProps) => {
    return (
        <Grid container >
            {useHeader &&
                <Grid item xs={12}>
                    <PageHeader {...rest}/>
                    <br/>
                </Grid>
            }
            <Grid item xs>
                {isLoading && <Loader/>}
                {isLoading === false && children}
            </Grid>
        </Grid>
    )
}

export default Page;
