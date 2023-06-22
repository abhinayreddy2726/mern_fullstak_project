import { useState } from "react"
import{
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material"
import{
Search,
Message,
DarkMode,
LightMode,
Notifications,
Help,
Menu,
Close
} from "@mui/icons-material"
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import  setMode  from "../../state/index.js" 
import  setLogout  from "../../state/index.js" 
import {useNavigate} from "react-router-dom"
import FlexBetween from "../../components/flexbetween"


const NavBar =()=>{
    const [isMobileMenuToggled,setIsMobileMenuToggled]=useState(false)
    const dispatch =useDispatch()
    const navigate =useNavigate()
    //const user = useSelector((state)=>state.user)
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)")

    const theme = useTheme()
    const neutralLight=theme.palette.neutral.light
    const dark = theme.palette.neutral.dark
    const background = theme.palette.neutral.background
    const primaryLight = theme.palette.neutral.primaryLight
    const alt = theme.palette.background.alt

    const fullName ="test" //`${user.firstName} ${user.lastName}`

    return<FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="2rem">
            <Typography fontWeight="bold"
            fontSize="clamp(1rem,2rem,2.5rem)"
            color="primary"
            onClick={()=>navigate("/home")}
            sx={{
                "&:hover":{
                    color:primaryLight,
                    cursor:"pointer"
                }}}            
            >
            Scoiopedia
            </Typography>
            { isNonMobileScreens &&(
                <FlexBetween backgroundColor={neutralLight} border="9px" gap="3rem" padding="0.1rem 1.5rem">
                <InputBase placeholder="Search..."/>
                <IconButton>
                    <Search/>
                </IconButton>
                </FlexBetween>
            )}
            
        </FlexBetween>
        {/* Desktop Nav*/}
        {isNonMobileScreens ?(<FlexBetween gap="2rem">
                <IconButton onClick={()=>dispatch(setMode())}>
                    {
                        theme.palette.mode ==="dark" ? (
                            <DarkMode sx={{fontSize:"25px"}}/>
                        ):(
                            <LightMode sx={{color:dark,fontSize:"25px"}}/>
                        )
                    }
                </IconButton>
                <Message sx={{fontSize:"25px"}}/>
                <Notifications sx={{fontSize:"25px"}}/>
                <Help sx={{fontSize:"25px"}}/>
                <FormControl variant="standard" value={fullName} >
                    <Select
                    value={fullName}
                    sx={{
                        backgroundColor: neutralLight,
                        width:"150px",
                        borderRadius:"0.25 rem",
                        p: "0.25rem","& .MuiSvgIcon-root:":{
                            pr:"0.25rem",
                            width:"3rem"
                        },
                        "& .MuiSelect-select:focus":{
                            backgroundColor :neutralLight
                        } 
                    }}
                    input={<inputBase />}
                    >
                        <MenuItem value={fullName}>
                           <Typography>{fullName}</Typography> 
                        </MenuItem>
                        <MenuItem onClick={()=> dispatch(setLogout())}>Log Out</MenuItem>
                        
                    </Select>
                </FormControl>
            </FlexBetween>):
            (<IconButton onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}>
                    <Menu/>
            </IconButton>)}

            {/*Mobile Nav*/}
            {!isNonMobileScreens && isMobileMenuToggled &&(
                <Box
                position="fixed"
                right="0"
                bottom="0"
                height="0"
                zIndex="0"
                maxWidth="500px"
                minWidth="300px"
                backgroundColor={background}
                >
                    {/*close icon*/}
                    <Box display="flex" justifyContent="flex-end" p="1rem">
                        <IconButton onClick={()=>setIsMobileMenuToggled(!isMobileMenuToggled)}>
                            <Close/>

                        </IconButton>

                    </Box>
                    {/*menu items*/}
                    <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
                <IconButton onClick={()=>dispatch(setMode())}>
                    {
                        theme.palette.mode ==="dark" ? (
                            <DarkMode sx={{fontSize:"25px"}}/>
                        ):(
                            <LightMode sx={{color:dark,fontSize:"25px"}}/>
                        )
                    }
                </IconButton>
                <Message sx={{fontSize:"25px"}}/>
                <Notifications sx={{fontSize:"25px"}}/>
                <Help sx={{fontSize:"25px"}}/>
                <FormControl variant="standard" value={fullName} >
                    <Select
                    value={fullName}
                    sx={{
                        backgroundColor: neutralLight,
                        width:"150px",
                        borderRadius:"0.25 rem",
                        p: "0.25rem","& .MuiSvgIcon-root:":{
                            pr:"0.25rem",
                            width:"3rem"
                        },
                        "& .MuiSelect-select:focus":{
                            backgroundColor :neutralLight
                        } 
                    }}
                    input={<inputBase />}
                    >
                        <MenuItem value={fullName}>
                           <Typography>{fullName}</Typography> 
                        </MenuItem>
                        <MenuItem onClick={()=> dispatch(setLogout())}>Log Out</MenuItem>
                        
                    </Select>
                </FormControl>
            </FlexBetween>
                    
                </Box>
            )}
    </FlexBetween>
}

export default NavBar