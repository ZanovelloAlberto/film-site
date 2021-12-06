import { Button, Grid, Typography } from "@mui/material"
import React from "react"

export interface IProps {
    title: React.ReactNode | string
    subtitle?: React.ReactNode | string
}

const PageHeader = ({ title, subtitle }: IProps) => {
    return (
        <>
            <Grid container alignItems={"center"} >
                <Grid item>
                    {React.isValidElement(title) ?
                        title :
                        <Typography variant="h4">{title}</Typography>}
                    {React.isValidElement(subtitle) ?
                        subtitle :
                        <Typography variant="h5">{subtitle}</Typography>}
                </Grid>
                


            </Grid>
        </>
    )
}

export default PageHeader
