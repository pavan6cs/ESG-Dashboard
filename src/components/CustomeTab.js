import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import CustomeTabcss from './CustomeTab.scss';
import DoughnutChartCustome from '../components/DoughnutChartCustome'
import axios from 'axios'
import getRandomArbitrary from './../utils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const CustomeTab = (props) => {
    const [value, setValue] = React.useState(0);
    //const [allscores, setAllScores] = React.useState([]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="ESG" {...a11yProps(0)} />
                    <Tab label="Alternatives" {...a11yProps(1)} />
                    <Tab label="News" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="chart_section">
                    <div className="chart_section--one">
                        {
                            props.data ?
                                <DoughnutChartCustome data={props.data.total.toFixed(2)} marginTop="0rem" marginLeft="0rem" width="100px" height="100px" />
                                : ""
                        }

                    </div>
                    <div className="chart_section--two">
                        {
                            props.data ?
                                <div className='score_values'>
                                    <div className='score_value-sec'>
                                        <div className="score_box score_box-one"></div>
                                        <div className="score_box-content">
                                            <p>Environmental</p>
                                            <small>{props.data.E.toFixed(2)}</small>
                                        </div>
                                    </div>
                                    <div className='score_value-sec'>
                                        <div className=" score_box score_box-two"></div>
                                        <div>
                                            <p>Social</p>
                                            <small>{props.data.S.toFixed(2)}</small>
                                        </div>
                                    </div>
                                    <div className='score_value-sec'>
                                        <div className="score_box score_box-three"></div>
                                        <div>
                                            <p>Governance</p>
                                            <small>{props.data.G.toFixed(2)}</small>
                                        </div>
                                    </div>

                                </div>
                                : ""}
                    </div>
                </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <p>Heigher Performing Companies</p>
                {
                    props.allScores.length > 0 ?

                        <TableContainer component={Paper}>
                            <Table sx={{ maxWidth: 450 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Comapany</TableCell>
                                        <TableCell align="right">Score</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.allScores && props.data ? props.allScores.map((row) => {
                                            if (row.total > props.data.total) {
                                                return (
                                                    <>
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.total.toFixed(2)}</TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            }
                                        })

                                            : ""}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        : <div style={{ margin: "50px" }}> No companies found </div>}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box >
    );

}

export default CustomeTab;