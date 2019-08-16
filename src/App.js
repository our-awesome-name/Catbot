import React, { Component } from 'react';

import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import InputFiles from 'react-input-files';
import logo from './logo.svg';
import Iframe from 'react-iframe'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url : "https://cataas.com/cat?" + (new Date()),
        }
    }


    handleChange(event) {
        const file = event.target.files[0]
        alert(file);
    }

    url() {
        return "https://cataas.com/cat" + (new Date())
    }



    render() {
        let previousValueMsg = ""
        let name = ""
        let email = ""
        let problem = ""

        const steps = [
            {
                id: '1',
                message: 'Hi',
                trigger: '2',
            },
            {
                id: '2',
                message: 'Welcome to HPE Service Help Desk!',
                trigger: '3',
            },
            {
                id: '3',
                message: 'How can we help you?',
                trigger: '4',
            },
            {
                id: '4',
                options: [
                    { value: "Password Help", label: 'Account Issues', trigger: '100' },
                    { value: 'Switch Help', label: 'Product Support', trigger: '200' },
                    { value: 'Enterprise Help', label: 'Other Issues', trigger: '300' },
                ],
            },
            {
                id: '100',
                message: "Please select from the following options:",
                trigger: "101"
            },
            {
                id: '101',
                options: [
                    { value: "Password Help", label: 'Login', trigger: '110' },
                    { value: 'Switch Help', label: 'Find Username', trigger: '120' },
                    { value: 'Enterprise Help', label: 'Reset Password', trigger: '130' },
                ],
            },
            {
                id: '110',
                message: "I think this would be helpful with logging in",
                trigger: "111",
            },
            {
                id: '111',
                component: (
                    <a target="_blank" href="https://support.hpe.com/hpesc/public/home/signin"> Click Here to Login </a>
                ),
                trigger: "400",
            },
            {
                id: '120',
                message: "I think this would be helpful with finding your username",
                trigger: "121",
            },
            {
                id: '121',
                component: (
                    <a target="_blank" href="https://b2b.hpe.com/forgotLogin/indexhttps://cf.passport.hpe.com/hppcf/forgotuserid.do?hpappid=CURIOSITY_PRO_HPE&lang=en&cc=US&applandingpage=https://support.hpe.com/hpesc/public/home/signin"> Click here to find your username </a>
                ),
                trigger: "400",
            },
            {
                id: '130',
                message: "I think this would be helpful with resetting your password",
                trigger: "131",
            },
            {
                id: '131',
                component: (
                    <a target="_blank" href="https://cf.passport.hpe.com/hppcf/forgotpwd.do?hpappid=CURIOSITY_PRO_HPE&lang=en&cc=US&applandingpage=https://support.hpe.com/hpesc/public/home/signin"> Click here to reset your password </a>
                ),
                trigger: "400",
            },


            {
                id: '200',
                message: "Please select from the following options:",
                trigger: "201",
            },
            {
                id: '201',
                options: [
                    { value: "Password Help", label: 'Aruba Products', trigger: '210' },
                    { value: 'Switch Help', label: 'HPE Products', trigger: '220' },
                    { value: 'Enterprise Help', label: 'Other Products', trigger: '230' },
                ],
            },
            {
                id: '210',
                message: "Please select from the following options:",
                trigger: "213",
            },
            {
                id: '213',
                options: [
                    { value: "8400 Switches", label: '8400 Switches', trigger: '211' },
                    { value: '8300 Switches', label: '8300 Switches', trigger: '212' },
                ]
            },
            {
                id: '211',
                component: (
                    <a target="_blank" href="https://www.arubanetworks.com/aruba-8400/"> Click here to get help with Aruba 8400 Switches </a>
                ),
                trigger: "400",
            },
            {
                id: '212',
                component: (
                    <a target="_blank" href="https://www.arubanetworks.com/products/networking/switches/8320-series/"> Click here to get help with Aruba 8300 Switches </a>
                ),
                trigger: "400",
            },

            {
                id: '220',
                message: "Please select from the following options:",
                trigger: "221",
            },

            {
                id: '221',
                options: [
                    { value: "Password Help", label: 'HPE 3PAR StoreServ Storage Arrays', trigger: '222' },
                    { value: 'Switch Help', label: 'HPE Synergy Infrastructure', trigger: '223' },
                    { value: 'Enterprise Help', label: 'HPE OneView', trigger: '224' },
                ],
            },
            {
                id: '222',
                component: (
                    <a target="_blank" href="https://www.hpe.com/us/en/storage/3par.html"> Click here to Learn more about HPE 3PAR StoreServ Storage Arrays </a>
                ),
                trigger: "400",
            },
            {
                id: '223',
                component: (
                    <a target="_blank" href="https://www.hpe.com/us/en/product-catalog/synergy/synergy-infrastructure/pip.hpe-synergy-12000-frame.1008615198..html"> Click here to get help with HPE Synergy Infrastructure </a>
                ),
                trigger: "400",
            },
            {
                id: '224',
                component: (
                    <a target="_blank" href="https://www.hpe.com/us/en/integrated-systems/software.html"> Click here to get help with HPE OneView </a>
                ),
                trigger: "400",
            },


            {
                id: '230',
                message: "Describe your problem",
                trigger: "231",
            },
            {
                id: '231',
                user: true,
                trigger: "310",
            },
            {
                id: '232',
                message: ({previousValue}) => {
                    return "Sending an email to support regarding your issue of : \"" + previousValue + "\"."
                },
                trigger: "310",
            },

            {
                id: '300',
                user: true,
                trigger: 310,
            },

            {
                id: '310',
                message: ({previousValue}) => {
                    if (problem == "")
                        problem = previousValue;
                    return "What is your name?"
                },
                trigger: "311a"
            },
            {
                id: '311a',
                user: true,
                trigger: "311",
            },
            {
                id: '311',
                message: ({previousValue}) => {
                    name = previousValue;
                    return "What is your email address?"
                },
                trigger: "312a",
            },
            {
                id: '312a',
                user: true,
                trigger: "312",
            },
            {
                id: '312',
                message: ({previousValue}) => {
                    email = previousValue;
                    return "Here is the email that will be sent to support:"
                },
                trigger: "313a",
            },
            {
                id: '313a',
                message: ({previousValue}) => {
                    return "Name: " + name
                },
                trigger: "313b",
            },
            {
                id: '313b',
                message: ({previousValue}) => {
                    return "Email: " + email
                },
                trigger: "313c",
            },
            {
                id: '313c',
                message: ({previousValue}) => {
                    return "Issue: " + problem
                },
                trigger: "313",
            },
            {
                id: '313',
                message: "Would you like to send your email to support?",
                trigger: 314,
            },
            {
                id: '314',
                options: [
                    { value: "Yes", label: 'Yes', trigger: '315' },
                    { value: 'No', label: 'No', trigger: '400' },
                ],
            },
            {
                id: '315',
                message: "Email sent to our support team. We will respond to you within the next 24 hours.",
                trigger: 400,
            },










            {
                id: '300',
                message: "Try to describe your problem",
                trigger: "7",
            },
            {
                id: '7',
                user: true,
                trigger: "7a"
            },
            {
                id: '7a',
                trigger: ({previousValue}) => {
                    console.log(previousValueMsg)
                    if (previousValueMsg === "cat mode") {
                        return "7b"
                    } else {
                        return "310"
                    }
                },
                message: ({previousValue}) => {
                    console.log(previousValue)
                    previousValueMsg = previousValue.toLowerCase();
                    if ("cat mode" === previousValue.toLowerCase()) {
                        return "Cats are attacking"
                    } else {
                        problem = previousValue
                        return "Let me try to help you with " + previousValue
                    }
                }
            },
            {
                id: '7b',
                message: () => {
                    previousValueMsg = "";
                    return "Cat mode has been activated"
                },
                trigger: "8a",
            },
            {
                id: '8a',
                component: (
                    <img id="img" src={this.state.url} onChange={this.url}/>
                ),
                trigger: "8b",
            },
            {
                id: '8b',
                message: "Would you like to exit cat mode?",
                trigger: "8c",
            },
            {
                id: '8c',
                user: true,
                trigger: "8d",
            },
            {
                id: '8d',
                message: "Too bad. Exiting cat mode",
                trigger: "3",
            },
            {
                id: '400',
                message: "Would you like to end your chat?",
                trigger: "401",
            },
            {
                id: '401',
                options: [
                    { value: "8400 Switches", label: 'Yes', trigger: '402' },
                    { value: '8300 Switches', label: 'No', trigger: '3' },
                ]
            },
            {
                id: '402',
                message: "Thank you and Goodbye.",
                end: true,
            },
        ];

        const theme = {
            background: '#f5f8fb',
            fontFamily: "Verdana",
            headerBgColor: '#0dab7f',
            headerFontColor: '#fff',
            headerFontSize: '15px',
            botBubbleColor: '#EF6C00',
            botFontColor: '#fff',
            userBubbleColor: '#fff',
            userFontColor: '#4a4a4a',
        };

        return (
            <div className="App">
            <div id="container">


            <ThemeProvider theme={theme}>
            <ChatBot height="100vh" headerTitle="HPE Service Desk Chat" width="100vw" steps={steps} />
            </ThemeProvider>
            </div>
            </div>
        );
    }
}

export default App;
