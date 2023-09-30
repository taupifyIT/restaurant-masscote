import React from "react";
import { MDBFooter, MDBContainer, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";
import Button from '@mui/material/Button';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
            <h6 style={{color: "#282828"}} className="text-uppercase fw-bold mb-4">Contact</h6>
            <p style={{color: "#282828"}}>
              <MDBIcon  icon="home" className="me-4" />
              Route kaied mhamed km 3, Sfax, Tunisie
            </p>
            <p style={{color: "#282828"}}>
              <MDBIcon icon="envelope" className="me-3" />
              lamascotte@edge-agency.tn
            </p>
            <p style={{color: "#282828"}}>
              <MDBIcon icon="phone" className="me-3" /> +216 52 735 777
            </p>
          </MDBCol>
          <Button       
            floating
            className="m-1"
            href="https://www.facebook.com/La-Mascotte-362198197318317"
            style={{backgroundColor: "#E4CF59"}}
          >
            <MDBIcon style={{color: "#E9E9E9"}} fab icon="facebook-f" />
          </Button>

          <Button
            floating
            className="m-1"
            href="https://www.instagram.com/lamascotte1/?hl=fr"
            style={{backgroundColor: "#E4CF59"}}
          >
            <MDBIcon style={{color: "#E9E9E9"}}  fab icon="instagram" />
          </Button>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#282828", padding: "10" }}
      >
        © 2023 Copyright
        <a style={{ color: "#E4CF59", padding: "10px" }} href="https://21c-digital.com/">
          21C'DIGITAL
        </a>
      </div>
    </MDBFooter>
  );
}
