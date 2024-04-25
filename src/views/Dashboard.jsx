import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, Line, LineChart } from "recharts";
import StatsCard from "@/components/StatsCard/StatsCard";
import Traffic from "@/components/Traffic/Traffic";
import Earning from "@/components/Earning/Earning";
import Download from "@/components/Download/Download";
import Revenue from "@/components/Revenue/Revenue";
import { Stats, StatsTab } from "@/components/Stats/Stats";
import SocialCounter from "@/components/SocialCounter/SocialCounter";
import Timeline from "@/components/Timeline/Timeline";
import RealTime from "@/components/RealTime/RealTime";
import Day from "@/components/Stats/Day";
import Month from "@/components/Stats/Month";
import Year from "@/components/Stats/Year";

const Dashboard = () => {
    const data1 = [
        {
            name: "Page A",
            uv: 2000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 6000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 4000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 8000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 4000,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 6000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 2000,
            pv: 4300,
            amt: 2100,
        },
        {
            name: "Page G",
            uv: 5000,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data2 = [
        {
            name: "Page A",
            uv: 400,
            pv: 400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 30,
            pv: 25000,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 10,
            pv: 10500,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 20,
            pv: 50000,
            amt: 2000,
        },
    ];

    return (
        <Container fluid className="p-0">
            {/* start revenue section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#5c6bc0"
                        symbol="%"
                        symbolPosition="right"
                        counter={89}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#ffa726"
                        counter={12124}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#ef5350"
                        symbol="$"
                        counter={9811100}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
                <Col sm={12} md={6} lg={3} xl={3}>
                    <StatsCard
                        type="revenue-progressBar"
                        bgColor="#42a5f5"
                        symbol="$"
                        counter={9811100}
                        isCounter={true}
                        title="Lorem ipsum..."
                        progressPercent={25}
                        description="Lorem ipsum dolor sit amet enim."
                    />
                </Col>
            </Row>
            {/* end revenue section */}

            {/* start user table, social counter & timeline section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={12} lg={8} xl={8}>
                    <Col className="mb-4" sm={12}>
                        <Stats activeTab="day">
                            <StatsTab eventKey="day" title="Day">
                                <Day />
                            </StatsTab>
                            <StatsTab eventKey="Month" title="Month">
                                <Month />
                            </StatsTab>
                            <StatsTab eventKey="year" title="Year">
                                <Year />
                            </StatsTab>
                        </Stats>
                    </Col>
                    <Row className="gy-4 gx-4">
                        <Col sm={12} md={4}>
                            <SocialCounter
                                padding="28px"
                                bgColor="#1DA1F2"
                                icon="fa-brands fa-twitter"
                                count="1875980"
                                isCounter={true}
                            />
                        </Col>
                        <Col sm={12} md={4}>
                            <SocialCounter
                                padding="28px"
                                bgColor="#3B5998"
                                icon="fa-brands fa-facebook-f"
                                count="1875980"
                                isCounter={true}
                            />
                        </Col>
                        <Col sm={12} md={4}>
                            <SocialCounter
                                padding="28px"
                                bgColor="#833AB4"
                                icon="fa-brands fa-instagram"
                                count="1875980"
                                isCounter={true}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={12} lg={4} xl={4}>
                    <Timeline />
                </Col>
            </Row>
            {/* end user table, social counter & timeline section */}

            {/* start area chart and traffic  section */}
            <Row className="gy-4 gx-4 mb-4">
                <Col md={12} lg={5} xl={5}>
                    <RealTime />
                </Col>
                <Col md={12} lg={7} xl={7}>
                    <Traffic />
                </Col>
            </Row>
            {/* end area chart and traffic  section */}

            {/* start earning and download  revenue section */}
            <Row className="gy-4 gx-4">
                <Col cmd={12} lg={6} xl={6}>
                    <Earning />
                </Col>
                <Col cmd={12} lg={6} xl={6}>
                    <Row className="gy-4 gx-4">
                        <Col sm={12} md={6}>
                            <Download />
                        </Col>
                        <Col sm={12} md={6}>
                            <Revenue />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* end earning and download  revenue section */}
        </Container>
    );
};

export default Dashboard;

