import {Box, Button, Container, Grid, TextField} from "@mui/material";
import colors from "../helpers/colors";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useState} from "react";
import {phoneValidator} from "../helpers/phoneValidator";
import PhoneLogin from "../base/phoneLogin";
import OTPInput from "otp-input-react";
import Counter from "../base/counter";
const boxStyles= {
    width : {
        xs : "100%" ,
        sm : 550
    } ,
    background : "white" ,
    px : {
        xs : 4 ,
        sm : 7
    } ,
    border : 1 ,
    borderColor : "#EEE" ,
    borderRadius:  3,
    position : "relative"
}
const Login = ()=>{
    const [phoneNumber , setPhoneNumber] = useState('') ;
    const [validate , setValidate] = useState(false) ;
    const [error , setError] = useState(false) ;
    const [otp , setOtp] = useState('') ;
    const onSubmit = ()=>{
        if (!phoneValidator(phoneNumber)) setError(true) ;
        else {
            setError(false)
            setValidate(true)
        }
    }
    return(
        <Container maxWidth={"lg"} sx={{height : "100%" , p:0}}>
            <Grid sx={{height : "100%"}} container justifyContent={'center'} alignItems={'center'}>
                <Box sx={boxStyles}>
                    <Box sx={{width : "40%" , m : "auto" , mb : 6}}>
                        <img style={{width : "100%"}} src="../logo.png" alt="tandorosti logo"/>
                        <KeyboardBackspaceIcon sx={{position : "absolute" , left : 20 , top : 25}} fontSize={'large'}/>
                    </Box>
                    {
                        validate ?
                            <>
                                <h1 style={{fontSize : 16 , marginBottom : 10}}>کد تایید را وارد کنید</h1>
                                <p style={{fontSize : 12 , marginBottom : 10}}>کد تایید برای شماره ی {phoneNumber} پیامک شد </p>
                                <Box sx={{display : "flex" , justifyContent : "space-between"}}>
                                    <OTPInput onChange={setOtp} value={otp} dir={'ltr'} autoFocus={true} otpType="number" OTPLength={5} inputClassName={'otp-input'} className={'otp-input-root'}/>
                                </Box>
                                <Counter/>
                            </>
                             :
                            <PhoneLogin error={error} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                    }
                    {
                        error && <p style={{color : "red" , fontSize : 13}}>لطفا شماره تلفن را به درستی وارد کنید</p>
                    }
                    <Box sx={{px : 7}}>
                        <Button onClick={onSubmit} sx={{background : colors.lightBlue , mt : 15 , mb : 6 , width : '100%' , fontSize : 20 , borderRadius : 2}} variant={'contained'}>تایید</Button>
                    </Box>
                </Box>
            </Grid>
        </Container>
    )
}
export default Login ;
