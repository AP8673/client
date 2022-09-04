
import { useState } from 'react';


import { Box, TextField, Button, styled, Typography } from '@mui/material'  //Box, TextField is a wrapper same as div for material UI

//here we will be giving style to our page using styled components of MUI

const Component = styled(Box)`//const Component = styled(Wrapper_name) here backticks are used for template strings
    //replace Box in tag with Component i.e. Box with css stored in component
    width: 350px;
    margin: auto;
    box-shadow: 4px 2px 4px 2px rgb(0 0 0/ 0.7);

`;

const Image = styled('img')({ //we did this because img is html tag and MUI does not know it
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;//moves all in one line
    flex-direction: column;//changes flex-direction to column as it is by default in row
    & > div, & > button, & > p {//applying the childs
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #FB641B;
    color: #fff;
    height: 45px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    height: 45px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 0.3);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 14px;
`

const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, toggleForm] = useState('login');

    const toggleSignup =() => {//changes the state to signup when create an account button is clicked
        account === 'signup'? toggleForm('login') : toggleForm('signup');
        //here we change the state depending on present state. This function will be called only on the click so we check current state if it is Signup we change state to login and vice-versa 
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt='login' />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Enter username"/>
                            <TextField variant="standard" label="Enter password"/>
                            <LoginButton variant='contained'>Login</LoginButton>
                            <Text style={{ textAlign : 'center'}}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                        </Wrapper>
                :
                        <Wrapper>
                            <TextField variant="standard" label="Enter name"/>
                            <TextField variant="standard" label="Enter username"/>
                            <TextField variant="standard" label="Enter password"/>
                            <SignupButton>Create an account</SignupButton>
                            <Text style={{ textAlign : 'center'}}>OR</Text>
                            <LoginButton variant='contained' onClick={() => toggleSignup()}>Login</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    );
};

export default Login;