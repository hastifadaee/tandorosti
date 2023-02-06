import {TextField} from "@mui/material";

const PhoneLogin = ({error , phoneNumber , setPhoneNumber})=>{
    return(
        <>
            <h1 style={{fontSize : 15}}> شماره موبایل خود را وارد کنید</h1>
            <TextField
                error={error}
                value={phoneNumber}
                onChange={e=>setPhoneNumber(e.target.value)}
                hiddenLabel
                sx={{mb : 1 , mt : 1}}
                id="filled-hidden-label-normal"
                variant="filled"
                fullWidth
                dir={'ltr'}
            />
        </>
    )
}
export default PhoneLogin ;