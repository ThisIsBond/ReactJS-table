const data = [
    {
        "traceId": "9b639e1357fa3a8e",
        "vin": "BAUNEE4MZ16061503",
        "timestamp": "14.04.2022 12:13:59",
        "userId": "W689552325",
        "requestType": "Product Overview",
        "identityProvider": "IDK",
        "market": "Germany",
        "stepGroups": [
            {
                "name": "Request received",
                "passedProducts": 0,
                "discardedProducts": 0,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 0,
                "processSteps": [
                    {
                        "name": "Request routed through gateway",
                        "description": "Get product request is routed through the gateway and processed by the backend.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 0,
                        "passedProducts": [],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    }
                ]
            },
            {
                "name": "Commercetools products received",
                "passedProducts": 217,
                "discardedProducts": 0,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 0,
                "processSteps": [
                    {
                        "name": "Commercetools products received",
                        "description": "Number of products stored in Commercetools that are not technical singles. In case of zero products there is a technical error in the communication to Commercetools.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 217,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "APP",
                                "numberOfProducts": 8,
                                "products": [
                                    {
                                        "productKey": "4000000898",
                                        "externalProductKey": "AU.XX.ECE.A1",
                                        "name": "Audi Logbook Online"
                                    },
                                    {
                                        "productKey": "7000003144",
                                        "externalProductKey": "Customer_0005_master",
                                        "name": "APP B - Audi Smartphone Interface - like \"fod-connect-single\""
                                    },
                                    {
                                        "productKey": "7000003145",
                                        "externalProductKey": "test_0036_master",
                                        "name": "APP C - Matrix LED package - like \"fod-connect-package\""
                                    },
                                    {
                                        "productKey": "7000003146",
                                        "externalProductKey": "AU.A3NF.ECE.P7",
                                        "name": "APP D - High-beam assist - Both serviceId  and all serviceIds from packageContents"
                                    },
                                    {
                                        "productKey": "7000003147",
                                        "externalProductKey": "4G0054816Z_MASTER",
                                        "name": "APP A - Picturebook Navigation - discard product,  resp. variant(s)"
                                    },
                                    {
                                        "productKey": "7000003169",
                                        "externalProductKey": "AU.XX.ECE.A1",
                                        "name": "Audi Logbook Online"
                                    },
                                    {
                                        "productKey": "800000000",
                                        "externalProductKey": "externalKey",
                                        "name": "Test Product"
                                    },
                                    {
                                        "productKey": "9876543211",
                                        "externalProductKey": "groupstorebackend_test",
                                        "name": "Groupstorebackend App Test"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 100,
                                "products": [
                                    {
                                        "productKey": "1111111111",
                                        "externalProductKey": "unknownExternalProductKey",
                                        "name": "Test product merchant"
                                    },
                                    {
                                        "productKey": "4000000199",
                                        "externalProductKey": "Customer_0010_master",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "4000000250",
                                        "externalProductKey": "Customer_0005_master",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000404",
                                        "externalProductKey": "AU.A3NF.ECE.P8",
                                        "name": "Adaptive speed assist"
                                    },
                                    {
                                        "productKey": "4000000419",
                                        "externalProductKey": "test_0040_master",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "4000000462",
                                        "externalProductKey": "Customer_0004_master",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000479",
                                        "externalProductKey": "Customer_0007_master",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000560",
                                        "externalProductKey": "Customer_0008_master",
                                        "name": "Audi virtual cockpit"
                                    },
                                    {
                                        "productKey": "4000000576",
                                        "externalProductKey": "AU.A3NF.ECE.P1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000578",
                                        "externalProductKey": "Customer_0006_master",
                                        "name": "Adaptive speed assist"
                                    },
                                    {
                                        "productKey": "4000000612",
                                        "externalProductKey": "test_0039_master",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000627",
                                        "externalProductKey": "AU.A3NF.ECE.P6",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000650",
                                        "externalProductKey": "AU.C8.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000651",
                                        "externalProductKey": "AU.C8.ECE.T3",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000678",
                                        "externalProductKey": "AU.Q8.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000679",
                                        "externalProductKey": "AU.Q8.ECE.T2",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000680",
                                        "externalProductKey": "AU.Q7PA.ECE.T2",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000681",
                                        "externalProductKey": "AU.Q7PA.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000682",
                                        "externalProductKey": "AU.xx.ECE.E1",
                                        "name": "Traffic Online"
                                    },
                                    {
                                        "productKey": "4000000684",
                                        "externalProductKey": "AU.Q5PA.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000685",
                                        "externalProductKey": "AU.C8.CAN.P1",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000688",
                                        "externalProductKey": "AU.Q7PA.CAN.P1",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000689",
                                        "externalProductKey": "AU.Q8.CAN.P1",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000725",
                                        "externalProductKey": "AU.XX.ECE.P1",
                                        "name": "Online Logbook"
                                    },
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    },
                                    {
                                        "productKey": "4000000746",
                                        "externalProductKey": "AU.XX.ECE.P3",
                                        "name": "Audi connect key"
                                    },
                                    {
                                        "productKey": "4000000814",
                                        "externalProductKey": "AU.CBEV.CAN.P1",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000839",
                                        "externalProductKey": "AU.CBEV.ECE.T2",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "4000000840",
                                        "externalProductKey": "AU.CBEV.ECE.T3",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000842",
                                        "externalProductKey": "AU.CBEV.ECE.T5",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000843",
                                        "externalProductKey": "AU.A3NF.USA.P3",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000874",
                                        "externalProductKey": "AU.CBEV.USA.P3",
                                        "name": "Light function package"
                                    },
                                    {
                                        "productKey": "4000000875",
                                        "externalProductKey": "AU.CBEV.USA.P2",
                                        "name": "Light function package"
                                    },
                                    {
                                        "productKey": "4000000877",
                                        "externalProductKey": "AU.eQ5.ECE.P1",
                                        "name": "Virtual ambience"
                                    },
                                    {
                                        "productKey": "4000000878",
                                        "externalProductKey": "AU.eQ5.ECE.P2",
                                        "name": "Holdassist"
                                    },
                                    {
                                        "productKey": "4000000881",
                                        "externalProductKey": "AU.eQ5.ECE.P4",
                                        "name": "Smart Charging"
                                    },
                                    {
                                        "productKey": "4000000882",
                                        "externalProductKey": "AU.eQ5.ECE.P5",
                                        "name": "Bassboost"
                                    },
                                    {
                                        "productKey": "4000000883",
                                        "externalProductKey": "AU.eQ5.ECE.P6",
                                        "name": "Fernlichtassistent"
                                    },
                                    {
                                        "productKey": "4000000884",
                                        "externalProductKey": "AU.eQ5.ECE.P7",
                                        "name": "Light Signatures"
                                    },
                                    {
                                        "productKey": "4000000885",
                                        "externalProductKey": "AU.eQ5.ECE.P8",
                                        "name": "DC Boost"
                                    },
                                    {
                                        "productKey": "4000000890",
                                        "externalProductKey": "AU.eQ5.ECE.P11",
                                        "name": "Virtual Surround"
                                    },
                                    {
                                        "productKey": "4000000891",
                                        "externalProductKey": "AU.eQ5.ECE.P12",
                                        "name": "NavDirectionPrompt"
                                    },
                                    {
                                        "productKey": "4000000892",
                                        "externalProductKey": "AU.eQ5.ECE.P13",
                                        "name": "Tuningfeatby"
                                    },
                                    {
                                        "productKey": "4000000952",
                                        "externalProductKey": "AU.CBEV.ECE.P3",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "4000000959",
                                        "externalProductKey": "AU.A3NF.ECE.P11",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000960",
                                        "externalProductKey": "AU.B9PA.ECE.P1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000990",
                                        "externalProductKey": "AU.ASUVe.ECE.P11",
                                        "name": "Adaptive cruise control "
                                    },
                                    {
                                        "productKey": "4000000991",
                                        "externalProductKey": "AU.ASUVe.ECE.P7",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000992",
                                        "externalProductKey": "AU.ASUVe.ECE.P10",
                                        "name": "Adaptive cruise control "
                                    },
                                    {
                                        "productKey": "4000000993",
                                        "externalProductKey": "AU.ASUVe.ECE.P9",
                                        "name": "2-zone deluxe automatic air conditioning"
                                    },
                                    {
                                        "productKey": "4000000994",
                                        "externalProductKey": "AU.ASUVe.ECE.P8",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000001012",
                                        "externalProductKey": "P-MBB-DataPlan",
                                        "name": "P-MBB-DataPlan"
                                    },
                                    {
                                        "productKey": "4000001013",
                                        "externalProductKey": "P-MBB-DynamicPOIChargingStations",
                                        "name": "P-MBB-DynamicPOIChargingStations"
                                    },
                                    {
                                        "productKey": "4000001014",
                                        "externalProductKey": "P-MBB-LGI",
                                        "name": "P-MBB-LGI"
                                    },
                                    {
                                        "productKey": "4000001015",
                                        "externalProductKey": "P-MBB-Nc_destsync",
                                        "name": "P-MBB-Nc_destsync"
                                    },
                                    {
                                        "productKey": "4000001016",
                                        "externalProductKey": "P-MBB-OnlineTraffic-Plus",
                                        "name": "P-MBB-OnlineTraffic-Plus"
                                    },
                                    {
                                        "productKey": "4000001017",
                                        "externalProductKey": "P-MBB-VerkehrszeichenOnline",
                                        "name": "P-MBB-VerkehrszeichenOnline"
                                    },
                                    {
                                        "productKey": "4000001018",
                                        "externalProductKey": "Customer.MEB.COD.ECE.Ampelinfo_online",
                                        "name": "Audi Traffic Light Information"
                                    },
                                    {
                                        "productKey": "4000001020",
                                        "externalProductKey": "Customer.MEB.COD.ECE.OnlineFahrtenbuch",
                                        "name": "Online Logbook"
                                    },
                                    {
                                        "productKey": "5000000017",
                                        "externalProductKey": "5000000017",
                                        "name": "Test Product with Different Merchant Id"
                                    },
                                    {
                                        "productKey": "5000000155",
                                        "externalProductKey": "Test_6",
                                        "name": "[Used ONLY in ACP Integration Tests] MMI Navigation plus with MMI touch response"
                                    },
                                    {
                                        "productKey": "5000000174",
                                        "externalProductKey": "5000000174",
                                        "name": "P-MBB-OTAMapUpdate"
                                    },
                                    {
                                        "productKey": "5000000175",
                                        "externalProductKey": "5000000175",
                                        "name": "P-MBB-PoiSuche"
                                    },
                                    {
                                        "productKey": "5000000176",
                                        "externalProductKey": "5000000176",
                                        "name": "P-MBB-OnStreetParking"
                                    },
                                    {
                                        "productKey": "5000000177",
                                        "externalProductKey": "5000000177",
                                        "name": "P-MBB-DataPlan"
                                    },
                                    {
                                        "productKey": "5000000178",
                                        "externalProductKey": "5000000178",
                                        "name": "P-MBB-OnlineTraffic"
                                    },
                                    {
                                        "productKey": "5000000179",
                                        "externalProductKey": "5000000179",
                                        "name": "P-MBB-LGI"
                                    },
                                    {
                                        "productKey": "5000000180",
                                        "externalProductKey": "5000000180",
                                        "name": "P-MBB-Weather"
                                    },
                                    {
                                        "productKey": "5000000181",
                                        "externalProductKey": "5000000181",
                                        "name": "P-MBB-Ampelinformation"
                                    },
                                    {
                                        "productKey": "5000000182",
                                        "externalProductKey": "5000000182",
                                        "name": "P-MBB-MediaOnDemand"
                                    },
                                    {
                                        "productKey": "5000000183",
                                        "externalProductKey": "5000000183",
                                        "name": "P-MBB-VerkehrszeichenOnline"
                                    },
                                    {
                                        "productKey": "5000000184",
                                        "externalProductKey": "5000000184",
                                        "name": "P-MBB-News"
                                    },
                                    {
                                        "productKey": "5000000186",
                                        "externalProductKey": "5000000186",
                                        "name": "P-RemoteProfileAndTimerProgramming"
                                    },
                                    {
                                        "productKey": "5000000187",
                                        "externalProductKey": "5000000187",
                                        "name": "P-RemotePreTripClimatisation"
                                    },
                                    {
                                        "productKey": "5000000188",
                                        "externalProductKey": "5000000188",
                                        "name": "P-RemoteBatteryCharge"
                                    },
                                    {
                                        "productKey": "5000000191",
                                        "externalProductKey": "5000000191",
                                        "name": "P-MBB-OnlineSongRec"
                                    },
                                    {
                                        "productKey": "5000000192",
                                        "externalProductKey": "5000000192",
                                        "name": "P-MBB-CityModels"
                                    },
                                    {
                                        "productKey": "5000000193",
                                        "externalProductKey": "5000000193",
                                        "name": "P-MBB-MapSatellite"
                                    },
                                    {
                                        "productKey": "5000000194",
                                        "externalProductKey": "5000000194",
                                        "name": "P-MBB-OnlineRadio"
                                    },
                                    {
                                        "productKey": "5000000195",
                                        "externalProductKey": "5000000195",
                                        "name": "P-MBB-HybridRadio"
                                    },
                                    {
                                        "productKey": "5000000196",
                                        "externalProductKey": "5000000196",
                                        "name": "P-MBB-OnlineSpeech"
                                    },
                                    {
                                        "productKey": "6000000038",
                                        "externalProductKey": "6000000038",
                                        "name": "Test Product with Different Merchant Id"
                                    },
                                    {
                                        "productKey": "7000000007",
                                        "externalProductKey": "7000000007",
                                        "name": "Test Product with Different Merchant Id"
                                    },
                                    {
                                        "productKey": "7000000046",
                                        "externalProductKey": "test_0047_master",
                                        "name": "Audi virtual cockpit"
                                    },
                                    {
                                        "productKey": "7000000048",
                                        "externalProductKey": "test_0049_master",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "7000000049",
                                        "externalProductKey": "AU.A3NF.ECE.P8",
                                        "name": "Cruise control"
                                    },
                                    {
                                        "productKey": "7000000050",
                                        "externalProductKey": "AU.A3NF.ECE.P1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "7000000051",
                                        "externalProductKey": "test_0040_master",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "7000000052",
                                        "externalProductKey": "test_0043_master",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "7000000053",
                                        "externalProductKey": "test_0042_master",
                                        "name": "Cruise control"
                                    },
                                    {
                                        "productKey": "7000000054",
                                        "externalProductKey": "test_0044_master",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "7000000055",
                                        "externalProductKey": "test_0028_master",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "7000000056",
                                        "externalProductKey": "test_0024_master"
                                    },
                                    {
                                        "productKey": "7000000057",
                                        "externalProductKey": "AU.A3NF.ECE.P6",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "7000000058",
                                        "externalProductKey": "test_0030_master",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "7000000059",
                                        "externalProductKey": "test_0045_master",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "7000000060",
                                        "externalProductKey": "test_0039_master",
                                        "name": "Audi Smartphone Interface"
                                    },
                                    {
                                        "productKey": "7000003104",
                                        "externalProductKey": "Customer_0006_master",
                                        "name": "Adaptive speed assist"
                                    },
                                    {
                                        "productKey": "7000003165",
                                        "externalProductKey": "Test_Verkaufsteilenummer_17",
                                        "name": "LPPackage_carapp_olb"
                                    },
                                    {
                                        "productKey": "auto-renewal-product-123",
                                        "externalProductKey": "auto-renewal-externalProductKey",
                                        "name": "FoD Auto-Renewal Product"
                                    }
                                ]
                            },
                            {
                                "type": "SUPPLIER_PRODUCT",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "8000000001",
                                        "externalProductKey": "",
                                        "name": "eReservation Test Product"
                                    },
                                    {
                                        "productKey": "8000000002",
                                        "externalProductKey": "",
                                        "name": "[suppliermock] Test supplier Product"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_PACKAGE",
                                "numberOfProducts": 100,
                                "products": [
                                    {
                                        "productKey": "1625832812757",
                                        "externalProductKey": "1625832812757",
                                        "name": "Technical signatures"
                                    },
                                    {
                                        "productKey": "1625833304608",
                                        "externalProductKey": "1625833304608",
                                        "name": "Bass Boost"
                                    },
                                    {
                                        "productKey": "1625833401058",
                                        "externalProductKey": "1625833401058",
                                        "name": "Auto Level Adjustment"
                                    },
                                    {
                                        "productKey": "1625833468304",
                                        "externalProductKey": "1625833468304",
                                        "name": "MP3 Enhancement"
                                    },
                                    {
                                        "productKey": "4000000183",
                                        "externalProductKey": "AU.A3NF.ECE.P4",
                                        "name": "MMI navigation plus with MMI touch and Audi virtual cockpit"
                                    },
                                    {
                                        "productKey": "4000000223",
                                        "externalProductKey": "1559833309600",
                                        "name": "Matrix-LED"
                                    },
                                    {
                                        "productKey": "4000000233",
                                        "externalProductKey": "test_0037_master",
                                        "name": "Light function package"
                                    },
                                    {
                                        "productKey": "4000000253",
                                        "externalProductKey": "AU.B9PA.USA.NaviPP",
                                        "name": "Navigation connect Plus"
                                    },
                                    {
                                        "productKey": "4000000269",
                                        "externalProductKey": "AU.B9PA.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000315",
                                        "externalProductKey": "Customer_0041_master",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000347_old",
                                        "externalProductKey": "test_0043_master_",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000361",
                                        "externalProductKey": "1559830020997",
                                        "name": "Curvelight"
                                    },
                                    {
                                        "productKey": "4000000454",
                                        "externalProductKey": "1559830236450",
                                        "name": "MMI Navigation"
                                    },
                                    {
                                        "productKey": "4000000515",
                                        "externalProductKey": "1559830101568",
                                        "name": "Animated daylight"
                                    },
                                    {
                                        "productKey": "4000000571",
                                        "externalProductKey": "1559829939184",
                                        "name": "Dynamic indicator"
                                    },
                                    {
                                        "productKey": "4000000596",
                                        "externalProductKey": "AU.B9PA.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000640",
                                        "externalProductKey": "AU.A3NF.ECE.P9",
                                        "name": "MMI navigation plus with MMI touch"
                                    },
                                    {
                                        "productKey": "4000000695",
                                        "externalProductKey": "AU.C7PA.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000696",
                                        "externalProductKey": "AU.Q5NF.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000697",
                                        "externalProductKey": "AU.Q5NF.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000698",
                                        "externalProductKey": "AU.CBEV.ECE.T1",
                                        "name": "#Demo Audi connect Navigation & Infotainment"
                                    },
                                    {
                                        "productKey": "4000000699",
                                        "externalProductKey": "AU.B9.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000700",
                                        "externalProductKey": "AU.Q2.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000701",
                                        "externalProductKey": "AU.A3PA.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000702",
                                        "externalProductKey": "AU.A3PA.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000704",
                                        "externalProductKey": "AU.B9.ECE.RC.15",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000705",
                                        "externalProductKey": "AU.TT3.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000706",
                                        "externalProductKey": "AU.R8NF.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000707",
                                        "externalProductKey": "AU.Q7NF.ECE.RC.15",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000708",
                                        "externalProductKey": "AU.C8.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000711",
                                        "externalProductKey": "AU.B9.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000712",
                                        "externalProductKey": "AU.Q7NF.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000713",
                                        "externalProductKey": "AU.Q2.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000714",
                                        "externalProductKey": "AU.Q5NF.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000715",
                                        "externalProductKey": "AU.B9.ECE.RC.16",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000716",
                                        "externalProductKey": "AU.Q7NF.ECE.RC.16",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000717",
                                        "externalProductKey": "AU.C8.ECE.INF.m",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000718",
                                        "externalProductKey": "AU.D5.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000719",
                                        "externalProductKey": "AU.C8.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000720",
                                        "externalProductKey": "AU.D5.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000722",
                                        "externalProductKey": "AU.B9PA.ECE.T4",
                                        "name": "#Demo Audi connect Navigation & Infotainment"
                                    },
                                    {
                                        "productKey": "4000000723",
                                        "externalProductKey": "AU.CBEV.FOD.ECE.P1",
                                        "name": "Matrix LED package"
                                    },
                                    {
                                        "productKey": "4000000724",
                                        "externalProductKey": "AU.B9PA.CAN.P1",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect "
                                    },
                                    {
                                        "productKey": "4000000726",
                                        "externalProductKey": "AU.A3.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000736",
                                        "externalProductKey": "AU.Q5PA.ECE.P1",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000752",
                                        "externalProductKey": "1111111111111",
                                        "name": "Audi connect"
                                    },
                                    {
                                        "productKey": "4000000753",
                                        "externalProductKey": "AU.Q5PA.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000754",
                                        "externalProductKey": "AU.Q7PA.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000755",
                                        "externalProductKey": "AU.C8.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000756",
                                        "externalProductKey": "AU.Q8.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000757",
                                        "externalProductKey": "AU.D5.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000758",
                                        "externalProductKey": "AU.Q5PA.USA.Navi",
                                        "name": "Navigation connect Plus"
                                    },
                                    {
                                        "productKey": "4000000761",
                                        "externalProductKey": "AU.Q5PA.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000762",
                                        "externalProductKey": "AU.D5.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000763",
                                        "externalProductKey": "AU.Q7PA.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000764",
                                        "externalProductKey": "AU.Q8.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000765",
                                        "externalProductKey": "AU.Q3.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000766",
                                        "externalProductKey": "AU.C8.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000768",
                                        "externalProductKey": "AU.Q3.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000797",
                                        "externalProductKey": "AU.CBEV.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000808",
                                        "externalProductKey": "AU.CBEV.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000823",
                                        "externalProductKey": "AU.CBEV.ECE.P2",
                                        "name": "Matrix LED package e-tron GT"
                                    },
                                    {
                                        "productKey": "4000000824",
                                        "externalProductKey": "AU.C8.ECE.P1",
                                        "name": "MMI navigation plus with MMI touch"
                                    },
                                    {
                                        "productKey": "4000000836",
                                        "externalProductKey": "AU.A3NF.CAN.P4",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect "
                                    },
                                    {
                                        "productKey": "4000000837",
                                        "externalProductKey": "AU.A3NF.USA.P1",
                                        "name": "Navigation PrimePlus"
                                    },
                                    {
                                        "productKey": "4000000841",
                                        "externalProductKey": "AU.CBEV.ECE.T4",
                                        "name": "Matrix LED package"
                                    },
                                    {
                                        "productKey": "4000000846",
                                        "externalProductKey": "AU.A3NF.USA.P2",
                                        "name": "MMI navigation plus with MMI touch and Audi virtual cockpit "
                                    },
                                    {
                                        "productKey": "4000000847",
                                        "externalProductKey": "AU.Q5PA.CAN.P1",
                                        "name": "MMI navigation plus with MMI touch "
                                    },
                                    {
                                        "productKey": "4000000848",
                                        "externalProductKey": "AU.Q5PA.USA.P1",
                                        "name": "MMI navigation plus with MMI touch"
                                    },
                                    {
                                        "productKey": "4000000856",
                                        "externalProductKey": "AU.Q8.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000857",
                                        "externalProductKey": "AU.Q8.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000876",
                                        "externalProductKey": "AU.A3NF.USA.Prime",
                                        "name": "Audi connect PRIME®"
                                    },
                                    {
                                        "productKey": "4000000893",
                                        "externalProductKey": "AU.A3NF.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000894",
                                        "externalProductKey": "AU.eQ5.ECE.P3",
                                        "name": "Matrixpaket"
                                    },
                                    {
                                        "productKey": "4000000895",
                                        "externalProductKey": "AU.eQ5.ECE.P10",
                                        "name": "SoundEnhancement"
                                    },
                                    {
                                        "productKey": "4000000896",
                                        "externalProductKey": "AU.A1.Q3.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000897",
                                        "externalProductKey": "AU.A1.Q3.ECE.INF",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000904",
                                        "externalProductKey": "AU.COD.CAN.cGW1",
                                        "name": "Audi connect remote & control"
                                    },
                                    {
                                        "productKey": "4000000905",
                                        "externalProductKey": "AU.COD.CAN.cGW3",
                                        "name": "Audi connect remote & control"
                                    },
                                    {
                                        "productKey": "4000000906",
                                        "externalProductKey": "AU.COD.CAN.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000907",
                                        "externalProductKey": "AU.COD.CAN.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000908",
                                        "externalProductKey": "AU.COD.CAN.RCetron",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000916",
                                        "externalProductKey": "AU.CBEV.ECE.INF",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000986",
                                        "externalProductKey": "AU.CBEV.CAN.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000987",
                                        "externalProductKey": "AU.Q3NF.CAN.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000988",
                                        "externalProductKey": "AU.A3.Q3.CAN.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000989",
                                        "externalProductKey": "AU.CBEV.CAN.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000995",
                                        "externalProductKey": "AU.ASUVe.ECE.P5",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000997",
                                        "externalProductKey": "AU.COD.cGW2.JP",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000998",
                                        "externalProductKey": "AU.COD.MX.BEV",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000001000",
                                        "externalProductKey": "AU.COD.MX.cGW3M",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000001001",
                                        "externalProductKey": "AU.COD.MX.cGW3L",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000001002",
                                        "externalProductKey": "AU.COD.MX.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000001003",
                                        "externalProductKey": "AU.COD.MX.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000001004",
                                        "externalProductKey": "AU.COD.AS.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000001005",
                                        "externalProductKey": "AU.COD.AS.BEV.MIB",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "5000000185",
                                        "externalProductKey": "MIB3TI_BASIS_EXT_AS_1.0",
                                        "name": "mib3ti_connected_basis_ext_as"
                                    },
                                    {
                                        "productKey": "5000000190",
                                        "externalProductKey": "MIB3TI_RC_1.0",
                                        "name": "mib3ti_connected_remotecontrol"
                                    },
                                    {
                                        "productKey": "5000000197",
                                        "externalProductKey": "MIB3TI_PLUS_AS_1.0",
                                        "name": "mib3ti_connected_plus_as"
                                    },
                                    {
                                        "productKey": "5000000199",
                                        "externalProductKey": "MIB3TI_BASIS_AS_1.0",
                                        "name": "mib3ti_connected_basis_as"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Cubic products received",
                        "description": "Number of vin specific products received from Cubic. In case of zero products there is a technical error in the communication to Cubic or there are no data plan products available for the vehicle.",
                        "status": "GRAY",
                        "numberOfPassedProducts": 0,
                        "passedProducts": [],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Cubic products with Commercetools products matched",
                        "description": "The step sets an order declined reason to product variants that do not match (criteria is the external variant key). It is a normal behaviour that this step is skipped in the EMEA region.",
                        "status": "GRAY",
                        "numberOfPassedProducts": 0,
                        "passedProducts": [],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    }
                ]
            },
            {
                "name": "Product and supplier eligibility checked",
                "passedProducts": 10,
                "discardedProducts": 10,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 8,
                "processSteps": [
                    {
                        "name": "Supplier eligibility checked",
                        "description": "If there are any supplier products available this checks whether those products are eligible or not",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 6,
                        "passedProducts": [
                            {
                                "type": "SUPPLIER_PRODUCT",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "8000000001",
                                        "externalProductKey": "",
                                        "name": "eReservation Test Product"
                                    },
                                    {
                                        "productKey": "8000000002",
                                        "externalProductKey": "",
                                        "name": "[suppliermock] Test supplier Product"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 3,
                        "orderDeclinedReasonVariants": [
                            {
                                "orderDeclinedReason": "client_state_not_ready",
                                "description": "order declined reason is set by the supplier eligibility check",
                                "numberOfVariants": 3,
                                "variants": [
                                    {
                                        "productKey": "1234567891",
                                        "sku": "1234567891-0000",
                                        "externalVariantKey": "DigitalTwinTestVariantKey",
                                        "name": "Test product - DigitalTwin Lifetime"
                                    },
                                    {
                                        "productKey": "1234567891",
                                        "sku": "1234567891-0001",
                                        "externalVariantKey": "DigitalTwinTestTrialExternalVariantKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "sku": "4000000835-0000",
                                        "externalVariantKey": "4000000835-0000",
                                        "name": "Audi Digital Twin - Premium profile 5 years"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Technical single and package products filtered",
                        "description": "The step filters technical single and technical package products (criteria is on both cases a Commercetools attribute). It is a normal behaviour that this step removes a lot of products, because this kind of products are technical support products of the other function on demand products.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 1,
                        "passedProducts": [
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 10,
                        "discardedProducts": [
                            {
                                "type": "FOD_CONNECT_PACKAGE",
                                "numberOfProducts": 10,
                                "products": [
                                    {
                                        "productKey": "1625832812757",
                                        "externalProductKey": "1625832812757",
                                        "name": "Technical signatures"
                                    },
                                    {
                                        "productKey": "1625833304608",
                                        "externalProductKey": "1625833304608",
                                        "name": "Bass Boost"
                                    },
                                    {
                                        "productKey": "1625833401058",
                                        "externalProductKey": "1625833401058",
                                        "name": "Auto Level Adjustment"
                                    },
                                    {
                                        "productKey": "1625833468304",
                                        "externalProductKey": "1625833468304",
                                        "name": "MP3 Enhancement"
                                    },
                                    {
                                        "productKey": "4000000223",
                                        "externalProductKey": "1559833309600",
                                        "name": "Matrix-LED"
                                    },
                                    {
                                        "productKey": "4000000361",
                                        "externalProductKey": "1559830020997",
                                        "name": "Curvelight"
                                    },
                                    {
                                        "productKey": "4000000454",
                                        "externalProductKey": "1559830236450",
                                        "name": "MMI Navigation"
                                    },
                                    {
                                        "productKey": "4000000515",
                                        "externalProductKey": "1559830101568",
                                        "name": "Animated daylight"
                                    },
                                    {
                                        "productKey": "4000000571",
                                        "externalProductKey": "1559829939184",
                                        "name": "Dynamic indicator"
                                    },
                                    {
                                        "productKey": "4000000752",
                                        "externalProductKey": "1111111111111",
                                        "name": "Audi connect"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Auto renewal eligibility checked",
                        "description": "The step checks if any product variant is in the auto renewal mode, so it can't be ordered again.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 2,
                        "orderDeclinedReasonVariants": [
                            {
                                "orderDeclinedReason": "client_product_already_subscribed",
                                "description": "products are already bought as subscription and therefore no other variant of the product is allowed to buy independently",
                                "numberOfVariants": 2,
                                "variants": [
                                    {
                                        "productKey": "5000000156",
                                        "sku": "5000000156-0000",
                                        "externalVariantKey": "5000000156-0000",
                                        "name": "[suppliermock] Audi Digital Twin - Test product 1 day"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "sku": "5000000156-0001",
                                        "externalVariantKey": "5000000156-0001",
                                        "name": "[suppliermock] Audi Digital Twin - Test product 1 day"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Trial eligibility checked",
                        "description": "The step checks if any product variant is a trial variant and already ordered.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Teaser eligibility checked",
                        "description": "The step checks if any product variant is a teaser variant and already ordered.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "User role checked",
                        "description": "The step checks if the user has the required role to purchase the product.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 6,
                        "orderDeclinedReasonVariants": [
                            {
                                "orderDeclinedReason": "client_user_lacks_required_role_for_purchase",
                                "description": "user lacks the required role to purchase the product",
                                "numberOfVariants": 6,
                                "variants": [
                                    {
                                        "productKey": "1234567891",
                                        "sku": "1234567891-0000",
                                        "externalVariantKey": "DigitalTwinTestVariantKey",
                                        "name": "Test product - DigitalTwin Lifetime"
                                    },
                                    {
                                        "productKey": "1234567891",
                                        "sku": "1234567891-0001",
                                        "externalVariantKey": "DigitalTwinTestTrialExternalVariantKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "3000000000",
                                        "sku": "3000000000-1",
                                        "externalVariantKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "sku": "4000000835-0000",
                                        "externalVariantKey": "4000000835-0000",
                                        "name": "Audi Digital Twin - Premium profile 5 years"
                                    },
                                    {
                                        "productKey": "4000004464",
                                        "sku": "4000004464-0001",
                                        "externalVariantKey": "4",
                                        "name": "Data Plan Test  1 month"
                                    },
                                    {
                                        "productKey": "4000004464",
                                        "sku": "4000004464-0002",
                                        "externalVariantKey": "5",
                                        "name": "Data Plan Test  1 day"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Product dependency rules checked",
                        "description": "The step sets order declined reasons by product dependency rules.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Products that are not withing given timeframe are filtered",
                        "description": "The step removes products that are not within the defined valid to be bought timeframe.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 0,
                        "passedProducts": [],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    }
                ]
            },
            {
                "name": "Vehicle backend products received and filtered",
                "passedProducts": 21,
                "discardedProducts": 197,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 2,
                "processSteps": [
                    {
                        "name": "Vehicle backend products received",
                        "description": "Number of vin specific products received from vehicle backend (MBB). In case of zero products there is a technical error in the communication to vehicle backend or there are no function on demand products available for the vehicle.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 3,
                        "passedProducts": [
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "UNKNOWN",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "AU.A3NF.ECE.P3"
                                    },
                                    {
                                        "productKey": "AU.XX.ECE.P6"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Vehicle backend variants filtered",
                        "description": "This step in the vehicle backend removes all variants that have a filter reason set on variant level.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 9,
                        "passedProducts": [
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "UNKNOWN",
                                "numberOfProducts": 8,
                                "products": [
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.1J"
                                    },
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.1M"
                                    },
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.1T"
                                    },
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.2J"
                                    },
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.2T"
                                    },
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.3J"
                                    },
                                    {
                                        "productKey": "AU.A3NF.ECE.P3.6M"
                                    },
                                    {
                                        "productKey": "AU.XX.ECE.P6.3J"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Vehicle backend products with Commercetools products matched",
                        "description": "The step removes products that do not match (criteria is the external product key). In case of zero remaining function on demand products look at the \"Vehicle backend products received\" step to see if there initially were products to match.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 11,
                        "passedProducts": [
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_PACKAGE",
                                "numberOfProducts": 10,
                                "products": [
                                    {
                                        "productKey": "1625832812757",
                                        "externalProductKey": "1625832812757",
                                        "name": "Technical signatures"
                                    },
                                    {
                                        "productKey": "1625833304608",
                                        "externalProductKey": "1625833304608",
                                        "name": "Bass Boost"
                                    },
                                    {
                                        "productKey": "1625833401058",
                                        "externalProductKey": "1625833401058",
                                        "name": "Auto Level Adjustment"
                                    },
                                    {
                                        "productKey": "1625833468304",
                                        "externalProductKey": "1625833468304",
                                        "name": "MP3 Enhancement"
                                    },
                                    {
                                        "productKey": "4000000223",
                                        "externalProductKey": "1559833309600",
                                        "name": "Matrix-LED"
                                    },
                                    {
                                        "productKey": "4000000361",
                                        "externalProductKey": "1559830020997",
                                        "name": "Curvelight"
                                    },
                                    {
                                        "productKey": "4000000454",
                                        "externalProductKey": "1559830236450",
                                        "name": "MMI Navigation"
                                    },
                                    {
                                        "productKey": "4000000515",
                                        "externalProductKey": "1559830101568",
                                        "name": "Animated daylight"
                                    },
                                    {
                                        "productKey": "4000000571",
                                        "externalProductKey": "1559829939184",
                                        "name": "Dynamic indicator"
                                    },
                                    {
                                        "productKey": "4000000752",
                                        "externalProductKey": "1111111111111",
                                        "name": "Audi connect"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 197,
                        "discardedProducts": [
                            {
                                "type": "APP",
                                "numberOfProducts": 8,
                                "products": [
                                    {
                                        "productKey": "4000000898",
                                        "externalProductKey": "AU.XX.ECE.A1",
                                        "name": "Audi Logbook Online"
                                    },
                                    {
                                        "productKey": "7000003144",
                                        "externalProductKey": "Customer_0005_master",
                                        "name": "APP B - Audi Smartphone Interface - like \"fod-connect-single\""
                                    },
                                    {
                                        "productKey": "7000003145",
                                        "externalProductKey": "test_0036_master",
                                        "name": "APP C - Matrix LED package - like \"fod-connect-package\""
                                    },
                                    {
                                        "productKey": "7000003146",
                                        "externalProductKey": "AU.A3NF.ECE.P7",
                                        "name": "APP D - High-beam assist - Both serviceId  and all serviceIds from packageContents"
                                    },
                                    {
                                        "productKey": "7000003147",
                                        "externalProductKey": "4G0054816Z_MASTER",
                                        "name": "APP A - Picturebook Navigation - discard product,  resp. variant(s)"
                                    },
                                    {
                                        "productKey": "7000003169",
                                        "externalProductKey": "AU.XX.ECE.A1",
                                        "name": "Audi Logbook Online"
                                    },
                                    {
                                        "productKey": "800000000",
                                        "externalProductKey": "externalKey",
                                        "name": "Test Product"
                                    },
                                    {
                                        "productKey": "9876543211",
                                        "externalProductKey": "groupstorebackend_test",
                                        "name": "Groupstorebackend App Test"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 99,
                                "products": [
                                    {
                                        "productKey": "1111111111",
                                        "externalProductKey": "unknownExternalProductKey",
                                        "name": "Test product merchant"
                                    },
                                    {
                                        "productKey": "4000000199",
                                        "externalProductKey": "Customer_0010_master",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "4000000250",
                                        "externalProductKey": "Customer_0005_master",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000404",
                                        "externalProductKey": "AU.A3NF.ECE.P8",
                                        "name": "Adaptive speed assist"
                                    },
                                    {
                                        "productKey": "4000000419",
                                        "externalProductKey": "test_0040_master",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "4000000462",
                                        "externalProductKey": "Customer_0004_master",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000479",
                                        "externalProductKey": "Customer_0007_master",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000560",
                                        "externalProductKey": "Customer_0008_master",
                                        "name": "Audi virtual cockpit"
                                    },
                                    {
                                        "productKey": "4000000576",
                                        "externalProductKey": "AU.A3NF.ECE.P1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000578",
                                        "externalProductKey": "Customer_0006_master",
                                        "name": "Adaptive speed assist"
                                    },
                                    {
                                        "productKey": "4000000612",
                                        "externalProductKey": "test_0039_master",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000627",
                                        "externalProductKey": "AU.A3NF.ECE.P6",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000650",
                                        "externalProductKey": "AU.C8.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000651",
                                        "externalProductKey": "AU.C8.ECE.T3",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000678",
                                        "externalProductKey": "AU.Q8.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000679",
                                        "externalProductKey": "AU.Q8.ECE.T2",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000680",
                                        "externalProductKey": "AU.Q7PA.ECE.T2",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000681",
                                        "externalProductKey": "AU.Q7PA.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000682",
                                        "externalProductKey": "AU.xx.ECE.E1",
                                        "name": "Traffic Online"
                                    },
                                    {
                                        "productKey": "4000000684",
                                        "externalProductKey": "AU.Q5PA.ECE.T1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000685",
                                        "externalProductKey": "AU.C8.CAN.P1",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000688",
                                        "externalProductKey": "AU.Q7PA.CAN.P1",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000689",
                                        "externalProductKey": "AU.Q8.CAN.P1",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000725",
                                        "externalProductKey": "AU.XX.ECE.P1",
                                        "name": "Online Logbook"
                                    },
                                    {
                                        "productKey": "4000000746",
                                        "externalProductKey": "AU.XX.ECE.P3",
                                        "name": "Audi connect key"
                                    },
                                    {
                                        "productKey": "4000000814",
                                        "externalProductKey": "AU.CBEV.CAN.P1",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000839",
                                        "externalProductKey": "AU.CBEV.ECE.T2",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "4000000840",
                                        "externalProductKey": "AU.CBEV.ECE.T3",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000842",
                                        "externalProductKey": "AU.CBEV.ECE.T5",
                                        "name": "Park assist with parking system plus"
                                    },
                                    {
                                        "productKey": "4000000843",
                                        "externalProductKey": "AU.A3NF.USA.P3",
                                        "name": "Camera-based traffic sign recognition"
                                    },
                                    {
                                        "productKey": "4000000874",
                                        "externalProductKey": "AU.CBEV.USA.P3",
                                        "name": "Light function package"
                                    },
                                    {
                                        "productKey": "4000000875",
                                        "externalProductKey": "AU.CBEV.USA.P2",
                                        "name": "Light function package"
                                    },
                                    {
                                        "productKey": "4000000877",
                                        "externalProductKey": "AU.eQ5.ECE.P1",
                                        "name": "Virtual ambience"
                                    },
                                    {
                                        "productKey": "4000000878",
                                        "externalProductKey": "AU.eQ5.ECE.P2",
                                        "name": "Holdassist"
                                    },
                                    {
                                        "productKey": "4000000881",
                                        "externalProductKey": "AU.eQ5.ECE.P4",
                                        "name": "Smart Charging"
                                    },
                                    {
                                        "productKey": "4000000882",
                                        "externalProductKey": "AU.eQ5.ECE.P5",
                                        "name": "Bassboost"
                                    },
                                    {
                                        "productKey": "4000000883",
                                        "externalProductKey": "AU.eQ5.ECE.P6",
                                        "name": "Fernlichtassistent"
                                    },
                                    {
                                        "productKey": "4000000884",
                                        "externalProductKey": "AU.eQ5.ECE.P7",
                                        "name": "Light Signatures"
                                    },
                                    {
                                        "productKey": "4000000885",
                                        "externalProductKey": "AU.eQ5.ECE.P8",
                                        "name": "DC Boost"
                                    },
                                    {
                                        "productKey": "4000000890",
                                        "externalProductKey": "AU.eQ5.ECE.P11",
                                        "name": "Virtual Surround"
                                    },
                                    {
                                        "productKey": "4000000891",
                                        "externalProductKey": "AU.eQ5.ECE.P12",
                                        "name": "NavDirectionPrompt"
                                    },
                                    {
                                        "productKey": "4000000892",
                                        "externalProductKey": "AU.eQ5.ECE.P13",
                                        "name": "Tuningfeatby"
                                    },
                                    {
                                        "productKey": "4000000952",
                                        "externalProductKey": "AU.CBEV.ECE.P3",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "4000000959",
                                        "externalProductKey": "AU.A3NF.ECE.P11",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000960",
                                        "externalProductKey": "AU.B9PA.ECE.P1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000990",
                                        "externalProductKey": "AU.ASUVe.ECE.P11",
                                        "name": "Adaptive cruise control "
                                    },
                                    {
                                        "productKey": "4000000991",
                                        "externalProductKey": "AU.ASUVe.ECE.P7",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000000992",
                                        "externalProductKey": "AU.ASUVe.ECE.P10",
                                        "name": "Adaptive cruise control "
                                    },
                                    {
                                        "productKey": "4000000993",
                                        "externalProductKey": "AU.ASUVe.ECE.P9",
                                        "name": "2-zone deluxe automatic air conditioning"
                                    },
                                    {
                                        "productKey": "4000000994",
                                        "externalProductKey": "AU.ASUVe.ECE.P8",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "4000001012",
                                        "externalProductKey": "P-MBB-DataPlan",
                                        "name": "P-MBB-DataPlan"
                                    },
                                    {
                                        "productKey": "4000001013",
                                        "externalProductKey": "P-MBB-DynamicPOIChargingStations",
                                        "name": "P-MBB-DynamicPOIChargingStations"
                                    },
                                    {
                                        "productKey": "4000001014",
                                        "externalProductKey": "P-MBB-LGI",
                                        "name": "P-MBB-LGI"
                                    },
                                    {
                                        "productKey": "4000001015",
                                        "externalProductKey": "P-MBB-Nc_destsync",
                                        "name": "P-MBB-Nc_destsync"
                                    },
                                    {
                                        "productKey": "4000001016",
                                        "externalProductKey": "P-MBB-OnlineTraffic-Plus",
                                        "name": "P-MBB-OnlineTraffic-Plus"
                                    },
                                    {
                                        "productKey": "4000001017",
                                        "externalProductKey": "P-MBB-VerkehrszeichenOnline",
                                        "name": "P-MBB-VerkehrszeichenOnline"
                                    },
                                    {
                                        "productKey": "4000001018",
                                        "externalProductKey": "Customer.MEB.COD.ECE.Ampelinfo_online",
                                        "name": "Audi Traffic Light Information"
                                    },
                                    {
                                        "productKey": "4000001020",
                                        "externalProductKey": "Customer.MEB.COD.ECE.OnlineFahrtenbuch",
                                        "name": "Online Logbook"
                                    },
                                    {
                                        "productKey": "5000000017",
                                        "externalProductKey": "5000000017",
                                        "name": "Test Product with Different Merchant Id"
                                    },
                                    {
                                        "productKey": "5000000155",
                                        "externalProductKey": "Test_6",
                                        "name": "[Used ONLY in ACP Integration Tests] MMI Navigation plus with MMI touch response"
                                    },
                                    {
                                        "productKey": "5000000174",
                                        "externalProductKey": "5000000174",
                                        "name": "P-MBB-OTAMapUpdate"
                                    },
                                    {
                                        "productKey": "5000000175",
                                        "externalProductKey": "5000000175",
                                        "name": "P-MBB-PoiSuche"
                                    },
                                    {
                                        "productKey": "5000000176",
                                        "externalProductKey": "5000000176",
                                        "name": "P-MBB-OnStreetParking"
                                    },
                                    {
                                        "productKey": "5000000177",
                                        "externalProductKey": "5000000177",
                                        "name": "P-MBB-DataPlan"
                                    },
                                    {
                                        "productKey": "5000000178",
                                        "externalProductKey": "5000000178",
                                        "name": "P-MBB-OnlineTraffic"
                                    },
                                    {
                                        "productKey": "5000000179",
                                        "externalProductKey": "5000000179",
                                        "name": "P-MBB-LGI"
                                    },
                                    {
                                        "productKey": "5000000180",
                                        "externalProductKey": "5000000180",
                                        "name": "P-MBB-Weather"
                                    },
                                    {
                                        "productKey": "5000000181",
                                        "externalProductKey": "5000000181",
                                        "name": "P-MBB-Ampelinformation"
                                    },
                                    {
                                        "productKey": "5000000182",
                                        "externalProductKey": "5000000182",
                                        "name": "P-MBB-MediaOnDemand"
                                    },
                                    {
                                        "productKey": "5000000183",
                                        "externalProductKey": "5000000183",
                                        "name": "P-MBB-VerkehrszeichenOnline"
                                    },
                                    {
                                        "productKey": "5000000184",
                                        "externalProductKey": "5000000184",
                                        "name": "P-MBB-News"
                                    },
                                    {
                                        "productKey": "5000000186",
                                        "externalProductKey": "5000000186",
                                        "name": "P-RemoteProfileAndTimerProgramming"
                                    },
                                    {
                                        "productKey": "5000000187",
                                        "externalProductKey": "5000000187",
                                        "name": "P-RemotePreTripClimatisation"
                                    },
                                    {
                                        "productKey": "5000000188",
                                        "externalProductKey": "5000000188",
                                        "name": "P-RemoteBatteryCharge"
                                    },
                                    {
                                        "productKey": "5000000191",
                                        "externalProductKey": "5000000191",
                                        "name": "P-MBB-OnlineSongRec"
                                    },
                                    {
                                        "productKey": "5000000192",
                                        "externalProductKey": "5000000192",
                                        "name": "P-MBB-CityModels"
                                    },
                                    {
                                        "productKey": "5000000193",
                                        "externalProductKey": "5000000193",
                                        "name": "P-MBB-MapSatellite"
                                    },
                                    {
                                        "productKey": "5000000194",
                                        "externalProductKey": "5000000194",
                                        "name": "P-MBB-OnlineRadio"
                                    },
                                    {
                                        "productKey": "5000000195",
                                        "externalProductKey": "5000000195",
                                        "name": "P-MBB-HybridRadio"
                                    },
                                    {
                                        "productKey": "5000000196",
                                        "externalProductKey": "5000000196",
                                        "name": "P-MBB-OnlineSpeech"
                                    },
                                    {
                                        "productKey": "6000000038",
                                        "externalProductKey": "6000000038",
                                        "name": "Test Product with Different Merchant Id"
                                    },
                                    {
                                        "productKey": "7000000007",
                                        "externalProductKey": "7000000007",
                                        "name": "Test Product with Different Merchant Id"
                                    },
                                    {
                                        "productKey": "7000000046",
                                        "externalProductKey": "test_0047_master",
                                        "name": "Audi virtual cockpit"
                                    },
                                    {
                                        "productKey": "7000000048",
                                        "externalProductKey": "test_0049_master",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "7000000049",
                                        "externalProductKey": "AU.A3NF.ECE.P8",
                                        "name": "Cruise control"
                                    },
                                    {
                                        "productKey": "7000000050",
                                        "externalProductKey": "AU.A3NF.ECE.P1",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "7000000051",
                                        "externalProductKey": "test_0040_master",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "7000000052",
                                        "externalProductKey": "test_0043_master",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "7000000053",
                                        "externalProductKey": "test_0042_master",
                                        "name": "Cruise control"
                                    },
                                    {
                                        "productKey": "7000000054",
                                        "externalProductKey": "test_0044_master",
                                        "name": "Audi smartphone interface"
                                    },
                                    {
                                        "productKey": "7000000055",
                                        "externalProductKey": "test_0028_master",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "7000000056",
                                        "externalProductKey": "test_0024_master"
                                    },
                                    {
                                        "productKey": "7000000057",
                                        "externalProductKey": "AU.A3NF.ECE.P6",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "7000000058",
                                        "externalProductKey": "test_0030_master",
                                        "name": "High-beam assist"
                                    },
                                    {
                                        "productKey": "7000000059",
                                        "externalProductKey": "test_0045_master",
                                        "name": "Digital Audio Broadcasting"
                                    },
                                    {
                                        "productKey": "7000000060",
                                        "externalProductKey": "test_0039_master",
                                        "name": "Audi Smartphone Interface"
                                    },
                                    {
                                        "productKey": "7000003104",
                                        "externalProductKey": "Customer_0006_master",
                                        "name": "Adaptive speed assist"
                                    },
                                    {
                                        "productKey": "7000003165",
                                        "externalProductKey": "Test_Verkaufsteilenummer_17",
                                        "name": "LPPackage_carapp_olb"
                                    },
                                    {
                                        "productKey": "auto-renewal-product-123",
                                        "externalProductKey": "auto-renewal-externalProductKey",
                                        "name": "FoD Auto-Renewal Product"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_PACKAGE",
                                "numberOfProducts": 90,
                                "products": [
                                    {
                                        "productKey": "4000000183",
                                        "externalProductKey": "AU.A3NF.ECE.P4",
                                        "name": "MMI navigation plus with MMI touch and Audi virtual cockpit"
                                    },
                                    {
                                        "productKey": "4000000233",
                                        "externalProductKey": "test_0037_master",
                                        "name": "Light function package"
                                    },
                                    {
                                        "productKey": "4000000253",
                                        "externalProductKey": "AU.B9PA.USA.NaviPP",
                                        "name": "Navigation connect Plus"
                                    },
                                    {
                                        "productKey": "4000000269",
                                        "externalProductKey": "AU.B9PA.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000315",
                                        "externalProductKey": "Customer_0041_master",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000347_old",
                                        "externalProductKey": "test_0043_master_",
                                        "name": "Camera-based recognition of traffic signs"
                                    },
                                    {
                                        "productKey": "4000000596",
                                        "externalProductKey": "AU.B9PA.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000640",
                                        "externalProductKey": "AU.A3NF.ECE.P9",
                                        "name": "MMI navigation plus with MMI touch"
                                    },
                                    {
                                        "productKey": "4000000695",
                                        "externalProductKey": "AU.C7PA.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000696",
                                        "externalProductKey": "AU.Q5NF.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000697",
                                        "externalProductKey": "AU.Q5NF.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000698",
                                        "externalProductKey": "AU.CBEV.ECE.T1",
                                        "name": "#Demo Audi connect Navigation & Infotainment"
                                    },
                                    {
                                        "productKey": "4000000699",
                                        "externalProductKey": "AU.B9.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000700",
                                        "externalProductKey": "AU.Q2.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000701",
                                        "externalProductKey": "AU.A3PA.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000702",
                                        "externalProductKey": "AU.A3PA.ECE.INF.s",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000704",
                                        "externalProductKey": "AU.B9.ECE.RC.15",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000705",
                                        "externalProductKey": "AU.TT3.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000706",
                                        "externalProductKey": "AU.R8NF.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000707",
                                        "externalProductKey": "AU.Q7NF.ECE.RC.15",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000708",
                                        "externalProductKey": "AU.C8.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000711",
                                        "externalProductKey": "AU.B9.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000712",
                                        "externalProductKey": "AU.Q7NF.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000713",
                                        "externalProductKey": "AU.Q2.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000714",
                                        "externalProductKey": "AU.Q5NF.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000715",
                                        "externalProductKey": "AU.B9.ECE.RC.16",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000716",
                                        "externalProductKey": "AU.Q7NF.ECE.RC.16",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000717",
                                        "externalProductKey": "AU.C8.ECE.INF.m",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000718",
                                        "externalProductKey": "AU.D5.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000719",
                                        "externalProductKey": "AU.C8.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000720",
                                        "externalProductKey": "AU.D5.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000722",
                                        "externalProductKey": "AU.B9PA.ECE.T4",
                                        "name": "#Demo Audi connect Navigation & Infotainment"
                                    },
                                    {
                                        "productKey": "4000000723",
                                        "externalProductKey": "AU.CBEV.FOD.ECE.P1",
                                        "name": "Matrix LED package"
                                    },
                                    {
                                        "productKey": "4000000724",
                                        "externalProductKey": "AU.B9PA.CAN.P1",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect "
                                    },
                                    {
                                        "productKey": "4000000726",
                                        "externalProductKey": "AU.A3.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000736",
                                        "externalProductKey": "AU.Q5PA.ECE.P1",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000753",
                                        "externalProductKey": "AU.Q5PA.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000754",
                                        "externalProductKey": "AU.Q7PA.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000755",
                                        "externalProductKey": "AU.C8.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000756",
                                        "externalProductKey": "AU.Q8.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000757",
                                        "externalProductKey": "AU.D5.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000758",
                                        "externalProductKey": "AU.Q5PA.USA.Navi",
                                        "name": "Navigation connect Plus"
                                    },
                                    {
                                        "productKey": "4000000761",
                                        "externalProductKey": "AU.Q5PA.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000762",
                                        "externalProductKey": "AU.D5.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000763",
                                        "externalProductKey": "AU.Q7PA.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000764",
                                        "externalProductKey": "AU.Q8.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000765",
                                        "externalProductKey": "AU.Q3.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000766",
                                        "externalProductKey": "AU.C8.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000768",
                                        "externalProductKey": "AU.Q3.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000797",
                                        "externalProductKey": "AU.CBEV.USA.Prime",
                                        "name": "Audi connect Prime Plus"
                                    },
                                    {
                                        "productKey": "4000000808",
                                        "externalProductKey": "AU.CBEV.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000823",
                                        "externalProductKey": "AU.CBEV.ECE.P2",
                                        "name": "Matrix LED package e-tron GT"
                                    },
                                    {
                                        "productKey": "4000000824",
                                        "externalProductKey": "AU.C8.ECE.P1",
                                        "name": "MMI navigation plus with MMI touch"
                                    },
                                    {
                                        "productKey": "4000000836",
                                        "externalProductKey": "AU.A3NF.CAN.P4",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect "
                                    },
                                    {
                                        "productKey": "4000000837",
                                        "externalProductKey": "AU.A3NF.USA.P1",
                                        "name": "Navigation PrimePlus"
                                    },
                                    {
                                        "productKey": "4000000841",
                                        "externalProductKey": "AU.CBEV.ECE.T4",
                                        "name": "Matrix LED package"
                                    },
                                    {
                                        "productKey": "4000000846",
                                        "externalProductKey": "AU.A3NF.USA.P2",
                                        "name": "MMI navigation plus with MMI touch and Audi virtual cockpit "
                                    },
                                    {
                                        "productKey": "4000000847",
                                        "externalProductKey": "AU.Q5PA.CAN.P1",
                                        "name": "MMI navigation plus with MMI touch "
                                    },
                                    {
                                        "productKey": "4000000848",
                                        "externalProductKey": "AU.Q5PA.USA.P1",
                                        "name": "MMI navigation plus with MMI touch"
                                    },
                                    {
                                        "productKey": "4000000856",
                                        "externalProductKey": "AU.Q8.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000857",
                                        "externalProductKey": "AU.Q8.ECE.INF.h",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000876",
                                        "externalProductKey": "AU.A3NF.USA.Prime",
                                        "name": "Audi connect PRIME®"
                                    },
                                    {
                                        "productKey": "4000000893",
                                        "externalProductKey": "AU.A3NF.USA.TEASER",
                                        "name": "Audi connect Plus Trial"
                                    },
                                    {
                                        "productKey": "4000000894",
                                        "externalProductKey": "AU.eQ5.ECE.P3",
                                        "name": "Matrixpaket"
                                    },
                                    {
                                        "productKey": "4000000895",
                                        "externalProductKey": "AU.eQ5.ECE.P10",
                                        "name": "SoundEnhancement"
                                    },
                                    {
                                        "productKey": "4000000896",
                                        "externalProductKey": "AU.A1.Q3.ECE.RC",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000897",
                                        "externalProductKey": "AU.A1.Q3.ECE.INF",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000904",
                                        "externalProductKey": "AU.COD.CAN.cGW1",
                                        "name": "Audi connect remote & control"
                                    },
                                    {
                                        "productKey": "4000000905",
                                        "externalProductKey": "AU.COD.CAN.cGW3",
                                        "name": "Audi connect remote & control"
                                    },
                                    {
                                        "productKey": "4000000906",
                                        "externalProductKey": "AU.COD.CAN.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000907",
                                        "externalProductKey": "AU.COD.CAN.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000908",
                                        "externalProductKey": "AU.COD.CAN.RCetron",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000916",
                                        "externalProductKey": "AU.CBEV.ECE.INF",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000986",
                                        "externalProductKey": "AU.CBEV.CAN.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000987",
                                        "externalProductKey": "AU.Q3NF.CAN.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000988",
                                        "externalProductKey": "AU.A3.Q3.CAN.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000989",
                                        "externalProductKey": "AU.CBEV.CAN.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000995",
                                        "externalProductKey": "AU.ASUVe.ECE.P5",
                                        "name": "MMI navigation plus with MMI touch response and Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000000997",
                                        "externalProductKey": "AU.COD.cGW2.JP",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000000998",
                                        "externalProductKey": "AU.COD.MX.BEV",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000001000",
                                        "externalProductKey": "AU.COD.MX.cGW3M",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000001001",
                                        "externalProductKey": "AU.COD.MX.cGW3L",
                                        "name": "Audi connect remote & control "
                                    },
                                    {
                                        "productKey": "4000001002",
                                        "externalProductKey": "AU.COD.MX.MIB3",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000001003",
                                        "externalProductKey": "AU.COD.MX.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000001004",
                                        "externalProductKey": "AU.COD.AS.MIB2+",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "4000001005",
                                        "externalProductKey": "AU.COD.AS.BEV.MIB",
                                        "name": "Audi connect navigation & infotainment"
                                    },
                                    {
                                        "productKey": "5000000185",
                                        "externalProductKey": "MIB3TI_BASIS_EXT_AS_1.0",
                                        "name": "mib3ti_connected_basis_ext_as"
                                    },
                                    {
                                        "productKey": "5000000190",
                                        "externalProductKey": "MIB3TI_RC_1.0",
                                        "name": "mib3ti_connected_remotecontrol"
                                    },
                                    {
                                        "productKey": "5000000197",
                                        "externalProductKey": "MIB3TI_PLUS_AS_1.0",
                                        "name": "mib3ti_connected_plus_as"
                                    },
                                    {
                                        "productKey": "5000000199",
                                        "externalProductKey": "MIB3TI_BASIS_AS_1.0",
                                        "name": "mib3ti_connected_basis_as"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Vehicle backend products with Commercetools product variants matched",
                        "description": "The step removes product variants that do not match (criteria is the external variant key).",
                        "status": "GREEN",
                        "numberOfPassedProducts": 3,
                        "passedProducts": [
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "UNKNOWN",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "AU.A3NF.ECE.P3"
                                    },
                                    {
                                        "productKey": "AU.XX.ECE.P6"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Function on demand products orderable checked",
                        "description": "The step sets order declined reasons on function on demands products.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 1,
                        "passedProducts": [
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 2,
                        "orderDeclinedReasonVariants": [
                            {
                                "orderDeclinedReason": "client_product_active_and_not_in_warn_interval",
                                "description": "products are not sellable due to status and warning period",
                                "numberOfVariants": 2,
                                "variants": [
                                    {
                                        "productKey": "4000000745",
                                        "sku": "4000000745-0000",
                                        "externalVariantKey": "AU.XX.ECE.P2.1M",
                                        "name": "Audi Traffic Light Information 1 month"
                                    },
                                    {
                                        "productKey": "4000000745",
                                        "sku": "4000000745-0001",
                                        "externalVariantKey": "AU.XX.ECE.P2.1J",
                                        "name": "Audi Traffic Light Information 1 year"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Mixed bundles checked",
                "passedProducts": 8,
                "discardedProducts": 0,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 0,
                "processSteps": [
                    {
                        "name": "Mixed bundle content products matched",
                        "description": "The step looks up the mixed bundle content products and removes the bundle products because they are not independent sellable.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Mixed bundle variants matched",
                        "description": "The step looks up the mixed bundle variant contents and removes variants if a referenced sku is not found.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Mixed bundle licence runtime checked",
                        "description": "The step checks if the variant licence runtime of the mixed bundle product is equivalent to the content variants licence runtime.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Mixed bundle products orderable checked",
                        "description": "The step sets order declined reasons if the mixed bundle product is not orderable.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    }
                ]
            },
            {
                "name": "Product availability checked",
                "passedProducts": 8,
                "discardedProducts": 0,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 0,
                "processSteps": [
                    {
                        "name": "Product lock checked",
                        "description": "The step checks if the product is currently in an ordering process.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Fleet restriction checked",
                        "description": "The step checks if the product is restricted by the fleet admin.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 8,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 4,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    }
                ]
            },
            {
                "name": "Data quality checked",
                "passedProducts": 7,
                "discardedProducts": 3,
                "discardedVariants": 7,
                "orderDeclinedReasonVariants": 0,
                "processSteps": [
                    {
                        "name": "Variants without sales price net filtered",
                        "description": "The step removes variants without sales price net.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 7,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 3,
                        "discardedVariants": [
                            {
                                "productKey": "4000000745",
                                "sku": "4000000745-0001",
                                "externalVariantKey": "AU.XX.ECE.P2.1J",
                                "name": "Audi Traffic Light Information 1 year"
                            },
                            {
                                "productKey": "4000000835",
                                "sku": "4000000835-0000",
                                "externalVariantKey": "4000000835-0000",
                                "name": "Audi Digital Twin - Premium profile 5 years"
                            },
                            {
                                "productKey": "5000000157",
                                "sku": "5000000157-0000",
                                "externalVariantKey": "5000000157-0000",
                                "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product 1 day"
                            }
                        ],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Variants without ex factory price filtered",
                        "description": "The step removes variants without ex factory price.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 7,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Products without tax are filtered",
                        "description": "The step removes products without a sales price gross that includes the tax.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 6,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 2,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 2,
                        "discardedVariants": [
                            {
                                "productKey": "4000004464",
                                "sku": "4000004464-0001",
                                "externalVariantKey": "4",
                                "name": "Data Plan Test  1 month"
                            },
                            {
                                "productKey": "4000004464",
                                "sku": "4000004464-0002",
                                "externalVariantKey": "5",
                                "name": "Data Plan Test  1 day"
                            }
                        ],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Products without variants filtered",
                        "description": "The step removes products without remaining variants.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 3,
                        "discardedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "7000003047",
                                        "externalProductKey": "7000003047",
                                        "name": "Audi Care Select 35k, 45k"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000835",
                                        "externalProductKey": "4000000835",
                                        "name": "Audi Digital Twin - Premium profile"
                                    }
                                ]
                            },
                            {
                                "type": "DATA_PLAN",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000004464",
                                        "externalProductKey": "",
                                        "name": "Data Plan Test "
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Products without package contents filtered",
                        "description": "The step removes products without package contents.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Products without merchant id filtered",
                        "description": "The step removes products without merchant id.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Variants without maintained accrual handling information filtered",
                        "description": "The step removes variants without accrual handling information.",
                        "status": "YELLOW",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 2,
                        "discardedVariants": [
                            {
                                "productKey": "1234567891",
                                "sku": "1234567891-0001",
                                "externalVariantKey": "DigitalTwinTestTrialExternalVariantKey",
                                "name": "Test product - DigitalTwin"
                            },
                            {
                                "productKey": "7000003047",
                                "sku": "7000003047-0000",
                                "externalVariantKey": "UAU1703",
                                "name": "Audi Care Select 35k, 45k"
                            }
                        ],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    }
                ]
            },
            {
                "name": "Result",
                "passedProducts": 5,
                "discardedProducts": 0,
                "discardedVariants": 0,
                "orderDeclinedReasonVariants": 6,
                "processSteps": [
                    {
                        "name": "Products filtered by request query parameters",
                        "description": "The step removes products by request query parameters.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 0,
                        "orderDeclinedReasonVariants": []
                    },
                    {
                        "name": "Result of the call to the product service",
                        "description": "This step contains the resulting products and variants with order declined reasons which were returned to the customer.",
                        "status": "GREEN",
                        "numberOfPassedProducts": 5,
                        "passedProducts": [
                            {
                                "type": "AUDI_CARE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "3000000000",
                                        "externalProductKey": "",
                                        "name": "Car Repair"
                                    }
                                ]
                            },
                            {
                                "type": "FOD_CONNECT_SINGLE",
                                "numberOfProducts": 1,
                                "products": [
                                    {
                                        "productKey": "4000000745",
                                        "externalProductKey": "AU.XX.ECE.P2",
                                        "name": "Audi Traffic Light Information"
                                    }
                                ]
                            },
                            {
                                "type": "DIGITAL_TWIN",
                                "numberOfProducts": 3,
                                "products": [
                                    {
                                        "productKey": "1234567891",
                                        "externalProductKey": "DigitalTwinTestExternalProductKey",
                                        "name": "Test product - DigitalTwin"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "externalProductKey": "5000000156",
                                        "name": "[suppliermock] Audi Digital Twin - Test product"
                                    },
                                    {
                                        "productKey": "5000000157",
                                        "externalProductKey": "5000000157",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product"
                                    }
                                ]
                            }
                        ],
                        "numberOfDiscardedProducts": 0,
                        "discardedProducts": [],
                        "numberOfDiscardedVariants": 0,
                        "discardedVariants": [],
                        "numberOfOrderDeclinedReasonVariants": 6,
                        "orderDeclinedReasonVariants": [
                            {
                                "orderDeclinedReason": "buyable variants",
                                "description": "This variant is buyable by the customer",
                                "numberOfVariants": 1,
                                "variants": [
                                    {
                                        "productKey": "5000000157",
                                        "sku": "5000000157-0001",
                                        "externalVariantKey": "5000000157-0001",
                                        "name": "[Used ONLY in ACP Integration Tests] [suppliermock] Audi Digital Twin - Test product 1 day"
                                    }
                                ]
                            },
                            {
                                "orderDeclinedReason": "variants can not be ordered",
                                "description": "This variant has at least one ODR",
                                "numberOfVariants": 5,
                                "variants": [
                                    {
                                        "productKey": "1234567891",
                                        "sku": "1234567891-0000",
                                        "externalVariantKey": "DigitalTwinTestVariantKey",
                                        "name": "Test product - DigitalTwin Lifetime"
                                    },
                                    {
                                        "productKey": "3000000000",
                                        "sku": "3000000000-1",
                                        "externalVariantKey": "",
                                        "name": "Car Repair"
                                    },
                                    {
                                        "productKey": "4000000745",
                                        "sku": "4000000745-0000",
                                        "externalVariantKey": "AU.XX.ECE.P2.1M",
                                        "name": "Audi Traffic Light Information 1 month"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "sku": "5000000156-0000",
                                        "externalVariantKey": "5000000156-0000",
                                        "name": "[suppliermock] Audi Digital Twin - Test product 1 day"
                                    },
                                    {
                                        "productKey": "5000000156",
                                        "sku": "5000000156-0001",
                                        "externalVariantKey": "5000000156-0001",
                                        "name": "[suppliermock] Audi Digital Twin - Test product 1 day"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
export default data;