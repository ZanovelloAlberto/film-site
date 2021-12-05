import { Grid } from '@mui/material';

interface IProps {
    isLoading: boolean
    useHeader: boolean
    title: React.ReactNode | string
    subtitle?: React.ReactNode | string
    addNewUrl?: string
    children: React.ReactNode
}
//uno
let Page = ({ isLoading, useHeader, children, ...rest }: IProps) => {
    return (
        <Grid container>
            {useHeader &&
                <Grid item xs={12}>
                    {/* <PageHeader {...rest} /> */}
                </Grid>
            }
            <Grid item xs>
                {isLoading && null}
                {isLoading === false && children}
            </Grid>
        </Grid>
    )
}

export default Page;
