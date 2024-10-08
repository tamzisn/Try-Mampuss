import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ImportConfiguration from "../components/ImportConfiguration";
import BgExport from "../../public/BgExport.png";
import BgImport from "../../public/BgImport.png";

const Setting = () => {
  const [importConfoguration, setImportConfiguration] =
    useState<boolean>(false);
  return (
    <Box
      sx={{
        width: "100%",
        height: "85.8%",
        // bgcolor: "#282828",
        background: "linear-gradient(50deg, #1D1D1D 40%, #2C2C2C 100%)",
        borderRadius: "15px",
        padding: "50px 60px",
        // justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {/* Export */}
      <Box
        sx={{
          width: "100%",
          height: "30%",
          // bgcolor: "#42018E",
          background: `url(${BgExport}), linear-gradient(90deg, rgba(85, 1, 184, 0.42) 0%, rgba(66, 1, 142, 0) 85%)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          borderRadius: "15px",
          border: "3px solid #474747",
          display: "flex",
          gap: "20px",
          padding: "15px 15px 15px 0px",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: "23%",
            height: "100%",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            overflow: "visible",
          }}
        >
          <img
            src="/public/Export Img.svg"
            alt=""
            style={{
              width: "70%",
              height: "auto",
              position: "absolute",
              top: "-20px",
            }}
          />
        </Box>

        {/* Text */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            // bgcolor: "#2ee",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "48px",
              fontWeight: "900",
              color: "#fff",
              lineHeight: "48px",
              margin: 0,
            }}
          >
            EXPORT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "48px",
              fontWeight: "900",
              color: "#fff",
              lineHeight: "48px",
              margin: 0,
            }}
          >
            CONFIGURATION
          </Typography>
        </Box>
        {/* Button */}
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <Button
            sx={{
              borderRadius: "5px",
              border: "1px solid #5246DB",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "0 10px",
              "&:hover": {
                border: "1px solid #5246DB",
                background: "linear-gradient(90deg, #5246DB 0%, #5E60CE 140%)",
                color: "#fff",
                borderRadius: "5px",
              },
            }}
          >
            <Typography
              sx={{
                height: "100%",
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "400",
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              Export Configuration
            </Typography>
            <img
              src="./public/Export.svg"
              alt="Export"
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "3px",
                // backgroundColor: "#000",
              }}
            />
          </Button>
        </Box>
      </Box>
      {/* Import */}
      <Box
        sx={{
          width: "100%",
          height: "30%",
          background: `url(${BgImport}), linear-gradient(90deg, rgba(85, 1, 184, 0.42) 0%, rgba(66, 1, 142, 0) 85%)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          borderRadius: "15px",
          border: "3px solid #474747",
          display: "flex",
          gap: "20px",
          padding: "15px 15px 15px 0px",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: "23%",
            height: "100%",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            overflow: "visible",
          }}
        >
          <img
            src="/public/Import Img.svg"
            alt=""
            style={{
              width: "70%",
              height: "auto",
              position: "absolute",
              top: "-20px",
            }}
          />
        </Box>

        {/* Text */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            // bgcolor: "#2ee",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "48px",
              fontWeight: "900",
              color: "#fff",
              lineHeight: "48px",
              margin: 0,
            }}
          >
            IMPORT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "48px",
              fontWeight: "900",
              color: "#fff",
              lineHeight: "48px",
              margin: 0,
            }}
          >
            CONFIGURATION
          </Typography>
        </Box>
        {/* Button */}
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <Button
            onClick={() => setImportConfiguration(true)}
            sx={{
              borderRadius: "5px",
              border: "1px solid #5246DB",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "0 10px",
              "&:hover": {
                border: "1px solid #5246DB",
                background: "linear-gradient(90deg, #5246DB 0%, #5E60CE 140%)",
                color: "#fff",
                borderRadius: "5px",
              },
            }}
          >
            <Typography
              sx={{
                height: "100%",
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "400",
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              Import Configuration
            </Typography>
            <img
              src="./public/Import.svg"
              alt="Export"
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "3px",
                // backgroundColor: "#000",
              }}
            />
          </Button>
        </Box>
      </Box>
      {/* Log */}
      <Box
        sx={{
          width: "100%",
          height: "30%",
          //   bgcolor: "#42018E",
          borderRadius: "15px",
          //   border: "3px solid #474747",
          display: "flex",
          gap: "35px",
        }}
      >
        {/* App Log */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            // bgcolor: "#42018E",
            background: "linear-gradient(60deg, #2A2A2A 20%, #6930C3 200%)",
            borderRadius: "15px",
            border: "3px solid #474747",
            display: "flex",
            alignItems: "center",
            padding: "20px 30px",
            gap: "20px",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              width: "22%",
              height: "100%",
              //   bgcolor: "#7101F4",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
            }}
          >
            <img src="./public/App Log.svg" alt="" />
          </Box>

          {/* Left Area */}
          <Box
            sx={{
              width: "68%",
              height: "89%",
              //   bgcolor: "#7101F4",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Text */}
            <Box
              sx={{
                width: "100%",
                height: "25%",
                // bgcolor: "#000",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  height: "100%",
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "24px",
                  color: "#fff",
                  //   bgcolor: "#2eee",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                APPLICATION LOG
              </Typography>
            </Box>
            {/* Action */}
            <Box
              sx={{
                width: "100%",
                height: "75%",
                // bgcolor: "#2cc",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {/* Download Log */}
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #42018E03 10%, #5701BC73 210%)",
                  p: "0",
                  width: "100%",
                  height: "36px",
                  // bgcolor: "#2e2e",
                  display: "flex",
                  //   gap: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "85%",
                    height: "100%",
                    // bgcolor: "#5701BC",
                    borderRadius: "0 0 0 0",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      width: "100%",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: "17px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Download Log
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: "6px 8px",
                    width: "15%",
                    height: "100%",
                    bgcolor: "#212121",
                    border: "1px solid #5246DB",
                  }}
                >
                  <img src="./public/Download.svg" alt="" />
                </Box>
              </Button>
              <Box
                sx={{
                  width: "100%",
                  height: "3px",
                  bgcolor: "#AAAAAA",
                  borderRadius: "5px",
                }}
              ></Box>
              {/* Clear Log */}
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #42018E03 10%, #5701BC73 210%)",
                  p: "0",
                  width: "100%",
                  height: "36px",
                  //   bgcolor: "#2e2e",
                  display: "flex",
                  //   gap: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "85%",
                    height: "100%",
                    // bgcolor: "#5701BC",
                    borderRadius: "0 0 0 0",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      width: "100%",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: "17px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Clear Log
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: "6px 8px",

                    width: "15%",
                    height: "100%",
                    bgcolor: "#212121",
                    border: "1px solid #5246DB",
                  }}
                >
                  <img src="./public/Clear.svg" alt="" />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        {/* SNMP Log */}=
        <Box
          sx={{
            width: "50%",
            height: "100%",
            // bgcolor: "#42018E",
            background: "linear-gradient(60deg, #2A2A2A 20%, #6930C3 200%)",
            borderRadius: "15px",
            border: "3px solid #474747",
            display: "flex",
            alignItems: "center",
            padding: "20px 30px",
            gap: "20px",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              width: "22%",
              height: "100%",
              //   bgcolor: "#7101F4",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
            }}
          >
            <img src="./public/SNMP Log.svg" alt="" />
          </Box>

          {/* Left Area */}
          <Box
            sx={{
              width: "68%",
              height: "89%",
              //   bgcolor: "#7101F4",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Text */}
            <Box
              sx={{
                width: "100%",
                height: "25%",
                // bgcolor: "#000",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  height: "100%",
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "24px",
                  color: "#fff",
                  //   bgcolor: "#2eee",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                SNMP LOG
              </Typography>
            </Box>
            {/* Action */}
            <Box
              sx={{
                width: "100%",
                height: "75%",
                // bgcolor: "#2cc",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {/* Download Log */}
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #42018E03 10%, #5701BC73 210%)",
                  p: "0",
                  width: "100%",
                  height: "36px",
                  // bgcolor: "#2e2e",
                  display: "flex",
                  //   gap: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "85%",
                    height: "100%",
                    // bgcolor: "#5701BC",
                    borderRadius: "0 0 0 0",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      width: "100%",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: "17px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Download Log
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: "6px 8px",

                    width: "15%",
                    height: "100%",
                    bgcolor: "#212121",
                    border: "1px solid #5246DB",
                  }}
                >
                  <img src="./public/Download.svg" alt="" />
                </Box>
              </Button>
              <Box
                sx={{
                  width: "100%",
                  height: "3px",
                  bgcolor: "#AAAAAA",
                  borderRadius: "5px",
                }}
              ></Box>
              {/* Clear Log */}
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #42018E03 10%, #5701BC73 210%)",
                  p: "0",
                  width: "100%",
                  height: "36px",
                  //   bgcolor: "#2e2e",
                  display: "flex",
                  //   gap: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "85%",
                    height: "100%",
                    // bgcolor: "#5701BC",
                    borderRadius: "0 0 0 0",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      width: "100%",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      fontSize: "17px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Clear Log
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: "6px 8px",
                    width: "15%",
                    height: "100%",
                    bgcolor: "#212121",
                    border: "1px solid #5246DB",
                  }}
                >
                  <img src="./public/Clear.svg" alt="" />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="modal-area">
        <ImportConfiguration
          open={importConfoguration}
          onClose={() => setImportConfiguration(false)}
        />
      </Box>
    </Box>
  );
};

export default Setting;
