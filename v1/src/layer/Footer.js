import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function Footer(props) {

    return (
            <MDBFooter bgColor='light' className='text-center text-lg-center text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get All of Source Code On Our Github:&nbsp;&nbsp;</span>
                        <a href='https://github.com/jaekyungshon/Capstone-Finance-Frontend' className='me-4 text-reset'>
                            Frontend
                        </a>
                        <a href='https://github.com/jaekyungshon/Capstone-Finance-Backend' className='me-4 text-reset'>
                            Backend
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 박주승</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> 010-0000-0000
                                </p>
                                <p>
                                    <a href='https://github.com/ParkJuseung'
                                       className='me-4 text-reset'>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                            </MDBCol>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 손재경</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    jksohn28@naver.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> 010-2084-1328
                                </p>
                                <p>
                                    <a href='https://github.com/jaekyungshon'
                                       className='me-4 text-reset'>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                            </MDBCol>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 김상헌</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> 010-0000-0000
                                </p>
                                <p>
                                    <a href='https://github.com/shdhkim'
                                       className='me-4 text-reset'>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                            </MDBCol>
                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact: 김원준</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Hansung University
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> 010-0000-0000
                                </p>
                                <p>
                                    <a href=''
                                       className='me-4 text-reset'>
                                        <MDBIcon color='secondary' fab icon='github'/>
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © Finance, Inc. 2024 Copyright:&nbsp;&nbsp;
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        Capstone-418
                    </a>
                </div>
            </MDBFooter>
    );
}

export default Footer;